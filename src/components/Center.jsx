export default function Center({ children }) {
  return (
    <div className="h-screen bg-gray-100 grid grid-flow-dense grid-cols-auto justify-center items-center">
      {children}
    </div>
  );
}
