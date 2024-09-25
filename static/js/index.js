class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="header-bar"></div>
        <div class="header-container">
            <img src="static/images/logo.jpg" width=230, height=230, alt="Gambassi Rugby" class="logo">
            <div class="title">
                <h1 id="team"><a href="./index.html">Gambassi Rugby</a></h1>
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
            <div class="navbar-container">
                <button class="navbar-toggle" id="navbarToggle">
                    &#9776; <!-- Hamburger Icon -->
                    Menù
                </button>
                <button class="navbar-close" id="navbarX">
                    &times; <!-- Close Icon -->
                </button>
                <ul id="nav-menu">
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./squadre.html">SQUADRE</a></li>
                    <li><a href="./staff.html">STAFF</a></li>
                    <li><a href="./allenamenti.html">ALLENAMENTI</a></li>
                    <li><a href="./sponsor.html">SPONSOR</a></li>
                    <li><a href="./contatti.html">CONTATTI</a></li>
                </ul>
            </div>
        </nav>
        `;

        const navbarToggle = document.getElementById("navbarToggle");
        const navbarX = document.getElementById("navbarX");
        const navMenu = document.getElementById("nav-menu");

        navbarToggle.addEventListener("click", function () {
            navbarToggle.classList.add("hidden");
            navbarX.classList.add("show");
            navMenu.classList.add("show");
        });

        navbarX.addEventListener("click", function () {
            navbarToggle.classList.remove("hidden");
            navbarX.classList.remove("show");
            navMenu.classList.remove("show");
        });
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
                    <li>Tel. +39 335 5896150</li>
                    <li>Email: info@gambassirugby.it</li>
                    <li>
                        <a href="https://www.facebook.com/gambassirugby/">
                            <img src="static/icons/facebook-icon.png" alt="Facebook" width="30" height="30">
                        </a>
                        <a href="https://www.instagram.com/gambassirugby/">
                            <img src="static/icons/instagram-icon.png" alt="Instagram" width="40" height="40" style="margin-bottom: -5px;">
                        </a>
                        <a href="https://www.tiktok.com/@gambassirugbyasd">
                            <img src="static/icons/tiktok-icon.png" alt="TikTok" width="40" height="40" style="margin-bottom: -5px;">
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="footer-google-maps">
                    <h3>Dove Siamo</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.356550006367!2d10.96036567494114!3d43.57828915727448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a6b7cf7b87485%3A0xc2908f904f6164a8!2sAsd%20Gambassi%20Rugby!5e0!3m2!1sen!2sit!4v1708475905637!5m2!1sen!2sit" style="border:0;" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
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


