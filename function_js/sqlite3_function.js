exports.sqlite3_db = function () {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./data_sqlite3/z2.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Database connected');
        }
    });
    return db;
}
