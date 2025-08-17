---
title: Architecture Evolution and Technical Debt
---

`GameState` and `GameConfig` were created in a rush so they could be saved both in the **PostgreSQL** database (as JSON data) and in the browser's local storage using **Zustand**. I didn't carefully specify the requirements needed for GameState/GameConfig, leaving several items unused.

## Used components

**Currently used components in GameState/GameConfig:**

**GameState:**

- Properties: `config`, `game_started`, `players`
- Methods: `submit_guess()`, `reset()`, `add_player()`, `remove_player()`, `to_dict()`, `from_dict()`

**GameConfig:**

- Properties: `code_length`, `num_of_colors`, `num_of_guesses`, `secret_code`, `game_type`
- Methods: `generate_secret_code()`

## Unused components

**Currently unused components in GameState/GameConfig:**

- GameState's `mode` property is entirely unused (Battle mode and Co-Op mode are determined by `game_type` in `config`)
- The following properties are completely unused: `winners`, `game_won`, `game_over`, `current_row`, `secret_code`, `game_started`, `players_data`
  - Each `guess` in `guesses` is compared with `secret_code` in `config` to calculate bulls and cows
  - The winner is determined when the first player achieves a `bulls` count of 4 in their `guesses`
  - The game ends when each player's guess count (in `guesses`) equals `num_of_guesses` in `config`
  - The current user's authentication token is added/removed from `players` when they join/leave the room via websocket
    - If a player has made guesses but their token is not in `players`, the game can end
    - However, if the player's token remains in `players`, the game cannot end until they finish

## Example Json

Example json data that is stored in db and local storage.

```json
{
  "mode": "MULTI_BOARD", // not used
  "config": {
    "game_type": 2,
    "code_length": 5,
    "secret_code": "33231",
    "num_of_colors": 4,
    "num_of_guesses": 5
  },
  "guesses": [
    {
      "cows": 3,
      "bulls": 0,
      "guess": "12344",
      "player": "f28521ab",
      "timestamp": "2025-08-13T01:42:14.914685+00:00"
    },
    ...
  ],
  "players": [],
  "winners": [],
  "game_won": false,
  "game_over": false,
  "current_row": 8, // not used
  "secret_code": null, // not used
  "game_started": false, // not used

  "players_data": { // not used
    "134552a7": {
      "name": "134552a7", // not used
      "guesses": [], // not used
      "game_won": false, // not used
      "game_over": false, // not used
      "current_row": 0, // not used
      "remaining_guesses": 5 // not used
    },
    ...
  },
  "remaining_guesses": 100 // not used
}
```

These unused items should be removed, but since I didn't want the game to break before the deadline, I decided not to change them.
