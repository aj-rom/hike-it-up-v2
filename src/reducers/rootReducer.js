import accountReducer from "./accountReducer";
import trailsReducer from "./trailsReducer";
import userReducer from "./userRedcuer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({ trailsReducer, accountReducer, userReducer })

export default rootReducer