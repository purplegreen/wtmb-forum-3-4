module.exports = class  Post {
    constructor (title, entry){
        this.title = title
        this.entry = entry
        this.interactions = []
         }

         addinteraction(interact) {
             this.interactions.push(interact)
         }
         sayName() {console.log(this.title)}

            static create (hey) {
                return new Post(hey.title)
            }
        }
        
