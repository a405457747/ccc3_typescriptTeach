import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    public sayHi() {
        return `My name is ${this.name}` + this.a();
    }

    protected a() {
        return "a";
    }
    protected b() {
        return "b";
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }

    public sayHi(): string {
        return super.sayHi() + this.a() + this.b();
    }
}


enum Color {
    Red,
    Green,
    Blue,
}


@ccclass('T11')
export class T11 extends Component {
    start() {
        let a = new Animal('Jack');
        console.log(a.sayHi()); // My name is Jack

        let c: Cat = new Cat("Tom");

        let k: any = 3;
        let k2: number = 3;
        let k3: string = "ss";
        let k4: boolean = true;
        let k5: number[] = [1, 2];
        let k6: [string, number] = ["a", 3];
        let k7: Color = Color.Blue;
        let k8: null = null;
        let k9: undefined = undefined;

        console.log(this.add(3,2));

    }

    add(a:number,b:number):number{
        return a+b;
    }

    skk(): never {
        throw new Error();
    }

    kk(): void {

    }


    update(deltaTime: number) {

    }
}


