import './App.css'
import Card from './Components/Card/Card'

function App() {

  return (
    <>
      <div className='flex justify-around'>
        <div>
          <Card></Card>
        </div>
        <div className='w-1/2'>
          <h1 className='text-2xl lg:text-4xl'>This is cart</h1>
          <div className='flex justify-around text-2xl mt-5'>
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
