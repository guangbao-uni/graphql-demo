import { gql } from 'apollo-server';

export default gql`

  type EcgData {
    ecgId: Int!
    ecg: [[Int!]]!
  }

  type Ecg {
    ecgId: Int!
    drug: String
    animal: String
    expermentIntro: String
    data: [[Int!]]!
  }

  input EcgInput {
    ecgId: Int
    drug: String
    animal: String
    expermentIntro: String
  }

  type NoteNode {
    QRS: [[Int!]!],
    T: [[Int!]!],
    P: [[Int!]!]
  }

  type EcgAutoNotes {
    autoNoteId: Int!
    ecgId: Int!
    seriesIndex: Int!
    notes: NoteNode!
  }

  type EcgManualNotes {
    id: Int!
    ecgId: Int!
    seriesIndex: Int!
    startIndex: Int!
    endIndex: Int!
    note: String!
  }

  type mutationResponse {
    code: Int!
    message: String
  }

  type Query {
    ecgs: [Ecg]!
    ecg(ecgId: Int!): Ecg!
    ecgData( ecgId: Int!): EcgData!
  }

  type Mutation {
    updateEcg(ecg: EcgInput!): mutationResponse! 
  }
`;
