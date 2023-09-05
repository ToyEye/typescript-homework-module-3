type TDoor = "open" | "close";

interface IHouse {
  door: "open" | "close";
  //   key: object;
}

abstract class House implements IHouse {
  public door: TDoor;

  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Людина ввійшла в будинок.");
    } else {
      console.log("Двері закриті. Людина не може ввійти.");
    }
  }

  public abstract openDoor(key: Key): void;
}

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

class MyHouse extends House {
  public key;
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("Двері відчинені.");
    } else {
      console.log("Ключ не підходить. Двері залишаються закритими.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
