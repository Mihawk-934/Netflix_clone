import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  movies: [],
  page: 0,
  nbPage: null,
  textSearch: '',
  next: null,
  filtres: {
    genre: {value: null, label: 'Genre'},
    years: {value: null, label: 'Annee'},
    sortby: {value: null, label: 'SortBy'}
  },
  noResult: false
};

const initialise = (state, action) => {
  return updateObject( state, { 
    page: action.value,
    movies: [],
    nbPage: null
  })
}

const initialiseFiltres = (state) => {
  let filtres = {
    genre: {value: null, label: 'Genre'},
    years: {value: null, label: 'Annee'},
    sortby: {value: null, label: 'SortBy'}
  }
  return updateObject( state, { 
    filtres: filtres
  })
}

const initialiseTextSearch = (state) => {
  return updateObject( state, { 
    textSearch: ''
  })
}

const filtres = (state, action) => {
  return updateObject( state, { 
    filtres: action.filtres,
  })
}

const textSearch = (state, action) => {
  return updateObject( state, { 
    textSearch: action.textSearch,
  })
}

const movies = (state, action) => {
  let a = [...state.movies, ...action.newMovies];
  let movies = [...new Set(a.map(o => o.id))].map(id => a.find(i => i.id === id))
  return updateObject( state, { 
    movies: movies,
    nbPage: action.nbPage,
    page: action.page,
    next: action.next,
    noResult: action.noResult
  });
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.MOVIES: return movies(state, action);
    case actionTypes.FILTRES: return filtres(state, action);
    case actionTypes.TEXT_SEARCH: return textSearch(state, action);
    case actionTypes.INITIALISE: return initialise(state, action);
    case actionTypes.INITIALISE_FILTRES: return initialiseFiltres(state);
    case actionTypes.INITIALISE_TEXTSEARCH: return initialiseTextSearch(state);
    default: return state;
  }
}; 

export default reducer;