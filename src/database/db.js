//importar a dependencia do sqlite3
const sqlit3 = require('sqlite3').verbose()

// criar o objeto que ira fazer operações no banco de dados
const db = new sqlit3.Database('./src/database/database.db')

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS places(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name  TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city  TEXT,
      items TEXT
    )
  `)
})

module.exports = db
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name  TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city  TEXT,
//       items TEXT
//     )
//   `)

//   db.run(`
//       INSERT INTO places(
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//       )VALUES (?,?,?,?,?,?,?)
//   `)
// })
