export default function SongList({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <span>
            {track.track_number} {track.name}
          </span>
          <span>{track.duration}</span>
        </div>
      ))}
    </div>
  );
}
