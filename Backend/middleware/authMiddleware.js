const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];//takes header detail

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });//response with 401 if no auth

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);// throws error if not verified
    req.user = decoded; //returns the data which was passed during login
    next();//proceed for the handler like get,post
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });//if not verified send status 401
  }
}

module.exports = authMiddleware;
