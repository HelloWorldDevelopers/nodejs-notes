const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.tokenCreationAfterLogin=(payload)=>{
      return jwt.sign(payload,process.env.secretKey);
}
module.exports.parseGenratedToken=(token)=>{
    return jwt.verify(token,process.env.secretKey);
}