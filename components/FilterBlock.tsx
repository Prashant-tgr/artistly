type Props = {
  filters: string[];
  label: string;
  value: string;
  onChange: (val: string) => void;
};

export default function FilterBlock({ filters, label, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <select
        className="w-full border rounded px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {filters.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
