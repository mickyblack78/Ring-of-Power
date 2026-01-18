const SECRET_PW = "Mick1978"
function checkPass() {
    const input = document.getElementById('pass-input').value;
    if (input === SECRET_PW) {
        showContent();
    } else {
        alert("Incorrect password");
    }
}

function showContent() {
    // Hide the login screen
    document.getElementById('login-screen').style.display = 'none';
    
    // Reveal the private content
    const privateContent = document.getElementById('private-content');
    privateContent.classList.remove('hidden');

    // Play the video sound and music simultaneously
    const video = document.getElementById('myVideo');
    const music = document.getElementById('bgMusic');
    
    video.muted = false;
    video.play();
    if (music) {
        music.play();
    }
}
const dockItems = document.querySelectorAll('.dock-item');
dockItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  }
const panel = document.getElementById('side-panel');

profileBtn.addEventListener('click', () => {
  panel.classList.toggle('active');
});

document.querySelector('.panel-close').addEventListener('click', () => {
  panel.classList.remove('active');
});
    


