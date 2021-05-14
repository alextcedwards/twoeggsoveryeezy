import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_START } from "../actions";

const initialState = {
  isLoading: false,
  kanye: "",
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        kanye: action.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
