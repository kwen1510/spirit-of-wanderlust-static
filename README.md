# Raffles Parable - Offline Leader Dashboard

This document provides an overview of the Raffles Parable offline leader dashboard, including setup, gameplay, and configuration options.

## 1. Setup

To play the game:
1.  Ensure you have all the game files (`index.html`, `config.js`, and potentially a `text` directory if used by `PROMPTS_FILE_PATTERN`) in the same directory.
2.  Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox, Safari, Edge).

The game runs entirely in the browser and uses `localStorage` to save game state, allowing you to resume a game if you close the browser.

## 2. Gameplay

### 2.1. Starting a Session
-   When you first open `index.html`, a session modal will appear.
-   **Day:** Select the current day (e.g., D1, D2).
-   **Group:** Select your group number (e.g., G01, G02).
-   **Team Name:** Enter your team's name (max 32 characters).
-   Click **"Start Session"**.

### 2.2. Prologue
-   After starting a session, a prologue message will be displayed.
-   Read the text and click **"OK"** to proceed to the main game interface.

### 2.3. Game Interface
The game interface is divided into several sections:

-   **Top Bar:**
    -   **Primary Timer:** Shows the total remaining time for the entire session.
    -   **Turn Counter:** Displays the current round number out of the total rounds (e.g., 1 / 5).
    -   **Secondary Timer:** Shows the time remaining for the current round.
    -   **Start Game Button:** Click this to officially begin the game and start the timers.

-   **Left Panel:**
    -   **Role Box:** Displays your role (currently "Leader" for this interface).
    -   **Objective Box:** Shows the current message/objective from Elder Chew. This message changes each round.
    -   **Inventory Box:** Lists the items you have collected and their quantities.

-   **Center Panel:**
    -   **Grid:** A 5x5 grid representing the game world.
        -   Your current position is marked with an emoji (🧑‍🚀).
        -   Unvisited cells show item emojis (🔥, 🌲, ⚡️, 🌀).
        -   Visited cells are greyed out.

-   **Right Panel:**
    -   **Log Box:** A scrollable log of all game events, messages, and actions.
    -   **Reflection Box:**
        -   A `textarea` to write your strategy or thoughts for the current round.
        -   A **"Submit"** button to submit your reflection.

### 2.4. Game Flow
1.  **Start Game:** After setting up your session and viewing the prologue, click the "Start Game" button in the top bar. This initializes the game state, timers, and logs the first round's messages.
2.  **Rounds:** The game proceeds in a series of rounds.
    -   Each round has a specific duration.
    -   At the start of each round, Elder Chew provides a new message/objective.
3.  **Movement & Exploration:**
    -   Click on an **adjacent (up, down, left, or right)** unvisited cell in the grid to move.
    -   You have a limited number of steps per round (`MAX_STEPS_PER_ROUND`).
    -   Moving to a cell marks it as visited.
4.  **Item Pickup:**
    -   When you move to a new cell:
        -   If the cell has a pre-defined item, a modal will appear showing the item and quantity you found. Click **"Collect"**.
        -   If the cell is "empty" (null), a modal will appear offering a choice between two randomly selected items. Click on the button for the item you want to collect.
    -   Your inventory is updated, and the action is logged.
5.  **Inject Events (Rounds 4+):**
    -   Starting from round 4, moving to certain cells can trigger an "Inject Story."
    -   A story is displayed, and you might lose an item:
        -   **Random Loss:** An item is randomly removed from your inventory. A modal shows what you lost.
        -   **Choice Loss:** You are presented with a choice of items to give up from your inventory. Click the item to lose.
        -   **No Loss:** If you have no items, no penalty occurs.
    -   These events are logged.
6.  **Reflections:**
    -   Each round, you are encouraged to write a reflection in the `textarea`.
    -   Click **"Submit"** to save your reflection for that round. This can only be done once per round.
    -   **Penalty for Missed Reflection:** If you do not submit a reflection before the round timer ends:
        -   The text currently in the `textarea` (if any) is logged as a "missed" reflection.
        -   You lose a random item from your inventory (if you have any). A modal will notify you of the loss.
        -   This penalty also applies to the final round if a reflection isn't submitted before the game ends.
7.  **Round End:**
    -   When the round timer reaches zero:
        -   If a reflection wasn't submitted, the penalty is applied.
        -   The game advances to the next round (if not the last round).
        -   Round-specific state (steps, reflection status) is reset.
        -   A new Elder Chew message is logged.
8.  **Game End:**
    -   The game ends when:
        -   The primary session timer reaches zero.
        -   All rounds are completed.
    -   A final check for the last round's reflection is made, and a penalty may be applied.
    -   A "Game Over" modal appears.
    -   You can click **"Download Results"** to save a `.docx` file containing:
        -   Session ID and Team Name.
        -   Game start and end times (GMT+8).
        -   A table summarizing each round: choice made, inject event details, reflection text, and any penalty.

