import React from 'react';
import { Container, Item, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultNews } from '../../constants/constants';
import NewsItem from '../components/NewsItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListNews extends React.Component {
  render() {
    return (
        <div className="kst-landing-background">
          <Container>
            <Header as="h2" textAlign="center">News and Announcements</Header>
            <hr/>
            <Item.Group>
              {defaultNews.map((newsItem, index) =>
                  <NewsItem key={index} newsItem={newsItem}/>)}
            </Item.Group>
            <hr/>
          </Container>
        </div>
    );
  }
}


export default withRouter (ListNews);
