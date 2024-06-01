
import shuffle from '../../assets/imgs/shuffle.svg'
import previous_song from '../../assets/imgs/previous_song.svg'
import play from '../../assets/imgs/play.svg'
import next_song from '../../assets/imgs/next_song.svg'
import rewind from '../../assets/imgs/rewind.svg'
import pause from '../../assets/imgs/pause.svg'
import { ReactSVG } from "react-svg"
import { toggleRepeat, toggleShuffle } from '../../store/actions/player.action'

export function PlayerControls({ togglePlay, isShuffle, isRepeat, isPlaying }) {

    function onToggleShuffle() {
        toggleShuffle(isShuffle)
    }

    function onToggleRepeat() {
        toggleRepeat(isRepeat)
    }

    return (
        <div className="player-controls">
            <button onClick={onToggleShuffle} className={`btn-player-control btn-toggle-shuffle ${isShuffle ? 'active' : ""}`}>
                <ReactSVG src={shuffle} />
            </button>
            <button className="btn-player-control btn-previous-song">
                <ReactSVG src={previous_song} />
            </button>
            <button onClick={togglePlay} className="btn-toggle-play btn-player-control">
                <ReactSVG src={isPlaying ? pause : play} />
            </button>
            <button className="btn-player-control btn-next-song">
                <ReactSVG src={next_song} />
            </button>
            <button onClick={onToggleRepeat} className={`btn-player-control btn-repeat-toggle ${isRepeat ? 'active' : ""}`}>
                <ReactSVG src={rewind} />
            </button>
        </div>
    )
}