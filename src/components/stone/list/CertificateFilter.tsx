import { cn } from "@/lib/utils";
import { CERTIFICATES } from "@/utils/constants";

const CertificateFilter = ({ value, onChange }: CertificateFilterProps) => {
  return (
    <div className="rb:flex rb:flex-col rb:gap-4">
      <div className="rb:text-base rb:font-semibold">Certificate</div>

      <div className="rb:flex rb:gap-4">
        {CERTIFICATES.map((cert) => {
          const selected = value.includes(cert);

          return (
            <button
              key={cert}
              type="button"
              onClick={() =>
                onChange(
                  value.includes(cert)
                    ? value.filter((v) => v !== cert)
                    : [...value, cert]
                )
              }
              className={cn(
                "rb:h-16 rb:w-24 rb:rounded-md rb:flex rb:items-center rb:justify-center rb:cursor-pointer",
                "rb:text-sm rb:font-medium rb:transition-all rb:duration-200 rb:uppercase",
                selected
                  ? "rb:border-[0.1px]! rb:border-muted! rb:bg-primary/10 rb:text-primary"
                  : "rb:border rb:border-muted! rb:bg-background rb:text-muted-foreground rb:hover:border-foreground/40"
              )}
            >
              {cert}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CertificateFilter;
