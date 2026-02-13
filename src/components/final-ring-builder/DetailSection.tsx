import DetailRow from "./DetailRow";

const DetailSection = ({ title, rows }: DetailSectionProps) => {
  return (
    <div>
      {/* Section Title */}
      <div className="rb:mb-4 rb:text-13 rb:font-semibold rb:text-black">{title}</div>

      {/* Rows */}
      <div className="rb:space-y-2">
        {rows.map((row) => (
          <DetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  );
};

export default DetailSection;
