import { useState } from 'react';
import './App.css';
import User from './Users/User';
import useUsers from './Users/useUsers';


function App() {

  const {data, loading} = useUsers()
  const [users, setUsers] = useState(data)
  
  const AddingUser = () => {

    const deleteUserHandler = (userIndex) => {
      setUsers(data)
      console.log(users);
  }

  
   return ( data.map((item, index) => {
      return (
          <User 
          key={item.id}
          fullName={item.name}
          userName={item.username}
          company={item.company.name}
          email={item.email}
          phone={item.phone}
          website={item.website}
          click={ () => deleteUserHandler(index)}
           />
        
      )
    })
  )}

  return (
    <div className="App">
     { loading ? <h1>malumot kelmadi</h1> 
               : AddingUser()
     }
    </div>
  );
}

export default App;
