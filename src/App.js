import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { MainContent } from "./components/views";
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}

export default App;
