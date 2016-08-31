const BasePage = require('./base');

const rootPageLocation = BasePage.rootPath + 'index.html';

class RootPage extends BasePage {
    constructor(context) {
        super(rootPageLocation, 'root', context)
    }
}

module.exports = RootPage;