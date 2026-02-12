interface Props {
  title: string;
  value: string;
}

const InfoCard = ({ title, value }: Props) => {
  return (
    <div className="rb:rounded-xl rb:border rb:p-4">
      <p className="rb:text-xs rb:text-gray-500">{title}</p>
      <p className="rb:mt-1 rb:font-medium">{value}</p>
    </div>
  );
};

export default InfoCard;
