function BeforeEditAddress(props) {
  return (
    <div className="a-before-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4 col-sm-12">
          <span className="a-edit-left-title">{props.title}</span>
        </div>
        <div className="col-lg-8 col-sm-12">
          {props.content == undefined ||
          props.content?.length == 0 ||
          props.content == "Not Provided" ||
          props.content == 0 ? (
            <span className="a-edit-right-content a-not-provided">
              Not Provided
            </span>
          ) : (
            <span className="a-edit-right-content">{props.content}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BeforeEditAddress;
