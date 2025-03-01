import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Adding robots.txt to my blog</h1>
        <small>Feb 10, 2025</small>

        <article>
          <p>
            Prevent AI creepy crawlies from accessing my content.
          </p>
          <hr />
          <h3>The horror</h3>
          <p>
            
            Most platforms (Instagram) are going "opt-out or you're automatically in" and we (auto) consent to allow them to use our data and original content we put on their platform for training AI models.
            
            I have been actively looking for ways to stop companies from using my blog posts. It's not on their platform so you would think they would leave it alone. You'd be wrong.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              Here is the {" "}
              <a
                href="https://www.cyberciti.biz/web-developer/block-openai-bard-bing-ai-crawler-bots-using-robots-txt-file/"
                target="_blank"
                rel="noopener noreferrer"
              >
                guide to block AI crawler bots 
              </a>{" "}
              using robots.txt file. 
            </li>
            <li>Interesting article on {" "}
              <a
                href="https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                trapping and tricking AI scrapers that ignore robots.txt
              </a>
            </li>
          </ul>
          <hr />
          <h3>What is robots.txt file?</h3>
          <p>
            A text file in the root folder of your website that bots like search engine crawlers refer to check how to crawl and index pages their platform. You can use it to allow and stop bots.
          </p>
          
          <hr />
          <h3>Syntax</h3>
          <p>
            <pre>
              User-agent: GPTBot <br />
              Disallow: /
            </pre>
            Feel free to take a look at my <a
                href="https://www.shivangidas.com/blog/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
              >
                robots.txt file 
              </a> for a list of bots I'm disallowing.
          </p>
          <hr />
          <h3>Verdict</h3>
          <p>
            It makes me really sad to see large companies suing people for using anything mildly related to them while using our data with zero permission or compensation. I understand adding a robots.txt is not foolproof but a small prevention.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
