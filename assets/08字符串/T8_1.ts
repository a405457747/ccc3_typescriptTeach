import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T8_1')
export class T8_1 extends Component {
    start() {
        let a="hel-lo";
        let c='hello world';
        let k=21;
        let d=`i am ${k}`;


    
        console.log(a.includes("el"));
        console.log(a.split("-"));
        

    }

    update(deltaTime: number) {
        
    }
}


