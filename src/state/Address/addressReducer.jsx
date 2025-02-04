const initialState = {
    selectedAddress: null,
    addresses: [],
  };
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_SELECTED_ADDRESS":
        return { ...state, selectedAddress: action.payload };
      case "ADD_ADDRESS":
        return { ...state, addresses: [...state.addresses, action.payload] };
      default:
        return state;
    }
  };
  
  export default addressReducer;
  