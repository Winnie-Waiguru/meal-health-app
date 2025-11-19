function PrimaryButton({ onClick, children }) {
  return (
    <button className="primary-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
