// utils/youtubeHelper.ts
export function getYoutubeEmbedUrl(youtubeUrl: string): string {
  if (!youtubeUrl) return '';

  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];

  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}
