import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import journal from "../images/journal.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 52: A 2020 review</h1>
        <small>December 26, 2020</small>

        <article>
          <p>Reflection is as much about celebration as about letting go.</p>
          <hr />

          <h3>Family</h3>
          <p>
            There was sickness and I was scared. However, looking back things
            were mostly good. I made people angry, then they forgave me. I am
            trying really hard at being better at communication. I mostly missed
            my sister, a lot.
          </p>

          <h3>Friends</h3>
          <p>
            I made so many friends! I was staying at an International hostel
            with the most amazing managers and I ended up being friends with
            some wonderful people. People from different cultures, with
            different opinions; for me it's the best part about going to a new
            place. We ate together a lot; there were some really fun barbecues
            and parties. I have moved to another new city now and am hoping to
            meet more nice people :)
          </p>
          <h3>Work and Education</h3>
          <p>
            I achieved a Masters Degree in AI with a distinction! Couldn't have
            imagined a few years ago I would even opt for a masters because I
            love working and have never been a fan of academia. But here we are.
            Now I am glad that I did it although I hated not earning for a year
            (so thankful for the scholarship). I enjoyed working on my
            dissertation on calculating energy consumption by large NLP and
            Computer Vision models during training and serving. I was taught by
            some amazing lecturers and got to work with a bot!
          </p>
          <p>
            The job scene has been bleak for most people and I am hoping it will
            be better next year. DWP Digital hired me as a Software Engineer. I
            am starting in the new year. There's more on work and education in a
            previous blog{" "}
            <strong>
              <a
                href="https://shivangidas.github.io/blog/#/Outliers"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </strong>
            <br />
          </p>
          <h3>Travel</h3>
          <p>
            This was a difficult year to travel. I mostly explored Bristol and
            am now exploring Newcastle. We did get a little soft period in
            October and were able to visit Scotland. All the places I visited
            this year in unordered list:
            <ul>
              <li>
                Bristol: Explored so much of the city. The fun part about
                Bristol is you will discover new things in your own street on
                every walk thanks to the creative graffiti artists of the city
                (including Banksy).
              </li>
              <li>
                Newcastle: I have just started but already loving the jungle
                like parks and the beaches.
              </li>
              <li> Glasgow: Spent the most amazing autumn afternoon here.</li>
              <li>
                Edinburgh: It rained the entire day we were here and was still
                fun. I so wanna go again :)
              </li>
              <li>
                Highlands: Oh how I wish I'll get to hike these in 2021. The
                mountains are gorgeous and the lochs beyond beautiful.
              </li>
              <li>
                London: I went for some work and spent the rest of the day
                exploring. London certainly does justice to the hype :D Here's
                hoping it will be okay to visit places again soon.
              </li>
            </ul>
          </p>
          <h3>Emotions</h3>
          <p>
            Things have always been hard but especially this year in isolation
            and away from my usual people. I am thankful to just have survived.
            I kept a gratitude journal, listing things am thankful for each day,
            and that has helped a lot.{" "}
            <Image
              src={journal}
              alt="Screenshot of my gratitude journal"
              caption="Snippet from my gratitude journal"
              width="100%"
              height="auto"
            />
          </p>
          <h3>Finances</h3>
          <p>
            I'm kinda proud of how well I managed my budget being a student
            after working for 5 years. Not so proud of how little I care about
            clothes. Major expenditure were electronics as always. I am looking
            forward to start earning again and buying a nice camera. My new city
            is too beautiful to be photographed on my cheap camera phone.
          </p>
          <h3>Hobbies</h3>
          <p>
            I learned to make comics! Chickened out by how bad my drawings
            looked. I also blogged more often towards the end of the year and
            want to continue doing that in the new year.
          </p>
          <h3>Books</h3>
          <p>
            I read few but incredible books this year. Also learned to love
            non-fiction. I am so thankful for having the time to read again
            after completing my masters. Just going to leave my{" "}
            <strong>
              <a
                href="https://www.goodreads.com/user/year_in_books/2020/31583373"
                target="_blank"
                rel="noopener noreferrer"
              >
                year in books
              </a>
            </strong>{" "}
            from Goodreads here.
          </p>
          <h3>Health</h3>
          <p>
            With a pandemic, health has been a universal priority this year.
          </p>
          <h4>What went right</h4>
          <p>
            I was lucky enough that me and my family were mostly healthy and not
            affected by the virus. I ate really healthy this year considering I
            was on a student budget in the UK :) My weight stayed at a constant
            50. This year was about walks. As for my mental health, I learned to
            let go of stress towards the end of the year after being diagnosed
            with a stress related sickness.
          </p>

          <h4>What didn't go so well</h4>
          <p>
            Was diagnosed with stress-related issues and injured my knee.
            Although I have discovered the knee needs regular exercise for a
            stronger core and hips and I need to get better shoes.
          </p>
          <h4>My hope for 2021</h4>
          <p>
            Hoping I don't get the virus. Would like to continue exercising
            regularly, maybe get in some hiking. Looking forward to beach walks
            :)
          </p>
          <hr />
          <p>That's all for this year!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
