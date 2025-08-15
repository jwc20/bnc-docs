---
title: Requirements
---

Defining requirements for a project is extremely important because without a map or an outline, one might work towards something that might be completely unnecessary, wasting good amount of time/resource available.

## Basic

- The player must be able to guess the combinations of numbers
- The player must be able to see their previous guesses
- The number of remaining guesses must be displayed
- The player guesses a combination of numbers and the server provides a feedback (`calculate_bulls_and_cows()`, `submit_guess()`)
- The player must guess within the number of allowed attempts (`num_of_guesses`) to win
- The server randomly selects a pattern of selected secret code length (`code_length`) from a specified number of colors (`num_of_colors`)
- The game must use [Random Number Generator API](https://www.random.org/clients/http/api/) to generate the number combinations (`get_random_number()`)
- Game configuration should be flexible (players can specify `code_length`, `num_of_colors`, and `num_of_guesses` in a room)


## Multiplayer

- It must be multiplayer using websocket. (real-time communication)
- Game state must remembered after refreshing the page or when leaving and re-entering the room. (browser must save data on local storage)
- Player must know when other players have joined the game
- All clients in a room must be kept in sync
- Since it's multiplayer, the game must have a User model for usernames
- Login must be secure

<!-- ### See Also

- [Mastermind Solver](https://www.dcode.fr/mastermind-solver#q5) -->