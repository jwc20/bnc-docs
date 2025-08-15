---
title: Game Library - bncpy
---



## Design

### High-level

**Core Objects:**

1. **Board** - Maintains the state of a single game board
   - Encapsulates the secret code and validates guesses
   - Tracks board rows (guesses with their bulls/cows feedback)
   - **Determines win/loss conditions**
   - Each row contains: guess digits, bulls count, cows count, and filled status


<div className="images">
    <img src="../../../../public/board.png" alt="board" width="70%">
</div>

<hr class="dashed">

2. **Player** - Represents a player with their associated board
   - **Encapsulates player name and their board instance**
   - Assign guess-making to their board
   - Tracks individual game state (won/over)

<div className="images">
    <img src="../../../../public/player.png" alt="player" width="50%">
</div>

<hr class="dashed">

3. **Game** - Put together multiplayer gameplay
   - Manages multiple Player instances in a List
   - Ensures board configuration consistency across players
   - Tracks winners in order (1st, 2nd, 3rd place, etc.)
   - Handles game state transitions (SETUP → IN_PROGRESS → FINISHED)


<div className="images">
    <img src="../../../../public/game.png" alt="game" width="50%">
</div>





<hr class="dashed">

4. **GameState** - Serializable game state management
   - Tracks all guesses with timestamps and player attribution
   - Can convert to/from Game instances by JSON serialization/deserialization


<br />

<br />


<div className="images">
    <img src="../../../../public/state.png" alt="state" width="70%">
</div>


5. **GameConfig** - Configuration data class
   - Encapsulates game parameters (code_length, num_of_colors, num_of_guesses)
   - Validates configuration constraints
   - Generates random secret codes
   - Supports different game types

<hr class="dashed">

**Utility Functions:**
- `validate_code_input()` - Validates guess format and digit ranges
- `calculate_bulls_and_cows()` - Core game logic for evaluating guesses
- `generate_guess()` - Creates random valid guesses
- `get_random_number()` - Generates secret codes (with random.org API fallback)

<hr class="dashed">

**Key Design Patterns:**

- Separation of concerns between game logic (Board), player management (Player), and orchestration (Game)
- State pattern with GameState for persistence.
- Builder pattern elements in Board initialization



### See Also

- [Neetcode OOD](https://neetcode.io/courses/ood-interview)
- [OOD Python Examples](https://github.com/faif/python-patterns/tree/master?tab=readme-ov-file)
- State Pattern
  - [Refactoring - State](https://refactoring.guru/design-patterns/state)
  - [State Pattern Example](https://sourcemaking.com/design_patterns/state/python/1)
- Builder Pattern
  - [Brandon Rhodes - Builder](https://python-patterns.guide/gang-of-four/builder/)
  - [Refactoring - Builder](https://refactoring.guru/design-patterns/builder)
  - [Builder Pattern Example](https://sourcemaking.com/design_patterns/builder/python/1)
- Similar Projects
  - [rock-paper-scissors-py](https://github.com/jwc20/rock-paper-scissors-py)
  - [barbell loading calculator](https://github.com/jwc20/blc-py)


<style>
    hr {
        margin-top: 50px;
    }

    hr.dashed {
        border-top: 3px dashed #bbb;
    }
    .images {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        gap: 5px;
        justify-content: center;
    }
</style>
