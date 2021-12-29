import {createStore} from "redux"
import todoReducer from "./Reducers/reducer"
const store = createStore(todoReducer);
export default store