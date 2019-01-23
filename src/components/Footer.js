import React from "react";

export default () => (
  <div>
    <footer className="footer footer-white">
      <div className="container">
        <a className="footer-brand" href="http://www.creative-tim.com">
          Young Developer
        </a>
        <ul className="pull-center">
          <li>
            <a href="#pablo">Creative Tim</a>
          </li>
          <li>
            <a href="#pablo">About Us</a>
          </li>
          <li>
            <a href="#pablo">Blog</a>
          </li>
          <li>
            <a href="#pablo">Licenses</a>
          </li>
        </ul>
        <ul className="social-buttons float-right">
          <li>
            <a
              href="https://twitter.com/youngdevelops"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-just-icon btn-link btn-twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/youngdevelops/"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-just-icon btn-link btn-dribbble"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              className="btn btn-just-icon btn-link btn-google"
            >
              <i className="fab fa-google-plus" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
