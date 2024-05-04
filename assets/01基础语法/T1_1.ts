import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T1_1')
export class T1_1 extends Component {

    age=12;

    start() 
    {

        /*
        //变量与标识符
        let a2="hello!2";
        console.log(a2);
        let _kkk2="kkk2";
        console.log(_kkk2);
        */

       //关键字和全局变量和局部变量
       let age =9;
       console.log(age);
       age+=1;
       console.log(age);

    }

    update(deltaTime: number) 
    {
        //全局变量
        console.log(this.age);
    }
}


