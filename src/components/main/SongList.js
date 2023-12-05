export default function SongList({track}) {
    return  <li key={track.id} >
    <div>
      <span>{track.track_number}</span>
      <span>{track.name}</span>
      <span>{track.duration}</span>

    </div>
  </li>    
}