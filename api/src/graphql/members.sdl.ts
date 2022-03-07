export const schema = gql`
  type Member {
    id: Int!
    fName: String!
    profilePictureLink: String!
    mInit: String!
    lName: String!
    email: String!
    year: Int!
    roles: [Role]!
  }

  type Query {
    members(role: RoleType): [Member!]! @skipAuth
    member(id: Int): Member @skipAuth
  }

  input CreateMemberInput {
    fName: String!
    mInit: String
    githubUsername: String
    lName: String!
    email: String!
    year: Int!
  }

  input UpdateMemberInput {
    fName: String
    mInit: String
    profilePictureLink: String
    lName: String
    email: String
    year: Int!
  }

  type Mutation {
    createMember(newMember: CreateMemberInput!): Member! @skipAuth
    updateMember(updatedMember: UpdateMemberInput!): Member! @skipAuth
  }
`
