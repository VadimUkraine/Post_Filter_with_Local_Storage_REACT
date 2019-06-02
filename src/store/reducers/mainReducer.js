const INIT_STATE = {
  posts: [],
  users: [],
  userCreator: '',
  comments:[],
  postID: '',
  loadComments: false,
  error: false,
};

export default function mainReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return { ...state, posts: action.payload};
    case 'GET_ALL_USERS':
      return { ...state, users: action.payload};
    case 'GET_USER_CREATOR':
      return { ...state, userCreator: action.payload};
    case 'GET_COMMENTS_BY_POST':
      return { ...state, comments: action.payload};
    case 'SET_POST_ID':
      return { ...state, postID: action.payload};
    case 'SET_LOAD_COMMENTS':
      return { ...state, loadComments: action.payload};
    case 'SHOW_ERROR':
      return { ...state, error: action.payload};
    default:
      return state;
  }
}
