const badges = [
  "Overnight Shipping",
  "Lifetime Warranty",
  "30 Days Free Return",
  "Certificate & Appraisal",
];

const StoneTrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 pt-4">
      {badges.map((badge) => (
        <div key={badge} className="text-sm text-gray-600">
          ✔ {badge}
        </div>
      ))}
    </div>
  );
};

export default StoneTrustBadges;
