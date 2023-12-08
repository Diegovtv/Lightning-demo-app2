import { Lightning, Utils } from "@lightningjs/sdk";
import { Button, Column, Row, FocusManager, Tile, CardContentVertical } from "@lightningjs/ui-components";


export class SecondRow extends Lightning.Component {
    static _template() {
        return {
            FirstPoster: {
                type: CardContentVertical,
                x: 50,
                w: 220,
                h: 330,
                tile: {
                    badge: {
                        title: "4K"
                    },
                    label: {
                        title: "EXAMPLE",
                        style: {
                            backgroundColor: 0xff3c57b9,
                            textStyle: {
                                titleColor: 0xff3c57b9
                            }
                        }
                    }
                },
                metadata: {
                    title: "Trolls back again3",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    details: {
                    }
                },
                src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
                // shouldCollapse: true,
                style: {
                    // backgroundColor: 0x00000000,
                    backgroundColor: 0xff3c57b9,
                    expandedHeight: 450
                }
            },
            secondPoster: {
                type: CardContentVertical,
                x: 250,
                w: 220,
                h: 330,
                tile: {
                    badge: {
                        title: "4K"
                    },
                    label: {
                        title: "EXAMPLE",
                        style: {
                            backgroundColor: 0xff3c57b9,
                            textStyle: {
                                titleColor: 0xff3c57b9
                            }
                        }
                    }
                },
                metadata: {
                    title: "Trolls back again4!!!",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    details: {
                    }
                },
                src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
                // shouldCollapse: true,
                style: {
                    // backgroundColor: 0x00000000,
                    backgroundColor: 0xff3c57b9,
                    expandedHeight: 450
                }
            }
        }
    }

    _init() {
        this._setState('FirstPoster')
    }

    static _states() {
        return [
            class FirstPoster extends this {
                // _handleLeft() {
                // 	this.buttonIndex = 0
                // }
                // _handleRight() {
                // 	this.buttonIndex = 1
                // }
                _getFocused() {
                    return this.tag('FirstPoster')
                }
                _handleRight() {
                    this._setState('SecondPoster')
                }
            },
            class SecondPoster extends this {
                _getFocused() {
                    return this.tag('SecondPoster')
                }
                _handleLeft() {
                    this._setState('FirstPoster')
                }
            }
        ]
    }

    //... more code, methods, events... 
    // active, attach, detach etc........
}