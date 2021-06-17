const database = require('../infra/database');

exports.getFile = function (accessKey) {
	return database.oneOrNone('select * from public.file where access_key = $1', [accessKey]);
};