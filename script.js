// Music Player Logic
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

// Scroll Animation Logic (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// "No" Button Logic (The cheeky interactions)
let noClickCount = 0;
const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.yes-btn');
const responseText = document.getElementById('response-text');

function plead() {
    noClickCount++;
    
    if (noClickCount === 1) {
        responseText.style.display = "block";
        responseText.innerHTML = "Are you sure? 🥺";
        // Make Yes button slightly larger
        yesBtn.style.transform = "scale(1.1)";
    } else if (noClickCount === 2) {
        responseText.innerHTML = "Really sure? 😢";
        yesBtn.style.transform = "scale(1.2)";
    } else if (noClickCount === 3) {
        responseText.innerHTML = "Don't do this to me... 💔";
        yesBtn.style.transform = "scale(1.3)";
    } else {
        responseText.innerHTML = "Okay, I'm taking the button away! 😤";
        noBtn.style.display = "none"; // Hides the button completely
        yesBtn.style.transform = "scale(1.5)";
    }
}

function celebrate() {
    document.querySelector('.big-question').innerHTML = "YAY! I Love You! 💖";
    responseText.style.display = "none";
    document.querySelector('.buttons').innerHTML = "<p>See you on the 14th! 🌹</p>";
    
    // Launch confetti (simple JS effect)
    confettiEffect();
}

// Background Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 7 + 's'; // 7-10s
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

// Simple Confetti function for the celebration
function confettiEffect() {
    for(let i=0; i<50; i++) {
        createHeart();
    }
}

