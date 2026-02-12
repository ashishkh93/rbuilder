import DetailRow from "./DetailRow";

const DetailSection = ({ title, rows }: DetailSectionProps) => {
  return (
    <div>
      {/* Section Title */}
      <h3 className="rb:mb-4 rb:text-13 rb:font-semibold rb:text-black">{title}</h3>

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
