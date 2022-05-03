// type SuperPrint = {
//     (arr : number[]) : void
//     (arr : boolean[]) : void
//     (arr : string[]) : void
// }

type SuperPrint = {
    <TypePlaceholder>(arr : TypePlaceholder[]) : void
}

const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3])
superPrint([true, false, true])
superPrint(["hello","hi","no"])
superPrint(["hello","hi","no",false, true])