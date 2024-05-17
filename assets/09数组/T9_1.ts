import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T9_1')
export class T9_1 extends Component {
    start() {
        let a=[3,2,1];

        a.push(4);
        console.log(a);

        a.splice(1,1);
        console.log(a);

        let k=a.indexOf(2);
        let k2=a.indexOf(4);
        //console.log(k2);

        a[a.length-1]=5;
        console.log(a);
    }

    update(deltaTime: number) {
        
    }
}


