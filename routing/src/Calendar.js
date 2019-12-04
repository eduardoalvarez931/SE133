import React, {useState, useEffect} from 'react';
//useState holds information we get from api
//useEffect runs the fetch call when component mounts

function Calendar() {

  useEffect(()=> {
    fetchItems();
  },[]); //[] means useEffect will run when component mounts.
  //add asyc when comming from database
  
  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    
    const items = await data.json();
    //found under console
    console.log(items);
    
  }


  return (
    <div >
      <h1> Calendar page </h1>
    </div>
  );
}

export default Calendar;
