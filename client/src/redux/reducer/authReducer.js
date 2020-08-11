//@ intal state for this reducer
const initialState = { isLogin: false, user: null };
//defination of reducer
export default function (state = initialState, action) {
  const user = JSON.parse(localStorage.getItem("_user"));
  if (user) {
    return {
      ...state,
      isLogin: true,
      user: user,
    };
  }
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
