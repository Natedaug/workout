function Checkbox({ value, ...rest }) {
  return (
    <span className="checkbox-wrapper">
      <label>
        <input type="checkbox" name={value} value={value} {...rest} />
        <span>{value}</span>
      </label>
    </span>
  );
}

export default Checkbox;
