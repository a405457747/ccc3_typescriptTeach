import { _decorator, Component, Node } from 'cc';
const { ccclass, property,executionOrder } = _decorator;

@ccclass('NewComponent_001')
@executionOrder(-1)
export class NewComponent_001 extends Component {

    start() {

        console.log("001 start");
    }

    update(deltaTime: number) {
        
    }
}


