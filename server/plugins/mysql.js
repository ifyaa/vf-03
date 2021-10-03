require('dotenv').config();
const mysql = require('mysql2');

function createdatabase(){
    let instancd = null;
    return {
        getInstance : function(){
            if(instance == null){
                const config = {
                    host : process.env.DB_HOST,
                    user : process.env.DB_USER,
                    database : process.DB_DATABASE,
                    password : process.DB_PASSWORD,
                }
                const pool = mysql.createPool(config);
                instance = pool.promise();
            }
            return instance;
        }
    }
}
module.exports = createdatabase().getInstance();