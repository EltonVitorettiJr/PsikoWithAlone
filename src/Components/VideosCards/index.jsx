import { memo, useEffect } from 'react';
import { allVideos } from '../../data/portfolioVideos';
import { ContentCard, VideoCard } from './styles';

function VideosCardsComponent({ selectedCategory }) {
  const filteredVideos =
    selectedCategory === 'Geral'
      ? allVideos
      : allVideos.filter((video) => video.category === selectedCategory);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [filteredVideos]);

  return (
    <ContentCard>
      {filteredVideos.map((video) => (
        <VideoCard
          key={video.id}
          dangerouslySetInnerHTML={{ __html: video.embedCode }}
        />
      ))}
    </ContentCard>
  );
}

export const VideosCards = memo(VideosCardsComponent);
