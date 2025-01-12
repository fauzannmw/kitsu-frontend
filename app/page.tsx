import { fetchAnimeList } from "@/app/lib/api";
import AnimeList from "@/app/components/AnimeList";
import Pagination from "@/app/components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const ITEMS_PER_PAGE = 10;

  const currentPage = parseInt((await searchParams).page || "1", 10);
  const data = await fetchAnimeList(currentPage, ITEMS_PER_PAGE);

  return (
    <main className="p-4 max-w-6xl mx-auto text-gray-800 dark:text-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Explore Anime
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover your favorite anime and explore new stories.
        </p>
      </header>
      <AnimeList anime={data.data} />
      <Pagination
        currentPage={currentPage}
        totalItems={data.meta.count}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </main>
  );
}
