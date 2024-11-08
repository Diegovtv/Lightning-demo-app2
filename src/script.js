const URL_PATH = /(?:.*(?:\.com|\d*\.\d*\.\d*\.\d*)(?:\:\d*)?\/#?\$?!?(?:.*#)?|#|)(.*?)(?:\/?\?.*|\/?$)/
const URL_QUERY = /(?:[^#/&?]*?)=(?:.*?)(?=[#/&]|$)/g
let playerId = ""
let paramsResult = []

const { qs } = _parsePathAndQsParams(window.location.href)
_setupIframeListener()
_setUpIframe()
animateLogo()

function _parsePathAndQsParams(url) {
    const pathResult = URL_PATH.exec(url)
    const path = pathResult && pathResult.length > 0 ? pathResult[1] : url
    paramsResult = url.match(URL_QUERY) || []
    const qs = paramsResult.reduce((o, qs) => {
        const [k, v] = qs.split('=', 2)
        return { ...o, [k]: v }
    }, {})

    return { path, qs }
}

function _setUpIframe() {
    const APP_URL = decodeURIComponent(qs.appURL)
    const iFrameStyle = [
        "position: absolute;",
        `width: 100%;`,
        `height: 100%`
    ].join(" ")
    const iframeUrl = qs.connectedToGame ? `${APP_URL}&connectedToGame=${qs.connectedToGame}` : APP_URL
    const containerElement = document.querySelector("body")
    const iFrameEl = document.createElement('iframe');
    iFrameEl.setAttribute("id", 'gameloop-game-overlay');
    iFrameEl.setAttribute("src", iframeUrl)
    iFrameEl.setAttribute("style", iFrameStyle)
    containerElement.appendChild(iFrameEl)
}

function _setupIframeListener() {
    window.addEventListener('message', event => this.onWindowMessage(event))
}

function onWindowMessage(event) {
    const overlayIframe = document.getElementById('gameloop-game-overlay')
    const gameloopLogoDiv = document.getElementById('gameloop-logo')
    switch (event.data) {
        case "loaded": {
            gameloopLogoDiv.style.display = "none"
            if (qs.connectedToGame) {
                const clientInfo = window.history.state
                overlayIframe.contentWindow.postMessage(clientInfo, '*')
            }
            overlayIframe?.contentWindow?.focus()
            break
        }
        case "disconnectFromGame": {
            const url = new URL(window.location.href)
            url.searchParams.delete("connectedToGame")
            window.history.pushState({}, "", url)
            break
        }
        case "close": {
            gameloopLogoDiv.style.display = "flex"
            window.focus()
            if (overlayIframe && overlayIframe.parentNode) {
                overlayIframe.parentNode.removeChild(overlayIframe)
            }
            break
        }
        default: {
            if (!event.data.playerId) break
            const clientInfo = event.data
            const url = new URL(window.location.href)
            url.searchParams.set("connectedToGame", "true")
            window.history.pushState(clientInfo, "", url)
            break
        }
    }
}

function animateLogo() {
    const gameloopLogo = document.getElementById('gameloop-logo-sequence')
    const frameRate = 30
    const totalFrames = 54
    let currentFrame = 0

    function updateFrame() {
        gameloopLogo.src = `static/images/interactive-logo/Normal_open_${currentFrame}.png`
        if (currentFrame < totalFrames - 1) {
            currentFrame++
        }
    }

    setInterval(updateFrame, frameRate)
}