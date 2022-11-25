import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <>
         <Header/>
          {/* inline css  */}
          <h1 style={{color:'red',fontSize:'30px'}}>hi from REACT</h1>
           <h2>test component</h2>
           <img src=""/>
           <a href=""></a>
        <Footer year="2022" month="Oct"/>
       </>
    )

}
export default App; 