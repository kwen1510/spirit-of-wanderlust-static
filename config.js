window.CONFIG = {
  "DAYS": ["D1", "D2", "D3"],
  "GROUPS": ["G01", "G02", "G03", "G04", "G05", "G06", "G07", "G08", "G09", "G10", "G11", "G12"],
  "ROUND_COUNT": 10,
  "ROUND_DURATION_SEC": 90,
  "SESSION_DURATION_SEC": 240,
  "GRID_SIZE": 5,
  "GRID_NULL_PERCENTAGE": 70,
  "MAX_STEPS_PER_ROUND": 1,
  "ITEMS": [
    { "code": "SPIRIT_ASH", "name": "Spirit Ash", "emoji": "🔥" },
    { "code": "MOONWOOD", "name": "Moonwood", "emoji": "🌲" },
    { "code": "STORM_IRON", "name": "Storm-Iron", "emoji": "⚡️" },
    { "code": "CORAL_RUNES", "name": "Coral Runes", "emoji": "🌀" }
  ],
  "ROLES": [ "Charlie" ],
  "PROMPTS_FILE_PATTERN": "text/prompts-R{role}.json",
  "MAX_CONCURRENT_GROUPS": 11,
  "INJECT_EVENT_NULL_PERCENTAGE": 20,
  "INJECT_RANDOM_PERCENTAGE": 30,
  "TEST_MODE": false,
  "INJECT_STORIES": [
    "A mischievous sprite snatches something from your bag!",
    "You stumble upon a mysterious altar demanding tribute.",
    "A sudden gust of wind scatters your supplies.",
    "A friendly animal offers a trade, but at a cost.",
    "A hidden trap springs, forcing you to drop an item.",
    "A wise old traveler asks for a donation.",
    "A shimmering portal taxes your inventory for passage.",
    "A riddle from the void: pay up or face the unknown!"
  ],
  "PLAYER_EMOJI": "🧑‍🚀",
  "PICKUP_SINGLE_QTY": 2,
  "PICKUP_CHOICE_QTY": 1,
  "TEXT_TEMPLATES": {
    "leaderStart": "Charlie starting the game...",
    "gameStart": "Game Started!",
    "roundStart": "--- Round {roundNum} ---",
    "elderChew": "Elder Chew: {elderMessage}",
    "moveLog": "Moved to ({r}, {c}). Step {steps}/{maxSteps}.",
    "noSteps": "❌ No more steps left this turn.",
    "revisitCell": "❌ Tried revisiting a cell.",
    "invalidMove": "❌ Invalid move distance.",
    "pickupBonus": "You found a bonus!",
    "pickupChoiceTitle": "Pick up an item",
    "injectTitle": "Inject Event",
    "injectLossLog": "Inject: Lost 1 {itemName} ({itemEmoji})",
    "injectNoLoss": "Inject: No items to lose.",
    "reflectionSubmitLog": "Reflection Submitted (R{roundNum}): {text}",
    "reflectionMissLog": "Reflection Missed (R{roundNum}): {text}",
    "reflectionPenaltyLog": "Reflection Penalty: {lossText}. Reason: {reason}",
    "penaltyItemLoss": "Lost 1 {itemName} ({itemEmoji})",
    "penaltyNoItem": "No item lost",
    "penaltyReasonMissed": "A reflection was missed.",
    "sessionEnd": "Session ended! Time ran out.",
    "modalItemLossTitle": "You lost 1 {itemName}!",
    "modalPenaltyTitle": "Team Penalty!",
    "modalPenaltyBody": "{reason} {lossText}",
    "inventoryUpdated": "Inventory updated: +{qty} {itemName} ({itemEmoji})"
  }
}; 
