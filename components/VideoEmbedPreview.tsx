import getYouTubeID from "get-youtube-id";
import { PreviewLayoutKey, PreviewProps } from "sanity";

interface VideoEmbedPreviewProps extends PreviewProps<PreviewLayoutKey> {
  video?: {
    url: string | undefined;
  };
}

const VideoEmbedPreview = ({ video }: VideoEmbedPreviewProps) => {
  const url = video?.url;
  const videoId = url ? getYouTubeID(url) : undefined;
  const YTUrl = `https://www.youtube.com/embed/${videoId}`;

  if (!videoId) {
    return <p>Se necesita un enlace valido de Youtube.</p>;
  }

  return (
    <iframe
      width="520"
      height="292.50"
      src={YTUrl}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default VideoEmbedPreview;
