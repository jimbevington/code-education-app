import React from 'react';
import Game from './Game';


//
test('generates player start point in range of grid', () => {
  const game = new Game({squaredSize: 6});
  for (let i = 0; i < 10000; i++){
    const value = game.generatePlayerStartPos();
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(35);
  }
});
