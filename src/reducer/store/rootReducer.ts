import { combineReducers } from "redux";
import userReducer from "../slice/users";
import albumnReducer from '../slice/albums';
import photoReducer from '../slice/photos';
import commonReducer from '../slice/common';

const rootReducer = combineReducers({
    users:userReducer,
    albums: albumnReducer,
    photos: photoReducer,
    common: commonReducer
});



export { rootReducer };