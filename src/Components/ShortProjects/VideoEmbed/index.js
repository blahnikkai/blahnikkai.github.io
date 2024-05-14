import './video_embed.css'

export default function VideoEmbed() {
  return (
    <div id="video_embed_tile" className="short_tile">
        <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/lrW-HrbhZWY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
  )
}