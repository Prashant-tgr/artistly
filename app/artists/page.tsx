"use client";

import { useEffect, useState } from "react";
import ArtistCard from "../../components/ArtistCard";
import FilterBlock from "../../components/FilterBlock";
import data from "../../data/artists.json";
import { useSearchParams } from 'next/navigation';

const unique = (arr: string[]) => Array.from(new Set(arr));

export default function ArtistListPage() {
  const [category, setCategory] = useState("");
  
  const [location, setLocation] = useState("");
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    let result = data;

    if (category) {
      result = result.filter((a) => a.category === category);
    }
    if (location) {
      result = result.filter((a) => a.location === location);
    }

    setFiltered(result);
  }, [category, location]);

  const categories = unique(data.map((a) => a.category));
  const locations = unique(data.map((a) => a.location));

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Browse Artists</h2>

      {/* Filters */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <FilterBlock
          filters={categories}
          label="Category"
          value={category}
          onChange={setCategory}
        />
        <FilterBlock
          filters={locations}
          label="Location"
          value={location}
          onChange={setLocation}
        />
        {/* You can add price filtering here */}
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.name}
            category={artist.category}
            price={artist.price}
            location={artist.location}
          />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className="mt-6 text-gray-500 dark:text-gray-300 text-center">No artists found for selected filters.</p>
      )}
    </main>
  );
}
