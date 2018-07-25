import React from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';
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
          <section className="mainboxHome">
            <section className="content">
              <section className="newsarticle">
                <h1>
                  {article.title}
                </h1>
                {article.description.map((description, index) => {
                  if (description[1] == "imageLeft") {
                    return (
                      <Grid>
                        <Grid.Column width={3}>
                          <Image src={article.images[description[2]]} />
                        </Grid.Column>
                        <Grid.Column width={13}>
                          <p key={index} description={description}>{description[0]}</p>
                          <br></br>
                        </Grid.Column>
                      </Grid>
                    )
                  }
                  else if (description[1] == "imageCenter") {
                    return (
                      <Grid centered>
                        <Grid.Column width={4}>
                          <Image src={article.images[description[2]]} />
                        </Grid.Column>
                      </Grid>
                    )
                  }
                  else {
                    return (<p key={index} description={description}>{description[0]}</p>)
                  }
                }
                )}
              </section>
              <img src="/images/mountain3.jpg" alt="mountain" className="bottompic"></img>
            </section>
          </section>
        </Container>
      </div>
    );
  }
}


export default withRouter(NewsArticle);
