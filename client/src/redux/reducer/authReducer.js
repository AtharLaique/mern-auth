//@ intal state for this reducer
const initialState = { isLogin: false ,user:null,token:null};
//defination of reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isLogin: action.payload//action.payload is data that  send form login action 
      };
    default:
      return state;
  }
}
