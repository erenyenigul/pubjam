import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';

import './App.css';
import AppRouter from './router/AppRouter';
import { startSetTables } from './action/table';

function App(props) {
  useEffect(() => {
    if(props.user.authenticated)
      props.startSetTables()
  });
  
  return (
    <AppRouter />
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  startSetTables: () => dispatch(startSetTables())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
