
# Musical Ear Fun! 🎶👂

A web-based game to train your musical ear by identifying notes.

Try the live demo here: https://childeartraining.netlify.app/

## Overview

"Musical Ear Fun!" is a simple and engaging web game designed to help you develop your musical ear. The game plays a random musical note, and your goal is to identify the correct note from a set of displayed options. As you progress, the game increases in difficulty by introducing more notes, making it a fun and effective way to improve your pitch recognition skills.

## Features

*   **Interactive Note Recognition:** Listen to a randomly generated note and choose the corresponding button.
*   **Level Progression:** The game increases in difficulty by introducing more notes as you level up.
*   **Score Tracking:** Keep track of your correct answers and see your score increase.
*   **Tries/Lives System:** You have a limited number of tries to identify the notes correctly.
*   **Visual Feedback:** Receive instant feedback on whether your guess is correct or incorrect.
*   **Engaging Emojis:** Notes are represented by fun and memorable emojis.
*   **Responsive Design:** Playable on various devices, from desktops to mobile phones.

## Technologies Used

*   **HTML:** For structuring the game's content and layout.
*   **CSS:** For styling the game's appearance and making it visually appealing.
*   **JavaScript:** For handling game logic, user interactions, and audio playback.
*   **Tone.js:** A powerful Web Audio framework used for synthesizing and playing musical notes.

## Installation

To run the game locally, simply download or clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/stefanus-ai-tech/ChildrenEarTraining
cd ChildrenEarTraining
# Open index.html in your browser
```

## How to Play

1. **Start the Game:** The game initializes automatically when you open the `index.html` file.
2. **Listen to the Note:** Click the "Play Sound 🎵" button to hear a randomly generated musical note.
3. **Identify the Note:**  Choose the emoji button that you believe corresponds to the note you just heard.
4. **Check Your Answer:**
    *   **Correct Answer:** Your score will increase, and if you've reached the required number of successful guesses for the current level, you'll advance to the next level. A new note will be generated.
    *   **Incorrect Answer:** You'll lose a try. The correct note will be revealed briefly. You can click "Play Sound 🎵" again to re-hear the note.
5. **Level Up:** Successfully identify a certain number of notes at the current level to progress to the next level. Each level introduces a new note, increasing the difficulty.
6. **Game Over:** If you run out of tries, the game will end, and you'll have the option to start over.

## Game Mechanics

*   **Scoring:** You earn one point for each correctly identified note.
*   **Leveling Up:** You need to correctly identify 3 notes consecutively to advance to the next level. Each level introduces a new musical note option.
*   **Tries:** You start with 3 tries. An incorrect guess will deduct one try. The game ends when your tries reach zero.
*   **Note Generation:** The game randomly selects a note from the set of available notes for the current level.
*   **Emoji Representation:** Each musical note (C4, D4, E4, F4, G4, A4, B4) is represented by a unique emoji for visual identification.

## Customization

Feel free to customize the game further! Here are some ideas:

*   **Add More Notes:** Extend the `generateNotesForLevel` function and the `noteToEmoji` mapping to include more musical notes.
*   **Different Instruments:** Experiment with different synthesizers or instrument sounds using Tone.js.
*   **Difficulty Settings:** Implement options to adjust the speed of level progression or the number of tries.
*   **Visual Enhancements:** Add more animations or visual cues to make the game more engaging.
*   **Sound Effects:** Incorporate sound effects for correct and incorrect answers.

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.

## Acknowledgements

*   Uses the amazing [Tone.js](https://tonejs.github.io/) library for audio synthesis.
*   Inspired by classic ear training exercises and games.
