import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T3_1')
export class T3_1 extends Component {

    a=55;

    start() {
        /*
        let a="blue";
        const k =33;
        console.log(a);
        a="red";
        console.log(a);
        */

        /*
        let a=3;
        let b =55;

        if(true)
        {
            let k=332;
            let a=2;
            console.log(b);
            console.log(a);
        }

        {
            //console.log(k);
        }
        //console.log(b);
        console.log(a,this.a);
        */

        /*
        let k =[3,2,1];
        console.log(k[0]);
        */

        /*
        let k={a:3,"b":true}
        console.log(k.a);
        console.log(k["a"]);
        console.log(k.b);
        console.log(k["b"]);
        */

        let k =[3,2,1,4,5,6];
        let lastIdx =k.length-1;
        console.log(k[k.length-1])
        console.log(k[lastIdx]+k[0]);

    }

    update(deltaTime: number) {
        
    }
}


