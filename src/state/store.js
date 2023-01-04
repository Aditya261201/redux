import { applyMiddleware} from "redux";
import { legacy_createStore as createStore } from 'redux';
import reducers from "./reducers";
import thunk from "redux-thunk";

// creating store which can be accessed by any component of app.
// it includes all the reducers, initial state (i.e {} empty here),any middleware we want to apply.
// redux-thunk helps us to execute async functions ..here we have used it here as a middleware.
export const store = createStore(reducers,{}, applyMiddleware(thunk))