// Placeholder hero visual: a glowing coal bed built in CSS so the layout reads
// correctly before real factory photography / video is dropped in.
// Swap the whole component for a <video> or <img> when assets arrive.
export default function CoalBed({ label = "Product & factory video", note }) {
  const bricks = Array.from({ length: 12 });
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-ink-2">
      {/* heat haze */}
      <div className="ember-pulse pointer-events-none absolute -bottom-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.5),rgba(255,90,31,0)_65%)] blur-2xl" />
      <div className="relative grid aspect-4/3 place-items-center p-8 sm:aspect-16/10">
        <div className="grid w-full max-w-sm grid-cols-4 gap-2">
          {bricks.map((_, i) => {
            const heat = (i * 37) % 100;
            return (
              <div
                key={i}
                className="aspect-square rounded-[5px] border border-white/5"
                style={{
                  background: `linear-gradient(150deg, rgba(255,179,71,${
                    0.06 + heat / 420
                  }), #131316 62%)`,
                  boxShadow:
                    heat > 55
                      ? "inset 0 0 12px rgba(255,90,31,0.35)"
                      : "inset 0 0 8px rgba(0,0,0,0.6)",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="relative border-t border-line bg-ink/70 px-5 py-3 backdrop-blur">
        <p className="font-mono text-[11px] tracking-[0.16em] text-ash-3 uppercase">
          {label}
        </p>
        {note && <p className="mt-1 text-[13px] text-ash-2">{note}</p>}
      </div>
    </div>
  );
}
