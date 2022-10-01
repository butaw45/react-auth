export default function Input({
  type,
  placeholder,
  name,
  register,
  validate,
  required,
}) {
  return (
    <input
      className="form-input"
      type={type}
      id={name}
      placeholder={placeholder}
    />
  );
}
