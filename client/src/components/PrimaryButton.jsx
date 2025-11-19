function PrimaryButton({ onClick, text }) {
  return (
    <button className="primary-button" type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
