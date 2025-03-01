document.addEventListener("DOMContentLoaded", function() {
    let openButton = document.getElementById("openMessage");
    let closeButton = document.getElementById("closeMessage");
    let welcomeScreen = document.getElementById("welcome-screen");
    let messageContainer = document.getElementById("message-container");

    // Menyembunyikan message-container saat pertama kali
    messageContainer.style.display = "none";

    // Fungsi untuk membuka pesan
    openButton.addEventListener("click", function() {
        welcomeScreen.style.display = "none"; 
        messageContainer.style.display = "flex";
    });

    // Fungsi untuk menutup pesan
    closeButton.addEventListener("click", function() {
        messageContainer.style.display = "none";
        welcomeScreen.style.display = "flex"; 
    });

    // Fungsi untuk kontrol musik
    let playMusicButton = document.getElementById("playMusic");
    let bgMusic = document.getElementById("bgMusic");

    playMusicButton.addEventListener("click", function() {
        if (bgMusic.paused) {
            bgMusic.muted = false;
            bgMusic.play();
            playMusicButton.textContent = "⏸ Pause Musik";
        } else {
            bgMusic.pause();
            playMusicButton.textContent = "🎵 Putar Musik";
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("2025-03-31T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    document.getElementById("days").textContent = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById("hours").textContent = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById("minutes").textContent = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById("seconds").textContent = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

    setTimeout(updateCountdown, 1000);
}
updateCountdown();