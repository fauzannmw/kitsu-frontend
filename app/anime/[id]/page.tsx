import { fetchAnimeDetail } from "@/app/lib/api";
import Link from "next/link";
import Image from "next/image";

interface AnimeDetailProps {
  params: Promise<{ id: string }>;
}

const AnimeDetailPage = async ({ params }: AnimeDetailProps) => {
  const { id } = await params;
  const { data } = await fetchAnimeDetail(id);

  const anime = data.attributes;

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-500 hover:underline text-lg font-medium"
      >
        &larr; Back to Anime List
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 w-full">
            <Image
              src={anime.posterImage.large}
              alt={anime.titles.en || "Anime Poster"}
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {anime.titles.en || "Unknown Title"}
            </h1>
            <h2 className="text-2xl text-gray-500 italic mb-4">
              {anime.titles.ja_jp || "タイトルなし"}
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong className="text-blue-500">Synopsis:</strong>{" "}
                {anime.synopsis || "No synopsis available."}
              </p>
              <p>
                <strong className="text-blue-500">Rating:</strong>{" "}
                {anime.averageRating || "Not rated"}
              </p>
              <p>
                <strong className="text-blue-500">Episode Count:</strong>{" "}
                {anime.episodeCount || "Unknown"}
              </p>
              <p>
                <strong className="text-blue-500">Status:</strong>{" "}
                {anime.status || "Unknown"}
              </p>
              <p>
                <strong className="text-blue-500">Start Date:</strong>{" "}
                {anime.startDate || "Unknown"}
              </p>
              <p>
                <strong className="text-blue-500">End Date:</strong>{" "}
                {anime.endDate || "Ongoing"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimeDetailPage;
