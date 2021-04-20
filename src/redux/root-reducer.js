// our root reducer is an object with a property user which points to userReducer
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
	user: userReducer,
});
