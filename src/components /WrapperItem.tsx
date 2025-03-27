export const WrapperItem = ({ children, className }) => {
  return (
    <div className={`px-3 py-5 bg-white shadow-2xl  ${className}`}>
      {children}
    </div>
  );
};
