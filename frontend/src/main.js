import './App.css';
function Main() {
    return (
        <>
            <div className='head'>
                <div className='head-heading'>
                    <h1>
                        era timepieces
                    </h1>
                    <span>
                        2023
                    </span>

                </div>
                <div className='head-logo'>
                    <div className='facebook'>
                        <img alt='' src='facebook.jpg'></img>
                    </div>
                    <div className='insta'>
                        <img alt='' src='insta.png'></img>
                    </div>

                </div>
            </div>
            <div className='sub-head'>
                <div className='txt'>
                    <p>
                        Is centered around the mission statement of bringing ultra</p>
                    <p>
                        rare and expensive haute horology complication  to all.

                    </p>

                </div>
                <div className='list'>
                    <p className='new'>New:</p>
                    <p> Prometheus / Hyperion / Odyssey</p>

                </div>
            </div>
            <div className='main-video'>
            <iframe width="100%" height="1080" src="https://www.youtube.com/embed/wVuFJED0Fxc" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"  allowFullScreen></iframe>

            </div>
        </>
    )
}
export default Main;