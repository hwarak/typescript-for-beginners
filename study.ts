interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  helth: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public helth: number
  ) {}

  sayHi(name: string) {
    return `hi ${name}, My name is ${this.fullName()}`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
