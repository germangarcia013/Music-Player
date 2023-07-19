import './App.css';
import Header from "./components/Header/index"
import musics from "./musics"
import Footer from "./components/Footer/index"
import { useState, useRef } from "react"

function App() {
  const [play, setPlay] = useState(true);
  const [music, setMusic] = useState({});
  const audioRef = useRef(null);

  let { url } = music;

  function handleMusic({ id, title, artist, url }) {

    audioRef.current.play()

    setPlay();
    setMusic({
      id,
      title,
      artist,
      url,
    })

  };

  return (
    <div className="container">

      <Header />

      <audio
        src={url}
        ref={audioRef}
      />

      <main className='main-container'>

        <div className='main-titulo'>
          <h1 className='titulo'>The best play list</h1>
        </div>

        <div className='main-cards'>
          {musics.map((music) => (
            <div
              onClick={() => handleMusic(music)}
              className='container-cards'
              key={music.id} >

              <img className="img-music"
                src={music.cover}
                alt="" />

              <h2 className="sub-titulo">
                {music.title}
              </h2>

              <p className="descricao">
                {music.description}
              </p>
            </div>
          ))}
        </div>

      </main>

      <Footer
        music={music}
        setMusic={setMusic}
        play={play}
        setPlay={setPlay}
        arrayMusics={musics}
        audioRef={audioRef}
      />
    </div >
  );
}

export default App;



