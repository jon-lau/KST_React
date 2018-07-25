import React from 'react';
import { Grid, Item, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultNews } from '../../constants/newsArticles'
import NewsItem from '../components/NewsItem';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="kst-landing-background">
          <Grid textAlign='center' container>


    <section className="mainboxHome index">
  <div className="full-slide-container">
    <div className="slideshow-container">

    <div className="mySlides fade">
      <img src="/images/Compac.png" styles="width:100%"/>
    </div>

    <div className="mySlides fade">
      <img src="/images/NavySupport1.png" styles="width:100%"/>
    </div>

    <div className="mySlides fade">
      <img src="/images/NECCicon1.jpg" styles="width:100%"/>
    </div>

    <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a className="next" onclick="plusSlides(1)">&#10095;</a>

    </div>
    <br/>

    <div styles="text-align:center">
      <span className="dot" onclick="currentSlide(1)"></span>
      <span className="dot" onclick="currentSlide(2)"></span>
      <span className="dot" onclick="currentSlide(3)"></span>
    </div>
  </div>
      <section className="infobox">

        <article className="infoHeader">
          <h1>Recent News</h1>
        </article>

        <div className="newsHolder">

        <article className="newsblock test">
          <div className="block1">
            <a href="NECC2018July.html"><img src="images/NECCicon1.jpg" alt="Navy Housing Icon"></img></a>              </div>
          <div className="block2">
            <a href="NECC2018July.html"><h1>NECC Award</h1></a>

          </div>
          <div className="block3">
            <p>
            Ka’ala Systems Technology Corp. Awarded Navy Support Fleet Logistics Center, Pearl Harbor, Hawaii the service contract for the N5 strategic planning and policy guidance on expeditionary...
            </p>
          </div>
        </article>

          <article className="newsblock test">
            <div className="block1">
            <a href="COMPACMay2018.html"><img src="images/Compac.png" alt="NavySupport Icon"></img></a>
            </div>
            <div className="block2">
            <a href="COMPACMay2018.html"><h1>Commander Support Pearl Harbor Hickam</h1></a>
            </div>
            <div className="block3">
            <p>
Ka’ala Systems Technology Corp. Awarded Navy Support Fleet Logistics Center, Pearl Harbor, Hawaii the Executive Administrative Assistant Support Services for Commander, U.S. Pacific Fleet Pearl Harbor, Hawaii              </p></div>
          </article>

          <article className="newsblock test">
            <div className="block1">
            <a href="NavySupportMarch2018.html"><img src="images/NavySupport1.png" alt="NavySupport Icon"></img></a>
            </div>
            <div className="block2">
            <a href="NavySupportMarch2018.html"><h1>Mail Services Pearl Harbor Hickam</h1></a>
            </div>
            <div className="block3">
            <p>
Ka’ala Systems Technology Corp. Awarded Navy Support Fleet Logistics Center, Pearl Harbor, Hawaii the Mail Support Services for Joint Base Pearl Harbor Hickam (JBPHH) contract for $1,049,218.68              </p>
            </div>
          </article>



      </div>
      </section>
      {/*<p styles="display:none;"><script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?d=rIKSHzMXsf9Wwj28cRJlqeEXtOnbkMcsCN7p-fGQ8TY"></script></p>*/}
      <section className="box1">
        <h1>Providing Services Around the Globe</h1>
        <p>International and Domestic</p>
        <p>Professional work including administrative (Executive, Financial, Housing, Office), Network
Administration, Systems Administration, Telecommunications, Data Centers, Storage Systems, Security,
Cable Plant ISP/OSP and Help Desks</p>
      </section>
      <div className="infobox filler">
        <a href="StarsInfo.html"><img src="images/starsIIpic.png" alt="generic tech pic"></img></a>
      </div>
    </section>

          </Grid>
          {/*<script>{console.log("test")}</script>*/}

        </div>
    );
  }
}


export default withRouter (Landing);
