const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    likes: [String]
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
    tags: [String]
    likes: [String]
    likedBy: [String]
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

    addArticle(
      profileId: ID!
      articleId: Int!
      articleTypeId: Int
      title: String!
      lastUpdated: String
      tags: [String]
      likes: [String]
      LikedBy: [String]
    ): Article

    deleteArticle(
      articleId: ID!
    ): ID

    removeProfile: Profile
  }
`;

module.exports = typeDefs;
