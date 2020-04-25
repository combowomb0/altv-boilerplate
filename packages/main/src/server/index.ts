import { log, on } from 'alt-server';

log('server');

on('playerConnect', (player) => {
  player.spawn(-562, -650, 32.5, 0);
  player.model = 'u_m_m_jesus_01';
});
