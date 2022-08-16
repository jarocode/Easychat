import * as signInTypes from "store/actions/auth";

export const initialState = [];

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.SIGN_IN:
      return [
        ...state,
        {
          userId: action.data.userId,
          userName: action.data.userName,
          client_token: action.data.client_token,
        },
      ];

    default:
      return state;
  }
};

export default authReducer;
