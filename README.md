# Raffles Parable - Leader & Member Consoles

This project contains two main types of HTML consoles:
1.  **Leader Console (`index.html`):** For the game leader to manage sessions, track progress, and guide the game.
2.  **Member Consoles (`wally.html`, `leo.html`, `luca.html`):** For individual team members (Wally, Leo, Luca) to receive messages from Elder Chew and submit their reflections.

---

## How to Load & Play

### 1. Prerequisites

*   A modern web browser (Chrome, Firefox, Edge, Safari recommended).
*   The game files downloaded to your computer.

### 2. Running the Game

*   **No Server Needed:** You can run these HTML files directly from your computer.
    *   Navigate to the project folder in your file explorer.
    *   Double-click on `index.html` to open the Leader Console.
    *   Double-click on `wally.html`, `leo.html`, or `luca.html` to open the respective Member Console.
*   **Using a Simple HTTP Server (Recommended for Stability):**
    *   If you have Python installed, you can easily start a local server:
        1.  Open a terminal or command prompt.
        2.  Navigate to the project directory (e.g., `cd /path/to/your/project/Spirit of Wanderlust Static Page`).
        3.  Run the command: `python -m http.server 8000` (for Python 3) or `python -m SimpleHTTPServer 8000` (for Python 2).
        4.  Open your web browser and go to `http://localhost:8000`.
        5.  Click on `index.html` for the Leader Console, or the member HTML files for their consoles.

---

## Editing Configuration (`config.js`)

The main game settings are controlled in the `config.js` file. You can open this file in any text editor (like Notepad, VS Code, Sublime Text, etc.) to make changes.

**Key configurations you might want to edit:**

*   `ROUND_COUNT`: Total number of rounds in the game (e.g., `5`).
*   `ROUND_DURATION_SEC`: Duration of each round in seconds (e.g., `90`).
*   `SESSION_DURATION_SEC`: Total duration of the game session in seconds (e.g., `240`).
*   `GRID_SIZE`: The size of the grid for the leader (e.g., `5` for a 5x5 grid).
*   `ITEMS`: An array of objects defining the collectible items.
    *   `code`: A unique identifier (e.g., `"SPIRIT_ASH"`).
    *   `name`: Display name (e.g., `"Spirit Ash"`).
    *   `emoji`: Emoji representation (e.g., `"🔥"`).
*   `TEXT_TEMPLATES`: Various text strings used in the game, like log messages and modal titles.

**Editing Messages:**

*   **Elder Chew Messages (`elder-chew-messages.js`):**
    *   This file contains messages Elder Chew sends to each character for each round.
    *   Messages are organized by character name (e.g., `wally`, `leo`, `luca`, `charlie`).
    *   Each character has an array of strings, where each string is a message for a round (in order).
    *   Example for Wally:
        ```javascript
        window.ELDER_CHEW_MESSAGES = {
          "wally": [
            "Wally, stack the Moonwood—our engines breathe only this wood.", // Round 1
            "Moonwood burns steady in any storm; load every log aboard.", // Round 2
            // ... more messages
          ],
          // ... messages for other characters
        };
        ```
*   **Role Introductions / Prologues (`role-introductions.js`):**
    *   This file contains the introductory text or prologue for each role.
    *   Messages are organized by character/role name.
    *   Example:
        ```javascript
        window.CONFIG_MESSAGES = {
          "Wally": "Wally, your path is not to lead or follow, but to disrupt...",
          "Leo": "Leo, strength is your shield...",
          // ... other intros
        };
        ```

**Important:** After editing `config.js`, `elder-chew-messages.js`, or `role-introductions.js`, save the file and **refresh the HTML pages in your browser** for the changes to take effect.

---

## Gameplay

### Leader (`index.html`)

1.  **Start Session:**
    *   Select the Day and Group.
    *   Enter a Team Name.
    *   Click "Start Session".
2.  **Prologue:** Read the prologue and click "OK".
3.  **Start Game:** Click the "Start Game" button in the top bar.
4.  **Game Rounds:**
    *   The game proceeds in rounds. Each round has a timer.
    *   **Objective:** Elder Chew will give an objective (e.g., collect a certain item).
    *   **Grid Movement:** Click on adjacent cells on the grid to move. You cannot move to previously visited (greyed out) cells.
        *   Green glowing cells indicate possible next moves.
        *   Emojis on cells represent items you can pick up by moving to that cell.
    *   **Inventory:** Your collected items are shown in the inventory.
    *   **Log:** Game events, Elder Chew messages, and your reflections are logged.
    *   **Reflection:** At the end of each round (or when the timer runs out), you should submit a reflection. If a reflection is not submitted, a penalty might apply (e.g., losing an item).
5.  **Inject Events:** Random events might occur, requiring choices or causing item loss.
6.  **End of Game:**
    *   When all rounds are complete or the session timer ends, the game finishes.
    *   A modal will appear to download the game results as a Word document.
    *   A game summary will then be shown, with an option to reset the game.

### Member (`wally.html`, `leo.html`, `luca.html`)

1.  **Start Session:**
    *   Select the Day and Group.
    *   Enter Your Name.
    *   Click "Start Session".
2.  **Prologue:** Read the character-specific prologue and click "OK".
3.  **Instructions:** Read the instructions on how the console works.
4.  **Game Rounds:**
    *   The page displays a series of boxes, one for each round.
    *   **Open Round Box:** Click on a round box (e.g., "Round 1") to open it.
        *   You can only open one new round box at a time.
        *   The current round you can open will be highlighted.
    *   **Elder Chew's Message:** The modal will display Elder Chew's message for that specific round and character.
    *   **Submit Reflection:** Type your reflection in the text area and click "Submit".
5.  **After Submission:**
    *   Once submitted, the round box on the main page will transform to show Elder Chew's message and your submitted reflection.
    *   You cannot edit a reflection after submitting it.
    *   The next round box will become available to open.
6.  **End of Game:**
    *   After completing all rounds and submitting the final reflection, an "End Game" button will appear.
    *   Clicking "End Game" will open a modal.
    *   **Download Results:** Click "Download Results" to save your reflections and Elder Chew's messages as a Word document.
    *   **View Summary:** Click "View Game Summary" to see a summary on the page, with an option to reset.

---

## Exporting & Downloading Results

- At the end of the game, a modal will appear with a **Download Results** button.
- Clicking this will generate and download a `.docx` (Microsoft Word) file with your session info, Elder Chew's messages, and your reflections.
- You can also view a summary on the page and reset the game if you wish.

---

Enjoy playing Raffles Parable! 