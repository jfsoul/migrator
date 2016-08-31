const fs = require('fs');
const Handlebars = require('handlebars');


class BasePage {
    constructor(location, templateName, context) {
        this.location = location;
        this.templateName = templateName;
        this.context = context;
    }
    
    // We'll see how slow this is sync
    write() {
        const partialTemplate = requireText('../templates/' + this.templateName + '.hbs');
        Handlebars.registerPartial(this.templateName, partialTemplate);

        const template = requireText('../templates/base.hbs');

        const content = Handlebars.compile(template)({
            partialContext: { context: this.context },
            bodyPartial: this.templateName
        });

        fs.writeFileSync(this.location, content);
    }
    
    static get rootPath() {
        return './output/';
    }
}

function requireText(name) {
    return fs.readFileSync(require.resolve(name)).toString();
}

module.exports = BasePage;
