const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className="flex items-start">
      {/* Label */}
      <div className="w-41 text-13 text-gray-500">{label}</div>

      {/* Value */}
      <div className="text-xs font-semibold text-secondary">{value}</div>
    </div>
  );
};

export default DetailRow;
