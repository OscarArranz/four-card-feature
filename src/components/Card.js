// Hotfix to load Tailwindcss classes before dynamically setting them up
// border-cyan
// border-red
// border-orange
// border-blue

export default function Card({ title, content, iconURL, color, className }) {
  return (
    <div
      className={`flex flex-col items-start lg:row-span-2 text-left bg-white rounded-md border-t-4 py-6 px-8 mb-6 shadow-card border-${color} ${className}`}
    >
      <h2 className="text-xl font-bold text-very-dark-blue mb-2">{title}</h2>
      <p className="text-grayish-blue text-xs tracking-normal mb-8">
        {content}
      </p>
      <img src={iconURL} className="self-end w-14" alt="card-icon" />
    </div>
  );
}
