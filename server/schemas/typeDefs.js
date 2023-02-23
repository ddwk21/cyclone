const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    likes: [Article]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type granularArticle {
    articleId: Int
    articleTypeId: Int
    title: String
    lastUpdated: String
  }

  type ArticleList {
    articles: [granularArticle]
    category: Int
  }

  type Article {
    _id: ID
    articleId: Int
    articleTypeId: Int
    title: String
    lastUpdated: String
  }

  type Query {
    profiles: [Profile]!
    profile(_id: ID!): Profile
    articles: [Article]
    article(articleId: Int): Article
    me: Profile
    articleLists: [ArticleList]
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addProfile(
      name: String!
      email: String! 
      password: String!
    ): Auth

    addArticle(articleId: Int): Profile

    deleteArticle(articleId: Int): Profile

    removeProfile: Profile
  }
`;

module.exports = typeDefs;
