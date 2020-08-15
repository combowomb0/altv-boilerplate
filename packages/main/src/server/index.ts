import * as alt from 'alt-server';

alt.log('server');

alt.on('playerConnect', (player) => {
  player.spawn(-562, -650, 32.5, 0);
  player.model = 'u_m_m_jesus_01';
});
