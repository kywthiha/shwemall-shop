export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`text-primary-text bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
