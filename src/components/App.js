import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import {
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
  Post10,
  Post11,
  Post12,
  Post13,
  Post14,
  Post15,
  Post16,
  Post17,
  Post18,
  Post19,
  Post20,
  Post21,
  Post22,
  Post23,
  Post24,
  Post25,
  Post26,
  Post27,
  Post28
} from "../posts";
import Links from "../Links.js";
import Header from "./HeaderHooks";
import Footer from "./Footer.js";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <div className="wrapper">
            <main>
              <div id="not-snackbar">Some text here</div>
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
              <Route path="/ShapValues" component={Post9} />
              <Route path="/LifeAtTimeZero" component={Post10} />
              <Route path="/HowMean" component={Post11} />
              <Route path="/Hooked" component={Post12} />
              <Route path="/TravellingCat" component={Post13} />
              <Route path="/Overstory" component={Post14} />
              <Route path="/GoodOmens" component={Post15} />
              <Route path="/Week45" component={Post16} />
              <Route path="/Week46" component={Post17} />
              <Route path="/Week47" component={Post18} />
              <Route path="/Outliers" component={Post19} />
              <Route path="/week49" component={Post20} />
              <Route path="/week50" component={Post21} />
              <Route path="/week52" component={Post22} />
              <Route path="/week1" component={Post23} />
              <Route path="/week2" component={Post24} />
              <Route path="/week5" component={Post25} />
              <Route path="/week10" component={Post26} />
              <Route path="/week14" component={Post27} />
              <Route path="/week31" component={Post28} />
            </main>
            <div className="push"></div>
          </div>
          <Footer />
        </>
      </HashRouter>
    );
  }
}

export default App;
