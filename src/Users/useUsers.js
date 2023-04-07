import  { useEffect, useState } from "react";

const initialState = {
  data: null,
  loading: true
}


function useUsers() {
  
  const [state, setState] = useState(initialState)

  useEffect( ( ) => {
    setState( {data: null, loading: true });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setState({data: data, loading: false})
        },2* 1000)
      })
  
  }, [])
  
  return state;
}

export default useUsers;