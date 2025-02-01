document.getElementById('startBtn').addEventListener('click', startGame);

let gameStarted = false;

const matchingPhotos = {
  // This is where we define the correct photo match.
  // Example: If the first person selects photo1, their partner should pick photo2.
  correctMatch: 'photo1'
};

function startGame() {
  gameStarted = true;
  document.getElementById('gameContainer').classList.remove('hidden');
  document.getElementById('startBtn').classList.add('hidden');
  
  // Add event listeners to photos
  document.getElementById('photo1').addEventListener('click', () => checkMatch('photo1'));
  document.getElementById('photo2').addEventListener('click', () => checkMatch('photo2'));
}

function checkMatch(selectedPhoto) {
  if (selectedPhoto === matchingPhotos.correctMatch) {
    document.getElementById('feedbackMessage').innerHTML = "Great! You both chose correctly. Now you can chat!";
    // Implement chat functionality if needed.
  } else {
    document.getElementById('feedbackMessage').innerHTML = "Oops! No match. You will be logged out now.";
    // Lock out the player after a wrong choice
    setTimeout(() => {
      alert("You have been logged out.");
      window.location.href = 'https://www.google.com';  // Redirect to a different page or show a "Game Over" screen
    }, 2000);
  }
}
