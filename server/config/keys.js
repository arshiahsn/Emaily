//keys.js

if(process.env.NODE_ENV === 'production'){
    //Dev Environment
    //Production keys
    module.exports = require('./prod');
}
else{
    //Dev Envritonment
    //Dev keys
    module.exports = require('./dev');
}
