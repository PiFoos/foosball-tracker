import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { Score, RoundWon } from '../lib/constants';
import moment from 'moment';
 
@connect(pick(['rounds']))
export default class PlayByPlay extends React.Component {

  renderRounds() {
    return this.props.rounds.map(round => {
      let flagName = 'flag outline';
      switch (round.type) {
        case Score:
          flagName = 'flag';
          break;
        case RoundWon:
          flagName = 'checkered flag';
          break;
      }
      const className = `large ${round.team.toLowerCase()} ${flagName} middle aligned icon`;

      return (
        <div className="item" key={round.timestamp}>
          <i className={className} />
          <div className="content">
            <span className="header">{round.message}</span>
            <div className="description">{moment(round.timestamp).toString()}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="one wide column"></div>
        <div className="fourteen wide column">
          <div className="ui relaxed divided list">
            {this.renderRounds()}
          </div>
        </div>
      </div>
    )
  }
}

