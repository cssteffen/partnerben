import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer role="contentinfo">
        <div className="footer-brand-container">
          <p className="footer-author">
            Created by{" "}
            <a
              href="https://cssteffen.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cara Steffen
            </a>
          </p>
          <a
            class="social"
            href="https://github.com/cssteffen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
          &nbsp; &nbsp;
          <a
            class="social"
            href="https://www.linkedin.com/in/cara-steffen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p>Copyright &copy; 2019 All Rights Reserved</p>
        </div>
      </footer>
    );
  }
}

/*
          <div className="footer-social-media">
            <a href="https://github.com/cssteffen" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {"  "}
            <a href="https://www.linkedin.com/in/cara-steffen" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className="copyright-text">
            <p>
              Copyright &copy; 2019
              <br />
              All Rights Reserved
            </p>
          </div>
*/
