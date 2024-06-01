import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class Msg {
    Name:string="ssk";
    constructor(name:string){
        this.Name=name;
    }
}

class Origin{


    Name:string=null;

    getMsg(){
        let m= new Msg(this.Name);
        return m;
    }

    restoreMsg(t:Msg){
    this.Name=t.Name;
    }

}

class Creataker {
    M:Msg=null;
}


@ccclass('BeiWanglu')
export class BeiWanglu extends Component {
    dd=null;
    start() {

        let o =new Origin();
        o.Name="State1";
        let c =new Creataker();
        c.M=o.getMsg();
        console.log(c.M.Name);

        o.Name="State2";
        o.restoreMsg(c.M);
        console.log(c.M.Name);

    }

    update(deltaTime: number) {
        
    }
}


