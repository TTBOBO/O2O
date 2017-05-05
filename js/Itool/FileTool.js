var fileTool = {

	//检验文件是否存在
	//paths: 文件路径例如："_www/test.html"
	//serverPath: 服务器文件地址
	fileExist: function(paths, serverPath, successHandler, faildHandler) {
		plus.io.resolveLocalFileSystemURL(paths, function() {
			successHandler(paths);
		}, function() {
			faildHandler(paths, serverPath);
		});
	},
	//验证文件是否存在
	//带index形式的，方便异步
	//index：下标
	//paths: 文件路径例如："_www/test.html"
	//serverPath: 服务器文件地址
	fileExist2: function(index, paths, serverPath, successHandler, faildHandler) {
		plus.io.resolveLocalFileSystemURL(paths, function() {
			successHandler(index, paths);
		}, function() {
			faildHandler(index, serverPath);
		});
	},

	/***
	 * 下载资源列表。
	 * @param {JSON} fileUrlList 格式：[{"url":"http://.....","type":1},{}...]
	 * @param {Object} successHandler
	 * @param {Object} faildHandler
	 */
	fileListDownLoad: function(fileList, successHandler, faildHandler) {
		var len = fileList.length;
		var downLoadCount = 0;
		for (var i = 0; i < len; i++) {
			var f = fileList[i];
			fileTool.fileDown(f.url, f.type, function() {
				downLoadCount++;
				if (downLoadCount == len) successHandler();

			}, function() {
				downLoadCount++;
				if (downLoadCount == len) successHandler();
				faildHandler();
				alert(f.url + "下载失败");
			});
		}
	},
	//文件的下载
	//paths: 服务器文件路径
	//types: 服务器基本地址
	fileDown: function(paths, types, successHandler, faildHandler) {
		var fileDir = "_doc/HeadPhoto/";
		switch (types) {
			case 1:
				{
					fileDir = "_doc/HeadPhoto/";
					break;
				}
			case 2:
				{
					fileDir = "_doc/CarPhoto/";
					break;
				}
			case 3:
				{
					fileDir = "_doc/CarPhoto/thumbCarPhoto/"
					break;
				}
		};
		var dtask = null;
		var options = {
			method: "GET",
			filename: fileDir
		};
		dtask = plus.downloader.createDownload(paths, options);
		dtask.addEventListener("statechanged", function(task, status) {
			if (!dtask) {
				return;
			}
			switch (task.state) {
				case 1: // 开始
					console.log("开始下载...");
					break;
				case 2: // 已连接到服务器
					console.log("链接到服务器...");
					break;
				case 4: // 下载完成
					console.log("下载完成！");
					successHandler();
					break;
			}
		});
		dtask.start();
	},
	//图片文件的压缩
	//existPath：存在的地址 savePath：保存的地址
	//width 缩略图片的比例
	ImgFileCompress: function(existPath, savePath, width, successHandler, faildHandler) {
		var _img_ = new Image();
		_img_.src = existPath;
		
		_img_.onload = function() {
			var tmph = _img_.height;
			var tmpw = _img_.width;
			var isHengTu = tmpw > tmph;
			var max = Math.max(tmpw, tmph);
			var min = Math.min(tmpw, tmph);
			var bili = min / max;
			if (max > 600) {
				max = 600;
				min = Math.floor(bili * max);
			}

			tmph = isHengTu ? min : max;
			tmpw = isHengTu ? max : min;
			plus.zip.compressImage({
					src: existPath,
					dst: savePath,
					//width: tmpw + "px",
					//height: tmph + "px",
					overwrite: true,
					quality:40,
					format:"jpg"
				},
				function() {
					successHandler(existPath, savePath);
				},
				function(error) {
					faildHandler(error);
				});
			
		}
	},
	//文件的下载
	//url：网络地址
	//local_url：本地保存地址
	FileDownloads: function(url, local_url, successHandler, faildHandler) {
		var download_task = plus.downloader.createDownload(url, {
			filename: local_url // filename:下载任务在本地保存的文件路径
		}, function(download, status) {
			if (status != 200) {
				// 下载失败,删除本地临时文件
				console.log('下载失败,status' + status);
				faildHandler("下载失败");
				if (local_url != null) {
					plus.io.resolveLocalFileSystemURL(local_url, function(entry) {
						entry.remove(function(entry) {
							debug && console.log("临时文件删除成功" + local_url);
						}, function(e) {
							debug && console.log("临时文件删除失败" + local_url);
						});
					});
				}
			} else {
				successHandler("下载成功");
			}

		});
		download_task.start();
	}

}