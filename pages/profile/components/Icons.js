import Link from "next/link";

const Icons = (props) => {
  return (
    <Link href={props?.path}>
      <div>
        <i className={props?.classprop}></i>
      </div>
    </Link>
  );
};

export default Icons;
