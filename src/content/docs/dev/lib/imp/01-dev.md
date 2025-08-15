---
title: Development Process and Design Decisions
---


## Development and Errors

**Game, Board, and Player objects were created first.**

Afterwards, as I was working on the Backend RESTful API and Frontend, I decided to add GameState and GameConfig objects because game logic was being added in the backend for getting the winners/losers, and I wanted the game logic in bncpy to be the single source of truth for game logic.

After adding the GameState object, a lot of the logic I had written for the `Game`, `Board`, and `Player` objects was no longer used. For example:

- `submit_guess()`/`make_guess()` methods from `Game` and `Player` are not used → `calculate_bulls_and_cows()` util function is used directly by the API
- `state()` and `CurrentGameStatus` from `Game` are not used (For getting current Game State: SETUP, IN_PROGRESS, DINISHED)
- Logic for getting the winners (`winner`) is not used

**Unused classes and components:**
- Board class - entirely unused
- BoardRow class - entirely unused
- Player class - entirely unused
- Game class - entirely unused
- CurrentGameStatus enum - entirely unused
- GameMode enum - In GameState/GameConfig, but not used entirely
- PlayerState class - not directly used (though GameState manages it internally)
- PlayerGuess class - not directly used (though GameState creates it internally)



### GameState/GameConfig components

`GameState`/`GameConfig` were created in a rush so that it can be saved both in the **PostGresSQL** database (as Json data) and in Browser's local storage using **Zustand**.
I didn't carefully specify the requirements needed in the GameState/GameConfig, so items are left unused.

- [click to see used/unused components in GameState/GameConfig](2.md)


## Reflections

I should have started with a clearer understanding of the requirements and designed the architecture around the actual use cases rather than creating objects that seemed logical but ultimately went unused.

If I had more time with this project, I would be careful in creating the GameState and overall game logic and integrate it better with the Backend API.


## Other Design Patterns considered

There are many patterns I have considered for building the game library.

**Board:**
- **Factory?** - Considered for creating different board configurations (varying code_length, num_of_colors, num_of_guesses), but opted for simple constructor parameters since board variations were limited and well-defined
- **Prototype?** - Explored for cloning boards with `create_new_board()` method to duplicate board configurations while resetting game state, useful for creating multiple boards with same settings
- **Builder** - Contemplated for step-by-step board construction (set dimensions → set colors → set secret code), but found it over-engineered since boards are created with all parameters at once

**Game:**
- **Prototype?** - Considered for duplicating game instances with same player configurations but new secret codes for tournament/replay scenarios, but wasn't needed since games are typically created fresh

**GameState:**
- **Use Strategy Pattern for validating?** - Considered for swapping validation strategies (strict digits vs alphanumeric codes, different game rule sets), but kept validation simple with `validate_code_input()` utility function since rules were stable


I felt that I should have used Iterator and Strategy patterns. However, I had not used them before and did not want to spend time learning them only to find out they were not useful for this library.
















