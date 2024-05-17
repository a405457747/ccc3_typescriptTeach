import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T10_1')
export class T10_1 extends Component {
    start() {
        /*
        let book ={
            "苹果":3,
            "香蕉":5,
            "葡萄":10,
            ak:332
        };

        book["火龙果"]=33;
        for(let key in book){
            console.log(book[key]);
        }

        delete book["苹果"];
        for(let key in book){
            console.log(key);
        }
        console.log("葡萄"in book);
        book["火龙果"]=133;
        console.log(book["火龙果"]);
        book.ak=888;
        console.log(book.ak);
        */

        /*
        let k2=`
         {
            "a":3,
            "b":true,
            "c":"hello",
            "d":null,
            "e":[1,2,3],
            "f":{
                "a":3
            }
         }
        `

         let k3=JSON.parse(k2);
         console.log(k3);
         console.log(k3.f.a);//3
         k3.kkk=undefined;
         k3.kk2=function(){
                return 3;
         }
         k3.kk2();
         */
    }

    update(deltaTime: number) {
        
    }
}