### 2.5. Resuming a Game
-   If you close the browser and reopen `index.html`, a confirmation prompt will ask if you want to "Resume previous game?".
-   Click **"OK"** to load the saved game state and continue.
-   Click **"Cancel"** to clear the saved state and start a new session.

## 3. Configuration (Editing `config.js`)

The game's behavior can be customized by editing the `window.CONFIG` object in the `config.js` file.

**Important:** After editing `config.js`, save the file and refresh `index.html` in your browser for the changes to take effect. If you have a game in progress, it's recommended to start a new session after making config changes to avoid inconsistencies, or clear your browser's `localStorage` for the site.

Key configuration options:

-   **`DAYS`**: `Array<String>` - List of available days for the session modal (e.g., `["D1", "D2", "D3"]`).
-   **`GROUPS`**: `Array<String>` - List of available groups for the session modal (e.g., `["G01", "G02", ..., "G12"]`).
-   **`ROUND_COUNT`**: `Number` - Total number of rounds in the game.
-   **`ROUND_DURATION_SEC`**: `Number` - Duration of each round in seconds.
-   **`SESSION_DURATION_SEC`**: `Number` - Total duration of the game session in seconds. *Note: The game also calculates session end based on `ROUND_COUNT * ROUND_DURATION_SEC`. Ensure these are consistent or understand that the game might end based on whichever condition is met first.*
-   **`GRID_SIZE`**: `Number` - Defines the grid dimensions (e.g., `5` for a 5x5 grid).
-   **`GRID_NULL_PERCENTAGE`**: `Number` (0-100) - Percentage of grid cells that will initially be "empty" (triggering a choice pickup) rather than having a pre-assigned item.
-   **`MAX_STEPS_PER_ROUND`**: `Number` - Maximum number of moves (cell clicks) a player can make per round.
-   **`ITEMS`**: `Array<Object>` - Defines the collectible items in the game. Each object has:
    -   `code`: `String` - A short unique identifier (e.g., `"SPIRIT_ASH"`). This code is used internally and for inventory keys.
    -   `name`: `String` - The display name of the item (e.g., `"Spirit Ash"`).
    -   `emoji`: `String` - The emoji used to represent the item on the grid.
-   **`ROLES`**: `Array<String>` - Defines roles. For this interface, it's typically just `["Charlie"]`.
-   **`PROMPTS_FILE_PATTERN`**: `String` - Pattern for loading role-specific prompts, not directly used by this offline version but might be a remnant from a server-based version.
-   **`INJECT_EVENT_NULL_PERCENTAGE`**: `Number` (0-100) - Percentage of cells (after the first one) that *will not* have an inject story event. So, `20` means 80% of applicable cells *will* have an inject.
-   **`INJECT_RANDOM_PERCENTAGE`**: `Number` (0-100) - When an inject event occurs and results in item loss, this is the percentage chance that the item lost is random. The alternative is a choice-based loss.
-   **`TEST_MODE`**: `Boolean` - General test mode flag, specific effects depend on implementation (currently not observed to have a major effect in the provided code).
-   **`INJECT_STORIES`**: `Array<String>` - List of story texts for inject events. A random story is chosen when an inject occurs.
-   **`PLAYER_EMOJI`**: `String` - Emoji representing the player on the grid.
-   **`PICKUP_SINGLE_QTY`**: `Number` - Quantity of items received when picking up a pre-defined item from a cell.
-   **`PICKUP_CHOICE_QTY`**: `Number` - Quantity of items received when picking up an item from a choice-based (null cell) modal.
-   **`ELDER_CHEW_INTRO`**: `String` - The introductory message shown in the objective box when the game starts.
-   **`ELDER_CHEW_MESSAGES`**: `Array<String>` - List of messages from Elder Chew displayed at the start of each round. The message for round `N` will be `ELDER_CHEW_MESSAGES[N-1]`. Ensure there are enough messages for `ROUND_COUNT`.
-   **`TEXT_TEMPLATES`**: `Object` - A collection of string templates used for various log messages and modal texts. You can customize these to change in-game wording. Placeholders like `{roundNum}`, `{itemName}`, etc., are replaced with dynamic values.

## 4. Exporting Results

At the end of the game, a modal will appear with a "Download Results" button. Clicking this will generate and download a `.docx` (Microsoft Word) file. This file includes:
-   Session ID and Team Name.
-   Game Start and End timestamps (in GMT+8).
-   A table detailing each round's:
    -   Round number.
    -   Choice made (item picked up).
    -   Inject event details (type, story, item lost, choices if applicable).
    -   Reflection text submitted by the player.
    -   Penalty incurred (e.g., item lost for missed reflection).

This allows for an offline record of the game session.
The `docx` generation relies on the `docx.js` library, which is loaded from a CDN. An internet connection might be required the first time the page loads to cache this library if it's not already cached by the browser.

---
This README provides a comprehensive guide to playing and configuring the Raffles Parable offline leader dashboard. 
