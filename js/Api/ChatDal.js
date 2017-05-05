var ChatModel = function() {
	this.version = ""; //版本号
	this.chat_FROM = ""; //来自 
	this.chat_TO = ""; //发送
	this.user_nikeName = ""; //用户名
	this.user_sex = ""; //性别
	this.user_photo = ""; //头像
	this.lengths = ""; //长度
	this.content = ""; //内容
	this.times = ""; //时间
	this.chat_contenttype = ""; //类型
}

var chatInfo = [];

/***
 * 个人中心管理相关
 */
var ChatDal = function() {
	var that = this;
	//获取本地消息
	this.GetLocalChat = function() {
		var chat_Info = plus.storage.getItem("chatInfo");
		if (chat_Info) {
			return new JsonTools().stringToJson(chat_Info);
		} else {
			return null;
		}
	}

	//保存消息到本地
	this.SaveLocalChat = function() {
		plus.storage.setItem("chatInfo", new JsonTools().jsonObjToString(chatInfo));
		console.log(new JsonTools().jsonObjToString(chatInfo))
	}

	//获取个人消息 tel:帐号
	this.getChatItme = function(tel) {
		//获取本地记录
		if (that.GetLocalChat()) {
			chatInfo = that.GetLocalChat();
		}
		for (var numbers in chatInfo) {
			var numberTemp = chatInfo[numbers];
			if (numberTemp.chat_FROM == tel) {
				return numberTemp;
			}
		}
		return null;
	}

	//添加个人信息成员
	this.addChatItme = function(info, IsCun) {
		//获取本地记录
		if (that.GetLocalChat()) {
			chatInfo = that.GetLocalChat();
		}
		var chatMsg = {
			"data": []
		};
		if (info.lengths > 0 || IsCun == true) {
			chatMsg.data.push(info);
		}
		mui.extend(chatMsg, info);
		chatInfo.push(chatMsg);
		that.SaveLocalChat(chatInfo);
	}

	//修改个人信息
	this.updateChatItme = function(info, IsCun) {
		//获取本地记录
		if (that.GetLocalChat()) {
			chatInfo = that.GetLocalChat();
		}
		for (var numbers in chatInfo) {
			var numberTemp = chatInfo[numbers];
			if (numberTemp.chat_FROM == info.chat_FROM || numberTemp.chat_FROM == info.chat_TO) {
				//console.log(JSON.stringify(chatInfo[numbers].data))
				if (chatInfo[numbers].data.length && chatInfo[numbers].data.length > 0) {
					if (IsCun) {
						for (var tempIndex in chatInfo[numbers].data) {
							if (info.version == chatInfo[numbers].data[tempIndex].version) {
								console.log("该记录存在");
								return;
							}
						}
					}
					chatInfo[numbers].data.push(info);
				} else {
					chatInfo[numbers].data = new Array();
					chatInfo[numbers].data.push(info);
				}
				chatInfo[numbers].version = info.version;
				chatInfo[numbers].chat_FROM = info.chat_FROM;
				chatInfo[numbers].chat_TO = info.chat_TO;
				chatInfo[numbers].user_nikeName = info.user_nikeName;
				chatInfo[numbers].user_sex = info.user_sex;
				chatInfo[numbers].user_photo = info.user_photo;
				chatInfo[numbers].content = info.content;
				chatInfo[numbers].times = info.times;
				chatInfo[numbers].lengths = chatInfo[numbers].lengths + 1;
				if (!IsCun) {
					chatInfo[numbers].chat_FROM = info.chat_TO;
					chatInfo[numbers].chat_TO = info.chat_FROM;
					chatInfo[numbers].lengths = 0;
				}
				chatInfo[numbers].chat_contenttype = info.chat_contenttype;
				that.SaveLocalChat(chatInfo);
				return chatInfo[numbers];
				break;
			}
		}
	}
}