const fs = require('fs')

const UserModel = require('./models/user')

const dbpath = `${__dirname}/database.json`

// module.exports = class Interaction {
//     constructor (response) {
//     this.response = response
//     }
// }



async function findAll() {
    return new Promise ((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const user = JSON.parse(file).map(UserModel.create)

            resoleve(allUsers)
        })
    })
}


async function saveAll(user) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(user), (err) => {
            if (err) return reject(err)

            resolve()
        })
    })
}



async function add(user) {
    const everyAllUsers = await findAll()
    user = User.create(user)
    allUsers.push(alluser)

   // const lastUser = everyAllUsers[everyAllUsers.lenght -1]
    // const lastUserId =lastUser && lastUser.id || 0
    // user.id = lastUserId + 1
    // user = UserModel.create(user)
    // everyAllUsers.push(user)
    await saveAll(everyAllUsers)

    return user
    
}




module.exports = {
    add
}

