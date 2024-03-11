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
    <div className="trip-h">
      <h1 className="trip-h1">Users</h1>
      <div className="trip-list">
        {trips &&
          trips.map((trip) => {
            return (
              <div className="trips">
                <div className="card">
                  <h2>{trip.name}</h2>
                  <h3>{trip.username}</h3>
                  <p>
                    Email:
                    <a href="">{trip.email}</a>
                  </p>
                  <p>
                    Website: <a href="">{trip.website}</a>
                  </p>
                  <p>
                    Address: <a href="">{trip.address.city}</a>
                  </p>
                  <p className="trip-end-p">
                    Phone: <a href="">{trip.phone}</a>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TripList;
