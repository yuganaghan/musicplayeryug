var song = 0;
let audio = new Audio();
var mainplay = document.getElementById("mainPlay");
var progressbar= document.getElementById('input')
var lastbar = document.getElementById('lastline'); 
var gif = document.getElementById('player');
var songitem = Array.from(document.getElementsByClassName('song'));
var mainname = document.getElementById('mainname')
var musicitem = document.getElementById('musicitem')
var time = Array.from(document.getElementsByClassName("duration"))
var forward = document.getElementById("forward")
var backward = document.getElementById("backword")
var shuffler = document.getElementById('shuffel')
var current = document.getElementById('current')
var totaltime = document.getElementById('total')
var titalname = document.getElementById('name')
var cplay= document.getElementById('cplay')

var player =[]

var songs = [
    { name: 'Believer - Imagine Dragons' ,path:'Imagine Dragons - Believer.m4a'},
    { name: 'Heat Waves - Glass Animals' ,path:'Glass Animals - Heat Waves.m4a'},
    { name: 'Bones - Imagine Dragons' ,path:'Imagine Dragons - Bones.m4a'},
    { name: 'Enemy - Imagine Dragons' ,path:'Imagine Dragons - Enemy.m4a'},
    { name: 'Royalty - Egzod & Maestro Chives' ,path:'Egzod & Maestro Chives - Royalty.m4a'},
    { name: 'Darkside - NEONI' ,path:'NEONI - Darkside.m4a'},
    { name: 'Let Me Down Slowly - Alec Benjamin' ,path:'Alec Benjamin Let Me Down Slowly.m4a'},
    { name: 'Teeth - 5 Seconds of Summer' ,path:'5 Seconds of Summer - Teeth.m4a'},
    { name: 'Here - Alessia Cara' ,path:'Alessia Cara Here.m4a'},
    { name: 'Radioactive - Imagine Dragons' ,path:'Imagine Dragons - Radioactive.m4a'},
    { name: 'Courtesy Call - Thousand Foot Krutch' ,path:'Thousand Foot Krutch-Courtesy Call.m4a'},
    { name: 'Fairytale - Alexander Rybak' ,path:'Alexander Rybak Fairytale.m4a'},
    { name: 'Into Your Arms - Ava Max' ,path:'Ava Max Into Your Arms.m4a'},
    { name: 'Toxic - BoyWithUke' ,path:'BoyWithUke Toxic.m4a'},
    { name: 'Living Life In The Night - Cheriimoya, Sierra Kidd' ,path:'Cheriimoya, Sierra Kidd Living Life In The Night.m4a'},
    { name: 'Bad Liar - Imagine Dragons' ,path:'Imagine Dragons - Bad Liar.m4a'},
    { name: 'Ghost - Confetti' ,path:'Confetti - Ghost.m4a'},
    { name: 'Whatever It Takes - Imagine Dragons' ,path:'Imagine Dragons - Whatever It Takes.m4a'},
    { name: 'Warriors - Imagine Dragons' ,path:'Imagine Dragons - Warriors.m4a'},
    { name: 'Legends Never Die - Juice WRLD' ,path:'Legends Never Die.m4a'},
    { name: 'Natural - Imagine Dragons' ,path:'Imagine Dragons - Natural.m4a'},
    { name: 'MONTERO - Lil Nas X' ,path:'Lil Nas X - MONTERO.m4a'},
    { name: 'Centuries - Fall Out Boy' ,path:'Fall Out Boy - Centuries.m4a'},
    { name: 'Old Town Road - Lil Nas X' ,path:'Lil Nas X - Old Town Road.m4a'},
    { name: 'INDUSTRY BABY - Lil Nas X & Jack Harlow' ,path:'Lil Nas X & Jack Harlow - INDUSTRY BABY.m4a'},
    { name: 'Industry Baby - Lil Nas X, Katy Perry' ,path:'Lil Nas X, Katy Perry - Industry Baby.m4a'},
    { name: 'The Search - NF' ,path:'NF - The Search.m4a'},
    { name: 'Stronger - The Score' ,path:'Stronger - The Score.m4a'},
    { name: 'Demons - Imagine Dragons' ,path:'Imagine Dragons - Demons.m4a'},
    { name: 'House of Memories - Panic! At The Disco' ,path:'Panic! At The Disco - House of Memories.m4a'},
    { name: 'Pasoori - Ali Sethi' ,path:'Pasoori.m4a'},
    { name: 'Bad Dreams - Stellar' ,path:'Stellar - Bad Dream.m4a'},
    { name: 'Cradles -  Sub Urban' ,path:'Sub Urban - Cradles.m4a'},
    { name: 'Freak - Jordan Clarke' ,path:'Jordan Clarke - Freaks.m4a'},
    { name: 'Mockingbird - Eminem' ,path:'Eminem - Mockingbird.m4a'},
    { name: 'Stay - The Kid LAROI, Justin Bieber' ,path:'The Kid LAROI, Justin Bieber - Stay.m4a'},
    { name: 'Unstoppable - The Score' ,path:'The Score - Unstoppable.m4a'},
    { name: 'Born For This - The Score' ,path:'The Score-Born For This.m4a'},
    { name: 'Die For You - valorant' ,path:'Die For You.m4a'},
    { name: 'Arcade - Duncan Laurence' ,path:'Duncan Laurence - Arcade.m4a'}
];

