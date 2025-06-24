'use client';

import { useState } from "react";

type Artist = {
    id: number;
    name: string;
    category: string;
    location: string;
    price: string;
}

const mockSubmissions: Artist[] = [
    {
        id: 1,
        name: "DJ Nova",
        category: "DJ",
        location: "Mumbai",
        price: "₹20,000 - ₹30,000"
    },
    {
        id: 2,
        name: "Sufi Soul",
        category: "Singer",
        location: "Delhi",
        price: "₹15,000 - ₹25,000"
    }
];

export default function DashboardPage() {
    const [submissions, setSubmissions] = useState<Artist[]>(mockSubmissions);

    return (
        <main className="max-w-5xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">
                Manager Dashboard
            </h2>

            {submissions.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-300">No artist submissions yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border">
                        <thead className="bg-gray-200 dark:bg-gray-700 text-sm text-left">
                            <tr>
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Category</th>
                                <th className="p-3 border">Location</th>
                                <th className="p-3 border">Fee</th>
                                <th className="p-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((artist) => (
                                <tr key={artist.id} className="text-sm border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="p-3 border">{artist.name}</td>
                                    <td className="p-3 border">{artist.category}</td>
                                    <td className="p-3 border">{artist.location}</td>
                                    <td className="p-3 border">{artist.price}</td>
                                    <td className="p-3 border">
                                        <button className="text-indigo-600 hover:underline" onClick={() =>
                                            alert(`Viewing details for ${artist.name}`)}>
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}