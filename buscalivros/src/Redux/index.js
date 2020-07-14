const types = {
  REQUEST: 'booksRequest',
  SUCCESS: 'booksSuccess',
  ERROR: 'booksError',
  SAGA: 'booksSaga',
  UPDATE: 'booksUpdate',
};

const initialState = {
  loading: false,
  dataSource: [],
  livroDetalhes: {},
  error: '',
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST:
      return { ...state, loading: true };
    case types.SUCCESS:
      const dataSource = action.payload.items ? action.payload : state.dataSource;
      const livroDetalhes = action.payload.id ? action.payload : state.livroDetalhes;
      return { ...state, loading: false, dataSource, livroDetalhes };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        dataSource: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export function actionsCreators() {
  return {
    actionBooksRequest: () => ({
      type: types.REQUEST,
    }),
    actionBooksSuccess: (dataSource) => ({
      type: types.SUCCESS,
      payload: dataSource,
    }),
    actionBooksError: (error) => ({
      type: types.ERROR,
      payload: error,
    }),
    actionBooksSaga: (payload) => ({
      type: types.SAGA,
      payload,
    }),
  };
}
