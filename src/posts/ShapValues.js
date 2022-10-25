import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
import Image from "../components/image";
import shap from "../images/Shap.PNG";
class Post extends Component {
  render() {
    var code =
      "import shap  # package used to calculate Shap values\n# Create object that can calculate shap values\nexplainer = shap.TreeExplainer(my_model)\n# Calculate Shap values\nshap_values = explainer.shap_values(data_for_prediction)\n\nshap.initjs()\nshap.force_plot(explainer.expected_value[1], shap_values[1], data_for_prediction)";
    return (
      <>
        <h1>SHAP Values</h1>
        <small>September 09, 2019</small>

        <article>
          <p>
            We have seen ways to find most important feature (
            <a
              href="https://shivangidas.github.io/blog/#/PermutationImportance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Permutation Importance
            </a>
            ) and how those features affect predictions (
            <a
              href="https://shivangidas.github.io/blog/#/PartialPlots"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partial Dependence Plots
            </a>
            ). In order to analyse individual predictions as is often required
            in medical diagnostics we can use something called SHAP values or
            SHapely Additive exPlanations.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              Explained really well in this
              <a
                href="https://www.kaggle.com/dansbecker/shap-values"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Kaggle course
              </a>
            </li>
            <li>
              Ebook by{" "}
              <a
                href="https://twitter.com/ChristophMolnar"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ChristophMolnar{" "}
              </a>{" "}
              -
              <a
                href="https://christophm.github.io/interpretable-ml-book/shapley.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Interpretable Machine Learning
              </a>
            </li>
          </ul>
          <hr />
          <h3>What is it?</h3>
          <p>
            We first consider an average prediction for a model. For a given
            prediction, we find out how much each feature changed the prediction
            from the average value. This tells us which features are driving
            that prediction.
          </p>
          <hr />
          <h3>How do we do it?</h3>
          <p>
            <Code codeString={code} language="language-python" />
            Visualization
            </p>
            <Image
              src={shap}
              alt="Shapely values showing which features affect the prediction the most."
              caption="Shapely values for one prediction."
              width="100%"
              height="auto"
            />
          
          <hr />
          <h3>What's next?</h3>
          <p>
            A lot of graphs like summary plots and contribution plots can be
            traced using Shapely values. Refer{" "}
            <a
              href="https://www.kaggle.com/dansbecker/advanced-uses-of-shap-values"
              target="_blank"
              rel="noopener noreferrer"
            >
              this{" "}
            </a>{" "}
            for more. Also this post completes our journey exploring
            interpretations of Machine Learning predictions!
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
