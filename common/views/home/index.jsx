import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { click } from '../../modules/counter';

class HomeView extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      click: PropTypes.func.isRequired
    }).isRequired,

    counter: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.handleClick = ::this.handleClick;
  }

  render() {
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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ click }, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
