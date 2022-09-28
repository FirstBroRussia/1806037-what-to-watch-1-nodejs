import { readFileSync } from "fs";
export default class VersionCommand {
    constructor() {
        this.name = '--version';
    }
    readVersion() {
        const contentPageJSON = readFileSync('./package.json', 'utf-8'); // ПОЧЕМУ ДАННЫЙ ПУТЬ К ФАЙЛУ КОРРЕКТНЫЙ???
        const content = JSON.parse(contentPageJSON);
        return content.version;
    }
    async execute() {
        const version = this.readVersion();
        console.log(version);
    }
}
//# sourceMappingURL=version-command.js.map