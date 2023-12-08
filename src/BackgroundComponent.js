import { Lightning, Utils } from '@lightningjs/sdk'

export class BackgroundComponent extends Lightning.Component {
    static _template() {
        return {
            Background: {
                w: 1920,
                h: 1080,
                color: 0xfffffffff,
                src: Utils.asset('images/kameWallpaper.jpg'),
            },
        }
    }

    _init() {
    }
}