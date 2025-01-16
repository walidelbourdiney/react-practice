import "./App.css";
import "./ContactContainer";
import ContactContainer from "./ContactContainer";
import Header from "./Header";

function App() {
  const x = ["ali", "ahmed", "ezzat"];
  const y = x.map((name) => <h1>{name}</h1>);
  console.log(y);
  return (
    <>
      {y}
      <Header />
      <ContactContainer />
    </>
  );
}

export default App;
