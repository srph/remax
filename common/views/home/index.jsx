import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {click} from '../../modules/counter';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        Clicks: {this.props.counter}
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }

  handleClick() {
    this.props.actions.click();
  }
}

HomeView.propTypes = {
  actions: PropTypes.shape({
    click: PropTypes.func.isRequired
  }).isRequired,

  counter: PropTypes.number.isRequired
};

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ click }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
