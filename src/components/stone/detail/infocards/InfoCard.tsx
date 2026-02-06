interface Props {
  title: string;
  value: string;
}

const InfoCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
};

export default InfoCard;
