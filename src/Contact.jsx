import React from 'react';

export default class Contact extends React.Component{
    render(){
        return(
            <div className='m-contactcont' style={{marginLeft:20}}>
                <address style={{height:65}}>
                    <div className='animate__animated animate__backInLeft'>
                    <a href='mailto:gabirolls798@gmail.com'>
                        <img className="img-responsive" style={{height:70, width:90, marginBottom:80}} src='./image/gmail.jpg'/>
                        <span className='visibility' style={{paddingLeft:5}}>Click here to send an email</span>
                    </a>
                    </div>
                    <div className='animate__animated animate__backInRight'>
                    <a href='http://Wa.me/2348087141250'>
                         <img className='img-responsive' style={{height:90, width:100, marginBottom:80}} src='./image/whatsapp.webp' />
                         <span className='visibility' style={{paddingLeft:5}}>Click here to send a direct Whatsapp message</span>
                    </a>
                    </div>
                    <div className='animate__animated animate__backInLeft'>
                        <a href='https://t.co/bj1u7xQ7BY'>
                            <img className='img-responsive' style={{height:90, width:100}} src='./image/twitter.png' />
                            <span className='visibility' style={{paddingLeft:5}}>Click here to send a direct twitter message</span>
                        </a>
                    </div>
                </address>
            </div>
        )
    }
}

