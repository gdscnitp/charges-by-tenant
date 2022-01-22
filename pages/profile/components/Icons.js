

const Icons = (props) => {
  return (
    <a href={props?.path}>
      <div>
        <i className={props?.classprop}></i>
      </div>
    </a>
  );
};

export default Icons;
