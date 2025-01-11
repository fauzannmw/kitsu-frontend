import Image from "next/image";
import Link from "next/link";

interface Anime {
  id: string;
  attributes: {
    titles: {
      en: string;
      ja_jp: string;
    };
    posterImage: {
      medium: string;
    };
  };
}

interface AnimeListProps {
  anime: Anime[];
}

const AnimeList: React.FC<AnimeListProps> = ({ anime }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {anime.map((item) => (
        <Link key={item.id} href={`/anime/${item.id}`} className="group">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
            <Image
              src={item.attributes.posterImage.medium}
              alt={item.attributes.titles.en || "Anime Poster"}
              width={200}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg group-hover:text-blue-500">
                {item.attributes.titles.en || "Unknown Title"}
              </h2>
              <p className="text-gray-600 text-sm">
                {item.attributes.titles.ja_jp}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
