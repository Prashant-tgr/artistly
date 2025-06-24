type Props = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function ArtistCard({ name, category, price, location }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <img
        src="https://placehold.co/600x400.png"
        alt={`${name}'s image`}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">{category} • {location}</p>
      <p className="text-sm text-gray-500 mb-3">{price}</p>
      <button className="mt-auto bg-indigo-600 text-white px-4 py-2 text-sm rounded hover:bg-indigo-700">
        Ask for Quote
      </button>
    </div>
  );
}

