serenade.app("code").command("close all tabs", async (api) => {
	await api.evaluateInPlugin("openEditors.closeAll")
});
serenade.app("code").command("show explorer", async (api, matches) => {
	await api.evaluateInPlugin("workbench.view.explorer");
});
serenade.app("code").command("toggle sidebar", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.toggleSidebarVisibility")
});
serenade.app("code").command("search files", async (api, matches) => {
	await api.pressKey("f1");
	await api.pressKey("backspace");
});
serenade.app("code").command("toggle terminal", async (Go, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.toggleTerminal")
});
serenade.app("code").command("following issue", async (api, matches) => {
	await api.pressKey("f8", ["alt"]);
});
serenade.app("code").command("previous issue", async (api, matches) => {
	await api.pressKey("f8", ["alt", "shift"]);
});
serenade.app("code").command("select matching", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch")
});
serenade.app("code").command("select matching <%number%>", async (api, matches) => {
	region
	const increment = parseInt(matches.number);
	for (let index = 0; index < increment; index++) {
		await api.evaluateInPlugin("editor.action.addSelectionToNextFindMatch")
	}
});
serenade.app("code").command("select a language <%language%>", async (api, matches) => {
	//select all occurrences of find match
	serenade.app("code").command("select all matching", async (api, matches) => {
		await api.pressKey("l", ["control", "shift", "alt"]);
	});

	await api.pressKey("k", ["control"]);
	await api.pressKey("m");
	await api.typeText(matches.language);
});
serenade.app("code").command("open folder", async (api) => {
	await api.evaluateInPlugin("workbench.action.files.openLocalFolder")
});
serenade.app("code").command("expand selection", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.smartSelect.expand")
});
serenade.app("code").command("keyboard shortcuts", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("s", ["control"]);
});
//this is for CodeRush extension:
serenade.app("code").command("drop marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerDrop")
});
serenade.app("code").command("collect marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerCollect")
});
serenade.app("code").command("swap marker", async (api, matches) => {
	await api.evaluateInPlugin("CodeRush.markerSwap")
});
//Show Code Actions
serenade.app("code").command("open smart tag", async (api, matches) => {
	await api.pressKey(".", ["control"]);
});
serenade.app("code").command("show extensions", async (api, matches) => {
	await api.pressKey("x", ["control", "shift"]);
});
serenade.app("code").command("advanced new file", async (api, matches) => {
	await api.evaluateInPlugin("extension.advancedNewFile")
});
//unfortunately cannot get this to work
serenade.app("code").command("add cursors to line ends", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.insertCursorAtEndofEachLineSelected)")
});
serenade.app("code").command("open new terminal", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.openNativeConsole")
});
serenade.app("code").command("clear terminal", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.clear")
});

