import * as signInTypes from "store/actions/auth";

export const initialState = {
  userId: "",
  userName: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInTypes.SIGN_IN:
      return {
        ...state,
        userId: action.data.userId,
        userName: action.data.userName,
      };

    default:
      return state;
  }
};

export default authReducer;
