import React, { Component } from "react";
import "../icomoon/style.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <center>
          
          <div id="copyright">
            <span>Shivangi Das</span>&nbsp; &copy; &nbsp;
            <span>2019-24</span>
          </div>
          <div id="contactIcons">
            <a
              href="https://in.linkedin.com/in/shivangi-das-49736058"
              target="_blank"
              className="linkedIn"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin" aria-hidden="true" />
            </a>
            &nbsp;
            <a
              href="https://github.com/shivangidas"
              target="_blank"
              className="github"
              title="Github"
              rel="noopener noreferrer"
            >
              <i className="icon-github" aria-hidden="true" />
            </a>
            &nbsp;
            <a
              href="https://twitter.com/iShivangiDas"
              target="_blank"
              className="twitter"
              title="Twitter"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" aria-hidden="true" />
            </a>
          </div>
        </center>
      </footer>
    );
  }
}
export default Footer;
