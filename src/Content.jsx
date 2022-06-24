 import React from 'react';
 import {Card} from 'react-bootstrap'
 import {Carousel} from 'react-bootstrap'

 export default class Content extends React.Component{
  render(){
   return(
       <div style={{marginTop:20, marginLeft:20, marginRight:20}}>
           <div className='img-responsive'  style={{float:'left'}}>
               <div className='animate__animated animate__backInUp'>
                       <div style={{padding:20, height:250, width:750}}>
                        <div className='col-xs-7 col-sm-10 col-md-12'>
              <p id='glow' style={{boxShadow:'15px 15px 10px #888', height:200, textAlign:'center', fontFamily:'cursive', fontSize:50, paddingTop:26}}>
                  SUREST WAY TO EARN 200K-500K MONTHLY
              </p>
                            </div>
                       </div>
                   <div  style={{fontFamily:'Sofia',fontSize:18, textAlign:'justify', width:750}}>
                       <div className='col-xs-7 col-sm-10 col-md-12'>
               <Card>
                   <p style={{padding:20}}>
                   Hey there!! My name is AKINSOLA GABRIEL, an Expertnaire Affiliate. I'm here to inform you on how you can make up to
                   200k-500k monthly with just your smart phone, from the comfort of your home -oh yeah! I know, that sounds
                   like something from a fairy tale but trust me this is as real as it gets. The best part is anyone can do it.
                   That said, my aim is to help you gain financial freedom and stability and I endeavor to do so. Before we begin
                   if you wish to know me a little on a personal level and how I came to know about Expertnaire, kindly visit <a style={{color:'black'}} href='/about'>here</a>.
                   So lets begin. First thing is first, we'll talk about what Expertnaire is really all about. Of course this is just an introduction, you can skip
                   it and go straight to 'How to Earn'.
                   <p style={{paddingTop:50, fontSize:21}}><b>What is Expertnaire?</b></p>
                   <p>Expertnaire is simply a digital platform and market place that assists creators of digital products to sell
                   their products and connect them to more customers via their platform and network of high performing
                   affiliates. As you may have already guessed we fall under the umbrella of the 'high performing affiliates' that is being
                   referred to here. Expertnaire was created by Nigerian billionaire Toyin Omotoso, one of the most innovative and creative minds in Nigeria<br/>
                   Expertnaire provides opportunities for individuals looking for a legitimate source of income, individuals
                   looking to scale up their income, and for those who have priceless information that can be packaged as digital products
                   (such as e-books, videos, courses, tutorials, etc) and sold. As you can see the opportunities offered are almost boundless.
                   To learn more about Expertnaire and how to get started kindly visit the <a href='https://tinyurl.com/3fcy8v75' style={{color:'black'}}>Expertnaire website.</a> So
                   lets get to the question I'm pretty sure has been on your mind, How do I Earn?</p>
                   <p style={{paddingTop:50, fontSize:21}}><b>How do I Earn?</b></p>
                   <p>
                       As an Expertnaire affiliate, you earn up to 50% commission on every digital product you sell. As you are already aware Expertnaire
                       offers a vast number of digital packages with varying prices. Once you register as an affiliate marketer, you immediately have access to all
                       of these digital products for sales purposes. All you have to do is recommend a particular digital product, convince someone to purchase it via your link and
                       you get 50% commission for the sales of the product. Take for example the 72IG course that's being sold for #62,500,
                       a successful sale of this product will yield a commission of #31,250. Sales of just 10 of this product, thats a whooping
                       #312,500!!! -One second, let me catch my breath! This is basically what Affiliate Marketing is all about. Several companies like the
                       well-known Uber and Taxify (who provide car services despite not owning a car) have been really successful in utilizing Affiliate
                       Marketing by linking people who provide services to their potential customers.
                   </p>
                   <p style={{paddingTop:50}}>
                       If you wish to learn more about what some of these digital packages offer or you require further clarifications on some things, you can reach me via
                       the contact information provided <a href='/contact' style={{color:'black'}}>here</a>. As it may interest you to know, some of these digital packages
                       contain priceless information that can even help you increase your sales. They also teach valuable skills like copywriting, social-media marketing, sales
                       funelling, content-creation, web-design etc -How convenient, If this isn't great I don't know what is.</p>
                       <p style={{paddingTop:20}}>
                           <button className='btn btn-primary' onClick={(Event)=> {Event.preventDefault();
                               location.href='https://tinyurl.com/3fcy8v75'}}>Click here to register.....</button><br/>
                           <p style={{paddingTop:20, paddingBottom:20}}>Finally, I'll be leaving you with a slideshow of testimonies of Super Affiliates
                           who have been able to really take advantage of this platform. I'll see you next time, till then, Au revoire!!</p>
                               <Carousel>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100 img-responsive"
                                           src="./image/IMG-1.jpg"
                                           alt="First slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100 img-responsive"
                                           src="./image/IMG-2.jpg"
                                           alt="Second slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100 img-responsive"
                                           src="./image/IMG-3.jpg"
                                           alt="Third slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-4.jpg"
                                           alt="fourth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-5.jpg"
                                           alt="fifth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-6.jpg"
                                           alt="sixth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-7.jpg"
                                           alt="seventh slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-8.jpg"
                                           alt="eight slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-9.jpg"
                                           alt="ninth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-10.jpg"
                                           alt="tenth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-11.jpg"
                                           alt="eleventh slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-12.jpg"
                                           alt="Twelveth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                                   <Carousel.Item>
                                       <img
                                           className="d-block w-100"
                                           src="./image/IMG-13.jpg"
                                           alt="Thirteenth slide"
                                           style={{height:550}}
                                       />
                                   </Carousel.Item>
                               </Carousel>
                       </p>
                   </p>
               </Card>
                       </div>
           </div>
                   </div>
           </div>
         <div className='animate__animated animate__backInUp' style={{float:'right',paddingTop:20}}>
             <span>
                 <img className='img-responsive' src='./image/Gabriel.jpg' style={{height:400, width:400, marginBottom:20}} alt='Gabriel'/>
             </span>
             <div style={{fontFamily:'Tangerine', fontSize:35}}>
                 <b>A man is great not because he hasn't failed<br/>
                 He is great because failure hasn't stopped him<br/></b>
                  <span style={{textAlign:'right'}}>~Confucius</span>
             </div>
         </div>
       </div>

   )
  }
 }
