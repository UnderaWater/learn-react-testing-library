const Page = require('./page');

class HelloPage extends Page {

    get toggleBtn() {
        return $('#toggle');
    }

    get searchInput() {
        return $('#toggle');
    }

    get helloTitle() {
        return $('#hello');
    }

    async toggleTitleWithInput(text) {
        await this.searchInput.setValue(text);
        await this.toggleBtn.click();
    }
    
    open() {
        return super.open('/hello');
    }
}

module.exports = new HelloPage();
