// middleware/auth.js
function auth(req, res, next) {
    // esim. tokenin tarkistus, tämä on vain placeholder
    const token = req.header('Authorization');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    // jos kaikki ok:
    next();
  }
  
  module.exports = auth;
  