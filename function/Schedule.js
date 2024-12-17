// basic consumption :breakfast-9 ,lunch-15 ,dinner-14
// update into database as sqlite3

// unity game sss. need quick iteration. activate dopamine. refer to some roguelike -game as vampire_survivors, through_god_list[通神榜]
// automated generation of maps. and monsters.

// database sqlite3 .money debt.

// create a database []
exports.database = () => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./z2024.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database created successfully");
        }
    });
    return db;

}
exports.create_table = () => {
    const db = this.database();
    // record thing .
    db.run(`
        create table if not exists money_thing( 
        id integer primary key autoincrement,
        thing text not null,
        money real not null,
        time_happen date not null
        )
        `, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table created successfully");
        }
    })
}
