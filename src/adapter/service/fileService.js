const fileData = require('../../domain/fileData');

exports.getFile = (accessKey) => {
	return fileData.getFile(accessKey);
};