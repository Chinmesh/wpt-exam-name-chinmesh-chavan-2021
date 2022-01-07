const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
};

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("CONNECTION SUCCESS!!!");
    let sql = `insert into user (username,password) values (?,?)`;
    await connection.queryAsync(sql, [user.username, user.password]);
    await connection.endAsync();
    console.log("Record Added");
}

const user = { username: "Abhijeet", password: "12345" };
addUser(user);