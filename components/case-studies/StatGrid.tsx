/**
 * A row of key numbers for skimming. Written in markdown as a ```stats block,
 * one stat per line: value | what it counts | how we know (Measured, Estimated, Reasoning).
 */
export default function StatGrid({ text }: { text: string }) {
  const stats = text
    .split('\n')
    .map((line) => line.split('|').map((part) => part.trim()))
    .filter((parts) => parts.length >= 2 && parts[0] && parts[1])
    .map(([value, label, basis]) => ({ value, label, basis }));

  if (!stats.length) return null;

  return (
    <ul className={`not-prose my-10 grid list-none grid-cols-2 gap-3 p-0 ${stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
      {stats.map((stat) => (
        <li
          key={`${stat.value}-${stat.label}`}
          className="flex flex-col gap-1 rounded-xl border border-[#E5E5E5] bg-white p-4"
        >
          <span className="text-[26px] font-semibold leading-tight text-[#1A1A1A]">{stat.value}</span>
          <span className="text-sm leading-snug text-[#555555]">{stat.label}</span>
          {stat.basis && (
            <span className="mt-1 text-xs font-medium uppercase tracking-wide text-[#1D4ED8]">{stat.basis}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
