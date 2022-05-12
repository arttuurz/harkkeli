import React, {useEffect, useState} from 'react'
import './App.css';
import AddUser from './components/AddUser';
import User from './components/User';

const App = () => {

const [users, setUsers] = useState([]);
useEffect(()=>{
fetchData();
},[])

const fetchData = async () =>{
  await fetch ('http://localhost:3500/lelut')
  .then((res) => res.json())
  .then((data)=>setUsers(data))
  .catch((err)=>{
    console.log(err);
  })
}

const onAdd = async (name,suositusika)=>{
  await fetch('http://localhost:3500/lelut',{
    method: 'POST',
    body:JSON.stringify({
      name:name,
      suositusika:suositusika
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
  .then((res)=>{
    if(res.status !== 201){
      return
    }else{
      return res.json();
    }
  })
  .then((data)=>{
    setUsers((users)=>[...users],data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

const onDelete = async (id) => {
  await fetch(`http://localhost:3500/lelut/${id}`,{
    method: 'DELETE'
  })
  .then((res)=>{
    if(res.status !== 200){
      return
    }else{
      setUsers(users.filter((user)=>{
        return user.id !== id;
      }))
    }
  })
  .catch((err)=>{
    console.log(err);
  })
}
console.log(users)
  return (
    <div className='App'>
      <h3>Jostain syystä ei anna lisätä "leluja", mistähän johtuu?<br></br>
        Voi kyllä lisätä jos kirjoittaa db.json tiedostoon ja päivittää.<br></br>
        Muokkausta en kerennyt tehdä.
        Poistaminen kyllä toimii
      </h3>
      <br/>
      <AddUser onAdd={onAdd}/>
      <div>
        {users.map((user)=>(
          <User 
          id={user.id} 
          key={user.id} 
          name={user.name} 
          suositusika={user.suositusika} 
          onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

export default App;
