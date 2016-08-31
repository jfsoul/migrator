const columnNames = {
    id: "ID",
    title: "Name",
    description: "Description",
    levels: "LevelIDs",
    subject: "SubjectName",
    topic: "TopicName",
    assetPath: "AssetPath",
    physicalPath: "PhysicalPath"
};

class Resource {
    constructor(row) {
        this.id = row[columnNames.id];
        this.title = row[columnNames.title];
        this.description = row[columnNames.description];
        this.levels = parseLevelIds(row[columnNames.levels]);
        this.subject = row[columnNames.subject];
        this.topic = row[columnNames.topic];
        this.contentURL = generateContentUrl(row[columnNames.assetPath], row[columnNames.physicalPath]);
    }

    static get contentRoot() {
        return 'http://teachers.theguardian.com.s3-website-eu-west-1.amazonaws.com/content/1/2/3/resources/';
    }
}

/*
    For the moment, just return levels verbatim - we can add more sophisticated parsing to match
    current displayed levels if needed later.
 */
function parseLevelIds(ids) {
    return ids;
}

/*
    If the calculated asset path has an error then assume the physical path is a direct link (and use it)
 */
function generateContentUrl(assetPath, physicalPath) {
    return assetPath === "#VALUE!" ? physicalPath : Resource.contentRoot + assetPath;
}

module.exports = Resource;