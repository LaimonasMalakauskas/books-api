const asyncHandler = require('express-async-handler')

const renderHomePage = asyncHandler(async (req, res) => {
  res.render('index')
});

module.exports = {
  renderHomePage,
};