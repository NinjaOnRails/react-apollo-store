import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import Error from './ErrorMessage';

const ItemDetailStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const ITEM_DETAIL_QUERY = gql`
  query ITEM_DETAIL_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class ItemDetail extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={ITEM_DETAIL_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          const { title, description, largeImage } = data.item;
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {id}</p>;
          return (
            <ItemDetailStyles>
              <Head>
                <title>Danny's Store | {title}</title>
              </Head>
              <img src={largeImage} alt={title} />
              <div className="details">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </ItemDetailStyles>
          );
        }}
      </Query>
    );
  }
}

export default ItemDetail;
