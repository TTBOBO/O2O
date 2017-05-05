(function() {
	window.IM = window.IM || {
		_appid: '8a48b5515427d27601543445a649141f', // 应用I
		_onUnitAccount: 'KF10089', // 多渠道客服帐号，目前只支持1个
		_3rdServer: 'http://123.57.230.158:8886/authen/', // 3rdServer，主要用来虚拟用户服务器获取SIG
		/** 以下不要动，不需要改动 */
		_timeoutkey: null,
		_username: null,
		_user_account: null,
		_contact_type_c: 'C', // 代表联系人
		_contact_type_g: 'G', // 代表群组
		_contact_type_m: 'M', // 代表多渠道客服
		_onMsgReceiveListener: null,
		_onDeskMsgReceiveListener: null,
		_noticeReceiveListener: null,
		_onConnectStateChangeLisenter: null,
		_onCallMsgListener: null,
		_isMcm_active: false,
		_local_historyver: 0,
		_msgId: null, // 消息ID，查看图片时有用
		_pre_range: null, // pre的光标监控对象
		_pre_range_num: 0, // 计数，记录pre中当前光标位置，以childNodes为单位
		_fireMessage: 'fireMessage',
		_serverNo: 'XTOZ',
		_baiduMap: null,
		_loginType: 1, //登录类型: 1账号登录，3voip账号密码登录
		_Notification: null,
		_onMsgReceiveCallback: null,
		/**
		 * 初始化
		 * 
		 * @private
		 */
		init: function() {
			// 初始化SDK
			var resp = RL_YTX.init(IM._appid);
			if (!resp) {
				alert('SDK初始化错误');
				return;
			};
			if (200 == resp.code) { // 初始化成功
				//console.log("初始化成功")
			} else if (174001 == resp.code) { // 不支持HTML5
				console.log("不支持HTML5")
			} else if (170002 == resp.code) { //缺少必须参数
				console.log("错误码：170002,错误码描述" + resp.msg);
			} else {
				console.log('未知状态码');
			};
		},
		DO_login: function(user_account) {
			//console.log("DO_login");
			var user_account = user_account;
			var pwd = "";
			IM._login(user_account, pwd);
		},
		/**
		 * 正式处理登录逻辑，此方法可供断线监听回调登录使用 获取时间戳，获取SIG，调用SDK登录方法
		 * 
		 * @param user_account
		 * @param pwd 密码
		 * @private
		 */
		_login: function(user_account, pwd) {
			var timestamp = IM._getTimeStamp();
			var flag = false; //是否从第三方服务器获取sig
			if (flag) {
				IM._privateLogin(user_account, timestamp, function(obj) {
					console.log('obj.sig:' + obj.sig);
					IM.EV_login(user_account, pwd, obj.sig, timestamp);
				}, function(obj) {
					alert("错误码：" + obj.code + "; 错误描述：" + obj.msg);
				});
			} else {
				//仅用于本地测试，官方不推荐这种方式应用在生产环境
				//没有服务器获取sig值时，可以使用如下代码获取sig
				var appToken = '928950c541d415c6702046bf0fcfc585'; //使用是赋值为应用对应的appToken
				var sig = hex_md5(IM._appid + user_account + timestamp + appToken);
				//console.log("本地计算sig：" + sig);
				IM.EV_login(user_account, pwd, sig, timestamp);
			}
		},
		/**
		 * 事件，登录 去SDK中请求登录
		 * 
		 * @param user_account
		 * @param sig
		 * @param timestamp --
		 *            时间戳要与生成SIG参数的时间戳保持一致
		 * @constructor
		 */
		EV_login: function(user_account, pwd, sig, timestamp) {
			//console.log("EV_login");
			var loginBuilder = new RL_YTX.LoginBuilder();
			loginBuilder.setType(IM._loginType);
			loginBuilder.setUserName(user_account);
			if (1 == IM._loginType) { //1是自定义账号，3是voip账号
				loginBuilder.setSig(sig);
			} else {
				loginBuilder.setPwd(pwd);
			}
			loginBuilder.setTimestamp(timestamp);

			RL_YTX.login(loginBuilder, function(obj) {
				console.log("EV_login succ...");
				IM._user_account = user_account;
				IM._username = user_account;
				// 注册PUSH监听
				IM._onMsgReceiveListener = RL_YTX.onMsgReceiveListener(
					function(obj) {
						if (IM._onMsgReceiveCallback) {
							IM._onMsgReceiveCallback.call(this, obj);
						}
						//IM.EV_onMsgReceiveListener(obj);
					});
				// 服务器连接状态变更时的监听
				IM._onConnectStateChangeLisenter = RL_YTX.onConnectStateChangeLisenter(function(obj) {
					// obj.code;//变更状态 1 断开连接 2 重练中 3 重练成功 4 被踢下线 5 断开连接，需重新登录
					// 断线需要人工重连
					if (1 == obj.code) {
						console.log('onConnectStateChangeLisenter obj.code:' + obj.msg);
					} else if (2 == obj.code) {
						console.log('网络状况不佳，正在试图重连服务器 obj.code:' + obj.msg);
					} else if (3 == obj.code) {
						console.log('alert-success 连接成功' + obj.msg);
					} else if (4 == obj.code) {
						IM.DO_logout();
						console.log(obj.msg);
					} else if (5 == obj.code) {
						console.log('断开连接，正在试图重连服务器' + obj.msg);
						IM._login(IM._user_account);
					} else {
						console.log('onConnectStateChangeLisenter obj.code:' + obj.msg);
					}
				});
				IM.EV_getMyInfo();
				//登陆后拉取最近联系人列表
				//IM.EV_getRecentConList();
			}, function(obj) {
				console.log("错误码： " + obj.code + "; 错误描述：" + obj.msg);
			});
		},
		/* 获取当前时间戳 YYYYMMddHHmmss
		 * 
		 * @returns {*}
		 */
		_getTimeStamp: function() {
			var now = new Date();
			var timestamp = now.getFullYear() + '' + ((now.getMonth() + 1) >= 10 ? "" + (now.getMonth() + 1) : "0" + (now.getMonth() + 1)) + (now.getDate() >= 10 ? now.getDate() : "0" + now.getDate()) + (now.getHours() >= 10 ? now.getHours() : "0" + now.getHours()) + (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes()) + (now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds());
			return timestamp;
		},
		/**
		 * 事件，push消息的监听器，被动接收信息
		 * 
		 * @param obj
		 * @constructor
		 */
		EV_onMsgReceiveListener: function(obj) {
			console.log('Receive message sender:[' + obj.msgSender + ']...msgId:[' + obj.msgId + ']...content[' + obj.msgContent + ']');
		},
		/**
		 * 事件，获取登录者个人信息
		 * 
		 * @constructor
		 */
		EV_getMyInfo: function() {
			RL_YTX.getMyInfo(function(obj) {
				if (!!obj && !!obj.nickName) {
					IM._username = obj.nickName;
				};
			}, function(obj) {
				if (520015 != obj.code) {
					console.log("错误码： " + obj.code + "; 错误描述：" + obj.msg);
				}
			});
		},
		/**
		 * 登出
		 * 
		 * @constructor
		 */
		DO_logout: function() {
			// 销毁PUSH监听
			IM._onMsgReceiveListener = null;
			// 注册客服消息监听
			IM._onDeskMsgReceiveListener = null;
			// 销毁注册群组通知事件监听
			IM._noticeReceiveListener = null;
			// 服务器连接状态变更时的监听
			IM._onConnectStateChangeLisenter = null;
			//呼叫监听
			IM._onCallMsgListener = null;
			//阅后即焚监听
			IM._onMsgNotifyReceiveListener = null;
		},
		/**
		 * 样式，发送消息
		 */
		DO_sendMsg: function(content_you, str) {
			var str = IM.DO_pre_replace_content_to_db(str);
			var msgid = new Date().getTime();
			var obj = new RL_YTX.MsgBuilder();
			obj.setId(msgid);
			obj.setText(str);
			obj.setType(1);
			obj.setReceiver(content_you);
			//console.log('msgid[' + msgid + '] content_type[' + 1 + '] content_you[' + content_you + '] im_send_content[' + str + ']');
			RL_YTX.sendMsg(obj, function() {
				//发送消息成功
				console.log("发送成功")
					//处理用户逻辑，通知页面
			}, function(obj) { //失败
				//发送消息失败
				console.log("异常")
					//处理用户逻辑，通知页面刷新，展现重发按钮
			});
		},
		DO_pre_replace_content_to_db: function(str) {
			var str = str;
			str = str.replace(/<(div|br|p)[/]?>/g, '\u000A');
			str = str.replace(/\u000A+/g, '\u000D');
			str = str.replace(/<[^img][^>]+>/g, ''); // 去掉所有的html标记
			str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(
				/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&nbsp;/g,
				' ');
			if ('\u000D' == str) {
				str = '';
			}
			return str;
		},
		EV_getRecentConList: function() {
			var recentConListBuilder = new RL_YTX.GetRecentContactListBuilder();
			//recentConListBuilder.setTime(IM._getTimeStamp());可以不填
			//recentConListBuilder.setLimit(10);可以不填

			RL_YTX.getRecentContactList(recentConListBuilder, function(succObj) {
				console.log("get recent Contact List success");
				//增加到左侧联系人列表中,zzx
				console.log(JSON.stringify(succObj));

			}, function(errObj) {
				alert("错误码： " + errObj.code + "; 错误描述：" + errObj.msg);
			});
		},
	};
})();