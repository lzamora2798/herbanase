import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers';


const initialState = {};
const middleware = [thunk];//able to click in our actions and perfon
//asyncronily
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;


