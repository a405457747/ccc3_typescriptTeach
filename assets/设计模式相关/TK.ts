import { _decorator, Color, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TK')
export class TK extends Component {
    sp:Sprite=null;
    start() {
        this.sp=this.getComponent(Sprite);
    }

    update(deltaTime: number) {
        
        this.sp.color=new Color(255,255,255,Math.random()*255);
    }
}


