import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class Phone {

    printMsg(){
        console.log("i m phone");
    }
}

class tieMo extends Phone {
    
    addMsg(){

        super.printMsg();
        console.log("tie mo");
    }
}

class sjke extends tieMo {
    ph:Phone=null;

    addMsg(){
        super.addMsg();
        console.log("sjk");
    }
}


@ccclass('Zhuangshizhe')
export class Zhuangshizhe extends Component {
    start() {

        let t =new sjke();
        t.addMsg()
    }

    update(deltaTime: number) {
        
    }
}


