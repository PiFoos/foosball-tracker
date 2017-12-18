import { evolve, inc } from 'ramda';
import { Team, Score, RoundWon, GameReset } from '../lib/constants';

const defaultScoreState = {
  [Team.Yellow]: 0,
  [Team.Black]: 0
}

export function scoreReducer(state = defaultScoreState, { type, ...payload }) {
  switch (type) {
    case Score: {
      const { team } = payload;
      return evolve({ [team]: inc }, state);
    }
    case RoundWon:
    case GameReset:
      return defaultScoreState;
  }
  return state;
};