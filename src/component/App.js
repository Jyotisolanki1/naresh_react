import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return(
        <>
    <Header/>
    {/* inline css  */}
    <h1 style={{color:'red',fontSize:'30px'}}>content</h1>
    <Footer/>
    </>
    )

}
export default App;