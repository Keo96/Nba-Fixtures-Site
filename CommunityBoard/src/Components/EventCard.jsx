import React from 'react';
import { FaBasketballBall, FaTicketAlt, FaShareAlt, FaCalendarPlus } from 'react-icons/fa';
import './EventCard.css';

const EventCard = ({ event }) => {
    const buyTickets = () => {
        window.open(event.ticketPurchaseUrl, '_blank');
      };
      
    return (
  <div className="card">
    <div className="header">
      <h2>{event.name}</h2>
      <FaBasketballBall />
    </div>
    <div className="body">
      <div className="logo_and_time">
        <img class="team-logo" src={event.logoPaths.home} alt="Home Team Logo" style={{ marginRight: 10 }} />
        <h4> {event.time} </h4>
        <img class="team-logo" src={event.logoPaths.away} alt="Away Team Logo" />
      </div>
      <h4> {event.date} </h4>
      <p>{event.venue} - {event.city}</p>
    </div>
    <div className="footer">
      <button onClick={buyTickets}><FaTicketAlt /> Buy Tickets</button>
      <button><FaShareAlt /> Share</button>
      <button><FaCalendarPlus /> Add to Calendar</button>
    </div>
  </div>
);
};

export default EventCard;
