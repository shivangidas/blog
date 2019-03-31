import React, { Component } from "react";
import "../icomoon/style.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <center>
          <div className="" id="contactIcons">
            <a
              href="mailto:catchshivangi@gmail.com"
              target="_top"
              id="emailId"
              title="Email me"
              rel="noopener noreferrer"
            >
              <i className="icon-mail4" aria-hidden="true" />
            </a>
            &nbsp;
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
              href="https://www.facebook.com/shivangi.das.710"
              target="_blank"
              id="facebook"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <i className="icon-facebook2" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/iShivangiDas"
              target="_blank"
              id="twitter"
              title="Twitter"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" aria-hidden="true" />
            </a>
            <a
              href="https://codepen.io/ShivangiDas7/"
              target="_blank"
              id="codepen"
              title="CodePen"
              rel="noopener noreferrer"
            >
              <i className="icon-codepen" aria-hidden="true" />
            </a>
          </div>
          <div className="" id="copyright">
            <span>Shivangi Das</span>&nbsp; &copy; &nbsp;
            <span>2019</span>
          </div>
        </center>
      </footer>
    );
  }
}
export default Footer;
