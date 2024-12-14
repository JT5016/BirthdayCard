const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
const closeNoteBtn = document.getElementById('closeNoteBtn');

surpriseBtn.addEventListener('click', function() {
    hiddenMessage.style.display = 'block';
    // Trigger confetti when message is revealed
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
});

closeNoteBtn.addEventListener('click', function() {
    hiddenMessage.style.display = 'none';
});
