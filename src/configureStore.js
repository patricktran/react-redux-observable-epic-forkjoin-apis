import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
//import pingReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { ajax } from 'rxjs/ajax';

const configureStore = () => {

    const epicMiddleware = createEpicMiddleware({
        dependencies: {  //add dependencies so that epics are unit testable
            ajax
        }
    });

    const middlewares = [epicMiddleware];

    //to use with Chrome redux dev tool
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        //pingReducer,
        ()=>null,
        //, optional second argument for persisted state that will overwrite any defaults from todoApp combined reducer
        // preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))  //enhancer - applyMiddleware() uses middleware in reverse order of the array
    );

    epicMiddleware.run(rootEpic);
    return store;
}

export default configureStore;