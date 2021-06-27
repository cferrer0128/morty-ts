import React from 'react';

import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";

  
function App(this: any) {

  const [character, setCharacter] = useState([]);

  const sendGetRequest = async () => {
    const resp = await axios.get('https://rickandmortyapi.com/api/character');
  
    setCharacter(resp.data.results);

    window.localStorage.setItem('data',JSON.stringify(character));

};

 

  const saveHandler = ((e:any) =>{
   
    window.localStorage.setItem('item',JSON.stringify(e));
  });

  const saveAllHandler = () =>{
   
    window.localStorage.setItem('data',JSON.stringify(character));
  }

  useEffect(()  => {
  
    sendGetRequest();

}, []);
 
  return (
    <div className="App">
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
        </li>
    </ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="list-group">
  {
    
    character.map(((data:any,index) => (
      <div key={index}>
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{data.name}</h5>
        <button className="btn btn-primary" type="button" id="btn" onClick={(e) => saveHandler(data)}>Save Item</button>         
        </div>
        <img src={data.image} width="100px" ></img>
        <p className="mb-1">{data.species}</p>
        <small>{data.status}</small>
      </a>         
  </div>
     
  )))}
    <button className="btn btn-primary" type="button" id="btn" onClick={() => saveAllHandler()}>Save All</button>     
 
</div>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
       
    </div>
  );
}

export default App;
