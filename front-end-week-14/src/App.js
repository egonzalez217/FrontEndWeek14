import "./App.css";
import Navbar1 from "./components/Navbar1";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Navbar1></Navbar1>
      <br />
      <br />
      <Movie movieName="yo"></Movie>
      <Movie movieName="no"></Movie>
      <Movie movieName="se"></Movie>
    </div>
  );
}

export default App;
