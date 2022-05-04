abstract class User{
    constructor(
        protected firstName:string,
        protected lastName:String,
        protected nickName:string
    ){}

    abstract getNickname():void

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User{
    getNickname(){
        console.log(`${this.nickName}`)
    }
    
}

const hwarak = new Player("minhee", "seo", "hwarak")
hwarak.getFullName();

