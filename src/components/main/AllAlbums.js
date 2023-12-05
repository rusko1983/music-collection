import AlbumCard from "./AlbumCard";

export default function AllAlbums({ cards }) {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <AlbumCard key={card.id} artist={card.artist} title={card.title}  image={card.image} tracks={card.tracks} />
        )
        
        
        
        
        
        )
    
    
    
    
    
    }







      </ul>
    </div>
  );
}
