function FormInput({ icon: IconComponent, id, label, type, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="label-text">
        {label}
      </label>
      <br />
      <div className="input-container">
        <input className="input-field" id={id} type={type} {...rest} />
        {IconComponent && (
          <button type="button" className="icon-wrapper">
            <IconComponent />
          </button>
        )}
      </div>
    </div>
  );
}

export default FormInput;
