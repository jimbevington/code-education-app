import React from 'react';
import Game from './Game';

test('generates player start point in range of grid', () => {
  const game = new Game({squaredSize: 6});
  for (let i = 0; i < 10000; i++){
    const value = game.generateGridPos();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(35);
  }
});

// player should move 1 when right
// test('player should move 1 when right', () => {
//   const game = new Game({squaredSize: 6});
//   game.state.playerPosition = 6;
//   game.state.moveList.push(1);
//   game.handleMove();
//   console.log(game.state);
// });

// player should move -1 when left


// player should move squaredSize when down


// player should move -squaredSize when up

// player should move as expected when moves chained.

// player should not be able to move below 0

// player should not be able to move above gridSize
