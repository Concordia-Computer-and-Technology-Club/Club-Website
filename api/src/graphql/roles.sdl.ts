export const schema = gql`
  type Role {
    id: Int!
    type: RoleType!
    startDate: DateTime!
    endDate: DateTime
    Member: Member!
    memberId: Int!
  }

  type Query {
    roles(memberId: Int): [Role!]! @skipAuth
    role(id: Int!): Role @skipAuth
  }

  input CreateRoleInput {
    type: String!
    startDate: DateTime!
    endDate: DateTime
    memberId: Int!
  }

  input UpdateRoleInput {
    type: String
    startDate: DateTime
    endDate: DateTime
    memberId: Int
  }

  input AddRoleInput {
    type: RoleType!
    memberId: Int!
  }

  input EndRoleInput {
    id: Int!
    endDate: DateTime!
  }

  type Mutation {
    endRole(endedRole: EndRoleInput!): Role! @skipAuth
    addRoleToMember(addedRole: AddRoleInput!): Role! @skipAuth
  }

  enum RoleType {
    MEMBER
    SECRETARY
    TREASURER
    VICEPRESIDENT
    PRESIDENT
  }
`
