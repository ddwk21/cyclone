const typeDefs = `
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
