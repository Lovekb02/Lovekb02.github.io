class MainNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation Bar -->
        <nav class="navbar">
            <div class="inner-width">
                <!-- Logo -->
                <a href="./" class="logo" title="Lovekb" alt="Logo"></a>
                <!-- <h3 style="margin-right: auto;"><a style="color: white;" href="./">　Lovekb</a></h3> -->

                <!-- Menu Toggler -->
                <button class="menu-toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <!-- Menu -->
                <div class="navbar-menu">
                    <a href="./#home"><b>Home</b></a>
                    <a href="./#about"><b>About</b></a>
                    <a href="./#timeline"><b>Timeline</b></a>
                    <a href="./#projects"><b>Projects</b></a>
                    <a href="./#contact"><b>Contact</b></a>
                    <a href="test.html"><b>Test</b></a>
                </div>
            </div>

            <script src="./js/navigation.js"></script>
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
                    <b>Made with ♥ by Lovekb</b>
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