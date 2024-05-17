import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T7_1')
export class T7_1 extends Component {
    start() {
        //算数运算符
        /*
        console.log(3+2+1+":"+3**0.5+":"+3*2/3)
        console.log("3"+"2");
        console.log(3%2+1);
        */
        //关系运算符，会变成布尔值，也就是true和false
        /*
        let a =33>=33  ;
        let b =3;
        let c ="3";
        */
        //逻辑符号，就有&&   ||  !
        let is_xiayu=false;
        let is_work=true;
        if(is_xiayu||is_work){
            console.log("出去玩");
        }else {
            console.log("工作吧");
        }
    }

    update(deltaTime: number) {
        
    }
}


