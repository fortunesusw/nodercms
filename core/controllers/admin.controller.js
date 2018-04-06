/**
 * 后台首页
 * @param {Object} req
 * @param {Object} res
 */
let path = require('path');
module.exports = function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../../public/assets/admin/')});
};