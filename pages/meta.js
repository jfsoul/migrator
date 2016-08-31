const path = require('path');
const fs = require('fs');

const BasePage = require('./base');


class MetaPage extends BasePage {
    constructor(context) {
        const location = BasePage.rootPath + context.id + '/index.html';
        super(location, 'meta', context)
    }

    write() {
        const metaDirectory = path.dirname(this.location);
        if(!fs.existsSync(metaDirectory)) {
            fs.mkdirSync(metaDirectory);
        }

        super.write();
    }
}

module.exports = MetaPage;