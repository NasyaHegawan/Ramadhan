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
