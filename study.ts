
type Player<E> = {
    name: string
    extraInfo:E
}

type HwarakExtra = {
    favFood:string
}

type HwarakPlayer = Player<HwarakExtra>

const hwarak:HwarakPlayer = {
    name:"hwarak",
    extraInfo:{
        favFood:"chicken"
    }
}

const bibi:Player<null> = {
    name:"bibi",
    extraInfo:null
}        