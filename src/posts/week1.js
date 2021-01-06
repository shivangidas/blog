import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import snow1 from "../images/snow1.jpg";
import snow2 from "../images/snow2.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 1: It's a new year!</h1>
        <small>January 3, 2021</small>

        <article>
          <p>
            Happy new year! It's a new decade (conflicted if 2020 was a new
            decade) and a special one for me personally. Things worldwide are
            shitty but wouldn't waste my breath on that; I have zero influence
            over world politics and it is idiotic to debate about it right now.
            This was also my last week of <i>vacation</i>. I'm starting work
            tomorrow!
          </p>
          <hr />
          <h3>What made me think</h3>
          <p>
            This week I realized Timnit Gebru was maybe asked to resign over a
            research very similar to mine, i.e., current NLP models are resource
            hungry and profit the privileged while the climate change they aid
            in affects the poor.{" "}
            <a
              href="https://www.technologyreview.com/2020/12/04/1013294/google-ai-ethics-research-paper-forced-out-timnit-gebru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here's an article for reference.
            </a>{" "}
            People don't stop surprising ever.
          </p>
          <p>
            I was listening to an interview of{" "}
            <a
              href="https://open.spotify.com/episode/56bhUsmZ5yNpEIMxd6ZvPR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jim Loehr
            </a>{" "}
            by Tim Ferris and he asked in it to list down when you felt most
            proud of yourself; what were your 5-7 behaviour/actions that made
            you feel real proud. Somehow it is never achieving material things
            :). Another simple question to ponder over - what will be written on
            thy tombstone? Well I am hindu, we don’t have tombstones, however,
            it was a thought-provoking exercise, try it.
          </p>
          <p>
            Did you know most people have more than the average number of arms?
            I read that on reddit.
          </p>
          <h3>Books</h3>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/33413128-beartown"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Long Utopia by Terry Pratchett and Stephen Baxter
              </a>
            </strong>
            <br />
            The fourth book in the Long Earth series; provides a nice closure
            with a hint for more if you have the imagination for it :)
          </p>
          <p>
            The book for the anti-library this week is{" "}
            <strong>
              <a
                href="https://app.thestorygraph.com/books/4e52017c-5da5-4f7e-a612-db19829efbf7"
                target="_blank"
                rel="noopener noreferrer"
              >
                World Wide Waste -How digital is killing our planet—And what we
                can do about it
              </a>
            </strong>{" "}
            by Gerry McGovern. Also, shout out to a new app I have discovered
            for books -
            <strong>
              <a
                href="https://app.thestorygraph.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The story graph
              </a>
            </strong>{" "}
          </p>

          <h3>What am I watching</h3>
          <p>
            I watched Wonder Woman 1984. I like how these movies show villains
            you can empathize with.
          </p>

          <h3>Quotes</h3>
          <p>
            In the movie, an amazonian says '...true acts of bravery like
            patience, diligence and the courage to face the truth.' It made so
            much sense.
          </p>
          <h3>What's happening</h3>
          <p>
            I experienced snow for the first time in my adult memory!
            <Image
              src={snow1}
              alt="Snow on armstrong bridge"
              caption="Armstrong bridge covered in snow"
              width="100%"
              height="auto"
            />
            <Image
              src={snow2}
              alt="Snow on armstrong bridge"
              caption="More snow"
              width="100%"
              height="auto"
            />
          </p>
          <p>
            There’s a tree in Heaton that grows trainers. The story says people
            fling worn trainers in celebration of some major event in their
            life. I found a more accurate history of the area in{" "}
            <a
              href="https://heatonhistorygroup.org/2020/09/08/where-the-shoe-tree-grows/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              this blog.
            </a>{" "}
            A place near the shoe tree was used as changing facility for Heaton
            Harriers, a running club during world war 2.
          </p>

          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
