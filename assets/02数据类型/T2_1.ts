import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T2_1')
export class T2_1 extends Component {
    start() {
        /*
        let a="buhao";
        let b=a+a;
        console.log(b);
        */

        /*
        let a=3;
        let b =4;
        let c =a+b;
        let d =a*b;
        console.log(c+":"+d);
        */

        /*
       let a =true;
       let b =false;
        if(a==true){
            console.log("今天下雨")
        }else {
            console.log("今天没有下雨");
        }
        */

        /*
        let k =null;
        k=3;
        let k2="3";
        console.log(k);
        console.log(typeof k2);
        let k3 =null;
        k3 =this;
        console.log(typeof k3);
        */


        /*
        let k=undefined;
        console.log(k);
        */

        /*
        let a=[1,"sk",[0,1]];
        console.log(a);
        */

        let a ={a:2,b:3}
        let c =console.log;

        c(a.a);
    }

    update(deltaTime: number) {
        
    }
}


