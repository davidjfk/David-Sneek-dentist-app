import React from "react";

const format_time = time => (time < 10 ? `${time}:00u` : `${time}:00u`);

 export const AppointmentInMonthDay = ({ day, time, client, assistant }) => (

  <div className="appointment">
    <span className="dayAsNumber">{day}</span>    
    <span className="time">{format_time(time)}</span>
    <span className="client">{client}</span>
    <span className="assistant">{assistant}</span> 
  </div>
);
