import { _decorator, Color, Component, Node, tween, UIOpacity, Vec3, Label, Sprite, CCInteger, Animation, resources, TextAsset } from 'cc';
const { ccclass, property, requireComponent, menu, executionOrder } = _decorator;


@ccclass('NewComponent')
@menu("foo/bar")
@executionOrder(-1)
export class NewComponent extends Component {

    @property({ type: CCInteger, tooltip: "sskk", displayName: "wok" })
    age: number = 3;

    kk = Component;

    speed = 0.5;
    start() {
      
        /*
        let k=[3,2,1];
        let k2={a:3,b:true}
        console.log(...k);
        */
        /*
        console.log("normal start");
        this.node.removeComponent(this);
        let ani = this.node.getComponent(Animation);
        ani.play("animation");
        */
       
        let o ={
            name:"siki",
            age:32,
        }

        function kkk(k=undefined){
            console.log(this.name+this.age+k);
        }

        kkk.apply(o);
        kkk.call(o);

        
        /*
        this.a(3)
        .then((t)=>{
            console.log(t);
            return this.b(4);
        })
        .then((t)=>{
            console.log(t);
            return this.c("1");
        })
        .then((t)=>{
            console.log(t);
        })
        */

        Promise.all([this.c("2"),this.c("3"),this.c("1")]
        )
        .then((t)=>{
            console.log(t);
            this.init();
        });
       
    }
    init(){
        console.log("init");
    }

     c(fileName){
        return new Promise((re)=>{
            resources.load(fileName,TextAsset,(err,res)=>{
                re(res.text);
            })
        });
     }

    a(t){
        return new Promise((re)=>{

            tween(this.node)
            .delay(t)
            .call(()=>{
                re(t);
            })

            .start();
        })

    }

    b(t){
        return new Promise((re)=>{

            tween(this.node)
            .delay(t)
            .call(()=>{
                re(t);
            })

            .start();
        })

    }

    update(deltaTime: number) {
        let pos: Vec3 = this.node.position;
        pos.y += this.speed;

        this.node.position = pos;
    }

    protected onDestroy(): void {
        console.log("des")
    }

    click(e,data){
        console.log("clicked !!!!:"+data);
    }
}


