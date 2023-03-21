import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import { ratioMap, genderParity, gpg, racialPayGap, moneytaboo, values } from "../images";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Negotiation for introverts - Why negotiate</h1>
        <small>March 19, 2023</small>

        <article>
          <p>
            Discussing an offer is a difficult conversation to have and I talked about it at the TechLeadJS conference recently.  This is the first part of the talk in written form.

            Find the other part here:{" "}
            <a href="https://shivangidas.github.io/blog/Negotiation"
              target="_blank"
              rel="noopener noreferrer">
              Negotiation for introverts</a>
          </p>
          <p>
            <strong>
              Disclaimer: I am not an expert on money matters. Negotiation and personal finance are things I feel more people should be aware of and talk about.
            </strong>
          </p>
          <hr />
          <h3>Unlearn that money corrupts</h3>
          <p>
            I come from a middle-class Indian family. We were taught in order to be happy you need to be satisfied with what you have. In order to save for the future, live below your means. In the current media too it’s all about cutting down on things and not make more money and accumulate assets. It has taken a lot of work to unlearn that. I have been actively learning to invest and how to live off assests. When adults don't know how to make money, they teach their kids that money should not be the goal and point out rich people who are screwing up earth and people for profits. Bad people are bad not because of money, they just suck. Money in the hands of regular people is a means to do good.
          </p>
          <h3>Gender Pay Gap</h3>
          <p>Before I begin talking about gender pay gap I want to acknowledge the lack of data for LGBTQ+ community. Pretty sure the pay gap is bad for them too.</p>
          <p>According to the Organisation for Economic Co-operation and Development,
          the gender wage gap is defined as the difference between median earnings of men and women relative to median earnings of men. It is illegal to pay women and men differently for the same job in most countries. In the US we have Equal Pay Acts, the UK has the Equality Act, and yet here we are.
          </p>
          <Image
            src={gpg}
            alt="On average, women globally are paid about 20% less than men."
            caption="Gender pay gap is at an all time high of 20%"
            width="100%"
            height="auto"
          />
          <p>In UK all companies with more than 250 employees are required to submit a Gender pay gap report, stating the mean and median difference in pay and bonuses between men and women in their company. It also includes the ratio of employees at different bands of income. I did my data science project during postgrad on this data.
          Going through the reports we found that <strong>most companies with a significant pay gap claim the pay gap comes from the low ratio of women in high paying leadership roles</strong>.</p>
          <Image
            src={ratioMap}
            alt="Low representation of women in high paying positions"
            caption="Proportion of women in senior and middle management positions, 2021"
            width="100%"
            height="auto"
          />
          <p>The chart here plots the proportion of women in senior and middle management positions around the world. It shows that women all over the world are underrepresented in high-profile jobs, which tend to be better paid.</p>
          <p>When I worked in DWP Digital I saw that <a href="https://gender-pay-gap.service.gov.uk/EmployerReport/NEbsNNV5/2022" target="_blank"
            rel="noopener noreferrer">their Gender pay gap is 0 and they have a good ratio of women at all levels</a>. Here's the thing, the first stage of interviews in DWP is anonymised, there could be a correlation between them actively trying to be unbiased and the high proportion of women in all levels plus 0 pay gap. Not all correlations are causation but this just might be.</p>
          <Image
            src={genderParity}
            alt="It will take 132 years to close the gender gap"
            caption="The Global Gender Gap Index benchmarks the current state and evolution of gender parity across four key dimensions - Economic Participation and Opportunity, Educational Attainment, Health and Survival, and Political Empowerment. These reports started in 2006 and they benchmark 146 countries."
            width="100%"
            height="auto"
          />
          <h3>Racial Pay Gap</h3>
          <p>Following data is from the paper <a href="https://vanderbiltlawreview.org/lawreview/2022/10/confronting-the-racial-pay-gap/" target="_blank"
            rel="noopener noreferrer">Confronting the Racial Pay Gap published by Stephanie Bornstein</a>. These charts show that the racial pay gap now is worse than it was forty years ago in 1979. <strong>Not talking about money disproportionately affects women and people of colour.</strong></p>
          <Image
            src={racialPayGap}
            alt="Racial pay gap is worse than it was 40 years ago."
            caption="Racial pay gap is worse than it was 40 years ago."
            width="100%"
            height="auto"
          />
          <h3>Money Taboo</h3>
          <p>There has been a long standing unwritten taboo on talking about salaries. In a lot of cultures, including mine, it is considered impolite to ask people how much they earn. I don’t think that benefits us in any way. I love companies that are transparent with salary range for different resposibilities and till all companies do that it is essential that we negotiate.</p>
          <Image
            src={moneytaboo}
            alt="Taboo on talking about money leads to financial mistakes"
            caption="Vicious cycle of money taboo"
            width="100%"
            height="auto"
          />
          <p>I saw this on a <a href="https://www.forbes.com/sites/brettwhysel/2020/02/18/the-money-taboo-what-can-we-do-about-it-talk/?sh=149ad4ed64af" target="_blank"
            rel="noopener noreferrer">Forbes article about money taboo</a>. Not talking about money leads to financial ignorance that can lead to financial mistakes, which we naturally avoid talking about, strengthening the taboo.</p>
          <p>These are some global reasons why we should always negotiate because things are not yet fair and not talking about issues doesn't make them go away. There’s also inflation which you would hope companies would automatically adjust for and if they don't please bring it up.</p>
          <h3>Find you 'why', aligned with your values</h3>
          <p>Time for a quick exercise. Take a paper and pen or wherever you can, make a list of the top 10 things important to you and prioritise them. Totally okay if you don’t want to write, just mentally come up with a few. Of course values vary depending on your personal experiences and beliefs. Below are some of the most common ones</p>
          <Image
            src={values}
            alt="List of common goals and values"
            caption="List of common goals and values"
            width="100%"
            height="auto"
          />
          <p>Now when looking at these values and priorities, it’s easy to see none of them are evil or selfish. Most of them require money and time. When you discuss a promotion or an offer, you need to keep in mind you’re not just asking the market value of the job, you’re in fact making sure you can fulfil your priorities. It's much easier to discuss money when you have goals like buying a house attached to it. Having your values sorted would give you a good idea of where to focus in terms of other perks too.</p>
          <p>Next up find a few tips on <a href="https://shivangidas.github.io/blog/Negotiation"
            target="_blank"
            rel="noopener noreferrer">
            Negotiation for introverts.</a></p>
        </article>
        <PostFooter />
      </>
    );
  }
}
export default Post;