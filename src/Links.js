import React, { Component } from "react";
import Bio from "./components/Bio";
import PostLink from "./components/PostLink";
export default class Links extends Component {
  	render() {
    	return (
      		<section>
        	<Bio />
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
			description="Micro-blog, TIL"
			icon="&#9889;"
			/>
			<PostLink 
			name="Python tidbits"
			link="/Python"
			date="April 22, 2019"
			description="My notes on Python. As seen on Kaggle."
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
      </section>
    );
  }
}