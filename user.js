module.exports = class User {
    constructor (name, profileicon) {
    this.name = name
    this.profileicon = profileicon
    this.post = []
    this.interactionsGiven = []
        }

        // posted(Post){
        // this.post.push(Post)
        // }
        
        posted(post){
            post.nowposted.push(this)
        }

    
        thumb(post, interact){
        post.interactions.push(interact)    
        this.interactionsGiven.push(interact)
        } 
        
        static create (hey) {
            return new User(hey.name)
        }


  }
  

