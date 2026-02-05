// Slide Navigation Logic
function nextSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show the specific slide
    document.getElementById('slide' + slideNumber).classList.add('active');
}

// Music Player
const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = "Click for music 🎵";
    } else {
        audio.play();
        musicBtn.innerHTML = "Music playing 🎶";
    }
    isPlaying = !isPlaying;
});

// "No" Button Logic
let noClickCount = 0;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');
const responseText = document.getElementById('response-text');

function plead() {
    noClickCount++;
    responseText.style.display = "block";

    if (noClickCount === 1) {
        responseText.innerHTML = "I know your no means yes 😉";
        yesBtn.style.transform = "scale(1.1)";
    } 
    else if (noClickCount === 2) {
        responseText.innerHTML = "Are you really sure? 🥺";
        yesBtn.style.transform = "scale(1.2)";
    } 
    else if (noClickCount === 3) {
        responseText.innerHTML = "Babyyy pleaseeeee 😭";
        yesBtn.style.transform = "scale(1.3)";
    } 
    else if (noClickCount === 4) {
        responseText.innerHTML = "If you wanted me to crash the bike into a tree, you could have just said that instead of saying no 😞";
        yesBtn.style.transform = "scale(1.4)";
    } 
    else {
        responseText.innerHTML = "Okay, I am taking my no button away! 😤";
        noBtn.style.display = "none";
        yesBtn.style.transform = "scale(1.5)";
    }
}

function celebrate() {
    document.getElementById('slide6').innerHTML = `
        <div class="big-heart">💖</div>
        <h1 class="main-title">YAY!</h1>
        <p>See you on the 14th! 🌹</p>
        <p>I love you Anishka!</p>
    `;
    
    // Simple confetti effect
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-10px';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animation = 'fall 3s linear';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 100);
    
    // Add CSS for falling hearts
    const style = document.createElement('style');
    style.innerHTML = `@keyframes fall { to { transform: translateY(100vh); } }`;
    document.head.appendChild(style);
}
