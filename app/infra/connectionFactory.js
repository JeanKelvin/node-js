var mysql  = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'database_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: '******',
            password: '******',
            database: '****************'
        });
    }

    if(process.env.NODE_ENV == 'production') {
        return mysql.createConnection({
            host: 'localhost',
            user: '*******',
            password: '*******',
            database: '*************'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}
