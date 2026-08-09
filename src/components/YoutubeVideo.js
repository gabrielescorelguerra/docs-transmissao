export default function YouTubeVideo({ id }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title="YouTube video"
        style={{
          width: '80%',
          height: '90%',
          border: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <br/>
    </div>
  );
}