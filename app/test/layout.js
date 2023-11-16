export default function TestLayout({ children }) {
  return (
    <div className="bg-slate-600 w-full flex justify-center flex-col items-center">
      {children}
    </div>
  );
}
