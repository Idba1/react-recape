import { useState } from 'react';
import './App.css'
import Card from './Components/Card/Card'

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (product) => {
    const isExist = cart.find((pd) => pd.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      alert("Successfully added to cart!");
    } else {
      alert("Already in cart...");
    }
  };

  return (
    <>
      <div className='flex justify-around text-white'>
        <div>
          <Card handleCart={handleCart}></Card>
        </div>
        <div className='w-1/2'>
          <h1 className='text-2xl lg:text-4xl'>This is cart</h1>
          <div className='flex justify-around text-2xl mt-5'>
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
          {cart.map((product) => (
            <div key={product.id} className='flex justify-around text-2xl mt-5'>
              <h5>{product.title.slice(0,10)}</h5>
              <h5>{product.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
