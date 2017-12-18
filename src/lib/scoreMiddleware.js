import { pipe, prop, cond, propEq, always, T } from 'ramda';
import { Score, Team, MAX_SCORE } from './constants';
import { wonRound, noop } from '../actions';

const WonRound = pipe(
  prop('score'),
  cond([
    [propEq(Team.Yellow, MAX_SCORE), always(wonRound(Team.Yellow))],
    [propEq(Team.Black, MAX_SCORE), always(wonRound(Team.Black))],
    [T, noop]
  ])
);

const scoreMiddleware = store => next => action => {
  const { dispatch, getState } = store;
  const { type, ...payload } = action;

  const result = next(action);

  if (type === Score) {
    const state = getState();

    dispatch(WonRound(state));
  }

  return result;
};

export default scoreMiddleware;
