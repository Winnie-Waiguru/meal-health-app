function FormWrapper({ children }) {
  return (
    <form className="mt-8 flex flex-col items-center justify-center h-full">
      {children}
    </form>
  );
}

export default FormWrapper;
