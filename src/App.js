import React, { useEffect, useState } from 'react'
import { db } from './firebase-config';
import { collection, doc, getDocs } from "firebase/firestore"; 
import { addDoc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';


function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const usersCollectionRef = collection(db, "crud");

  const updateAge = async (id, age) => {
    // console.log(id, age)
    const usersDoc = doc(db, "crud", id );
    const newAge = {age:age+5};
   await updateDoc(usersDoc, newAge)
  }


  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      age: age
    });
  }

  const deleteUser = async (id) => {  
    // await deleteDoc(doc(db, "crud", id)); or below line
    const usersDoc = doc(db, "crud", id );
    await deleteDoc(usersDoc);
  }

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //---------------------------------------------------
      console.log(data);
      const docsRef = data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
      
      }))
      console.log(docsRef);
      // ------------------------------------------------------ or below line
      // console.log(data.docs.map((doc)=>doc.data()));
      // -----------------------------------------------------------------
      setUsers(docsRef);
    }
   
    getUsers();
  },[])

  return (
    
    <div>
      <input type='text' placeholder='Enter Name Here' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
      <input type='number' placeholder='Enter Age Here' value={age} onChange={(e)=>setAge(e.target.value)}  /><br/>
      <button onClick={createUser} >Add User</button> 

      {users.map((users)=>{
        return<div>
          <h1>Name : {users.name}</h1>
        <h1>Age : {users.age}</h1>
        <button onClick={()=> updateAge(users.id, users.age)} >Update Age</button>
        <button onClick={()=> deleteUser(users.id)} >Delete</button>
          </div>

      })}
    </div>
  );
}

export default App;
