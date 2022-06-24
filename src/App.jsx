import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import Content from './Content.jsx';
import About from './About.jsx'



const contentNode= document.getElementById('container');

const App= ()=>
    (
                <div className='container-fluid'>
                    <nav className='navbar' style={{height:100, backgroundColor:'black'}}>
                        <div className='nav-header'>
                            <div className='nav-brand'></div>
                        </div>
                        <ul className='nav nav-pills'>
                            <div className='row'>
                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><li className='active' style={{paddingLeft:37}}><a href='/home' style={{textDecoration:'none',color:'Gold',fontSize:20,fontFamily:'Sofia'}}>Home</a></li></div>
                                <div className='col-xs-3 col-sm-4 col-md-3 col-lg-4'><li style={{paddingLeft:70}}><a href='/contact' style={{textDecoration:'none',color:'Gold',fontSize:20,fontFamily:'Sofia'}}>Contact</a></li></div>
                                <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'><li style={{paddingLeft:70,paddingRight:100}}><a href='/about' style={{textDecoration:'none',color:'Gold',fontSize:20,fontFamily:'Sofia'}}>About</a></li></div>
                            </div>
                        </ul>
                    </nav>
                    <Routes>
                        <Route index element={<Content/>}/>
                        <Route path='home' element={<Content/>}/>
                        <Route path='contact' element={<Contact/>}/>
                        <Route path='about' element={<About/>}/>
                    </Routes>
                    </div>
        )


const RoutedApp=()=>
    (
        <Router>
            <Routes>
                <Route path='/*' element={<App/>}/>
            </Routes>
            </Router>
    )


ReactDOM.render(<RoutedApp/>, contentNode);


if (module.hot){
    module.hot.accept();
}

