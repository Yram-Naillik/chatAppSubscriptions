import gql from "graphql-tag";

export const CHATS_QUERY = gql`
  query ChatsQuery {
    chats {
      id
      from
      message
    }
  }
`;

// Send message
export const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($from: String!, $message: String!) {
    sendMessage(from: $from, message: $message) {
      id
      from
      message
    }
  }
`;

// Display the new messages in realtime
export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSentSubscription {
    messageSent {
      id
      from
      message
    }
  }
`;
