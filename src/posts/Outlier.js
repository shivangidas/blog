import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Insights from Outlier</h1>
        <small>December 3, 2020</small>

        <article>
          <p>
            I was reading Outliers by Malcolm Gladwell in October and ended up
            reflecting on my successes and failures till now. I have just
            completed my masters in Machine Learning with a distinction. It was
            gruelling and feels like an incredible feat now that I look back on
            it.
          </p>
          <p>
            <strong>
              Disclaimer: I don’t consider myself to be an outlier in any way
              but the book has led me to reflect upon my own successes and
              notice the sheer amount of luck involved with every opportunity I
              ever had.
            </strong>
          </p>
          <p>
            Before deciding to do a masters in ML, I had been part of a company
            that was working in AI in video analytics and security. I had 4-5
            job offers, and I chose this company mostly because the people in my
            interview talked about books. To understand my fascination with
            reading, I can trace back the luck factor to my childhood. My
            grandfather had a personal library and I was excited by the idea of
            owning so many books. I was in an I.C.S.E. school where reading was
            encouraged. My relatives owned bookstores, which meant I had easy
            access to books from a young age in a town with very few libraries.
            In fact the libraries that did exist were far and didn’t stock
            contemporary or children’s books. In my relatives' bookstores I was
            allowed to read any book and return them if I didn’t break the spine
            :D
          </p>
          <p>
            I got into sci-fi fast and ended-up reading a lot of Asimov on
            recommendation from my computer teacher. I had a latent interest in
            AI because of that which bloomed when I joined AllGoVision. I could
            see for the first time actual use of AI. My mentor there encouraged
            me to learn about it even though my job was web development. My
            sister was then in academics and she suggested that I look into
            scholarship opportunities abroad.{" "}
          </p>
          <p>
            I had applied to the University of Bristol through the Chevening
            Scholarship but didn’t get it. The University suggested I apply for
            the British Council scholarship for women in STEM which I did
            receive. I came to Bristol and through the British Council was
            offered to enrol into a mentorship program. Covid hit and pretty
            much all chances of securing a job evaporated. I came to know about
            civil services through another girl in the mentorship program. I
            applied for different roles and was offered the position of Software
            Engineer in DWP digital, Newcastle. I am going to start in January.
          </p>
          <p>
            Throughout this journey in UK everything that happened I can trace
            back to something/somewhere I got lucky (or luckier than others) and
            received the right information at the right time. I am grateful for
            all of it.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
