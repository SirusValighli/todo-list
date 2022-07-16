import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1 id="main-title">My Todos</h1>
      <Todos title="Learning" descript="Learn hooks in react" />
      <Todos title="Coding" descript="Code javascript in visual studio" />
      <Todos title="Practicing" descript="Practice front end web development" />
      <Todos title="Recording" descript="Record a video for youtube " />
      <Todos title="Exercise" descript="Half an hour of stretching" />
    </div>
  );
}

export default App;
