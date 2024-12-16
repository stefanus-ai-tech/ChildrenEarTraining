const synth = new Tone.Synth().toDestination();

// Instead of a fixed object, we'll use a function to generate notes for each level
function generateNotesForLevel(level) {
  const baseNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
  const numNotes = Math.min(level + 1, baseNotes.length); // Limit to the number of base notes
  return baseNotes.slice(0, numNotes);
}

let currentLevel = 1;
let score = 0;
let tries = 20;
let successCount = 0;
let currentNote;
let isPlaying = false;

const scoreValue = document.getElementById('score-value');
const levelValue = document.getElementById('level-value');
const triesValue = document.getElementById('tries-value');
const noteButtons = document.getElementById('note-buttons');
const playSoundButton = document.getElementById('play-sound');
const resultNotification = document.getElementById('result');
const levelMessage = document.getElementById('level-message');

// Function to play the current note
function playCurrentNote() {
  if (currentNote && !isPlaying) {
    const now = Tone.now();
    synth.triggerAttack(currentNote, now + 0.1);
    synth.triggerRelease(now + 0.6);
    isPlaying = true;
    setTimeout(() => {
      isPlaying = false;
    }, 600);
  }
}

// Function to generate a new random note for the current level
function generateNewNote() {
  const levelNotes = generateNotesForLevel(currentLevel);
  currentNote = Tone.Frequency(
    levelNotes[Math.floor(Math.random() * levelNotes.length)]
  ).toNote();
}

// Function to create note buttons
function createNoteButtons() {
  noteButtons.innerHTML = '';
  const levelNotes = generateNotesForLevel(currentLevel); // Get notes for the current level
  levelNotes.forEach((note) => {
    const button = document.createElement('button');
    button.classList.add('note-button');
    button.textContent = noteToEmoji(note);
    button.addEventListener('click', () => checkAnswer(note));
    noteButtons.appendChild(button);
  });
}

// Function to show level-up message
function showLevelUpMessage() {
  levelMessage.textContent = `🎉 Level Up to ${currentLevel}! 🎉`;
  setTimeout(() => {
    levelMessage.textContent = '';
  }, 2000);
}

// Function to map note to an emoji
// (This function remains the same)
function noteToEmoji(note) {
  const noteEmojiMap = {
    C4: '🥚',
    D4: '🐣',
    E4: '🐥',
    F4: '🐓',
    G4: '🦆',
    A4: '🦉',
    B4: '🦚',
  };
  return noteEmojiMap[note] || '🎵';
}

// Function to check the answer
function checkAnswer(note) {
  if (isPlaying) return;

  tries--;
  triesValue.textContent = tries;

  if (note === currentNote) {
    successCount++;
    score++;
    showResult(true);
    updateScore();
    if (successCount >= 3) {
      levelUp(); // Level up happens here, after success
    } else {
      setTimeout(() => {
        resultNotification.classList.remove('show');
        generateNewNote();
        playCurrentNote();
      }, 1000);
    }
  } else {
    successCount = 0;
    showResult(false);
    if (tries === 0) {
      gameOver();
    } else {
      setTimeout(() => {
        resultNotification.classList.remove('show');
        playCurrentNote();
      }, 1000);
    }
  }
}

// Function to update score display
// (This function remains the same)
function updateScore() {
  scoreValue.textContent = score;
}

// Function to handle level up
function levelUp() {
  currentLevel++; // Increment the level
  successCount = 0; // Reset success count
  tries = 20; // Reset tries
  triesValue.textContent = tries;

  // Update note buttons and level display
  createNoteButtons();
  levelValue.textContent = currentLevel;

  showLevelUpMessage();
  generateNewNote(); // Generate a new note for the new level
  playCurrentNote(); // Play the new note
}

// Function to handle game over
function gameOver() {
  showResult(false, 'Game Over! Try again later.');
  setTimeout(() => {
    currentLevel = 1; // Reset level to 1
    score = 0;
    tries = 3;
    successCount = 0;
    updateScore();
    levelValue.textContent = currentLevel;
    triesValue.textContent = tries;
    createNoteButtons();
    resultNotification.classList.remove('show');
    generateNewNote(); // Generate a new note for level 1
    playCurrentNote(); // Play the new note
  }, 2000);
}

// Function to show the result notification
// (This function remains the same)
function showResult(isCorrect, customMessage) {
  const result = isCorrect
    ? customMessage || '🎉 Correct! 🎉'
    : customMessage || '❌ Try Again! ❌';
  resultNotification.innerHTML = result;
  resultNotification.style.backgroundColor = isCorrect
    ? 'rgba(0, 200, 0, 0.8)'
    : 'rgba(200, 0, 0, 0.8)';
  resultNotification.classList.add('show');

  setTimeout(() => {
    resultNotification.classList.remove('show');
  }, 2000);
}

// Initialize game
function initGame() {
  createNoteButtons();
  updateScore();
  levelValue.textContent = currentLevel;
  triesValue.textContent = tries;
  generateNewNote();
  playCurrentNote();
}

// Event listener for play sound button
playSoundButton.addEventListener('click', () => {
  if (Tone.context.state !== 'running') {
    Tone.start().then(() => {
      playCurrentNote();
    });
  } else {
    playCurrentNote();
  }
});

// Start the game
initGame();
