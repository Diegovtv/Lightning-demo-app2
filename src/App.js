import axios from 'axios';

import { Lightning, Utils } from '@lightningjs/sdk'
import { Button, Column, Row, FocusManager, CardContentVertical, CardContent, Card } from '@lightningjs/ui-components'
import { Lifecycle, Metrics, Device } from '@firebolt-js/sdk'

import { BackgroundComponent } from './BackgroundComponent';
import { PlayComponent } from './PlayComponent';

import { FirstRow } from './RowsComponents/FirstRow';
import { SecondRow } from './RowsComponents/SecondRow';

import "../static/css/main.css"

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA1ZjQxMjYwZDMwZmFiZjdkNGJiYWZmOGFkNGYzNCIsInN1YiI6IjY1MmFjYzdmMDI0ZWM4MDEwMTUxOTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTgkXohlcg20WY_sYV880dVkyVvC1RUp9mQ-TuWLgMQ'
  }
};

const opt = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA1ZjQxMjYwZDMwZmFiZjdkNGJiYWZmOGFkNGYzNCIsInN1YiI6IjY1MmFjYzdmMDI0ZWM4MDEwMTUxOTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTgkXohlcg20WY_sYV880dVkyVvC1RUp9mQ-TuWLgMQ'
  }
}

// img url https://www.themoviedb.org/t/p/w220_and_h330_face/IMG_GOES_HERE

var posterArray = []
var posterArray2 = []

// const getMovies = () => {
//   axios
//     .request(options)
//     .then(function (response) {
//       for (let i = 0; i < response.data.results.length; i++) {
//         posterArray.push(response.data.results[i].poster_path)
//       }
//       // console.log(posterArray)
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

//   return posterArray
// }

const getMovies2 = async (page) => {
  try {
    const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
    return movies.data
  } catch (error) {
    console.error(error)
  }
}

