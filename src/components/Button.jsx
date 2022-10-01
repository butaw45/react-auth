export default function Button({ type, children }) {
  return (
    <button
      className="bg-violet-600 text-white py-2 px-4 rounded-md"
      type={type}
    >
      {children}
    </button>
  );
}