for (let i = 0; i < songs.length; i++) {
    musicitem.innerHTML += 
    `<div class=\"song\">
        <img src=\"mobpsych.jpg\" class=\"logo\">
        <span class=\"sname\">${songs[i].name}</span>
        <div class=\"scontoll\">
            <span class=\"duration\">00</span>
            <img src=\"play-solid.svg\" id=${i+''} class=\"splay\">
        </div>
    </div>`
    
}
if (localStorage.getItem('songlist')==null) {
    player = []
    song = 0
    for(var i=0;i<songs.length;i++){
        player.push(i)
    }
    audio.src=songs[player[song]].path;

}
else{
    player = JSON.parse(localStorage.getItem('songlist'));
    song = parseInt(localStorage.getItem('song'));
    audio.src = songs[player[song]].path;
}
function timeconverter(samay) {
    var min = samay%60;
    var hour = (samay -min)/60
    min = parseInt(min)
    return `${hour}:${min}`
}

Array.from(document.getElementsByClassName("duration")).forEach((element,i) => {
    var audioelement = new Audio(songs[i].path)
    audioelement.addEventListener("loadedmetadata", () =>{
        element.innerHTML = timeconverter(audioelement.duration)
    })
});

titalname.addEventListener('click', () =>{
    location.reload()
})

shuffler.addEventListener('click',()=>{
    for (var i = 0; i < player.length; i++)
    {
        var x= Math.floor(Math.random() * player.length)
        var y = player[i]
        player[i]= player[x]
        player[x]=y
    }
    song = 0
    audio.src = songs[player[song]].path
    mainname.innerText= songs[player[song]].name
    audio.src = songs[player[song]].path;
    pauseother()
    palypuse()
    console.log(player)
})
cplay.addEventListener('click',()=>{
    for (let index = 0; index < player.length; index++) {
        player[index] = index;
    }
    song = 0
    audio.src = songs[player[song]].path
    mainname.innerText= songs[player[song]].name
    audio.src = songs[player[song]].path;
    pauseother()
    palypuse()
})

function palypuse() {
    var splay = document.getElementById(player[song]+'')
    mainname.innerText= songs[player[song]].name
    if (audio.paused || audio.currentTime<=0) {
        audio.play()
        mainplay.src = 'pause-solid.svg'
        gif.style.opacity = 1
        splay.src='pause-solid.svg'
        lastline.style.opacity =1;
        progressbar.style.opacity = 1;
        
    }
    else{
        mainplay.src = 'play-solid.svg'
        splay.src='play-solid.svg'
        audio.pause()
        gif.style.opacity = 0
    }
}


mainplay.addEventListener("click", () => {
    palypuse(); 
});


audio.addEventListener('timeupdate',()=>{
    updatstorage(song,player,audio.currentTime)
    document.title = songs[player[song]].name+' Yug Works'
    if (audio.paused){
        gif.style.opacity=0
    }
    else{gif.style.opacity=1}
    var progress = parseInt((audio.currentTime/audio.duration)*10000)
    progressbar.value = progress
    current.innerText = timeconverter(audio.currentTime)
    totaltime.innerText = timeconverter(audio.duration)

    if (audio.currentTime == audio.duration)
    {
        if( song<songs.length-1){
            song++
        }
        else{
            song = 0
        }
        mainname.innerText= songs[player[song]].name
        audio.src = songs[player[song]].path;
        pauseother();
        palypuse();
        progressbar.value = 0;
        audio.play()
    }
});


progressbar.addEventListener('change',()=>{
    audio.currentTime = progressbar.value * audio.duration/10000
});


function pauseother() {
    Array.from(document.getElementsByClassName('splay')).forEach((element)=>{
        element.src = 'play-solid.svg'
    })
  
}


Array.from(document.getElementsByClassName("splay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{

        // document.title = songs[player[song]].name+' Yug Works'
        if (audio.paused && audio.currentTime<=0 || e.target.id != player[song]) {
            pauseother()
            song = parseInt( e.target.id)
            e.target.src = 'pause-solid.svg'
            audio.src = songs[song].path;
            mainname.innerText= songs[song].name
            audio.currentTime = 0
            audio.play()
            mainplay.src = 'pause-solid.svg'
            gif.style.opacity = 1
            lastline.style.opacity =1;
            progressbar.style.opacity = 1;
        }
        else if (audio.paused && audio.currentTime>0){
            audio.currentTime = progressbar.value * audio.duration/10000
            audio.play()
            e.target.src = 'pause-solid.svg';
            mainplay.src = 'pause-solid.svg';
        }
        else
        {
            audio.pause()
            e.target.src = 'play-solid.svg';
            mainplay.src = 'play-solid.svg';
        }
    })
})


document.addEventListener('keydown',(event)=>{
    if (event.key==' ') {
        palypuse();
    }
    if (event.key=='ArrowLeft') {
        audio.currentTime -= 10;
    }
    else if (event.key=='ArrowRight') {
        audio.currentTime+=10;
    }
})


backward.addEventListener("click", () => {
    if (song>=1){song -=1;}
    else{song = songs.length-1}
    audio.src = songs[player[song]].path;
    mainname.innerText= songs[player[song]].name
    audio.currentTime = 0;
    audio.play();
    pauseother()
    palypuse();
});
forward.addEventListener("click", () => {
    if (song<=songs.length-2){song +=1;}
    else{song = 0}
    audio.src = songs[player[song]].path;
    mainname.innerText= songs[player[song]].name
    audio.currentTime = 0;
    audio.play();
    pauseother()
    palypuse();
});

function updatstorage(no,songlist,time){
    localStorage.clear()
    var songl = JSON.stringify(songlist)
    localStorage.setItem('song',no)
    localStorage.setItem('songlist',songl)
}