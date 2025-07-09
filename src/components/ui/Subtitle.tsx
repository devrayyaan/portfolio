export default function Subtitle({ text }: { text: string }) {
  return (
    <p className="text-gray-500 lg:text-lg font-medium max-w-2xl mb-10 mt-2 leading-relaxed">
      {text}
    </p>
  );
}
