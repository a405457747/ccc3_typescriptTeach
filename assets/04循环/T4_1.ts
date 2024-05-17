import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T4_1')
export class T4_1 extends Component {
    start() {

        /*
        for (let i = 0; i < 4; i++) {
            console.log(i);
        }
        */

        /*
        let i=0;
        while(i<4){
            console.log(i);
            i++;
        }
        */

        /*
        let d=[3,2,1];
        let o={a:1,b:2,c:3}
        for(let i in d){
            console.log(i+":"+typeof i);
        }
        */

        /*
        let d=[3,2,1];
        for(let i=0;i<d.length;i++){
            console.log(d[i]);
        }
        */

        /*
        for(let i of d){
            console.log(i);
        }
        */

        /*
        for(let i=0;i<4;i++){
            console.log(i);
            if(i==1){
                break;
            }
        }
        */

        /*
        for(let i=0;i<4;i++){
            if(i==1){
                return;
            }
            console.log(i);
        }

        console.log("hello world");
        */
    }

    update(deltaTime: number) {

    }
}


