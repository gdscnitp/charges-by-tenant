import Link from "next/link";

const Details = (props) => {
  return (
    <div className="right_top">
      <div className="rightTop_profile">
        <i className="fad fa-user-circle S_icon6"></i>
      </div>
      <div className="rightTop_details">
        <div className="details_head">
          <div className="headWriting">
            <h5> Hi! {props.name}</h5>
            <div className="head_secondLine">Welcome to your profile page.</div>
          </div>
          <Link href="/editprofile/EditTenant">
            <i className="fas fa-user-edit S_icon7"></i>
          </Link>
        </div>
        <div className="details">
          <div className="email">{props.email}</div>
          <div className="details1">{props.detail1}</div>
          <div className="details2">{props.detail2}</div>
          <div className="details3">{props.detail3}</div>
          <div className="details4">{props.detail4}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
