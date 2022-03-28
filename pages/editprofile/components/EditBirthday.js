import { useState } from "react";

function EditBirthday(props) {
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

  const monthToNum = (month) => {
    for (var i = 0; i < 12; i++) {
      if (month == months[i]) {
        return i + 1;
      }
    }
    return -1;
  };

  const runCallback = (cb) => {
    return cb();
  };

  const [birthday, setBirthday] = useState({
    date: "",
    month: "",
    year: "",
  });

  const onChange = (e) => {
    setBirthday({ ...birthday, [e.target.name]: e.target.value });
  };

  const formatDate = (date) => {
    var intDate = parseInt(date);
    var result;
    if (intDate <= 9) {
      result = "0" + date;
    } else {
      result = date;
    }
    return result;
  };

  const submitHandler = () => {
    var resultString =
      birthday.year +
      "-" +
      formatDate(monthToNum(birthday.month)) +
      "-" +
      formatDate(birthday.date);
    props.pushBirthday(resultString);
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
              name="date"
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "100px" }}
              onChange={onChange}
            >
              {runCallback(() => {
                const row = [];
                row.push(
                  <option key="date" selected value={-1}>
                    Choose
                  </option>
                );
                for (var i = 1; i < 32; i++) {
                  row.push(
                    <option key={i} value={i}>
                      {i}
                    </option>
                  );
                }
                return row;
              })}
            </select>

            {/* Month */}
            <select
              name="month"
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "120px" }}
              onChange={onChange}
            >
              {runCallback(() => {
                const row = [];
                row.push(
                  <option key="month" selected value={-1}>
                    Choose
                  </option>
                );
                for (var i = 0; i < 12; i++) {
                  row.push(
                    <option key={months[i]} value={months[i]}>
                      {months[i]}
                    </option>
                  );
                }
                return row;
              })}
            </select>

            {/* Year */}
            <select
              name="year"
              className="form-select form-select-sm"
              aria-label="form-select"
              style={{ width: "100px" }}
              onChange={onChange}
            >
              {runCallback(() => {
                const row = [];
                row.push(
                  <option key="Year" selected value={-1}>
                    Choose
                  </option>
                );
                var start = 1950;
                for (var i = 1; i < 80; i++) {
                  row.push(
                    <option key={start + i} value={start + i}>
                      {start + i}
                    </option>
                  );
                }
                return row;
              })}
            </select>
          </div>
        </div>
        <div className="a-flex-buttons">
          <button
            className="btn btn-primary a-save-button"
            onClick={submitHandler}
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
