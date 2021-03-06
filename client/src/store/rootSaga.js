import {tweetsSaga} from "./ducks/tweets/saga";
import { all } from 'redux-saga/effects'
import {trendsSaga} from "./ducks/trends/saga";
import {tweetDataSaga} from "./ducks/tweet/saga";
import {whoFollowSaga} from "./ducks/whoToFollow/saga";

export default function* rootSaga() {
  yield all([tweetsSaga(), trendsSaga(), tweetDataSaga(), whoFollowSaga()])
}