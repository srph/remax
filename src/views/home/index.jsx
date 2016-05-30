import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {click} from 'app/modules/counter';

class HomeView extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      click: PropTypes.func.isRequired
    }).isRequired,

    counter: PropTypes.number.isRequired
  };

  render() {
    console.log(this.props);

    return (
      <div>
        Clicks: {this.props.counter}
        <button onClick={this.props.actions.click}>Click!</button>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ click }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(HomeView);
