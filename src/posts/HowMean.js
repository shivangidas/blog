import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Mean and Standard Deviation</h1>
        <small>May 20, 2020</small>

        <article>
          <h3>Mean</h3>
          <p>
            Mean or expectation gives the average value of a set of
            quantities/items; the sum of quantities divided by the number of
            quantities.
          </p>
          <h3>Variance</h3>
          <p>
            Variance is the squared difference between the mean and the item
            value, normalised with the number of items. Using squared difference
            instead of absolute helps to emphasize on the outliers.
          </p>
          <h3>Standard Deviation</h3>
          <p>
            Square root of variance is the standard deviation. Together with
            mean, standard deviation represents the spread of items around the
            mean allowing us to make claims like 90% items are within 3 units of
            mean, etc. It also helps to get the statistical significance of a
            quantity.
          </p>
          <h3>Empirical rule</h3>
          <p>
            When the quantities are normally distributed (make them when they
            are not using{" "}
            <a
              href="https://github.com/shivangidas/Theorems/blob/master/CentralLimitTheorem.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Central Limit Theorem
            </a>{" "}
            ), the Empirical rule says that 68% of the items are within 1
            standard deviation, 95% within 1.96 standard deviation and 99.7%
            within 3 standard deviation.{" "}
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
