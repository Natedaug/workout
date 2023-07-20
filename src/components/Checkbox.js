function Checkbox({ value, ...rest }) {
  return (
    <div className="checkbox-wrapper mr-4">
      <label>
        <input
          className="m-1 cursor-pointer"
          type="checkbox"
          name={value}
          value={value}
          {...rest}
        />
        <span>{value}</span>
      </label>
    </div>
  );
}

export default Checkbox;
