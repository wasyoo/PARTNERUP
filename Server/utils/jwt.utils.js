const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'f646PXtbWtPUuCXtxeVpgcATUrsjYJZg4eUdUyWEyKwDLfnwNtWVf6gxJSVcun2dS8s4uZEZVwV3UqKX3yyhL9aBmfQJXbctVZGSWcHKV58FmS9PFmXW7zQtT6N2BPDJn9FAwFeaVBn4U9tkv2KrtzVYj67Rm2CKHgkUwW3NyF3bYHfABLC4BQk8ZUdPDD9kvS6nSHhvejz3WKaXJByh6rBSnnVHj8pA5yqJQcbUNbat5eJcz3H9L8gR3GUa3Nus';

module.exports = {
    generateTokenForUser: function(userData) {
      return jwt.sign({
        userId: userData.id,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: '24h'
      })
    },
    parseAuthorization: function(authorization) {
      return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function(authorization) {
      var userId = -1;
      var token = module.exports.parseAuthorization(authorization);
      if(token != null) {
        try {
          var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
          if(jwtToken != null)
            userId = jwtToken.userId;
        } catch(err) { }
      }
      return userId;
    }
  }
  