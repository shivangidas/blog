import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Financial jargon - Balance Sheet</h1>
        <small>July 24, 2023</small>

        <article>
          <p>
            The world of investment is full of fancy words but do we need them? Using weird sounding words and abbreviations for simple things is in my opinion gatekeeping. Let's break down the jargon intimidating us.
          </p>
          <p>
            <strong>
              Disclaimer: I am not an expert on money matters. Investment, personal finance, stock market are things I feel more people should be aware of and talk about.
            </strong>
          </p>
          <hr />
          <h3>Assets and Liabilities</h3>
          <p>
            <strong>Asset - anything that brings in money.</strong> Eg: interest earned from a savings account makes the money in your saving account your asset. Rent from a house you own makes the house an asset.
          </p>
          <p>
            <strong>Liability - anything that takes money out.</strong> Eg: interest paid on debt makes debt a liability. Mortgage you pay on a house makes that house a liability.
          </p>
          <p>
            For a company, this can be seen in their Balance Sheet. Go check out{" "}
            <a
              href="https://uk.finance.yahoo.com/quote/GOOGL/balance-sheet?p=GOOGL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alphabet's balance sheet
              </a> on Yahoo Finance.
You would notice a third thing called Shareholders' equity.
          </p>
          <p>
            Stockholders' equity = assets - liabilities
          </p>

          <p>Some things of note - If a company reinvests some of the money it made (net earnings), then that shows up in the shareholders' equity as retained earnings. Common and preferred stocks are the shares of the company available for us to buy, preferred stocks are special ones where if a company goes bust you have a claim to their assets. More about stocks in a later post.</p>
          <h3> Balance Sheet</h3>
          <p>
            Knowing this now, how would you define a balance sheet?
          </p>
          <p>To me it shows <strong>what a company owns and owes</strong>. It gives some information about what's being put back in, how much debt the company is in and is it balanced by the assets. Newer companies may seem to have lots of debt but check if it decreasing year by year and the shareholders equity increasing.</p>
          <p>
            A balance sheet must be balanced: <strong>assets = liabilities + shareholders' equity</strong>
          </p>
          <p>Next, we would want to check the income statement and cash flow to get a more complete picture of the companies finances.</p>

          {/* <h3>Stocks market vs Stock Exchange</h3>
          <p></p>
          <h3>Capital</h3>
          <p></p>
          <h3>Valuation</h3>
          <p></p>
          <h3>Bears and bulls</h3> */}
        </article>
        <PostFooter />
      </>
    );
  }
}
export default Post;