import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sofa from './images/sofa.jpg'
import bed from './images/bed.jpg'
import dresser from './images/dresser.jpeg'
import shelf from './images/shelf.jpg'
import lamp from './images/lamp.jpg'
import decor from './images/decor.jpeg'
import chair from './images/chair.jpeg'
import table from './images/sidetable.jpg'
import bedpng from './images/bed-png.png'
import sofapng from './images/sofa-png.png'

function SecondCard (sec: { url: string | (string & {}) | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {

  return(
    <div className='bg-dark mb-5 col-md-3 m-2 col-sm-5 card-container d-flex justify-content-end align-items-end' style={{backgroundImage:`url(${sec.url})`,height:"300px",backgroundSize:"cover"}}>

      <div className='bg-white w-75 shadow' style={{marginRight:"-12px",marginBottom:"-20px",height:"fix-content",opacity:0.8}}>
        <p className='font-size2 fw-bold p-2'>{sec.title}</p>
        <p className='font-size fw-medium p-2'>{sec.description}</p>
      </div>

    </div>
  )
}


function Card (props: { imgSrc: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div className='card-container shadow m-3 col-md-3 col-sm-5 m-2'>

        <img src={props.imgSrc} width={"100%"}  height={"300px"} alt="" />
        <div className='d-flex mt-2 justify-content-around w-25 card-color'>
            <div className='bg-black rounded-pill' style={{height:"10px",width:"10px"}}></div>
            <div className='bg-danger rounded-pill' style={{height:"10px",width:"10px"}}></div>
            <div className='bg-warning rounded-pill' style={{height:"10px",width:"10px"}}></div>
            <div className='bg-info rounded-pill' style={{height:"10px",width:"10px"}}></div>
        </div>
        <h6 className='card-title'>{props.title}</h6>
        <p className='card-price fw-bold pb-3'>{props.price}</p>
        
    </div>
  )
}



function App() {

  let cate = [
    {
      sofa:<img src={sofa} height={"25px"} width={"30px"} alt=""/>,
      bed:<img src={bed} height={"25px"} width={"30px"} alt=""/>,
      dresser:<img src={dresser} height={"25px"} width={"30px"} alt=""/>,
      shelf:<img src={shelf} height={"25px"} width={"30px"} alt=""/>,
      lamp:<img src={lamp} height={"25px"} width={"30px"} alt=""/>,
      decor:<img src={decor} height={"25px"} width={"30px"} alt=""/>,

    }
  ] 
  
  return (
    <div className="App">
      <header className="App-header">
          <div className='green-bg text-center shadow'>
            <p className='text-white font-size pt-1 pb-1'>Enjoy 30% Off - Shop Now and Save Big</p>
          </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop:"-15px"}}>
        <div className="container-fluid ms-5 ps-5">
          <a className="navbar-brand w-25 text-center" href="#">Furnilux</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            

            <ul className="navbar-nav m-auto mb-2 w-75 text-center mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>

            <span className="navbar-text d-flex">
              <a href="" className='nav-link me-1'>LogIn /</a>
              <a href="" className='nav-link me-5 fw-semibold'>Sign Up</a>
            </span>
          </div>
        </div>
      
      </nav>

      </header>

        <main className='box-1'>
          <div className='container pt-5'>
            
            <div className='row green m-auto'>
              <div className='col-12 text-center green pt-2 m-auto ' style={{width:"90%"}}>
              
                <p className='pt-5 fs-1 fw-semibold w-50 m-auto text-center' style={{fontSize:"3rem"}}>FurniLux - Your Brand For Styling Living</p>

                <p className='green font-size2 w-75 m-auto  ps-5 pe-5'>Discover a fusion of modern design and functionality,crafted to elevate every corner of your living space.FurniLux,redefining stylish living for you.</p>
                
                <button className='green p-1 ps-2 pe-2 bg-transparent mt-3 border-1 rounded-pill'>Shop now</button>
             
              </div>
            </div>

          </div>
        </main>
        
        <div className='container' style={{marginTop:"-1.5rem"}}>
          <div className="row">
            <div className="w-75 m-auto">
              {cate.map((a)=>(
                <div className='col-12 m-auto d-flex justify-content-evenly'>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold \'> {a.sofa}  Sofa</div>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold'> {a.bed}  Bed</div>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold'> {a.dresser}  Dresser</div>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold'> {a.shelf}  Shelf</div>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold'> {a.lamp}  Lamp</div>
                  <div className='p-2 font-size2 bg-white radius shadow fw-semibold'> {a.decor}  decor</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className='container mt-5'>
          <div className="row">
              <h1 className='text-center mt-5'>Elevate Your Living Room</h1>
            </div>

            <div className='row d-flex justify-content-center mt-5 mb-5'>

              <Card imgSrc={sofa} title="Confortable Sofa" price="$ 80.99"/>
              
              <Card imgSrc={table} title="Side Table" price="$ 80.99"/>

              <Card imgSrc={chair} title="Classy Padded Chair" price="$ 80.99"/>

            </div>
        </div>

        <div className='sell-box mt-5'>
          <div className="container mt-5">
            <div className="row mt-5 pb-5 pt-5">
              
              <div className='col-12 d-flex justify-content-around'>
            
                <div className=" w-50 ms-5 mt-3 pt-5 pb-5 d-flex flex-column">
                 
                  <h4>Luxurious Bed</h4>
                  <p className='font-size2 w-75'>Discover unparalleled comfort with our <br />luxurious bed. Elegent design,<br />Plush comfort</p>
                  <p className='font-size2 fw-bold'>$ 299</p>
              
                  <div className='d-flex mt-2 justify-content-around w-25'>
                    <div className='bg-black rounded-pill' style={{height:"10px",width:"10px"}}></div>
                    <div className='bg-danger rounded-pill' style={{height:"10px",width:"10px"}}></div>
                    <div className='bg-warning rounded-pill' style={{height:"10px",width:"10px"}}></div>
                    <div className='bg-info rounded-pill' style={{height:"10px",width:"10px"}}></div>
                  </div>
                  <div className='w-75'>
                    <button className='green  bg-transparent mt-3 p-2 border-1 rounded-pill'>Buy Now</button>
                  </div>

                </div>
            
                <div className="w-50 d-flex mt-2 pt-5 pb-5 justify-content-center align-items-center">
                  <img className='' src={bedpng} width={"65%"} height={"80%"} alt="" />
                </div>
              </div>
          
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h1 className='text-center mt-5 pt-5'>All Products</h1>
          <div className="row d-flex flex-wrap justify-content-center ">
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
              <Card imgSrc={bed} title="Bed" price="$ 20.99" />
          </div>
        </div>

        <div className='sell-box mt-5'>
          <div className="container mt-5">
            <div className="row mt-5 pb-5 pt-5">
              <div className="col-12 d-flex justify-content-between m-auto" style={{width:"80%"}}>

                <div className="w-50 mt-3 me-5 pt-5 pb-3 d-flex flex-column ">
                  <p className=' fs-6'>"Incredibly happy with my new sofa! Stylish, Comfortable, and exceeded my expectations.Seamless purchase and prompt delivery.Highly recommend!"</p>
                  <p className='font-size2 fw-bold'>Marie Elisa</p>
              
                  <div className='bg-white h-25 shadow w-75 d-flex  align-items-center'>
                    <img className='ms-2' src={sofa} width={"20%"} height={"50%"} alt="" />
                    <p className='ms-3  mt-3 mb-3 font-size2 fw-bold'>Stylish Chair <br />$ 99.99</p>
                  </div>
            
                </div>
            
                <div className="d-flex mt-3 pt-5 pb-3 w-50 justify-content-end">
                  <img src={sofapng} width={"90%"} height={"80%"} alt="" />
                </div>
          
              </div>
            </div>
          </div>
        </div>

        <div className='container mt-5'>
            <p className='fs-2 text-center mt-5 fw-semibold'>Blogs & Insights</p>
            <p className='text-center fw-medium'>Explore Our Blogs For Designinspiration and Tips</p>
          <div className="row mt-5 d-flex justify-content-center ">
            <SecondCard url={sofa} title="The Art or Cozy:Elevate Your Home with Fall Decor" description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora,Ex officiis perferendis sequi,"/>
            
            <SecondCard url={chair} title="The Art or Cozy:Elevate Your Home with Fall Decor" description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora,Ex officiis perferendis sequi,"/>
            
            <SecondCard url={bed} title="The Art or Cozy:Elevate Your Home with Fall Decor" description="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora,Ex officiis perferendis sequi,"/>
         
          </div>

        </div>

        <footer className='mt-5' style={{backgroundColor:"rgb(240, 238, 235)"}}>
          <div className="container mt-5">
            <div className="row">
             <div className='d-flex justify-content-around m-3 flex-wrap' style={{opacity:"0.9"}}>
              
              <div className='mt-5 col-md-3 col-sm-10'>
                <ul>
                  <p className='fw-semibold fs-5'>Furnilux</p>
                  <p className='font-size2 '>designing Dreams,Crafting Comfort</p>
                  <li>+00 123 123 123</li>
                  <li>Furnilux@business.com</li>
                  <li>123 homest Lane, Suite <br /> 456 Civil, United Interiors</li>
                </ul>
              </div>

              <div className='mt-5  col-md-3 col-sm-10 '>
                <ul>
                  <p className='fw-semibold fs-5'>About Us</p>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Popular question</li>
                </ul>
              </div>

              <div className='mt-5 col-md-3 col-sm-10'>
                <ul>
                  <p className='fw-semibold fs-5'>What's Popular</p>
                  <li>King size Bed</li>
                  <li>Sofas</li>
                  <li>Chairs</li>
                  <li>Decorative Lamps</li>
                </ul>
              </div>

              <div className='mt-5 col-md-3 col-sm-10 '>
                  <p className='fw-semibold fs-5'>Get 15% off your first order!</p>
                  <p className='' style={{fontSize:"14px"}}>Subscribe our newsletter and get discount for <br /> your first order! also recieved update and more</p>
                  <input type="text" className='rounded-pill w-100 border-1 p-2' placeholder='Email Addresss'/>
                  <button style={{marginLeft:"-90px",backgroundColor:"rgb(0, 22, 32)"}} className='rounded-pill p-1 ps-2 pe-2 border-0 text-white'>Subscribe</button>
              </div>
            </div>


            </div>
          </div>
        </footer>

    </div>
  );
}

export default App;
