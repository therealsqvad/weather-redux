import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
// import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
// import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {put, call, takeEvery} from 'redux-saga/effects'


// Reducer
const initialState = {
    url: '',
    loading: false,
    error: false,
    show: true,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOWINPUT':
        return {
          loading: true,
          error: false,
           show: true,
        };
      case 'SHOWOUTPUT':
      
        return {
          loading: false,
          error: false,
          show: false,
        };
      default:
        return state;
    }
  };
  
  // Action Creators

  const showINPUT = () => {
      return {type: 'SHOWINPUT'}
  };

  const showOUTPUT = () => {
      return {type: 'SHOWOUTPUT'}
  }

  const showError = () => {
      return { type: 'SHOWERROR' }
  };

  const showIn = () => {
    return { type: 'SHOWIN'}
  };

  const showOut = () => {
    return { type: 'SHOWOUT'}
  };
  
  // Sagas
  
  function* watchShow() {
      yield takeEvery('SHOWIN', showAsync, true);
      yield takeEvery('SHOWOUT', showAsync, false);
  }

  function* showAsync(par) {
      try {
          console.log(par);
          switch(par){
              case true:{
          yield put(showINPUT());
          break;}
   case false:
   {
   yield put(showOUTPUT());
   break;
          }}
      } catch (error) {
          yield put(showError());
      }
  }

  // Component
  class App extends React.Component {
    render () {
      return (
        <div>
          <input type="textbox" hidden={!this.props.show} />
          <span hidden={this.props.show} onClick={() => this.props.dispatch(showIn())}>DOG</span>
          {/* <input type="button" value="Ввести" onClick={()=> this.props.dispatch(showIn())} /> */}
          <input type="button" value="Вывести" onClick={()=> this.props.dispatch(showOut())} />
        </div>
      )
    }
  }
  
  // Store
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchShow);
  
  const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
  })(App);
  
  

ReactDOM.render(
<Provider store={store}>
<ConnectedApp />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
