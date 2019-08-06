import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Post1 from "../posts/ReactAndMe";
import Post2 from "../posts/ServiceWorkers";
import Post3 from "../posts/Overfitted";
import Post4 from "../posts/Python";
import Post5 from "../posts/DeepCloneJS";
import Post6 from "../posts/ScholarshipStory";
import Post7 from "../posts/PermutationImportance";
import Post8 from "../posts/PDP";
import Links from "../Links.js";
import Header from "./Header";
import Footer from "./Footer.js";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper">
          <main>
            <Header />
            <Route exact path={["/", "/blog"]} component={Links} />
            <Route path="/ReactAndMe" component={Post1} />
            <Route path="/ServiceWorkers" component={Post2} />
            <Route path="/Overfitted" component={Post3} />
            <Route path="/Python" component={Post4} />
            <Route path="/DeepCloneJS" component={Post5} />
            <Route path="/ScholarshipStory" component={Post6} />
            <Route path="/PermutationImportance" component={Post7} />
            <Route path="/PartialPlots" component={Post8} />
          </main>

          <div id="snackbar">Some text some message..</div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
