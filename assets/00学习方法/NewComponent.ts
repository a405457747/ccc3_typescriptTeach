import { _decorator, Color, Component, Node,tween,UIOpacity, Vec3,Label,Sprite, CCInteger, Animation} from 'cc';
const { ccclass, property ,requireComponent,menu,executionOrder} = _decorator;


@ccclass('NewComponent')
@menu("foo/bar")
@executionOrder(-1)
export class NewComponent extends Component {

    @property({type:CCInteger,tooltip:"sskk",displayName:"wok"})
    age:number=3;

    kk=Component;

    speed=3;
    start() {
        console.log("normal start");
            this.node.removeComponent(this);

        //this.node.destroy();

        let ani =this.node.getComponent(Animation);
        ani.play("animation");
    }

    update(deltaTime: number) {
        let pos:Vec3 =this.node.position;
        pos.y+=this.speed;

        this.node.position=pos;
    }

    protected onDestroy(): void {
        console.log("des")
    }
}


