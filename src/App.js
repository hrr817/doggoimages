import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoggoImages, selectDoggos } from "./features/doggo/doggoSlice";

function App() {
  const dispatch = useDispatch();
  const doggoImageList = useSelector(selectDoggos);

  console.log(doggoImageList);

  const DOGGO_API_URL = "https://dog.ceo/api/breeds/image/random";
  return (
    <div className="App">
      Doggo Images
      <br />
      <button onClick={() => dispatch(fetchDoggoImages(DOGGO_API_URL))}>
        Get doggo images
      </button>
      <div>
        {doggoImageList.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt="random doggo"
            width="400px"
            height="auto"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
