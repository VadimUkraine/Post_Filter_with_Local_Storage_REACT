import axios from 'axios';
import { put, call, takeEvery, all, take } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function showError(data) {
  return {
    type: 'SHOW_ERROR',
    payload: data
  };
}


export function getPostsSuccess(posts) {
  return {
    type: 'GET_ALL_POSTS',
    payload: posts
  };
}

export function getAllPosts() {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        dispatch(getPostsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(showError(true));
        console.log(error);
      });
  };
}

export function getUsersSuccess(users) {
  return {
    type: 'GET_ALL_USERS',
    payload: users
  };
}

export function* watchAllUsers() {
  yield takeEvery('GET_ALL_POSTS', getAllUsers);
}


function* getAllUsers(){
  try {
    const data = yield call(() => {
      return axios.get(`https://jsonplaceholder.typicode.com/users`)
              .then((response) => {
                return response.data;
              })
      }
    );
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(showError(true));
    console.log(error);
  }
}

export function getUserCreator(id) {
  return {
    type: 'GET_USER_CREATOR',
    payload: id
  };
}


export function* watchCommentsByPost() {
  yield takeEvery('GET_USER_CREATOR', getCommentsByPost);
}

export function getCommentsSuccess(comments) {
  return {
    type: 'GET_COMMENTS_BY_POST',
    payload: comments
  };
}

function* getCommentsByPost(){
  try {
    yield put(setLoadComments(false));
    const id = yield take('SET_POST_ID');
    const data = yield call(() => {
      return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id.payload}`)
              .then((response) => {
                return response.data;
              })
      }
    );
    yield delay(1000);
    yield put(getCommentsSuccess(data));
    yield put(setLoadComments(true));
  } catch (error) {
     yield put(showError(true));
     console.log(error);
  }
}


export function setPostID(id) {
  return {
    type: 'SET_POST_ID',
    payload: id
  };
}

export function setLoadComments(data) {
  return {
    type: 'SET_LOAD_COMMENTS',
    payload: data
  };
}




export function* rootSaga() {
  yield all([
    watchAllUsers(),
    watchCommentsByPost()
  ])
}
