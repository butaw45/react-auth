export default function Card({ children }) {
  return (
    <div className="w-[80vw] md:w-[40vw] p-6 rounded-md space-y-4 bg-white shadow-md">
      {children}
    </div>
  );
}
