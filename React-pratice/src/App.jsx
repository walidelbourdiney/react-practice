import React from "react";
// import Contact from "./Contact";
import Product from "./Product";

export default function App() {
  return (
    <>
      <Product name="Socks" description="Foot wear" price="25$" />
      <Product name="Shoe" description="Foot wear" price="50$" />
      <Product name="pants" description="body wear" price="40$" />
    </>
  );
}

// const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

//   const allFavoriteThings = [
//     "💦🌹",
//     "😺",
//     "💡🫖",
//     "🔥🧤",
//     "🟤🎁",
//     "🐴",
//     "🍎🥧",
//     "🚪🔔",
//     "🛷🔔",
//     "🥩🍝",
//     "💦🌹",
//     "😺",
//     "💡🫖",
//     "🔥🧤",
//     "🟤🎁",
//     "🐴",
//     "🍎🥧",
//     "🚪🔔",
//     "🛷🔔",
//     "🥩🍝",
//   ];
//   const thingsElements = myFavoriteThings.map((thing) => (
//     <p key={thing}>{thing}</p>
//   ));

//   function addFavoriteThing() {
//     setMyFavoriteThings((prev) => [...prev, allFavoriteThings[prev.length]]);
//   }

/* <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
      <Contact />
    </main> */
