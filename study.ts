type SuperPrint = {
    <T,M>(arr : T[], b:M) : T
}

const superPrint : SuperPrint = (arr) => {
    return arr[0]
}

const a = superPrint([1,2,3],"")
const b = superPrint([true, false, true],1)
const c = superPrint(["hello","hi","no"],true)
const d = superPrint(["hello","hi","no",false, true],34)