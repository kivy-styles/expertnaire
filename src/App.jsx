import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import Content from './Content.jsx';
import About from './About.jsx'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'



const contentNode= document.getElementById('container');

const App= ()=>
    (
                <div className='container-fluid'>
                    <div>
                    <Navbar bg='light' expand="lg" style={{height:90}} defaultExpanded='collapseOnSelect'>
                            <Navbar.Toggle aria-controls='mynavbar'/>
                        <Navbar.Collapse id='mynavbar'>
                            <div style={{fontFamily:'Sofia', fontSize:18}}>
                        <Nav>
                                <Nav.Link style={{marginLeft:70}} href='/home' >Home</Nav.Link>
                                <Nav.Link style={{marginLeft:70}} href='/contact'>Contact</Nav.Link>
                                <Nav.Link style={{marginLeft:70}} href='/about'>About</Nav.Link>
                        </Nav>
                                </div>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
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

