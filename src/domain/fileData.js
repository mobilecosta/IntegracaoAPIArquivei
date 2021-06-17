const database = require('../infra/database');

exports.getFile = async(accessKey) => {
  try {
  	return await database.oneOrNone('select * from public.file where access_key = $1', [accessKey]);
  } catch(err) {
    return err;
  }
};

exports.saveFile = async (accessKey, value) => {
  try {
    return await database.one('insert into public.file (access_key, value) values ($1, $2) returning *', [accessKey, value]);
  } catch(err) {
    return err;
  }
};