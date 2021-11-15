const initialState = {
  loading: true,
  launchList: null,
  searchQuery: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LAUNCHES":
        return {...state, loading: action.loading, launchList: action.launchList};
    case "SEARCH_LAUNCHES":
        return {...state, searchList: action.searchList};
    default:
      return state;
  }
}

export { initialState };
export default reducer;