import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import {
  MicrophoneIcon,
  MusicalNoteIcon,
  SpeakerWaveIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="bg-indigo-50 dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Book Talented Performers with Ease</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Artistly connects event planners with amazing singers, dancers, speakers, DJs, and more.
          </p>
          <Link
            href="/artists"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Explore Artists
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-10 text-center">Popular Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={`/artists?category=${encodeURIComponent(cat.title)}`}
                className="border rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center hover:ring-2 hover:ring-indigo-500 bg-white dark:bg-gray-800"
              >
                <cat.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h4 className="font-bold text-lg mb-2">{cat.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t mt-auto bg-white dark:bg-gray-950">
        &copy; {new Date().getFullYear()} Artistly.com — Built for the Eventful India test
      </footer>
    </main>
  );
}

const categories = [
  {
    title: "Singers",
    description: "Melodic voices for your musical events.",
    icon: MicrophoneIcon,
  },
  {
    title: "Dancers",
    description: "Add energy and color to your functions.",
    icon: MusicalNoteIcon,
  },
  {
    title: "Speakers",
    description: "Inspirational talks for corporate or public events.",
    icon: SpeakerWaveIcon,
  },
  {
    title: "DJs",
    description: "Bring the beats to your party night.",
    icon: CircleStackIcon,
  },
];

