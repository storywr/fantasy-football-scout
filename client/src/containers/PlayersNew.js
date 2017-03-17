import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlayer } from '../actions/players';
import { browserHistory } from 'react-router';

class PlayersNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.addPlayer(this.state);
    browserHistory.push('/players');
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnPositionChange(event) {
    this.setState({
      position: event.target.value
    });
  }

  handleOnRatingChange(event) {
    this.setState({
      rating: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Player</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => this.handleOnNameChange(event)} />
          <input
            type="text"
            placeholder="Position"
            onChange={(event) => this.handleOnPositionChange(event)} />
          <input
            type="text"
            placeholder="Rating"
            onChange={(event) => this.handleOnRatingChange(event)} />
          <input
            type="submit"
            value="Add Player" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: bindActionCreators(addPlayer, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(PlayersNew);
