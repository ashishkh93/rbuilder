const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className="rb:flex rb:items-start">
      {/* Label */}
      <div className="rb:w-41 rb:text-13 rb:text-gray-500">{label}</div>

      {/* Value */}
      <div className="rb:text-xs rb:font-semibold rb:text-secondary">{value}</div>
    </div>
  );
};

export default DetailRow;
