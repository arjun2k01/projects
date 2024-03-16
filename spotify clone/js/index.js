let currentsong = new Audio();
let songs;
let currfolder;


let sectomin = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingseconds = Math.floor(seconds % 60)
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedseconds = String(remainingseconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedseconds}`

}


async function getSongs(folder) {
    currfolder = folder
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let response = await a.text()
    let div = document.createElement('div')
    div.innerHTML = response
    let as = div.getElementsByTagName('a')
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }


    //show all the songs in the playlist

    let songUL = document.querySelector('.songslist').getElementsByTagName('ul')[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
         
         <li>
                            <img class="invert" src="images/music.svg" alt=""> 
                            <div class="info">
                             <div>${song}</div>
                             <div>Arjun</div>
                            </div>
                            <div class="playnow">
                             <span>Play Now</span>
                             <img class="invert" src="images/play.svg" alt="">
                            </div>
                            
                         </li>`

    }
    // attach an event listener to each song
    Array.from(document.querySelector('.songslist').getElementsByTagName('li')).forEach(e => {
        e.addEventListener('click', elements => {


            playMusic(e.querySelector('.info').firstElementChild.innerHTML.trim())
        })
    })



}
const playMusic = (track, pause = false) => {
    // let audio = new Audio('/songs/' + track)
    currentsong.src = `/${currfolder}/` + track
    if (!pause) {

        currentsong.play()
        play.src = 'images/pause.svg'
    }
    document.querySelector('.songinfo').innerHTML = decodeURI(track)
    document.querySelector('.songtime').innerHTML = '00:00/00:00'



    //show all the songs in the playlist

    let songUL = document.querySelector('.songslist').getElementsByTagName('ul')[0]
    songUL.innerHTML = ''
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
     
     <li>
                        <img class="invert" src="images/music.svg" alt=""> 
                        <div class="info">
                         <div>${song}</div>
                         <div>Arjun</div>
                        </div>
                        <div class="playnow">
                         <span>Play Now</span>
                         <img class="invert" src="images/play.svg" alt="">
                        </div>
                        
                     </li>`

    }
    // attach an event listener to each song
    Array.from(document.querySelector('.songslist').getElementsByTagName('li')).forEach(e => {
        e.addEventListener('click', elements => {

            playMusic(e.querySelector('.info').firstElementChild.innerHTML.trim())
        })
    })



}

displayAlbum = async () => {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text()
    let div = document.createElement('div')
    let anchors = div.getElementsByTagName('a')
    let cardContainer = document.querySelector('.cardContainer')


    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];





        if (e.href.includes('/songs')) {
            let folder = e.href.split('/').slice(-2)[0]
            // get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let response = await a.json()
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder='${folder}' class="card">
            <div class="play">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
            </div>
            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
    div.innerHTML = response

}
async function main() {

    // get the list of all  the songs

    await getSongs('songs/pbi')
    playMusic(songs[0], true)




    //album display code





    // attach an event listener to play next and previous song 
    play.addEventListener('click', () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = 'images/pause.svg'
        } else {
            currentsong.pause()
            play.src = 'images/play.svg'
        }
    })

    //listen for time update event
    currentsong.addEventListener('timeupdate', () => {
        document.querySelector('.songtime').innerHTML = `${sectomin(currentsong.currentTime)}/${sectomin(currentsong.duration)}`
        document.querySelector('.circle').style.left = (currentsong.currentTime / currentsong.duration) * 100 + '%'
    })
    //add an event listener to a seekbar
    document.querySelector('.seekbar').addEventListener('click', e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector('.circle').style.left = percent + '%';
        currentsong.currentTime = (currentsong.duration * percent) / 100
    })

    // add an eventlistener for hamburger
    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelector('.lft').style.left = "0"
    })

    // add an eventlistener for close
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.lft').style.left = "-130%"
    })

    // for previous and next
    previous.addEventListener('click', () => {
        let index = songs.indexof(currentsong.src.split('/').slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    next.addEventListener('click', () => {
        currentsong.pause()
        let index = songs.indexof(currentsong.src.split('/').slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])

        }

    })
    //for volume
    document.querySelector('.range').getElementsByTagName('input')[0].addEventListener('change', (e) => {
        currentsong.volume = parseInt(e.target.value) / 100
    })
    // load the playlists whenever card is clicked
    Array.from(document.getElementsByClassName('card')).forEach(e => {
        e.addEventListener('click', async item => {
            songs = await getSongs(`songs/pbi${item.currentTarget.dataset.folder}`)

        })
    })
    // add mute functionality to the volume button
    document.querySelector('.volume > img').addEventListener('click', e => {
        if (e.target.src.includes('/images/volume.svg')) {
            e.target.src = e.target.src.replace('/images/volume.svg', '/images/mute.svg')

            currentsong.volume = 0
            document.querySelector('.range'.getElementsByTagName('input')[0].value=0)
        } else {
            e.target.src = e.target.src.replace('/images/mute.svg', '/images/volume.svg')
            currentsong.volume = .03
            document.querySelector('.range').getElementsByTagName('input')[0].value=10
        }
    })
}
main()
