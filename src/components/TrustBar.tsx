import { ShieldCheck, Lock, Headphones, Banknote, Clock, Award } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Verified & Licensed" },
  { icon: Lock, label: "256-bit Encrypted" },
  { icon: Banknote, label: "Instant UPI Payout" },
  { icon: Headphones, label: "24×7 Hindi Support" },
  { icon: Clock, label: "5-min ID Activation" },
  { icon: Award, label: "Trusted Since 2018" },
];

const PAYMENTS = ["UPI", "PhonePe", "GPay", "Paytm", "IMPS", "NEFT"];

export const TrustBar = () => {
  return (
    <section
      aria-label="Trust & payment methods"
      className="relative border-y border-gold/15 bg-secondary/30"
    >
      <div className="container py-6 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 group"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-colors">
                <Icon className="w-4 h-4 text-gold" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground/85 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="divider-gold my-6" />

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Accepted Payments
          </span>
          {PAYMENTS.map((p) => (
            <span
              key={p}
              className="px-3 py-1.5 rounded-md bg-background border border-border text-xs font-bold text-foreground/90 tracking-wider"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
