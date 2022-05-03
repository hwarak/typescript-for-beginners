type SuperPrint = {
    <T>(arr : T[]) : T
}

const superPrint : SuperPrint = (arr) => {
    return arr[0]
}

const a = superPrint([1,2,3])
const b = superPrint([true, false, true])
const c = superPrint(["hello","hi","no"])
const d = superPrint(["hello","hi","no",false, true])