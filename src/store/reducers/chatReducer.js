import * as signInTypes from "store/actions/chat";

export const initialState = [];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.ADD_CHAT:
      return [...state, action.data.chats];

    default:
      return state;
  }
};

export default chatReducer;
