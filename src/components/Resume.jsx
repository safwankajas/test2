import React from 'react';

function Resume() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>Document</title>
  <section className="body">
    <div className="body-container">
      <div className="body-container-top">
        <div className="body-container-top-left">
          <div className="body-container-top-left-circle" />
          <div className="body-container-top-left-image">
            <img
              className="body-container-top-left-image-1"
              src="./PRFL11.png"
              alt=""
            />
          </div>
        </div>
        <div className="body-container-top-right">
          <div className="body-container-top-right-name">
            <div className="body-container-top-right-name1">SAFWAN K</div>
            <div className="body-container-top-right-name2">SAFWAN K</div>
          </div>
          <div className="body-container-top-right-job">Software Engineer</div>
          <div className="body-container-top-right-description">
            To obtain an entry-level software engineer position in a fast-paced
            organization where exceptional technical skills and ability to
            quickly adapt to change are duly compensated.
          </div>
        </div>
      </div>
      <div className="body-container-detials">
        <div className="body-container-detials-left">
          <div className="body-container-detials-left-link">
            <span className="material-symbols-outlined">mail</span>
            <label>
              <a href="mailto: safwankajas02@gmail.com">
                safwankajas02@gmail.com
              </a>
            </label>
          </div>
          <div className="body-container-detials-left-link">
            <span className="material-symbols-outlined">location_on</span>
            <label>
              <a href="https://maps.app.goo.gl/HU8CfAeRyaDYLvyd7">
                malappuram, kerala,India
              </a>
            </label>
          </div>
          <div className="body-container-detials-left-link">
            <span className="material-symbols-outlined">language</span>
            <label>
              <a href="https://safwankajas.site/">safwankajas.site</a>
            </label>
          </div>
          <div className="body-container-detials-left-link">
            <i className="fa fa-github" />
            <label>
              <a href="https://github.com/safwankajas">
                github.com/safwankajas
              </a>{" "}
            </label>
          </div>
        </div>
        <div className="body-container-detials-right">
          <div className="body-container-detials-right-link">
            <span className="material-symbols-outlined">smartphone</span>
            <label>
              <a href="https://wa.me/9562836973">+91 9562836973</a>
            </label>
          </div>
          <div className="body-container-detials-right-link">
            <span className="material-symbols-outlined">calendar_month</span>
            <label>22 October, 1997</label>
          </div>
          <div className="body-container-detials-right-link">
            <i className="fa fa-linkedin-square" />
            <label>
              <a href="linkedin.com/in/safwankajas">
                linkedin.com/in/safwankajas
              </a>
            </label>
          </div>
          <div className="body-container-detials-right-link">
            <i className="fa fa-instagram" />
            <label>
              <a href="https://www.instagram.com/safwankajas/">safwankajas</a>
            </label>
          </div>
        </div>
      </div>
      <div className="body-container-body">
        <div className="body-container-body-left">
          <div className="body-container-body-left-education">
            <div className="body-container-body-left-education-head">
              EDUCATION
            </div>
            <div className="body-container-body-left-education-line" />
            <div className="body-container-body-left-education-sub">
              <div className="body-container-body-left-education-sub-head">
                <div className="body-container-body-left-education-sub-head-class">
                  B-TECH
                </div>
                <div className="body-container-body-left-education-sub-head-mark">
                  8.07/10 CGPA
                </div>
              </div>
              <div className="body-container-body-left-education-sub-detiail">
                <div className="body-container-body-left-education-sub-detiail-name">
                  Govt engineering college idukki
                </div>
                <div className="body-container-body-left-education-sub-detiail-year">
                  2018-2022
                </div>
                <div className="body-container-body-left-education-sub-detiail-branch">
                  Computer science and engineering
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-container-body-right" />
      </div>
    </div>
  </section>
</>

  );
}

export default Resume;


