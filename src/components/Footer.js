import React, { Component } from "react";
import "../icomoon/style.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <center>
          <div>
            <a
              href="https://tinyletter.com/shivangi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the newsletter{" "}
              <i className="icon-mail4" aria-hidden="true" />
            </a>
          </div>
          <div id="copyright">
            <span>Shivangi Das</span>&nbsp; &copy; &nbsp;
            <span>2019</span>
          </div>
          <div id="contactIcons">
            <a
              href="https://in.linkedin.com/in/shivangi-das-49736058"
              target="_blank"
              id="linkedIn"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin" aria-hidden="true" />
            </a>
            &nbsp;
            <a
              href="https://github.com/shivangidas"
              target="_blank"
              id="github"
              title="Github"
              rel="noopener noreferrer"
            >
              <i className="icon-github" aria-hidden="true" />
            </a>
            &nbsp;
            <a
              href="https://twitter.com/iShivangiDas"
              target="_blank"
              id="twitter"
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