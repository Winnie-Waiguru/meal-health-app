function PrimaryButton({ onClick, children }) {
  return (
    <button
      className="w-[324px] h-14 my-2 rounded-[10px] bg-[#266431] text-2xl font-semibold text-white  "
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
