import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreGoal, reset } from '../actions';
import { Team } from '../lib/constants';

const mapDispatchToProps = (dispatch) => ({
  scoreBlack(e) {
    dispatch(scoreGoal(Team.Black));
  },
  scoreYellow(e) {
    dispatch(scoreGoal(Team.Yellow));
  },
  reset(e) {
    dispatch(reset());
  }
});

@connect(undefined, mapDispatchToProps)
export default class Debug extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <span>Debug</span>
          <div className="ui buttons">
            <button className="ui black button" onClick={this.props.scoreBlack}>Score Black</button>
            <div className="or"></div>
            <button className="ui yellow button" onClick={this.props.scoreYellow}>Score Yellow</button>
          </div>
          <div className="ui buttons">
            <button className="ui primary button" onClick={this.props.reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}


