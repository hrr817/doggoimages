import { take, takeEvery, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

function* fetchDoggoImages(action) {
  try {
    const {
      data: { message },
    } = yield call(axios.get, action.payload);
    yield put({ type: "doggos/fetchDoggoImageSucceed", payload: message });
  } catch (err) {
    console.log(err);
  }
}

export default function* mySaga() {
  yield takeLatest("doggos/fetchDoggoImages", fetchDoggoImages);
}
