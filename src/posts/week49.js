import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import jesmond from "../images/jesmondDene.jpg";
import newcastle from "../images/newcastle.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 49: New city</h1>
        <small>December 5, 2020</small>

        <article>
          <p>
            I moved to Newcastle this week! I missed posting last week since I
            was busy packing, saying goodbyes, moving and exploring Bristol one
            last time :). I could not sleep on the ride here so ended up
            watching the scenery. Saw many rainbows, there was a full moon, the
            fields reminded me of Scotland, and there were many pretty houses.
            Newcastle so far has been kind to me with a couple of sunny days
            where I could get to know the city. I'm looking forward to my stay
            here.
          </p>
          <hr />
          <h3>What made me think</h3>
          <p>
            Was taking to a person doing masters in psychology for education and
            he mentioned that it was not cool that we categorise the mind as a
            separate entity. We should consider the whole body; our interactions
            with our environment make us up. We are not only our mind. I drew
            the insight that since this was the thinking it seeped into AI too.
            The things we consider intelligent like playing chess is what we
            tried to train the machines to do. But wouldn’t you rather have a
            robot taking out your garbage? That’s not considered intelligent and
            hence wasn’t the first things we wanted to try with AI.
          </p>
          <p>
            Sometime later I came across this article in Guardian by Josh
            Wilbur:
            <strong>
              <a
                href="https://www.theguardian.com/news/2020/nov/26/life-on-the-inside-as-a-locked-in-patient-jake-haendel-leukoencephalopathy?mc_cid=429d7e1486&mc_eid=3a522e62a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                'Is anybody in there?' Life on the inside as a locked-in
                patient.
              </a>
            </strong>{" "}
            It raises the question if you had to choose whether you'd have{" "}
            <i>a body without a mind or a mind without body?</i> It's a long
            read about a person in a locked-in syndrome, i.e., he couldn't move
            or react but was fully conscious. I know what I would choose after
            reading about the frustrations of this guy.
          </p>

          <h3>Quotes</h3>
          <p>
            <strong>Don’t let anything go into you head unexamined</strong>
            <br />
            Not really hard, just gotta be conscious of what I'm hearing,
            reading or thinking; no big deal :D
          </p>

          <h3>Music</h3>
          <p>Eminem for some reason. Helps me write/code.</p>
          <h3>What am I doing</h3>
          <p>
            Exploring Newcastle upon Tyne.  </p>
            <Image
              src={newcastle}
              alt="Newcastle, Tyne Bridge in background"
              caption="Newcastle with Tyne bridge in the background"
              width="100%"
              height="auto"
            />
            <Image
              src={jesmond}
              alt="Jesmond Dene Waterfall"
              caption="Jesmond Dene Waterfall"
              width="100%"
              height="auto"
            />
         
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
