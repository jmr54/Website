function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="#me">About Me<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#gallery">Gallery</a>
                <a class="nav-item nav-link" href="JR-Resume.pdf">Resume</a>
                </div>
            </div>
        </nav>
    )
}

ReactDOM.render(<Navbar />, document.querySelector("#nav"))