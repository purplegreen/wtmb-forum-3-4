
// FORum A Discussion Platform developed at WTM Berlin 2018 //

const User = require('./models/user')
const Post = require('./models/post')
const UserInteraction = require('./user-interactions')
// const Chalk = require('chalk')

console.log('I am ready')




const main = async () => {

const deh = new User ('DehLix', '^_^')
const stella = new User ('Stella', ';)')
const juno = new User ('Juno', ':)')

console.log('hey there')

//interactions //
const loveit = new Interaction ("Love It")
const notreally = new Interaction ("Not Really")
const checkmypost = new Interaction ("I have something to say")


//posts //

const post1 = new Post ("Disposable", "We produce 300million tons of plastic every year and half of it is meant to be used only once.")
const post2 = new Post ("Bring Your Own", "I think most of us are now familiar with this tip. Instead of buying a new plastic bag from the cashier every time you do your groceries, bring your own !")
const post3 = new Post ("Toothbrushes", "Take a bamboo one ! You will just have to remove the bristles before putting them into a recycling bin.")
const post4 = new Post ("Sponges", "those eco-friendly solutions work better than traditional sponges.")
const post5 = new Post ("Lifestyle", "In fact, most of our plastic litter is currently floating around in the sea and at least 8 million tons of plastic ads up every year. Yum !")




deh.interactionsGiven(post1)
stella.interactionsGiven(post2)
juno.interactionsGiven(post3)


await UserInteraction.add(deh)
await UserInteraction.add(stella)
await UserInteraction.add(juno)


//post 1 and interaction //

stella.posted(post1)
console.log(stella, post1)

deh.thumb(post1, checkmypost)
console.log(deh)

juno.thumb(post1, loveit)
console.log(juno)



//post 2 and interaction //

deh.posted(post2)
console.log(deh, post2)


juno.thumb(post2, checkmypost)
console.log(Chalk.yellow.bgBlue.bold(juno))

stella.thumb(post2, loveit)
console.log(Chalk.magenta.underline.bold(stella))



const allUsers = await UserInteraction.findAll()



await Database.save(allposts)
const loadedPosts = await Database.load('database.json')
const heyposts= loadedPosts.map(Post.create)

console.log(loadedPosts.allposts)

await Database.save(allUsers)
const loadedUsers = await Database.load('database.json')
const heyUsers = loadedUsers.map(User.create)

console.log(loadedUsers.allUsers)


juno.report()

}

main()

// deh.posted(post2)
// console.log(deh, post2)


// juno.thumb(post2, checkmypost)
// console.log(Chalk.yellow.bgBlue.bold(juno))

// stella.thumb(post2, loveit)
// console.log(Chalk.magenta.underline.bold(stella))

// Database.save(post1)
// const loadedFile = Database.load()
// console.log(loadedFile.interactionsGiven)

const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server listening.')
})