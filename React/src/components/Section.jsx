export default function Section({ title, children }) {
  return (
    <div className="header3">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
