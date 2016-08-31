const xlsx = require('xlsx');

const Resource = require('./resource');
const MetaPage = require('./pages/meta');
const RootPage = require('./pages/root');

const t0 = new Date();

const workbook = xlsx.readFile('GTNLatestUpdatedResource-edit.xlsx');

// Assume we only have one sheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const worksheetJson = xlsx.utils.sheet_to_json(worksheet);
const resources = worksheetJson.map(row => new Resource(row));

const rootPage = new RootPage(resources);
rootPage.write();

resources.forEach(resource => {
    const metaPage = new MetaPage(resource);
    metaPage.write();
});

const t1 = new Date();

console.log('Took: ' + (t1 - t0) + 'ms');

process.exit();

//TODO: shared resource eg. CSS