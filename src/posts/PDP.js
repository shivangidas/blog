import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
import Image from "../components/image";
import pdp_plot from "../images/pdp-min.PNG";
class Post extends Component {
  render() {
    var code = "from matplotlib import pyplot as plt\nfrom pdpbox import pdp, get_dataset, info_plots\n# Create the data that we will plot\npdp_goals = pdp.pdp_isolate(model=tree_model, dataset=val_X, model_features=feature_names, feature='Goal Scored')\n# plot it\npdp.pdp_plot(pdp_goals, 'Goal Scored')\n plt.show()"
    return (
      <>
        <h1>Partial Dependence Plots</h1>
        <small>August 06, 2019</small>

        <article>
          <p>
            With <a href="https://www.shivangidas.com/blog/PermutationImportance" target="_blank"
              rel="noopener noreferrer">Permutation Importance</a>, we found out which features the model considers important. However, we still need to know how and how much these features affect the prediction. Partial Dependence Plots will help us here.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              Explained really well in this
              <a
                href="https://www.kaggle.com/dansbecker/partial-plots"
                target="_blank"
                rel="noopener noreferrer"
              > Kaggle course
              </a>
            </li>
          </ul>
          <hr />
          <h3>What is it?</h3>
          <p>
            Partial Dependence Plots (PDP) allow us to concentrate on one or two features and find out how the predictions are affected by changing their values.{"\n"}
            After a model is fitted, we can use Permutation Importance to find out the most important features, then use PDP on those features for a particular row of interest. Here, too, we work on the fitted model.
          </p>
          <hr />
          <h3>How do we do it?</h3>
          <p>
            <Code codeString={code} language="language-python" />
            It will plot a graph that shows the relation between prediction and changing values of one feature.
            </p>
          <Image
            src={pdp_plot}
            alt="PDP plot showing how the goal scored column values affect prediction"
            caption="PDP plot for one feature"
            width="100%"
            height="auto"
          />

          <hr />
          <h3>What's next?</h3>
          <p>
            This is exciting but there's more in store. How about analyzing single predictions?
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
