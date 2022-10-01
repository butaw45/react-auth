export default function ErrorMessage({ message, textSize }) {
  return <p className={`text-red-500 font-bold ${textSize}`}>{message}</p>;
}
