import { useState } from "react";
import Bacdrop from "./Backdrop";
import More from "./More";
function Todos(props) {
  const [isMoreOpen, moreOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  const moreHandler = () => {
    moreOpen(true);
  };
  const doneHandler = () => {
    moreOpen(false);
    setComplete(true);
  };
  const unDoneHandler = () => {
    moreOpen(false);
    setComplete(false);
  };
  const closeMore = () => {
    moreOpen(false);
  };
  return (
    <div>
      <div className="container">
        <div className="card">
          <h2 id="title">{props.title}</h2>
          <label>Status = </label>
          <label id="lbl" style={{ color: complete ? "green" : "red" }}>
            {complete ? "✅Done" : "❌unDone"}
          </label>
          <div className="actions">
            <button className="btn" onClick={moreHandler}>
              More
            </button>
          </div>
        </div>
      </div>
      {isMoreOpen && (
        <More
          descript={props.descript}
          onDone={doneHandler}
          onUndone={unDoneHandler}
          title={props.title}
        />
      )}
      {isMoreOpen && <Bacdrop onBack={closeMore} />}
    </div>
  );
}
export default Todos;
