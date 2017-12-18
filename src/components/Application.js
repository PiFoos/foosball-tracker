import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Team } from '../lib/constants';

import Debug from './Debug';
import PlayByPlay from './PlayByPlay';

import { reset } from '../actions';

const mapStateToProps = (state) => {
  return state.score;
};

const mapDispatchToProps = (dispatch) => ({
  reset(e) {
    dispatch(reset());
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Application extends Component {
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    return (
      <div className="ui grid">
        <div className="column">
          <h1>Foosball</h1>
        </div>
        <Debug />
        <div className="two column divided row">
          <div className="center aligned column">
            <div className="ui huge statistic">
              <div className="value">{this.props[Team.Black]}</div>
              <div className="label">Black Team</div>
            </div>
          </div>
          <div className="center aligned column">
            <div className="ui huge yellow statistic">
              <div className="value">{this.props[Team.Yellow]}</div>
              <div className="label">Yellow Team</div>
            </div>
          </div>
        </div>
        <div className="centered row">
          <button className="massive ui red button" onClick={this.props.reset}>Start New Game</button>
        </div>
        <PlayByPlay />
      </div>
    );
  }
}