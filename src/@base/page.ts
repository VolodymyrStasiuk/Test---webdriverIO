import { Component } from "@base/component";

abstract class Page extends Component {
    private url: string;

    get Url() {
        return this.url;
    }

    constructor(url: string, pageSelector: string = "body") {
        super(pageSelector);

        this.url = url;
    }

    public open(): void {
        browser.url(this.url);
    }
}

export { Page };
