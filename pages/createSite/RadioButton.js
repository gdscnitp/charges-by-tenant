function RadioButton(props) {
  return (
    <div>
      <input
        type="radio"
        id="customRadioInline1"
        name="customRadioInline1"
        className="custom-control-input"
      />
      <label className="custom-control-label" htmlFor="customRadioInline1">
        {props.name}
      </label>
    </div>
  );
}

export default RadioButton;
