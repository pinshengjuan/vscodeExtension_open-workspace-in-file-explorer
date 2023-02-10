import * as vscode from "vscode";

/**
 *
 * @param isExtension
 * @param isRelative
 */
function main() {
  vscode.workspace.workspaceFolders?.map((folder) => {
    let uri = folder.uri.path;
    let uriStr = folder.uri.fsPath.toString();
    const fs = require("fs");
    let list = fs.readdirSync(uriStr, { withFileTypes: true });
    let firstFile: string = "";
    for (let i = 0; i < list.length; i++) {
      if (list[i].isFile()) {
        firstFile = list[i].name;
        break;
      }
    }

    vscode.commands.executeCommand(
      "revealFileInOS",
      vscode.Uri.parse(uri + "/" + firstFile)
    );
  });
}

export default main;
