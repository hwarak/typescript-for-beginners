type Age = number;
type Name = string;
type Player = {
    name: Name,
    readonly  age?: Age
}


// function Playermaker(name : string) : Player{
//  return{
//      name
//  }
// }

const Playermaker = (name : string) : Player => ({name})

const minhee = Playermaker("minhee")
minhee.age = 12 //에러생김