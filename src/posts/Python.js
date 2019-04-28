import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";

class Post extends Component {
  render() {
    var opOverloadCode = 'a = 2 * 3\n#output 6\nb = "2" * 3\n#output 222';
    var floorDivCode =
      "a = 9 / 2\n#output 4.5 #normal division\nb = 9 // 2\n#output 4 #floor division";
    var docstringCode =
      'def sum(a,b):\n	"""Finds some of two numbers\n	sample: sum(3,3)\n	output: 6""" \n	return a + b\nhelp(sum)\n#output\nHelp on function sum in module __main__:\n\n  sum(a, b)\n	  Finds some of two numbers\n	  sample: sum(3, 3)\n	  output: 6';
    var lambdaCode = "mod_5 = lambda x: x % 5\nmod_5(23)\n#output 3";
    var listCode =
      "a = [1,2,7,3,4,9]\na[: 2] #output [1,2]\nb = [1,2,7,3,4,9]\nb[2:] #output [7, 3, 4, 9]\nc = [1,2,7,3,4,9]\nc[1:-1] #output [2, 7, 3, 4]\n#lists are mutable, hence they were defined multiple times here to show the slicing options.";
    var tuplesCode =
      "a = 1,2,3\nb = 4, 5\na, b = b, a\nprint(a)\n#output (4,5)";
    var listCompCode =
      "a = [10,20,7,3,2,6,13]\nb = [x for x in a if x >= 7]\nprint(b)\n#output [10, 20, 7, 13]";
    var formatCode =
      "a = 'Python'\n'Oh {}, thou art amazing.'.format(a)\n#output 'Oh Python, thou art amazing.'";
    return (
      <>
        <h1>Python tidbits</h1>
        <small>April 22, 2019</small>

        <article>
          <p>
            I coded in Python in the deeplearning.ai specialization on Coursera
            but only recently took up learning Python as a stand alone
            programming language. Well, actually part of it, a very little part.
            Here's everything I liked and disliked. Mostly liked, because
            (spoiler) Python is pretty awesome.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              Kaggle's{" "}
              <a
                href="https://www.kaggle.com/learn/python"
                target="_blank"
                rel="noopener noreferrer"
              >
                micro-course on Python
              </a>
            </li>
          </ul>
          <hr />
          <h3>No declaration!</h3>
          <p>
            I love JavaScript for its simple <code>var</code> (and now{" "}
            <code>let</code> and <code>const</code>) used for variable
            declaration. However, Python won me over with it's no declaration
            required at all. Way to keep it simple!
          </p>
          <hr />
          <p>There's some fun with operator overloading</p>
          <Code codeString={opOverloadCode} language="language-python" />
          <hr />
          <p>Floor division is something I had not seen before.</p>
          <Code codeString={floorDivCode} language="language-python" />
          <hr />
          Ask for help with <code>help</code> function.
          <br />
          User defined functions, written with docstring, show up nicely when
          you call <code>help(user_function)</code>. Docstring are triple quoted
          strings.
          <Code language="language-python" codeString={docstringCode} />
          There's an option to define functions having arguments with default
          values.
          <Code
            codeString="def what_to_eat(food = 'chicken'):"
            language="language-python"
          />
          * <code>None</code> is kinda like <code>null</code>.<br />
          * lambda functions are one line functions written as shown
          <Code codeString={lambdaCode} language="language-python" />
          <hr />
          The logical operators are simple <code>and</code>, <code>or</code>,{" "}
          <code>not</code> instead of &&, ||, !. Could Python get any cooler?
          <br />
          However, there's the case of else if, it has been shortened to{" "}
          <code>elif</code>.<hr />
          Lists in Python are like arrays that have amazing slicing options with
          ":".
          <Code codeString={listCode} language="language-python" /> They come
          with every function imaginable. If you don't find one, there's
          probably a library/module out there that will help you out like numpy,
          pandas, scikit-learn.
          <br />
          * Tuples are immutable lists declared with () or no braces at all.
          <Code language="language-python" codeString={tuplesCode} />
          <hr />
          Loops can get pretty crazy with list comprehensions. Refer{" "}
          <a
            href="https://www.kaggle.com/colinmorris/loops-and-list-comprehensions"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            this on Kaggle
          </a>{" "}
          because I cannot do justice to it.
          <Code language="language-python" codeString={listCompCode} />
          <hr />
          * Dictionary is like json, comes with key-value pairs. <br /> *
          Strings <code>str</code> are immutable, they can be treated like list
          of char. <br /> * str.format is worth it's weight in gold.
          <Code language="language-python" codeString={formatCode} />
          <hr />
          To use inbuilt libraries or ones other amazing people have built for
          Python, use <code>import</code>
          <Code language="language-python" codeString="import pandas as pd" />
          Pandas helps with data manipulation and makes it readable.{" "}
          <a
            href="https://www.kaggle.com/learn/pandas"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Refer this{" "}
          </a>
          if you want to know more.
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
