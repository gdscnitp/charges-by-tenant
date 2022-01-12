function AfterEditContent(props) {
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
            ></textarea>
          ) : props.title == "UID" ? (
            <input
              type="number"
              className="form-control"
              id=""
              placeholder={`Your ${props.title}`}
              style={{ width: "250px" }}
              defaultValue={props.content}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              id=""
              placeholder={`Your ${props.title}`}
              style={{ width: "250px" }}
              defaultValue={props.content}
            />
          )}
        </div>
        <div className="a-flex-buttons">
          <button
            className="btn btn-primary a-save-button"
            onClick={props.saveClick}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline-danger a-cancel-button"
            onClick={props.cancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AfterEditContent;
