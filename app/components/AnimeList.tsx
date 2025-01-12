"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
    <GridContainer>
      {anime.map((item) => (
        <Card key={item.id}>
          <Link href={`/anime/${item.id}`} passHref>
            <ImageWrapper>
              <Image
                src={item.attributes.posterImage.medium}
                alt={item.attributes.titles.en || "Anime Poster"}
                width={200}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </ImageWrapper>
          </Link>
          <CardContent>
            <Title>{item.attributes.titles.en || "Unknown Title"}</Title>
            <Subtitle>
              {item.attributes.titles.ja_jp || "タイトルなし"}
            </Subtitle>
          </CardContent>
        </Card>
      ))}
    </GridContainer>
  );
};

export default AnimeList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: var(--card-bg);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-align: center;
`;

