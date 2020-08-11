//@ intal state for this reducer
const initialState = { isLogin: false ,user:null};
//defination of reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isLogin: true,
        user:action.payload
      };
    default:
      return state;
  }
}
