function HorizontalInput(props) {
  return (
    <div>
      <div className="form-group row py-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          {props.name}
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalInput;
