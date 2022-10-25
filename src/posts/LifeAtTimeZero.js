import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import cabot from "../images/ViewFromCabotTower.jpg";
import christmas from "../images/ChristmasSteps.jpg";
import oldTown from "../images/OldTown.jpg";
import gull from "../images/gull.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Life at Time Zero</h1>
        <small>October 1, 2019</small>

        <article>
          <p>
            It is cold. Although after checking the historical weather data I've
            learnt it was supposed to be colder (global warming is real!).
          </p>
          <hr />
          <h3>Begin at the start</h3>
          <p>
            I have come to Bristol, England, for an MSc in Machine Learning.
            It's been a week; a long enough time for an update :){" "}
          </p>
          <h3>Name, place, animal, thing</h3>
          <p>
            The city is colourful, the people helpful and polite, and the roads
            are hilly. Hilly is an understatement, it's more like climbing a
            mountain (no more gym required). There are gulls everywhere and
            jackdows (crow-like bird). I am often visited by this Herring gull.
            </p>
            <Image
              src={gull}
              alt="Herring gull sitting on a window ledge"
              caption="Herring gull"
              width="100%"
              height="auto"
            />
            Had a quite nice Freshers weeks. Went to a couple of food events and
            got a plant (in the picture above). Didn't attend any parties
            because let's face it, I'm 28 and I hated clubbing even in my early
            twenties. Been eating a lot, most of the food cooked on my own (so
            proud). 
          
          <p>
            Explored the city a little </p>
            <Image
              src={cabot}
              alt="View of Bristol from the Cabot Tower"
              caption="View from the Cabot Tower"
              width="100%"
              height="auto"
            />
            <Image
              src={oldTown}
              alt="A street in the old Bristol"
              caption="Street in Old Bristol. Contains one of the oldest functioning theatres of England."
              width="100%"
              height="auto"
            />
            <Image
              src={christmas}
              alt="Christmas Steps, Bristol"
              caption="The famous Christmas Steps."
              width="100%"
              height="auto"
            />
          
          <p>The place already feels like home.</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
