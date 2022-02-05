import Moment from "react-moment";

function BeforeEditContent(props) {
  return (
    <div className="a-before-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4 col-sm-12">
          <span className="a-edit-left-title">{props.title}</span>
        </div>
        <div className="col-lg-7 col-sm-10">
          {props.title == "Contact" || props.title == "Pincode" ? (
            props.content == undefined || props.content == 0 ? (
              <span className="a-edit-right-content a-not-provided">
                Not Provided
              </span>
            ) : (
              <span className="a-edit-right-content">{props.content}</span>
            )
          ) : props.title == "Birthday" ? (
            props.content == "1111-11-11" ? (
              <span className="a-edit-right-content a-not-provided">
                Not Provided
              </span>
            ) : (
              <span className="a-edit-right-content">
                <Moment format="MMMM Do YYYY">{props.content}</Moment>
              </span>
            )
          ) : props.content == undefined ||
            props.content == "Not Provided" ||
            props.content == "1111-11-11" ? (
            <span className="a-edit-right-content a-not-provided">
              Not Provided
            </span>
          ) : (
            <span className="a-edit-right-content">{props.content}</span>
          )}
        </div>
        <div className="col-lg-1 col-sm-2">
          <button className="a-edit" onClick={props.editButtonClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeEditContent;
