function AfterEditAddress(props) {
  return (
    <div className="a-after-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4">
          <span className="a-edit-left-title">{props.title}</span>
        </div>
        <div className="col-lg-8">
          {props.title == "Address" ? (
            <textarea
              className="form-control"
              rows="3"
              placeholder="Your Address"
              defaultValue={props.content}
              name={props.name}
              onChange={props.onChange}
            ></textarea>
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder={`Your ${props.title}`}
              style={{ width: "250px" }}
              defaultValue={props.content}
              name={props.name}
              onChange={props.onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AfterEditAddress;
