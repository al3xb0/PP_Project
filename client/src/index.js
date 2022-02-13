import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import userData from "./data/userData";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        users: new userData()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);


