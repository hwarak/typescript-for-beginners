// type

type PlayerA = {
  name: string;
};

type PlayerAA = PlayerA & {
  lastName: string;
};

const playerA: PlayerAA = {
  name: "hwarak",
  lastName: "minhee",
};

// interface
interface PlayerB {
  name: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}

interface PlayerBB {
  helth: number;
}

const playerB: PlayerBB = {
  name: "hwarak",
  lastName: "minhee",
  helth: 10,
};
