module.exports = (req, res) => {
  var keys = Object.keys(req);
  res.json({
    key: keys
  });
};