serenade.app("code").command("resize terminal down", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.resizePaneDown")
});
serenade.app("code").command("resize terminal up", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.resizePaneUp")
});
serenade.app("code").command("show source control", async (api, matches) => {
	await api.pressKey("g", ["control", "shift"]);
});
serenade.app("code").command("terminal page up", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.scrollUpPage")
});
serenade.app("code").command("terminal page down", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.terminal.scrollDownPage")
});
serenade.app("code").command("font zoom in", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.fontZoomIn")
});
serenade.app("code").command("font zoom out", async (api, matches) => {
	await api.evaluateInPlugin("editor.action.fontZoomOut")
});
serenade.app("code").command("toggle problems", async (api, matches) => {
	await api.evaluateInPlugin("workbench.action.tasks.toggleProblems")
});
serenade.app("code").command("line down <%number%>", async (api, matches) => {
	const lines = matches.number;
	for (let i = 0; i < lines; i++) {
		await api.evaluateInPlugin("editor.action.moveLinesDownAction")
	}
});
serenade.app("code").command("line up <%number%>", async (api, matches) => {
	const lines = matches.number;
	for (let i = 0; i < lines; i++) {
		await api.evaluateInPlugin("editor.action.moveLinesUpAction")
	}
});
serenade.app("code").command("list directory", async (api, matches) => {
	await api.typeText("dir");
	await api.pressKey("enter");
});
serenade.app("code").command("current directory", async (api, matches) => {
	await api.typeText("cd ")
});
serenade.app("code").command("visual studio projects", async (api, matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos")
});
serenade.app("code").command("dotnet watch", async (api, matches) => {
	await api.typeText("dotnet watch run");
	await api.pressKey("enter");
});
serenade.app("code").command("dotnet clean", async (api, matches) => {
	await api.typeText("dotnet clean");
	await api.pressKey("enter");
});
serenade.app("code").command("dotnet build", async (api, matches) => {
	await api.typeText("dotnet build");
	await api.pressKey("enter");
});
serenade.app("code").command("dotnet run", async (api, matches) => {
	await api.typeText("dotnet run");
	await api.pressKey("enter");
});
serenade.app("code").command("shutdown", async (api, matches) => {
	await api.pressKey("c", ["control"]);
});
serenade.app("code").command("restart", async (api, matches) => {
	await api.pressKey("r", ["control"]);
});
serenade.app("code").command("current project folder", async (api, matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos\\Words\\WordsDotNet6")
});
serenade.app("code").command("run code", async (api, matches) => {
	await api.typeText("code .")
	await api.pressKey("enter");
});
serenade.app("code").command("git add", async (api, matches) => {
	await api.typeText("git add ");
});
serenade.app("code").command("git status", async (api, matches) => {
	await api.typeText("git status");
	await api.pressKey("enter");
});
serenade.app("code").command("git commit", async (api, matches) => {
	await api.typeText('git commit -m ""')
	await api.pressKey("left");
});
serenade.app("code").command("git add commit", async (api, matches) => {
	await api.typeText('git commit -am ""')
	await api.pressKey("left");
});
serenade.app("code").command("git push", async (api, matches) => {
	await api.typeText("git push");
	await api.pressKey("enter");
});
serenade.app("code").command("edit custom commands", async (api, matches) => {
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
});
serenade.app("code").command("git clone", async (api, matches) => {
	await api.typeText("git clone ");
});
//https://github.com/alefragnani/vscode-bookmarks
serenade.app("code").command("toggle bookmark", async (api, matches) => {
	await api.pressKey("k", ["control", "alt"]);
});
serenade.app("code").command("list bookmarks", async (api, matches) => {
	await api.pressKey("b", ["control", "alt"]);
	await api.pressKey("l", ["control", "alt"]);
});
serenade.app("code").command("list all bookmarks", async (api, matches) => {
	await api.pressKey("b", ["control", "shift"]);
	await api.pressKey("a", ["control", "shift"]);
});
serenade.app("code").command("toggle bookmark labelled", async (api, matches) => {
	await api.pressKey("l", ["control", "shift", "alt"]);
	await api.pressKey("l", ["control", "shift", "alt"]);
});
serenade.app("code").command("clear all bookmarks", async (api, matches) => {
	await api.pressKey("b", ["control", "shift"]);
	await api.pressKey("c", ["control", "shift"]);
});
serenade.app("code").command("next bookmark", async (api, matches) => {
	await api.pressKey("b", ["control", "alt"]);
	await api.pressKey("n", ["control", "alt"]);
});
serenade.app("code").command("previous bookmark", async (api, matches) => {
	await api.pressKey("b", ["control", "shift"]);
	await api.pressKey("p", ["control", "shift"]);
});
serenade.app("code").command("bookmark select lines", async (api, matches) => {
	await api.pressKey("b", ["control", "shift"]);
	await api.pressKey("x", ["control", "shift"]);
});
serenade.app("code").command("search all files", async (api, matches) => {
	await api.pressKey("f", ["control", "shift"]);
});
serenade.app("code").command("go to symbol", async (api, matches) => {
	await api.pressKey("o", ["control", "shift"]);
});
serenade.app("code").command("undo cursor", async (api, matches) => {
	await api.pressKey("u", ["control"]);
});
serenade.app("code").command("focus explorer", async (api, matches) => {
	await api.pressKey("f1");
	await api.typeText("focus on folders view");
	await api.delay(100);
	await api.pressKey("enter");
});
serenade.app("code").command("list members", async (api, matches) => {
	await api.pressKey("space", ["control"]);
});
serenade.app("code").command("search in files", async (api, matches) => {
	await api.pressKey("f", ["control", "shift"]);
});
serenade.app("code").command("goto matching bracket", async (api,matches) => {
	await api.pressKey("\\", ["control", "shift"]);
});
serenade.app("code").command("toggle line comment", async (api,matches) => {
	await api.pressKey("/", ["control"]);
});
serenade.app("code").command("toggle problems", async (api,matches) => {
	await api.pressKey("m", ["control", "shift"]);
});
serenade.app("code").command("go back", async (api,matches) => {
	await api.pressKey("left", ["alt"]);
});
serenade.app("code").command("go forward", async (api,matches) => {
	await api.pressKey("right", ["alt"]);
});
serenade.app("code").command("toggle word wrap", async (api,matches) => {
	await api.pressKey("z", ["alt"]);
});
serenade.app("code").command("last edit", async (api,matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("q", ["control"]);
});
serenade.app("code").command("show recent", async (api,matches) => {
	await api.pressKey("f", ["alt"]);
	await api.pressKey("r", []);
});
