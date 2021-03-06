import * as types from '../actions/types';

const initialState = {
  notFetching: false,
  slug: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
        notFetching: true,
      };
    }

    case types.CREATE_ARTICLE: {
      return { ...state, article: action.payload, slug: '/' };
    }

    case types.EDIT_ARTICLE: {
      return {
        ...state,
        editArticle: action.payload,
      };
    }

    case types.DELETE_ARTICLE: {
      return {
        ...state,
        article: action.payload,
      };
    }

    case types.ISFETCHING: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
