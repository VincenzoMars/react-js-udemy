import { ThunkDispatch } from "redux-thunk";
import State from "./State";
import { AnyAction } from "redux";

type AppDispatch = ThunkDispatch<State, any, AnyAction>;

export default AppDispatch;
