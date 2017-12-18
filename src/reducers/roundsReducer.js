import { Score, RoundWon, GameReset } from '../lib/constants';

export function roundsReducer(state = [], { type, team = '' }) {

  const makeRound = (message) => ({
    type,
    team,
    timestamp: new Date().getTime(),
    message
  });

  switch (type) {
    case Score:
      return [...state, makeRound(`${team} scores.`)]
    case RoundWon:
      return [...state, makeRound(`${team} wins the round.`)]
    case GameReset:
      return [makeRound('Game Start')];
  }
  return state;
}