import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  Post28,
  Post29,
  Post30,
  Post31,
  Post32,
  Post33,
  Post34,
  Post35
} from "../posts";
import Links from "../Links.js";
import Header from "./HeaderHooks";
import Footer from "./Footer.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/blog">
        <>
          <div className="wrapper">
            <main>
              <div id="not-snackbar">Some text here</div>
              <Header />
              <Routes>
                <Route exact path="/" element={<Links />} />
                <Route exact path="/blog" element={<Links />} />
                <Route path="/ReactAndMe" element={<Post1 />} />
                <Route path="/ServiceWorkers" element={<Post2 />} />
                <Route path="/Overfitted" element={<Post3 />} />
                <Route path="/Python" element={<Post4 />} />
                <Route path="/DeepCloneJS" element={<Post5 />} />
                <Route path="/ScholarshipStory" element={<Post6 />} />
                <Route path="/PermutationImportance" element={<Post7 />} />
                <Route path="/PartialPlots" element={<Post8 />} />
                <Route path="/ShapValues" element={<Post9 />} />
                <Route path="/LifeAtTimeZero" element={<Post10 />} />
                <Route path="/HowMean" element={<Post11 />} />
                <Route path="/Hooked" element={<Post12 />} />
                <Route path="/TravellingCat" element={<Post13 />} />
                <Route path="/Overstory" element={<Post14 />} />
                <Route path="/GoodOmens" element={<Post15 />} />
                <Route path="/Week45" element={<Post16 />} />
                <Route path="/Week46" element={<Post17 />} />
                <Route path="/Week47" element={<Post18 />} />
                <Route path="/Outliers" element={<Post19 />} />
                <Route path="/week49" element={<Post20 />} />
                <Route path="/week50" element={<Post21 />} />
                <Route path="/week52" element={<Post22 />} />
                <Route path="/week1" element={<Post23 />} />
                <Route path="/week2" element={<Post24 />} />
                <Route path="/week5" element={<Post25 />} />
                <Route path="/week10" element={<Post26 />} />
                <Route path="/week14" element={<Post27 />} />
                <Route path="/week31" element={<Post28 />} />
                <Route path="/HalfwayThrough2022" element={<Post29 />} />
                <Route path="/Negotiation" element={<Post30 />} />
                <Route path="/WhyNegotiate" element={<Post31 />} />
                <Route path="/BalanceSheet" element={<Post32 />} />
                <Route path="/Angular18" element={<Post33 />} />
                <Route path="/Revive" element={<Post34 />} />
                <Route path="/GoLang" element={<Post35 />} />
              </Routes>
            </main>
            <div className="push"></div>
          </div>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
