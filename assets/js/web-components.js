class SiteHeader extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/shared/header.html');
        const html = await response.text();
        this.innerHTML = html;
    }
}

class SiteFooter extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/shared/footer.html');
        const html = await response.text();
        this.innerHTML = html;
    }
}

// Register the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
