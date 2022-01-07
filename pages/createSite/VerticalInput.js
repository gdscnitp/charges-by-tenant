function VerticalInput(props) {
  return (
    <div className="py-3">
      <label htmlFor="input">{props.name}:</label>
      <input
        style={{ width: "25vw" }}
        type=""
        className="form-control"
        id="inputEmail4"
        placeholder="Site name"
      />
    </div>
  );
}

export default VerticalInput;
