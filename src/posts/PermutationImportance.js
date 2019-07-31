import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
class Post extends Component {
  render() {
      var code = "import eli5\nfrom eli5.sklearn import PermutationImportance\n\nperm = PermutationImportance( my_model, random_state=1 ).fit( val_X, val_y )\neli5.show_weights( perm, feature_names = val_X.columns.tolist())"
    return (
      <>
        <h1>Permutation Importance</h1>
        <small>July 31, 2019</small>

        <article>
          <p>
            Your Machine Learning model is not a black-box. There are ways to find out what it sees in your data, which features it considers important and which are discarded. Today I learned about one of the ways to do that using Permutation Importance (PI).
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              <a
                href="https://eli5.readthedocs.io/en/latest/blackbox/permutation_importance.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                eli5 documentation
              </a>
            </li>
            <li>
                There's a course on kaggle, too.
                <a
                href="https://www.kaggle.com/dansbecker/permutation-importance"
                target="_blank"
                rel="noopener noreferrer"
                >
                    The first chapter is on Permutation Importance
                </a>
            </li>
          </ul>
          <hr />
          <h3>What is it?</h3>
          <p>
            PI is a way to find out which are the features that most affect the predictions by making every column redundant one by one through shuffling and checking the difference in new predictions.
          </p>
          <hr />
          <h3>Why? Can we not just remove each feature one by one, build the model again, and check?</h3>
          <p>
            Machine Learning is computationally intensive. We don't want to train a model multiple times with each combination. Instead we take the validation or test set and shuffle columns in there to calculate the score. Also we don't want to remove the feature column completely because the model expects it to be there. Shuffling values will work just fine.
          </p>
          <hr />
          <h3>How do we do it?</h3>
          <p>
            <Code codeString={code} language="language-python" />   
            The values at the top are the most important features.
          </p>
          <hr />
          <h3>Verdict</h3>
          <p>
            I was pretty excited to learn PI today. Things don't have to be a mystery. You should be able to debug your model, proclaim what it requires and what is just thrash.
            There are more ways to comprehend what your Machine Learning models do. Stay tuned.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
