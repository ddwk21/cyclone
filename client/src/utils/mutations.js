import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_ARTICLE = gql`
  mutation addArticle($articleId: Int) {
    addArticle(articleId: $articleId) {
      _id
      name
      email
      article {
        _id
        articleId
      }
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($articleId: Int) {
    deleteArticle(articleId: $articleId) {
      _id
      name
      email
      article {
        _id
        articleId
      }
    }
  }
`;