import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultNews } from '../../constants/newsArticles';

/** Renders the Page for editing a single document. */
class NewsArticle extends React.Component {

  render() {
    const url = this.props.match.params.url;
    const article = defaultNews.find(function (element) { return element.url === url });
    return (
      <div className="kst-landing-background">
        <Container>
          <section class="mainboxHome">
            <section class="content">
              <section class="newsarticle">
                <h1>
                  {article.title}
                </h1>
                {article.description.map((description, index) =>
                  <p key={index} description={description}>{description[0]}</p>)}
              </section>
              <img src="/images/mountain3.jpg" alt="mountain" class="bottompic"></img>
            </section>
          </section>
        </Container>
      </div>
    );
  }
}


export default withRouter(NewsArticle);
