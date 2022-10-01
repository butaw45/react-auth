export default function LabelForm({ text }) {
  return <label htmlFor={text}>{text}</label>;
}
