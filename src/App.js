import React from 'react';
import './App.css';
import store from './reduxStore/store';
import { Provider } from 'react-redux';
import Todo from './component/Todo';
function App() {
 return(
  <Provider store={store}>
    <Todo/>
  </Provider>
 )
}

export default App;
//DATABASE_URL = mongodb+srv://Purushothama_G:puru555papu@cluster0.xaulxac.mongodb.net/contactManager?retryWrites=true&w=majority