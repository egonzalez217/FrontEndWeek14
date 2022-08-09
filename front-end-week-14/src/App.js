import "./App.css";
import Navbar1 from "./components/Navbar1";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar1></Navbar1>
      <br />
      <br />
      <MovieList></MovieList>
    </div>
  );
}

export default App;
