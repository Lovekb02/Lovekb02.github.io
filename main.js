class MainNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation Bar -->
        <nav class="navbar">
            <div class="inner-width">
                <!-- Logo -->
                <a href="/" style="background-image: url(./assets/logo-tr.png);" class="logo" title="Lovekb" alt="Logo"></a>
                <h3 style="margin-right: auto;"><a style="color: white;" href="/">　Lovekb</a></h3>

                <!-- Menu Toggler -->
                <button class="menu-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <!-- Menu -->
                <div class="navbar-menu">
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#timeline">Timeline</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#contact">Contact</a>
                    <a href="test.html">Test</a>
                </div>
            </div>

            <script src="js/navigation.js"></script>
        </nav>
        `
    }
}
customElements.define('main-navigation', MainNavigation);


class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer -->
        <footer>
            <div class="inner-width">
                <!-- Copyright -->
                <div class="copyright">
                    <b>Made with love by Lovekb</b>
                </div>
            </div>
        </footer>
        `
    }
}
customElements.define('main-footer', MainFooter);

class MainBackToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Back to Top Button -->
        <button class="goTop fas fa-arrow-up"></button>
        `
    }
}
customElements.define('main-back-to-top', MainBackToTop);