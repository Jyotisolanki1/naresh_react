import React from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './Header';
import Foter from './Footer';
const App = () => {
  return(
     <div>
      <Header/>
      <h1>hello this </h1>
      <Foter/>
      </div>
  )
}

const container =   document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)

