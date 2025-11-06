export default async function handler(request, response) {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&key=${API_KEY}`;

  try {
    const apiResponse = await fetch(URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!apiResponse.ok) {
      throw new Error(`Erro da API do YouTube: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();

    const videos =
      data.items?.map((video) => ({
        id: video.snippet.resourceId.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
        description: video.snippet.description,
      })) || [];

    console.log(data);

    response.setHeader(
      'Cache-Control',
      's-maxage=3600, stale-while-revalidate',
    );
    return response.status(200).json(videos);
  } catch (error) {
    console.error('Erro no backend (api/youtube.js):', error);
    return response.status(500).json({ error: 'Erro ao buscar vídeos.' });
  }
}
