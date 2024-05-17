import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T6_1')
export class T6_1 extends Component {

    age:number=0;
    sum(a,b){
        let sum =a+b;
        sum =sum*sum;
        return sum;
    }

    step1(){
        console.log("加底盘")
    }

    step2(){
        console.log("加车身")
    }

    step3(){
        console.log("加车身")
    }


    xiaoche(){
        this.step1();
        this.step2();
        this.step3();
        console.log("小车组成完毕了");
    }

    start() {
        /*
       let k= this.sum(3,2);
       let k2=this.sum(5,6);
       console.log(k+":"+k2);  //8 11
       */
       this.xiaoche();
    }

    update(deltaTime: number) {
        
    }
}


