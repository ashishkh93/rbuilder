import DetailRow from "./DetailRow";

const DetailSection = ({ title, rows }: DetailSectionProps) => {
  return (
    <div>
      {/* Section Title */}
      <h3 className="mb-4 text-13 font-semibold text-black">{title}</h3>

      {/* Rows */}
      <div className="space-y-2">
        {rows.map((row) => (
          <DetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  );
};

export default DetailSection;
