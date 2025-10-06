export async function getYoutubeVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&key=${API_KEY}`;

  try {
    //atualização da página a cada 1 hora
    const response = await fetch(URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response) {
      throw new Error(`Erro da API do YouTube: ${response.statusText}`);
    }

    const data = await response.json();

    //caso o data items for nulo, retornará um array nulo
    const videos =
      data.items?.map((video) => ({
        id: video.snippet.resourceId.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
      })) || [];

    return videos;
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    return []; // retorna um array vazio em caso de erro
  }
}
