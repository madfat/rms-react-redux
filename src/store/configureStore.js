import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	result = next(action)

	console.log(`

		result

	`)

	console.groupEnd()

	return result
}

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    /*initialState,*/
    composeEnhancers(applyMiddleware(thunk))
  //  applyMiddleware(thunk)
  );
}
