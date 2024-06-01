import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class Che {
    val:number=3

    accept(fw){
        fw.visit(this);
    }
}

class Wheel {
    val:number=5

    accept(fw){
        fw.visit2(this);
    }
}

class FW {

    val:number =0;

    visit(c:Che){
        this.val+=c.val;
    }
    visit2(c:Wheel){
        this.val+=c.val;
    }
}

@ccclass('FangWenzhe')
export class FangWenzhe extends Component {
    start() {
     let fw =new FW();
     let c =new Che();
     c.accept(fw);

     let w =new Wheel();
     w.accept(fw);
     console.log(fw.val);
    }

    update(deltaTime: number) {
        
    }
}


