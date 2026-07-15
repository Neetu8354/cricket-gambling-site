import heroImg from "@/assets/hero-cricket.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { Trophy, Zap, ShieldCheck, Star, Sparkles, TrendingUp, CircleDot } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image with strong dark overlay for readability */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Play IPL 2026 online cricket betting on Mahadev Book — India's #1 betting ID"
          className="w-full h-full object-cover opacity-30 sm:opacity-40"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/70 sm:bg-gradient-to-r sm:from-background sm:via-background/85 sm:to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        {/* Animated gold orb (bottom only) */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      </div>

      <div className="relative container py-14 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {/* Eyebrow + LIVE + rating */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-red-500" />
              </span>
              LIVE
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> #1 Cricket Betting ID
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-card/90 border border-gold/30 text-xs">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-foreground font-bold">4.9</span>
              <span className="text-muted-foreground hidden sm:inline">/ 12,480 reviews</span>
            </div>
          </div>

          {/* Headline — bold, solid, high-contrast */}
          <h1 className="font-display font-bold leading-[1.05] tracking-tight relative">
            <Sparkles className="absolute -top-3 -left-2 w-5 h-5 sm:w-7 sm:h-7 text-gold animate-pulse" />
            <span className="block text-gradient-gold text-4xl sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]">
              Mahadev Book
            </span>
            <span className="block text-foreground text-xl sm:text-3xl md:text-5xl lg:text-6xl mt-2 sm:mt-3 font-bold">
              India's Most Trusted
            </span>
            <span className="block text-foreground text-lg sm:text-2xl md:text-4xl lg:text-5xl mt-1 font-semibold">
              Online Cricket <span className="text-gold">Betting ID</span>
            </span>
          </h1>

          {/* Sub */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/85 max-w-2xl leading-relaxed">
            Bet on IPL, T20 World Cup and every cricket league plus live casino — Teen Patti, Andar Bahar, Roulette and more. Instant UPI deposit & withdrawal in{" "}
            <span className="text-gold font-bold">Indian Rupees ₹</span>. 24×7 WhatsApp support in Hindi & English.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex justify-center items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700" />
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 relative" />
              <span className="relative">Get Mahadev Book ID</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border-2 border-gold/60 bg-background/60 text-foreground font-semibold text-sm sm:text-base hover:border-gold hover:bg-gold/10 transition-all"
            >
              <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust row — tighter, brighter */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-4 border-t border-gold/20">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold" /> 100% Safe
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/90 font-medium">
              <Zap className="w-4 h-4 text-gold" /> Instant UPI Withdrawal
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/90 font-medium">
              <Trophy className="w-4 h-4 text-gold" /> 60,000+ Live Events
            </div>
          </div>

          {/* Mobile mini stats — 2x2 attractive cards */}
          <div className="grid grid-cols-2 gap-2.5 lg:hidden pt-2">
            {[
              { v: "12,480+", l: "Verified Users", icon: TrendingUp },
              { v: "₹50Cr+", l: "Paid in 2026", icon: Trophy },
              { v: "5–15 min", l: "UPI Payout", icon: Zap },
              { v: "24×7", l: "Hindi Support", icon: ShieldCheck },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-3 flex items-center gap-2.5">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-gold" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-display font-bold text-gradient-gold leading-tight">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide leading-tight">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards (desktop only) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-16 max-w-5xl">
          {[
            { v: "12,480+", l: "Verified Users" },
            { v: "₹50Cr+", l: "Paid Out 2026" },
            { v: "5–15 min", l: "Avg Withdrawal" },
            { v: "24×7", l: "Hindi Support" },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-5 text-center">
              <div className="text-2xl xl:text-3xl font-display font-bold text-gradient-gold">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Floating winner badge — desktop only */}
        <div className="hidden xl:flex absolute right-8 top-32 glass-card rounded-2xl px-4 py-3 items-center gap-3 animate-float shadow-gold-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-gold font-bold">Recent Winner</div>
            <div className="text-sm font-bold text-foreground">Rahul · ₹2,48,500</div>
            <div className="text-[10px] text-muted-foreground">IPL Match Odds · 2 min ago</div>
          </div>
          <CircleDot className="w-3 h-3 text-green-400 animate-pulse" />
        </div>
      </div>

      {/* Marquee feature strip */}
      <div className="relative border-y border-gold/20 bg-gradient-to-r from-background via-secondary/40 to-background overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-4 shrink-0">
              {["⚡ Instant UPI Withdrawal", "🏏 IPL 2026 Live Markets", "🎰 Teen Patti · Andar Bahar · Roulette", "💰 ₹100 Min Deposit", "🔒 100% Safe & Verified", "📱 24×7 Hindi WhatsApp Support", "🎯 60,000+ Live Events / Month"].map((t, i) => (
                <span key={`${k}-${i}`} className="text-xs sm:text-sm font-semibold text-foreground/85 flex items-center gap-2">
                  {t}
                  <span className="text-gold">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
