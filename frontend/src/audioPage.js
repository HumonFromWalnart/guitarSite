import bruh from './audio/bruh.mp3'
import metallica from './audio/02-master_of_puppets.mp3'
import bonk from './audio/hitsound_2.mp3'
import bonk2 from './audio/loud-bonk-sfx.mp3'
import bonk3 from './audio/tf2-bonk.mp3'
import pubgPan from './audio/pubg-pan-sound-effect.mp3'
import button from './redButton.png'
import saul from './audio/saul-goodman-better-call-saul.mp3'
import left from './audio/discord-leave_WRzD7sx.mp3'
import vineboom from './audio/vine-boom.mp3'

// const playAudio = async () => {
//     const audio = new Audio(bruh);
//     audio.play()
// }


export const AudioPage = () => {
    const audio = new Audio(bruh);
    const audio2 = new Audio(metallica);
    const audio3 = new Audio(bonk);
    const audio4 = new Audio(bonk2);
    const audio5 = new Audio(bonk3);
    const audio6 = new Audio(pubgPan);
    const audio7 = new Audio(saul);
    const audio8 = new Audio(left);
    const audio9 = new Audio(vineboom);

    return (
        <div className='audioContainer'>
            <div className='buttonContainer'>
                <img src={button} onClick={() => audio.play()} id='button' />
                <div>bruh</div>
            </div>
            <div className='buttonContainer'>
                <img src={button} onClick={() => audio2.play()} id='button' />
                <div>master of puppets</div>
            </div>
            <div className='buttonContainer'>
                <img src={button} onClick={() => audio3.play()} id='button' />
                <div>pan</div>
            </div>
            <div className='buttonContainer'>
                <img src={button} onClick={() => audio4.play()} id='button' />
                <div>loud bonk</div>
            </div>
            <div className='buttonContainer'>
                <img src={button} onClick={() => audio5.play()} id='button' />
                <div>pan 2</div>
            </div>
            <div className='buttonContainer' >
                <img src={button} onClick={() => audio6.play()} id='button' />
                <div>pan</div>
            </div>
            <div className='buttonContainer' >
                <img src={button} onClick={() => audio7.play()} id='button' />
                <div>saul</div>
            </div>
            <div className='buttonContainer' >
                <img src={button} onClick={() => audio8.play()} id='button' />
                <div>left</div>
            </div>
            <div className='buttonContainer' >
                <img src={button} onClick={() => audio9.play()} id='button' />
                <div>vineboom</div>
            </div>
        </div>
    )
}

