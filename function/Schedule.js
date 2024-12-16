// basic consumption :breakfast-9 ,lunch-15 ,dinner-14
// update into database as sqlite3

// unity game sss. need quick iteration. activate dopamine. refer to some roguelike -game as vampire_survivors, through_god_list[通神榜]
// automated generation of maps. and monsters.

// database sqlite3 .money debt.

// create a database []
exports.database = () => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./money_thing.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database created successfully");
        }
    });
    return db;

}
