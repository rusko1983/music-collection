export default function SongList({ tracks }) {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>
          <span>
            {track.track_number} {track.name}
          </span>
          <span>{track.duration}</span>
        </li>
      ))}
    </ul>
  );
}
