import { Lightning, Utils } from '@lightningjs/sdk'
import { Button } from '@lightningjs/ui-components'

export class PlayComponent extends Lightning.Component {
    static _template() {
        return {
            MyButton: {
                type: Button,
                w: 100,
                h: 50,
                backgroundColor: 0xffffffff,
                title: "Play",
                titleColor: 0x00000000
                // color: 0xfffffffff,
                // src: Utils.asset('images/kameWallpaper.jpg'),
            },
        }
    }

    _init() {
        // console.log("I'm initialized")
    }

    //... more code, methods, events... 
    // active, attach, detach etc........
}