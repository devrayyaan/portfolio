export default function Title({ text }: { text: string }) {
  return <h1 className="text-2xl md:text-3xl font-bold mb-2">{text}</h1>;
}
