import React from 'react'
import Form from './components/Postform'
import List from './components/Postlist'
import './App.css'
import {BrowserRouter,Route, Link} from 'react-router-dom'
function App(){
   
    return (
        <BrowserRouter>
        <div >
       {
           <ul className="ull">
            <li className="li">
            <div>
           <button> <Link  to='/form'>NEW POST </Link></button>
             </div>
            </li>
            <li className="lii">
             <div>
              <button><Link to="/list" >PUBISHED</Link></button>
              </div>
            </li>
           </ul>
       }
            
        
        
       
        

         <Route path='/form' component={Form} exact={true}/>
         <Route path="/list" component={List} exact={true}/>

        </div>
        
        </BrowserRouter>
    )
}

export default App