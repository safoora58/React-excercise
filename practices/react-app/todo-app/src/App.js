import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navebar from './Navebar/Navebar';
import Article from './Article/Article';
import Product from './product/product';
import './App.css';
import User from './Users/User';
import Prop from './Prop/Prop';
import Spreadprop from './Spread-prop/Spreadprop';
import Defaultprop from './Defaultprop/Defaultprop';
import Modal from './Modal/Modal';

export default function App() {

  {/* spread props */ }
  const allProduct = [
    { id: 1, title: 'laleh', image: 'f1.jpg', price: 669 },
    { id: 2, title: 'sonbol', image: 'f2.jpg', price: 55 },
    { id: 3, title: 'rose', image: 'f3.jpg', price: 355 }
  ]
  {/* default props */ }
  const allFlower = [
    { id: 1, title: 'laleh', image: 'f1.jpg', price: 669 },
    { id: 2, title: 'sonbol', image: 'f2.jpg' },
    { id: 3, title: 'rose', image: 'f3.jpg', price: 355 },
    { id: 4, title: 'lili', price: 223 }
  ]


  return (
    <div >
      <Header />
      <hr />
      <User></User>
      <User></User>
      <User></User>
      <Prop name="prop" />
      <Prop name="Humanity" year="2022" />
      <Prop name="earth" year="2000" />
      <Prop name="planet" year="1890" />
      <Prop name="stars" year="1980" />
      <Navebar ></Navebar>

      <div className='container'>
        <Product title="Asus" image="download.png" price={120} count={5} />
        <Product title="HP" image="HP.Jpg" price={250} count={0} />
        <Product title="Acer" image="Acer.Jpg" price={300} count={15} />
      </div>

      {/* spread props */}
      <div className='container'>
        <Spreadprop {...allProduct[0]}>
          <button>OFF %50</button>
        </Spreadprop>
        <Spreadprop {...allProduct[1]}>
          <button>OFF %20</button>
        </Spreadprop>
        <Spreadprop {...allProduct[2]}>
          <h2>off %25</h2>
        </Spreadprop>
      </div>

      {/* default props */}
      <div className='container'>
        <Defaultprop {...allFlower[0]} />
        <Defaultprop {...allFlower[1]} />
        <Defaultprop {...allFlower[2]} />
        <Defaultprop {...allFlower[3]} />
      </div>



      <div className='containerArt'>
        <Article />
        <Article />
      </div>
      <Footer />
      <hr />

      
        <Modal message= {45}>
          <p>  ثبت نام شما با موفقیت انجام شد   </p>
          <ul>
            <li><a>بازگشت </a></li>
            <li><a>تایید</a></li>
          </ul>
        </Modal>
     
    </div>
  );
}