const newCreateItems = (type, length, personalSize, width, height, pageToLook) => {
  // const mov1 = await getMovies2(pageToLook)

  options.params.page = pageToLook

  axios
    .request(options)
    .then(function (response) {
      for (let i = 0; i < response.data.results.length; i++) {
        posterArray.push(response.data.results[i])
      }
      // console.log(posterArray)
    })
    .catch(function (error) {
      console.error(error);
    });

  var xAxis = 0

  switch (type) {
    case "Button":
      xAxis = 0
      return Array.from({
        length
      }).map((_, i) => ({
        type: Button,
        title: `Button ${i + 1}`,
        fixed: personalSize,
        w: width,
        h: height,
        // src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        x: xAxis += 250
      }))

    case "Img":
      return Array.from({
        length
      }).map((_, i) => ({
        x: xAxis += 250,
        type: PostersButton,
        title: "Trolls Back 1",
        // rect: true, w: 220, h: 360, Title: { text: { textAlign: "center", fontSize: 24, text: `Poster #${i + 1}`, } },
        w: width,
        h: height,
        src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      }))

    case "Card":
      xAxis = 0
      return Array.from({
        length
      }).map((_, i) => ({
        type: CardContentVertical,
        x: xAxis += 500,
        w: width,
        h: height,
        tile: {
          badge: {
            title: "4K"
          },
          label: {
            title: "NEW",
            style: {
              backgroundColor: 0xffe6324b,
              textStyle: {
                titleColor: 0xff3c57b9
              }
            }
          }
        },
        metadata: {
          title: `Trolls Band Together!`,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          details: "Play now",
          titleTextStyle: {
            fontSize: 24
          },
          descriptionTextStyle:{
            fontSize: 12
          }
        },
        src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
        shouldCollapse: true,
        style: {
          backgroundColor: 0xff3c57b9,
          expandedHeight: 450,
          imageSize: { w: 10, h: 150 }
        },
      }))

    default:
      break;
  }
}

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      BackgroundInstance: {
        type: BackgroundComponent
      },
      Header: {
        rect: true, w: 1920, h: 100, color: 0xff5aa5a9,
        Title: {
          x: 50, y: 50, mountY: 0.5, text: { text: 'Lightning Demo App' }
        }
      },
      WelcomeText: {
        x: 50, y: 120,
        text: {
          fontSize: 24,
          text: "Welcome, user.",
          color: 0xff0000
        }
      },
      ResolutionText: {
        x: 250, y: 120,
        text: {
          fontSize: 24,
          text: "Your screen resolution is: ",
          color: 0xff3C57B9
        }
      },
      DevNameText: {
        x: 700, y: 120,
        text: {
          fontSize: 24,
          text: "Current device: ",
          color: 0xff3C57B9
        }
      },
      VersionsText: {
        x: 1050, y: 120,
        text: {
          fontSize: 24,
          text: "OS Version: ",
          color: 0xff3C57B9
        }
      },
      ConnectedText: {
        x: 50, y: 160,
        text: {
          fontSize: 24,
          text: "Network status: ",
          color: 0xff3C57B9
        }
      },
      ContainerInstance: {
        type: Row,
        h: 500,
        y: 250, x: 75,
        items: newCreateItems("Card", 20, true, 220, 330, 1),
        alwaysScroll: true,
        wrapSelected: true,
      },
      SecondContainerInstance: {
        type: Row,
        h: 500,
        y: 750, x: 75,
        items: newCreateItems("Card", 20, true, 120, 230, 4),
        alwaysScroll: true,
        wrapSelected: true,
      }
      // Row: {
      //   y: 200, x: 50,
      //   type: FocusManager,
      //   direction: "row",
      //   items: newCreateItems("Button", 3, true, 200, 50),
      // },
      // SecondRow: {
      //   y: 300, x: 50,
      //   type: FocusManager,
      //   direction: "row",
      //   items: newCreateItems("Button", 5, true, 200, 50),
      // },
      // ThirdRow: {
      //   y: 400, x: 50,
      //   type: FocusManager,
      //   direction: "row",
      //   wrapSelected: true,
      //   items: newCreateItems("Card", 3, true, 220, 330),
      // },
      // PlayComponentInstance: {
      //   type: PlayComponent
      // }
      // Poster1: {
      //   w: 500,
      //   h: 750,
      //   x: 960,
      //   y: 540,
      //   mountX: 0.5,
      //   mountY: 0.5,
      //   src: Utils.asset("images/img1.jpg")
      // },
    }
  }

  _init() {
    // this.tag("Poster1").patch({
    //   Child: {
    //     w: 500,
    //     h: 750,
    //     x: 960,
    //     y: 540,
    //     mountX: 0.5,
    //     mountY: 0.5,
    //     src: Utils.asset("images/img1.jpg"),
    //   },
    // })

    // this._setState('Row')
    this._setState('ContainerInstance')

    Lifecycle.ready()
      .then(result => {
        // console.log(result)
        console.log("App is ready to go")

        Device.network()
          .then(async (networkInfo) => {
            if (networkInfo.state === "connected") {
              console.log("You are connected to internet!")
            } else {
              console.log("It seems you are not connected to internet.")
            }

            this.tag("ConnectedText").patch({
              text: `Network status: ${networkInfo.state.toUpperCase()}`
            })
          })

        Device.screenResolution().then(screenRes => {
          this.tag("ResolutionText").patch({
            text: `Your Screen Resolution is: ${screenRes[0]}x${screenRes[1]}`
          })
        })

        Device.version().then((versions) => {
          console.log(versions)
          this.tag("VersionsText").patch({
            text: `OS Version: ${versions.os.readable}`
          })
        })

        Device.name().then((value) => {
          console.log(value)
          this.tag("DevNameText").patch({
            text: `Current device: ${value}`
          })
        })
      })
  }

  static _states() {
    return [
      class ContainerInstance extends this {
        _getFocused() {
          return this.tag("ContainerInstance")
        }
        _handleDown() {
          this._setState("SecondContainerInstance")
        }
      },
      class SecondContainerInstance extends this {
        _getFocused() {
          return this.tag("SecondContainerInstance")
        }
        _handleUp() {
          this._setState("ContainerInstance")
        }
      },
    ]
  }

  // static _states() {
  //   return [
  //     class Row extends this {
  //       _getFocused() {
  //         return this.tag('Row')
  //       }
  //       _handleDown() {
  //         this._setState('SecondRow')
  //       }
  //     },
  //     class SecondRow extends this {
  //       _getFocused() {
  //         return this.tag('SecondRow')
  //       }
  //       _handleUp() {
  //         this._setState('Row')
  //       }
  //       _handleDown() {
  //         this._setState('ThirdRow')
  //       }
  //     },
  //     class ThirdRow extends this {
  //       _getFocused() {
  //         return this.tag('ThirdRow')
  //       }
  //       _handleUp() {
  //         this._setState('SecondRow')
  //       }
  //       _handleEnter() {
  //         this.tag("ThirdRow.items").src(Utils.asset("images/img1.jpg"))
  //       }

  //       // _focus() {
  //       //   this.patch({ w: 260, h: 370, smooth: { alpha: 1, scale: 1.2 } })
  //       // }
  //       // _unfocus() {
  //       //   this.patch({ w: 260, h: 370, smooth: { alpha: 0.8, scale: 1 } })
  //       // }
  //     }
  //   ]
  // }

  // _getFocused() {
  //   return this.tag("ContainerInstance")
  // }
}

class PostersButton extends Card {
  _focus() {
    super._focus();
    this.patch({
      h: 360,
      w: 240,
      rect: true, w: 220, h: 400, Title: { text: { textAlign: "center", fontSize: 24, text: `Poster #${1}`, }, backgroundColor: 0x00FFFFFF }
    });
    // triggers recalculation of Column items layout
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}

class ExpandingButton extends Button {
  _focus() {
    super._focus();
    this.patch({ h: 100 });
    // triggers recalculation of Column items layout
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}