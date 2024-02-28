import React from 'react';
import EventCard from './Components/EventCard';
import events from './Data/events';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <h1> Game Night Showdown</h1>
      <div className='card-container'>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
      </div>
    </div>
  )
}

export default App