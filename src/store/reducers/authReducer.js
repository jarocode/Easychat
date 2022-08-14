import * as signInTypes from "store/actions/auth";

export const initialState = {
  userId: "",
  userName: "",
  client_token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.SIGN_IN:
      return {
        ...state,
        userId: action.data.userId,
        userName: action.data.userName,
      };

    case signInTypes.SIGN_OUT:
      return {
        ...state,
        client_token: action.data,
      };

    default:
      return state;
  }
};

export default authReducer;
