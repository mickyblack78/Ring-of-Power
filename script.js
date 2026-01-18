const SECRET_PW = "Mick1978";

function checkPass() {
    const inputField = document.getElementById('pass-input');
    const inputVal = inputField.value;
    
    if (inputVal === SECRET_PW) {
        showContent();
    } else {
        alert("Incorrect password");
    }
}

function showContent() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('private-content').style.display = 'block';
    
    const video = document.getElementById('myVideo');
    if (video) {
        video.muted = false;
        video.play().catch(error => console.log("Video play failed:", error));
    }
}

// Side Panel Logic
const profileBtn = document.querySelector('.dock-item:last-child');
const panel = document.getElementById('side-panel');
const closeBtn = document.querySelector('.panel-close');

if (profileBtn && panel) {
    profileBtn.addEventListener('click', () => {
        panel.classList.toggle('active');
    });
}

if (closeBtn && panel) {
    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
    });
}

// Haptic feedback for dock items
const dockItems = document.querySelectorAll('.dock-item');
dockItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
    });
});
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

// Auto-size canvas to your phone screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'black'; // Default color
ctx.lineWidth = 3;         // Default thickness
ctx.lineCap = 'round';

function setColor(c) { ctx.strokeStyle = c; }
function setThick(t) { ctx.lineWidth = t; }
function clearCanvas() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

// Touch controls for your G35
canvas.addEventListener('pointerdown', (e) => { drawing = true; ctx.beginPath(); ctx.moveTo(e.clientX, e.clientY); });
canvas.addEventListener('pointermove', (e) => { if(drawing) { ctx.lineTo(e.clientX, e.clientY); ctx.stroke(); } });
canvas.addEventListener('pointerup', () => { drawing = false; });

