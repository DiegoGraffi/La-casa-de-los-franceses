type Props = {
  text: string;
};

export default function BotonXS({ text }: Props) {
  return (
    <div className="bg-`${color}`">
      <p>{text}</p>
    </div>
  );
}
