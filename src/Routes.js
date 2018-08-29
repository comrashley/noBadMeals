import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData();
  // }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route />
      </Switch>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     // isLoggedIn: !!state.user.id
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // loadInitialData() {
//     //   dispatch(me())
//     //   dispatch(fetchAllUsersPoints())
//     //}
//   };
// };
export default withRouter(
  // connect(
  //   mapStateToProps,
  //   mapDispatchToProps
  // )
  Routes
);
