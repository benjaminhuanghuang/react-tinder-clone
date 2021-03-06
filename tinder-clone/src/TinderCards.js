import React, { useState, useEffect } from "react";

import {db} from "./firebase"
//
import TinderCard from "react-tinder-card";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  const fetchPeople = () => {
    db.collection("people")
    .onSnapshot((snapshot) => {
      setPeople(
        snapshot.docs.map((doc) => doc.data())
      );
    });
  }

  useEffect(()=>{
    fetchPeople();
  }, [])


  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard className="swipe" key="person.name" preventSwipe={["up", "down"]}>
            <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
