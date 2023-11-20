export default function ParrarelLAyout({ children, one, two }) {
  return (
    <section className="flex flex-col items-center gap-5">
      {children}
      {one}
      {two}
    </section>
  );
}
