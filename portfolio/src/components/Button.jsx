function Button({ className, size, children }) {
  return (
    <button>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
