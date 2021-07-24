import React,{createContext, useContext, useReducer} from "react"
import { initialState } from "../reducer";
//Prepare the data Layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to every component to the app
//TODO - read about it.
export const StateProvider =({reducer, intialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
