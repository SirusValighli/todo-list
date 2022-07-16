function More(props) {
  return (
    <div className="more">
      <h2>{props.title}</h2>
      <p>{props.descript}</p>
      <div className="actions">
        <button className="btn" onClick={props.onDone}>
          Done
        </button>
        <button className="btn--alt" onClick={props.onUndone}>
          Undone
        </button>
      </div>
    </div>
  );
}
export default More;
