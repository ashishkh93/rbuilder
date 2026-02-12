import { Check } from "lucide-react";

const badges = [
  "Overnight Shipping",
  "Lifetime Warranty",
  "30 Days Free Return",
  "Certificate & Appraisal",
];

const StoneTrustBadges = () => {
  return (
    <div className="rb:grid rb:grid-cols-2 rb:md:grid-cols-4 rb:lg:grid-cols-2 rb:gap-4 rb:pt-4">
      {badges.map((badge) => (
        <div
          key={badge}
          className="rb:flex rb:items-center rb:text-sm rb:text-gray-600 rb:gap-2"
        >
          <Check size={16} strokeWidth={2} />
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
};

export default StoneTrustBadges;
