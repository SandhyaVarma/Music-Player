var songs = document.querySelectorAll('audio')
var btn = document.querySelector('#playcircle')
var right = document.querySelector('#right')
var songName = document.querySelector('#songName')
var singerName = document.querySelector('#singer')
var previous = document.querySelector('#pre')
var next = document.querySelector('#next')


var onlybtn = 0
var template = ``
var currentPlayingSongIndex = 0


function mainBtn(){
    btn.addEventListener('click',function(){
        if (onlybtn === 0){
            songs[currentPlayingSongIndex].currentTime = 0
            songs[currentPlayingSongIndex].play()
            btn.innerHTML = '<i class="ri-pause-mini-line"></i>'
            onlybtn = 1
        }
        else{
            songs[currentPlayingSongIndex].currentTime = 0
            songs[currentPlayingSongIndex].pause()
            btn.innerHTML = ' <i class="ri-play-mini-fill"></i>'
            onlybtn = 0
        }
        
    })
}

function showSongs(){
    songs.forEach(function(song,index){
        template +=` <div class="songs">
          <div id="logoimg"></div>
          <div class="songslft">
            <h4>${song.getAttribute('src').length > 18 ? song.getAttribute('src').substring(0,18) + "..." : song.getAttribute('src')}</h4>
            <h6>${song.getAttribute('id')}</h6>
          </div>
          <div class="songsrght">
            <button><i id=${index} class="ri-play-mini-fill"></i></button>
          </div>
      </div>`
      
      })
      
    document.querySelector('#right').innerHTML = template
}


function playSong(indexOfSong){
    songs[indexOfSong].play()
    btn.innerHTML = '<i class="ri-pause-mini-line"></i>'
}

function stopSong(indexOfSong){
    songs[indexOfSong].pause()
    songs[indexOfSong].currentTime = 0
    btn.innerHTML = ' <i class="ri-play-mini-fill"></i>'
}


function playAllSongsByIndex(){
    right.addEventListener('click',function(dets){
        if (onlybtn === 0){
           var playingSongIndex = Number(dets.target.id)
           playSong(playingSongIndex)
           currentPlayingSongIndex = playingSongIndex
           onlybtn = 1
           showSongData()
           showSingerName()
        }
        else{
           stopSong(currentPlayingSongIndex)
           currentPlayingSongIndex = playingSongIndex
           onlybtn = 0
           showSongData()
           showSingerName()
        }
   })
}

function showSongData(){
    var songname = songs[currentPlayingSongIndex].getAttribute('src').slice(0,length-4)
    songName.textContent = songname
}

function showSingerName(){
    var singername = songs[currentPlayingSongIndex].getAttribute('id')
    singerName.textContent = singername
}


playAllSongsByIndex()
mainBtn()
showSongData()
showSingerName()
showSongs()













