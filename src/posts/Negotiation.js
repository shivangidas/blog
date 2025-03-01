import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import perks from "../images/perks.png";
import scripts from "../images/scripts.png";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Negotiation for introverts</h1>
        <small>March 18, 2023</small>

        <article>
          <p>
            Discussing an offer is a difficult conversation to have and I talked about it at the TechLeadJS conference recently.  This is the second part of the talk in written form.

            Find the first part here:<a href="https://shivangidas.github.io/blog/WhyNegotiate"
              target="_blank"
              rel="noopener noreferrer"> Why negotiate </a>
          </p>
          <p>
            <strong>
              Disclaimer: I am not an expert on money matters. Negotiation and personal finance are things I feel more people should be aware of and talk about.
            </strong>
          </p>
          <hr />
          <h3>First things first</h3>
          <p>
            Knowledge is your biggest tool and you need to know how much you're worth, i.e., your market value.
            Research the market rate for your responsibilities on sites such as
          </p>
          <ul>
            <li><a href="https://www.levels.fyi/"
              target="_blank"
              rel="noopener noreferrer">Levels.fyi</a></li>
            <li><a href="https://www.glassdoor.co.uk/"
              target="_blank"
              rel="noopener noreferrer">Glassdoor</a></li>
            <li><a href="https://www.payscale.com/en-gb/"
              target="_blank"
              rel="noopener noreferrer">Payscale</a></li>
          </ul>

          <p>Talk about salaries and perks with your partner, family, colleagues and friends. Make it okay to discuss money with people and fight the money taboo.
          </p>
          <p>Also keep a list of your accomplishments that you can use during reviews and in interviews. I like to call my list the brag list.
          </p>
          <h3>Your range</h3>
          <p>There are various tips and tricks to negotiation but the best thing you can begin with is getting information and deciding some numbers. This is something that has worked for me.</p>
          <p>You need to come up with 3 numbers. These numbers are just for you, do not tell this to any recruiters or managers. We call them: </p>
          <ul>
            <li>Walk-away offer</li>
            <li>Happy offer</li>
            <li>Hell yes offer</li>
          </ul>
          <p>
            Walk-away offer: the minimum that you want or need, whichever is higher. If you are into making budgets or at least have a rough idea about your expenditures, this number is all that plus more so you can get started towards achieving your goals.
            I call this the walk away offer - anything less than this and we walk because it is not enough to build any real wealth.
          </p>
          <p>
            Happy offer: the offer you actually want, this is the what the best in the industry, that is people like you, should be making. This is the number where you can achieve your goals faster. I call it the Happy number or offer.
          </p>
          <p>
            Hell yes offer: come up with an insane ridiculously high offer, that you think is unachievable. Why? Because we often limit our own worth. Imposter syndrome anyone? This number should help make it easy for you to negotiate when you’re offered something more than your happy number and you want to say 'Hell Yess!'. Because you must always negotiate. There are no exceptions.
          </p>
          <p>I have purposefully not added any example numbers here, you need to research and come up with these based on your circumstances and the kind of responsibilities you handle at work.
          </p>
          <h3>Prepare your script</h3>
          <p>One of the rules of negotiation is to never to be the first one to give the salary expectation and never disclose your current salary. You, however, do need to ask for the budget the company has for that role. You have prepared your range, you know where it falls and should be ready to talk accordingly. </p>
          <p>Since talking about money is unnecessarily difficult, make sure to have a script prepared. Here's some examples of what I would say in different situations. I learned this from Alison Taffel Rabinowitz in her salary negotiation masterclass
            <a href="https://www.thefinishingschool.co/"
              target="_blank"
              rel="noopener noreferrer"> 'Get your money honey'</a>.
Alison works with women, coaching them to get paid more.
          </p>
          <Image
            src={scripts}
            alt="Negotiation scripts"
            caption="Scripts for different scenarios"
            width="100%"
            height="auto"
          />
          <p>It always helps to have multiple offers at the same time. You can and should also use your current position as a leverage when moving to a different company. This blog <a href="https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/"
            target="_blank"
            rel="noopener noreferrer"> My ten rules for negotiating a job offer by Haseeb Qureshi </a> is packed with very detailed tips on negotiation.</p>
          <p><strong>In any conversation, remember to be kind, optimistic and honest.</strong></p>

          <h3>There's more on the table</h3>
          <p>Some companies would have a set list of perks they give their employees. Which is great but since we have a list of priorities we know at this point which perks would make more sense to us and we should 100% ask to discuss that. These come directly from what you value most. I would focus on more paid time-off, working remotely, and training budget plus leadership training.
            </p>
          <Image
            src={perks}
            alt="List of perks other than pay"
            caption="Take your pick"
            width="100%"
            height="auto"
          />
          <p>A lot of this depends on company policy and sometimes you may get a 'no we can’t do that'. However it’s always worth asking. Sometimes things that mean a lot to you may be something the company hasn’t considered yet and is willing to provide. If nothing this at least starts the conversations around these perks so companies know what employees value today, for example the 4-day work week trials happening in the UK. Do it for everyone after you.</p>

          <h3>Reading Recommendations</h3>
          <ul>
            <li>
              <a href="https://www.goodreads.com/en/book/show/26156469"
                target="_blank"
                rel="noopener noreferrer">Never split the difference </a> by Chris Voss. (I need to read it again. :)
            </li>
            <li>
              <a href="https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/"
                target="_blank"
                rel="noopener noreferrer">My ten rules for negotiating a job offer</a> by Haseeb Qureshi. This is gold.
            </li>
            <li><a href="https://www.goodreads.com/book/show/61324281-girls-that-invest"
              target="_blank"
              rel="noopener noreferrer">Girls that Invest</a> by Simran Kaur. Love it for fuss-free knowledge of the share market. I'm also doing their masterclass currently.</li>
          </ul>
        </article>
        <PostFooter />
      </>
    );
  }
}
export default Post;