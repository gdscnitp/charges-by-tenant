function EditBirthday(props) {
  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div className="a-after-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4">
          <span className="a-edit-left-title">{props.title}</span>
        </div>

        <div className="col-lg-8">
          <div className="a-flex-row">
            {/* Day */}
            <select
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "80px" }}
            >
              {runCallback(() => {
                const row = [];
                for (var i = 1; i < 32; i++) {
                  row.push(<option value={i}>{i}</option>);
                }
                return row;
              })}
            </select>

            {/* Month */}
            <select
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "120px" }}
            >
              {runCallback(() => {
                const row = [];
                const months = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "Decemeber",
                ];
                for (var i = 0; i < 12; i++) {
                  row.push(<option value={months[i]}>{months[i]}</option>);
                }
                return row;
              })}
            </select>

            {/* Year */}
            <select
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "80px" }}
            >
              {runCallback(() => {
                const row = [];
                for (var i = 1; i < 80; i++) {
                  row.push(<option value={1950 + i}>{1950 + i}</option>);
                }
                return row;
              })}
            </select>
          </div>
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

export default EditBirthday;
