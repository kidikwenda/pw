const sqlite = require('sqlite3').verbose();
db = new sqlite.Database(':memory:');
DbConection = [
    init = () => {
        db.serialize(function () {
            db.run("CREATE TABLE web_clientes (endpoint TEXT, p256dh TEXT, auth TEXT)");
            console.log('criei table')
        });
    },

    insert = (endpoint, p256dh, auth) => {
        var stmt = db.prepare("INSERT INTO web_clientes VALUES (?,?,?)");
        console.log(stmt)
        var params = [endpoint, p256dh, auth];
        stmt.run(params);
        stmt.finalize();
    },

    selectAll = () => {
        result = {};
        db.each("SELECT endpoint, p256dh, auth FROM web_clientes", function(err, row) {
            Object.assign(resilt, row);
            console.log(row.endpoint + ": " + row.p256dh);
        });
        return result;
    }
]

module.exports = DbConection;