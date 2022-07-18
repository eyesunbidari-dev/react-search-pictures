import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  console.log(result);

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=TniSqsAC3oVhBzdpJYn9G_GQNXtW-cGvgoUMrja69VU&query=${value}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      });
  };

  return (
    <>
      <div className="header">
        <span> جستجو</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={fetchImage}>ارسال</button>
      </div>
      <div className="gallery">
        {result &&
          result.map((item) => (
            <img src={item.urls.regular} key={item.id} alt="" />
          ))}
      </div>
    </>
  );
}

export default App;
