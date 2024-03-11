import { useState, useEffect } from "react";
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="trip-list">
      {trips &&
        trips.map((trip) => {
          return (
            <div className="trips">
              <div className="card">
                <p>Email:{trip.email}</p>
                <p>Website:{trip.website}</p>
                <p>Address:{trip.address.city}</p>
                <p>Phone:{trip.phone}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TripList;
