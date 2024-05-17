import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T5_1')
export class T5_1 extends Component {
    start() {

        /*
        let a =2;
        let b =2;
        let k = a >b;
        if (k) {
            console.log("3>2")
        }
        else if(a==b){
            console.log("3等于2");
        }
        else {
            console.log("3小于2")
        }
        */

        let a=7;
        switch (a) {
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case 3:
                console.log("3");
                break;
            default:
                console.log("其他");
                break;
        }

    }

    update(deltaTime: number) {

    }
}


