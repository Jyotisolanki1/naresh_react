import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './productDispaly';
import JSON from './db.json';


class App extends Component{
    constructor(){
        super();
        this.state={
            productData : JSON,
            filteredData : JSON,
            brandFiltered :JSON
        }
    }
    filteredData = (keyword) =>{
         let output = this.state.productData.filter((data)=>{
          return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
               });
            this.setState({filteredData:output})
          }
 brandFiltered = (keyword) =>{
 let brand =this.state.filteredData.filter((data)=>{
    return data.brand.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
 });
  this.setState({brandFiltered : brand})
 }

 render(){
    return(
        <>
         <Header userInput={(data)=> {this.filteredData(data)}} brandInput={(data)=>{this.brandFiltered(data)}}/>
          {/* inline css  */}
          <Product prodData={this.state.brandFiltered}/>
          <h1 style={{color:'red',fontSize:'30px'}}>hi from REACT</h1>
           <h2>test component</h2>
           <img src=""/>
           <a href=""></a>
        <Footer year="2022" month="Oct"/>
       </>
    )

}
}
export default App; 