import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import User from './Users/User';


function App() {

  const [data, setData] = useState([]);

  useEffect( ( ) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
    },[] )
    
    const deleteUserHandler = (id) => {
        setData(data.filter((item) => item.id !== id))
    }


  return ( 
    <div className='App'>
      {data.map((item, index) => {
    return (
        <User 
        id={item.id}
        key={item.id}
        fullName={item.name}
        userName={item.username}
        company={item.company.name}
        email={item.email}
        phone={item.phone}
        website={item.website}
        click={ () => deleteUserHandler(item.id)}
         />
      
    )
  })}
    </div>
)
}

export default App;
