import { fetchAnimeDetail } from "@/app/lib/api";
import AnimeDetailClient from "@/app/components/AnimeDetail";

interface AnimeDetailProps {
  params: Promise<{ id: string }>;
}

const AnimeDetailPage = async ({ params }: AnimeDetailProps) => {
  const { id } = await params;
  const { data } = await fetchAnimeDetail(id);

  return <AnimeDetailClient anime={data.attributes} />;
};

export default AnimeDetailPage;
