function FormInput({ id, label, type, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="label-text">
        {label}
      </label>
      <br />
      <input className="input-field" id={id} type={type} {...rest} />
    </div>
  );
}

export default FormInput;
