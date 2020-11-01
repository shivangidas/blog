import React, { Component } from "react";
import Bio from "./components/Bio";
import PostLink from "./components/PostLink";
export default class Links extends Component {
  render() {
    return (
      <section>
        <Bio />
        <PostLink
          name="The Travelling Cat Chronicles"
          link="/TravellingCat"
          date="October 27, 2020"
          description="Book review"
          icon="&#128218;"
        />
        <PostLink
          name="The Overstory"
          link="/Overstory"
          date="September 10, 2020"
          description="Book review"
          icon="&#128218;"
        />
        <PostLink
          name="Hooks"
          link="/Hooked"
          date="June 25, 2020"
          description="React | Code-Snippet"
          icon="&#9889;"
        />
        <PostLink
          name="Standard Deviation"
          link="/HowMean"
          date="May 20, 2020"
          description="Notes | Stats"
          icon="&#9889;"
        />
        <PostLink
          name="Life at Time Zero"
          link="/LifeAtTimeZero"
          date="October 01, 2019"
          description="Major Life Update"
          icon="&#10024;"
        />
        <PostLink
          name="Shapely values"
          link="/ShapValues"
          date="September 09, 2019"
          description="Machine Learning | Micro-blog"
          icon="&#9889;"
        />
        <PostLink
          name="Partial Dependence Plots"
          link="/PartialPlots"
          date="August 06, 2019"
          description="Machine Learning | Micro-blog"
          icon="&#9889;"
        />
        <PostLink
          name="Permutation Importance"
          link="/PermutationImportance"
          date="June 31, 2019"
          description="Machine Learning | Micro-blog"
          icon="&#9889;"
        />
        <PostLink
          name="The Scholarship Story"
          link="/ScholarshipStory"
          date="June 11, 2019"
          description="List of scholarships in Europe and UK."
          icon="&#127891;"
        />
        <PostLink
          name="Simple deep clone in JavaScript"
          link="/DeepCloneJS"
          date="June 04, 2019"
          description="JavaScript | Micro-blog | Code Snippet"
          icon="&#9889;"
        />
        <PostLink
          name="Python tidbits"
          link="/Python"
          date="April 22, 2019"
          description="Python | Code Snippets"
          icon="&#11088;"
        />
        <PostLink
          name="What's in a name?"
          link="/Overfitted"
          date="April 15, 2019"
          description="Why is this blog called Overfitted? Why does it even exist?"
          icon="&#10024;"
        />
        <PostLink
          name="Service Workers"
          link="/ServiceWorkers"
          date="April 4, 2019"
          description="Did you know this blog runs offline, too?"
          icon="&#127873;"
        />
        <PostLink
          name="My relationship with React"
          link="/ReactAndMe"
          date="March 31, 2019"
          description="It has been bittersweet."
          icon="&#127881;"
        />
        <PostLink
          name="Good Omens"
          link="/GoodOmens"
          date="May 12, 2016"
          description="Book review"
          icon="&#128218;"
        />
      </section>
    );
  }
}
