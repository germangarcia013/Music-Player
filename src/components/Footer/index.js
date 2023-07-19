import "../Footer/style.css"
import Next from "../../assets/next.svg"
import Pause from "../../assets/pause.svg"
import Play from "../../assets/play.svg"
import Previous from "../../assets/previous.svg"
import Stop from "../../assets/stop.svg"

export default function Footer({ play, setPlay, music, setMusic, arrayMusics, audioRef }) {

    let { id, title, artist, url } = music;

    function handlePlay() {

        if (!url) {
            return;
        }
        setPlay(!play);

        if (!play) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause();
        }
    }

    function handlePrevious() {

        if (!url || id === 1) {
            return;
        }

        id--;

        const currentMusic = arrayMusics.find((e) => {
            return e.id === id;
        });

        setMusic(currentMusic);
        setPlay();
    }

    function handleNext() {

        if (!url || id === arrayMusics.length) {
            return;
        }

        id++;

        const currentMusic = arrayMusics.find((e) => {
            return e.id === id;
        });

        setMusic(currentMusic);
        setPlay();
    }

    function handleStop() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlay()
    }

    return (
        <footer className="main-footer">
            <section className="main-artist">
                <div className="container-artist">
                    <h2>{title}</h2>
                    <p>{artist}</p>
                </div>
            </section>

            <section className="main-controls">
                <div className="container-play">
                    <img
                        onClick={() => handleStop()}
                        src={Stop}
                        alt="icone de stop" />
                    <img
                        onClick={() => handlePrevious()}
                        src={Previous}
                        alt="icone de Previous"
                    />
                    <img
                        onClick={() => handlePlay()}
                        src={play ? Pause : Play}
                        alt="icone de Play e Pause"
                    />
                    <img
                        onClick={() => handleNext()}
                        src={Next}
                        alt="icone de Next" />
                </div>
            </section>
        </footer>
    )
}