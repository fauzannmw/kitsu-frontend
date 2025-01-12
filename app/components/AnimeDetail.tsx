"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const AnimeDetailClient = ({
  anime,
}: {
  anime: {
    posterImage: { large: string };
    titles: { en: string; ja_jp: string };
    synopsis: string;
    averageRating: string;
    episodeCount: number;
    status: string;
    startDate: string;
    endDate: string;
  };
}) => {
  return (
    <MainContainer>
      <BackLink href="/">&larr; Back to Anime List</BackLink>
      <Card>
        <ImageWrapper>
          <Image
            src={anime.posterImage.large}
            alt={anime.titles.en || "Anime Poster"}
            width={400}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{anime.titles.en || "Unknown Title"}</Title>
          <Subtitle>{anime.titles.ja_jp || "タイトルなし"}</Subtitle>
          <InfoSection>
            <InfoText>
              <InfoLabel>Synopsis:</InfoLabel>
              {anime.synopsis || "No synopsis available."}
            </InfoText>
            <InfoText>
              <InfoLabel>Rating:</InfoLabel>
              {anime.averageRating || "Not rated"}
            </InfoText>
            <InfoText>
              <InfoLabel>Episode Count:</InfoLabel>
              {anime.episodeCount || "Unknown"}
            </InfoText>
            <InfoText>
              <InfoLabel>Status:</InfoLabel>
              {anime.status || "Unknown"}
            </InfoText>
            <InfoText>
              <InfoLabel>Start Date:</InfoLabel>
              {anime.startDate || "Unknown"}
            </InfoText>
            <InfoText>
              <InfoLabel>End Date:</InfoLabel>
              {anime.endDate || "Ongoing"}
            </InfoText>
          </InfoSection>
        </ContentWrapper>
      </Card>
    </MainContainer>
  );
};

export default AnimeDetailClient;

const MainContainer = styled.main`
  padding: 1rem;
  max-width: 72rem;
  margin: 0 auto;
  background-color: var(--background);
  color: var(--foreground);
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: var(--link-color);
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = styled.div`
  background-color: var(--card-background);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 33%;
  }
`;

const ContentWrapper = styled.div`
  padding: 1.5rem;
  flex: 2;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: var(--title-color);
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-style: italic;
  color: var(--subtitle-color);
  margin-bottom: 1rem;
`;

const InfoSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-color);
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: var(--label-color);
  margin-right: 0.5rem;
`;
