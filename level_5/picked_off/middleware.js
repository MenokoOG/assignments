// middleware.js
function customMiddleware(req, res, next) {
    console.log('Middleware executed');
    req.customProperty = 'This is a custom property added by middleware';
    next(); // Moving to the next middleware or route handler
  }
  
  module.exports = customMiddleware;
  