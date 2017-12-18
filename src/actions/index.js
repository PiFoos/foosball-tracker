import { RoundWon, Score, GameReset } from '../lib/constants';

export function scoreGoal(team) {
  return { type: Score, team };
}

export function wonRound(team) {
  return { type: RoundWon, team };
}

export function reset() {
  return { type: GameReset };
}

export function noop() {
  return { type: "" };
}