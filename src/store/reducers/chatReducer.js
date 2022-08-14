import * as signInTypes from "store/actions/chat";

export const initialState = [];

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.ADD_CHAT:
      return [...state, action.data];
    case signInTypes.ADD_ALL_CHATS:
      return [...state, ...action.data];

    default:
      return state;
  }
};

export default chatReducer;
