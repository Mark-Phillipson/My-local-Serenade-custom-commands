serenade.global().command("open windows terminal", async (api, matches) => {
	await api.pressKey("r", ["win"]);
	await api.delay(200);
	await api.typeText("wt");
	await api.pressKey("enter", []);
});
serenade.app("Terminal").command("list directory", async (api, matches) => {
	await api.typeText("dir");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("current directory", async (api, matches) => {
	await api.typeText("cd ")
});
serenade.app("Terminal").command("visual studio projects", async (api, matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos")
});
serenade.app("Terminal").command("dotnet watch", async (api, matches) => {
	await api.typeText("dotnet watch run");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("dotnet clean", async (api, matches) => {
	await api.typeText("dotnet clean");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("dotnet build", async (api, matches) => {
	await api.typeText("dotnet build");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("dotnet run", async (api, matches) => {
	await api.typeText("dotnet run");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("shutdown", async (api, matches) => {
	await api.pressKey("c", ["control"]);
});
serenade.app("Terminal").command("restart", async (api, matches) => {
	await api.pressKey("r", ["control"]);
});
serenade.app("Terminal").command("current project folder", async (api, matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos\\Words\\cautious-robot\\client");
});
serenade.app("Terminal").command("run code", async (api, matches) => {
	await api.typeText("code .")
	await api.pressKey("enter");
});
serenade.app("Terminal").command("git add", async (api, matches) => {
	await api.typeText("git add ");
});
serenade.app("Terminal").command("git status", async (api, matches) => {
	await api.typeText("git status");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("git commit", async (api, matches) => {
	await api.typeText('git commit -m ""')
	await api.pressKey("left");
});
serenade.app("Terminal").command("git push", async (api, matches) => {
	await api.typeText("git push");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("edit custom commands", async (api, matches) => {
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("git clone", async (api, matches) => {
	await api.typeText("git clone ");
});
serenade.app("Terminal").command("serenade custom commands folder", async (api, matches) => {
	await api.typeText("C:\\Users\\MPhil\\vscode\\custom-commands");
});
serenade.app("Terminal").command("close window", async (api, matches) => {
	await api.pressKey("f4", ["alt"]);
});
serenade.app("Terminal").command("git add commit", async (api, matches) => {
	await api.typeText('git commit -am ""')
	await api.pressKey("left");
});
serenade.app("Terminal").command("make directory", async (api, matches) => {
	await api.typeText("mkdir ");
});
serenade.app("Terminal").command("start backend", async (api, matches) => {
	await api.typeText("npm run start:backend");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("npm install", async (api, matches) => {
	await api.typeText("npm i");
	await api.pressKey("enter");
});
serenade.app("Terminal").command("npm start", async (api, matches) => {
	await api.typeText("npm start");
	await api.pressKey("enter");
});
