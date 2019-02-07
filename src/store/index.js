import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


let middlewares = [thunk]
const devMiddleware = [logger, reduxImmutableStateInvariant()]

if (process.env === 'development') {
  middlewares.concat(devMiddleware)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
