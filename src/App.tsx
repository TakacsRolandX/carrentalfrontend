import { useEffect, useState } from 'react'
import axios from 'axios'
import CarDto from './Car.dto';
import Card from './Card.tsx';
import Form from './Form.tsx';

function App() {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [newData, setNewData] = useState(true);

  useEffect(() => {
    setNewData(false)
    axios.get('http://localhost:3000/api/cars').then((res) => {
      setCars(res.data);
    })
    console.log(cars);    
  }, [newData])

  return (
    <div className='container'>
      <h1>Petrik Autókölcsönző</h1>
      <div className='row'>
        {cars.map((car) => (
          <Card car={car}/>
        ))}
      </div>
      <div className='row'>
        <Form setNewData={setNewData}/>
      </div>
    </div>
  )
}

export default App
