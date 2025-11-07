import { getYoutubeVideos } from '../../Services/api';
import { ContentCard, VideoCard, VideoTitle } from './styles';

import { useState, useEffect } from 'react';

export function VideosCards() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const videosData = await getYoutubeVideos();
      setVideos(videosData);
    }

    loadVideos();
  }, []);

  return (
    <ContentCard>
      {/* {videos.map((video) => (
        <VideoCard
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
        >
          <img src={video.thumbnail} alt="video-thumbnail" />
          <VideoTitle>{video.title}</VideoTitle>
        </VideoCard>
      ))} */}
    </ContentCard>
  );
}
