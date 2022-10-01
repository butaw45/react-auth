import ErrorMessage from "./ErrorMessage";

export default function FormControl({
  children,
  errMsg,
  errTextSize = "text-xs",
}) {
  return (
    <div className="flex flex-col">
      {children}
      <ErrorMessage textSize={errTextSize} message={errMsg} />
    </div>
  );
}
