<script>

/* FLOATING HEARTS */

const heartsContainer = document.getElementById('hearts');

function createHeart(){

    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.fontSize =
    (Math.random() * 20 + 10) + 'px';

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },10000);

}

setInterval(createHeart,300);

/* FALLING ROSE PETALS */

const petalsContainer = document.getElementById('petals');

function createPetal(){

    const petal = document.createElement('div');

    petal.classList.add('petal');

    petal.innerHTML = '🌹';

    petal.style.left = Math.random() * 100 + 'vw';

    petal.style.animationDuration =
    (Math.random() * 5 + 8) + 's';

    petal.style.fontSize =
    (Math.random() * 15 + 18) + 'px';

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    },13000);

}

setInterval(createPetal,700);

/* LOVE REASONS */

const reasons = [

"Your smile makes my entire day better.",
"The way you reassure me when I overthink.",
"Your beautiful heart.",
"The way you speak to me softly.",
"Your faith in God.",
"The way you make me feel safe.",
"Your laugh.",
"The way you care about the little things.",
"Your beautiful energy.",
"The way you love me genuinely.",
"The way you listen to me.",
"Your loyalty.",
"The way you understand me emotionally.",
"The peace you bring into my life.",
"The way you make me smile for no reason.",
"The way your voice calms me down.",
"The way you pray.",
"The way you look at me.",
"The softness in your heart.",
"The way you support me.",
"The way you make me feel chosen.",
"The way you trust me.",
"The way you comfort me.",
"The way you brighten my bad days.",
"The way you make ordinary moments feel special.",
"The way you appreciate me.",
"The way you speak about your dreams.",
"The way you care deeply.",
"The way you love with intention.",
"The way you always make time for me.",
"The way your smile lights up everything.",
"The way you motivate me.",
"The way you make me feel important.",
"The way you make me feel understood.",
"The way you flirt with me 😂❤️",
"The way your eyes shine.",
"The way you carry yourself.",
"The way you make love feel peaceful.",
"The way you believe in us.",
"The way you never stop being sweet.",
"The way you became my favorite person.",
"The way you make my mornings softer.",
"The way you became my safe place.",
"The way you make my heart feel full.",
"The way you genuinely care about me.",
"The way you stay patient with me.",
"The way you calm my mind.",
"The way you love God first.",
"The way you make me excited for the future.",
"The way you make me feel lucky every day."

];

function showReason(){

    const randomReason =
    reasons[Math.floor(Math.random() * reasons.length)];

    document.getElementById("reasonText").innerHTML =
    randomReason;

}

/* YOUTUBE MUSIC PLAYER */

let player;

function onYouTubeIframeAPIReady(){

    player = new YT.Player('youtube-player', {

        height:'0',
        width:'0',

        videoId:'0uMpmFspIQ8',

        playerVars:{
            autoplay:0,
            loop:1,
            playlist:'0uMpmFspIQ8'
        }

    });

}

/* MUSIC BUTTON */

function toggleMusic(){

    if(player){

        const state = player.getPlayerState();

        if(state == 1){

            player.pauseVideo();

        }else{

            player.playVideo();

        }

    }

}

/* FINAL LOVE MESSAGE */

function showLove(){

    alert(
`I Love You More Than Words Could Ever Explain ❤️`
    );

}

/* CINEMATIC FINAL MESSAGE */

function finalMessage(){

    alert(
`No matter how many years pass...
No matter where life takes us...
No matter how difficult life gets...

I will always thank God for the day He brought you back into my life.

Happy Birthday My Love ❤️

Forever Yours,
Glen John Nwaila`
    );

}

</script>