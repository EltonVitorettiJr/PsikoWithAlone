export async function getYoutubeVideos() {
  const URL = '/api/youtube';

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar dados do nosso backend: ${response.statusText}`,
      );
    }

    const videos = await response.json();
    return videos;
  } catch (error) {
    console.error('Erro ao buscar vídeos (do frontend):', error);
    return [];
  }
}
