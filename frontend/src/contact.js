
function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="left">
                    <div className="head">
                        <img alt="" src="logo.png"></img>
                        <h1>Contact Us</h1>


                    </div>
                    <form>
                        <input type="text" required placeholder="Name*"></input>
                        <input type="email" required placeholder="Email*"></input>
                        <input type="text" required placeholder="Message*"></input>
                        <button>send</button>

                    </form>
                    <div className="social">
                        <button style={{marginRight:"20px"}}> 
                            <img alt="" src="facebook.jpg"></img>
                         
                        </button>
                        <button> 
                            <img alt="" src="insta.png"></img>
                         
                        </button>
                       
                 
                    </div>

                </div>
                <div className="right">
                    <iframe src="https://www.youtube.com/embed/PIXlC843B3A?controls=0&amp;clip=UgkxF5Z7KuRZiaKzkA34h8-n8ZnmyCmvWtSu&amp;clipt=EAAY1FI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                </div>
            </div>
        </>

    )
}
export default Contact;