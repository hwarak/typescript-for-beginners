type Player = {
    name: string,
    age?: number
}


function Playermaker(name : string) : Player{
 return{
     name
 }
}

const minhee = Playermaker("minhee")
minhee.age = 12