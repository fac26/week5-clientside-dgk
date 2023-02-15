## FAC26 | Client-Side-App | Blackjack | [Dominic](https://github.com/DominicSimpson), [Georgia](https://github.com/rockyrelay), [Natalia](https://github.com/nataliarusu)

### Our app recreates the popular card came Blackjack. 

## Setup

Make sure you have Git and Node (v18) installed.

Clone this repo and cd into the directory

Run npm install to install all the dependencies

Run npm run dev to start the server

## Criteria

- [ ] Accept at least 2 kinds of user input
- [ ] Have some form of persistent state and interactivity, e.g.
  - [ ]   Countdown timer
  - [ ]   Score tracker
  - [ ]   Previous guesses
 
 ## Deployment
 
 - We are deploying our app to [Netlify](http://www.netlify.com). 

## Rules of the game

The game follows (mostly!) standard Blackjack rules. 

♥️  ♠️ ♦️ ♣️ 

Players attempt to reach a score of 21—without exceeding it (busting) — before the dealer hits 17. 

♥️  ♠️ ♦️ ♣️ 

- You (the player) are dealt two cards (face up)
- The dealer is dealt two cards, but one of the cards is kept face down
- Considering your starting total, and the visible total of the dealer, you can either
    - **hit**: whereby you are dealt an additional card; or
    - **stick**: where your value is locked and the game moves onto the dealer's cards
- You can hit as many times as you like, but you will '**bust**' and lose if your total surpasses 21
- Once you're happy with your total, click stick to move onto the dealer
- The dealer must be hit (take on an additional card) if their starting value is below 17
- Whoever has the highest total equal to or less than 21 wins! 

The dealer process is automated - the game result will be rendered as soon as you click stick - good luck! 🃏


