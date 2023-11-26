import { usePlayerStore } from "@/store/playerStore"; // <== Global State
import { Pause, Play } from "./Player";

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const handleClick = () => {
    setCurrentMusic({
        playlist: {
            id
        }
    })
    setIsPlaying(!isPlaying);
  };

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id; // Manage play status on album covers

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
