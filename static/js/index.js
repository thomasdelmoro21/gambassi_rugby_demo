class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="header-bar"></div>
        <div class="header-container">
            <img src="static/images/logo.jpg" width=220, height=220, alt="Gambassi Rugby" class="logo">
            <div class="title">
                <h1 id="team"><a href="#">Gambassi Rugby</a></h1>
                <h2 id="slogan">I Cinghiali della Valdelsa</h2>
            </div>
        </div>
        <img src="static/images/fir-logo.png" width=100, height=100, alt="F.I.R. Federazione Italiana di Rugby" class="fir-logo">
        </header>
        `;
    }
}
customElements.define("my-header", MyHeader);

class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <ul id="nav-menu">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./teams.html">SQUADRE</a></li>
                <li><a href="./staff.html">STAFF</a></li>
                <li><a href="./trainings.html">ALLENAMENTI</a></li>
                <li><a href="./sponsor.html">SPONSOR</a></li>
                <li><a href="./contacts.html">CONTATTI</a></li>
            </ul>

            <a href="#" class="toggle-menu"><span></span></a>

        </nav>
        `;
    }
}
customElements.define("my-navbar", MyNavbar);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
		<div class="footer-container">
            <div class="main-footer">
                <div class="footer-contacts">
                    <h3>Contatti</h3>
                    <ul>
                    <li>ASD Gambassi Rugby</li>
                    <li>Via Antonio Meucci, 3</li>
                    <li>Loc. Case Nuove</li>
                    <li>50050 Gambassi Terme (FI)</li>
                    <li>Tel.</li>
                    <li>Email: gambassirugby@gmail.com</li>
                    <li>
                        <a href="https://www.facebook.com/gambassirugby/">
                            <img src="static/images/facebook-icon.png" alt="Facebook" width="30" height="30">
                        </a>
                        <a href="https://www.instagram.com/gambassirugby/">
                            <img src="static/images/instagram-icon.png" alt="Instagram" width="40" height="40" style="margin-bottom: -5px;">
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="footer-google-maps">
                    <h3>Dove Siamo</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.356550006367!2d10.96036567494114!3d43.57828915727448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a6b7cf7b87485%3A0xc2908f904f6164a8!2sAsd%20Gambassi%20Rugby!5e0!3m2!1sen!2sit!4v1708475905637!5m2!1sen!2sit" width="500" height="300" style="border:0;" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
            <div class="copyright">
                    <p>Copyright &copy; 2024 ASD Gambassi Rugby</p>
            </div>
        </div>
	    </footer>
        `;
    }
}
customElements.define("my-footer", MyFooter);