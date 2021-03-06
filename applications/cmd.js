serenade.app("cmd").command("list directory", async (api, matches) => {
	await api.typeText("dir");
	await api.pressKey("enter");
});
serenade.app("cmd").command("current directory", async (api,matches) => {
	await api.typeText("cd ")
});
serenade.app("cmd").command("visual studio projects", async (api,matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos")
});
serenade.app("cmd").command("dotnet watch", async (api,matches) => {
	await api.typeText("dotnet watch run");
	await api.pressKey("enter");
});
serenade.app("cmd").command("dotnet clean", async (api,matches) => {
	await api.typeText("dotnet clean");
	await api.pressKey("enter");
});
serenade.app("cmd").command("dotnet build", async (api,matches) => {
	await api.typeText("dotnet build");
	await api.pressKey("enter");
});
serenade.app("cmd").command("dotnet run", async (api,matches) => {
	await api.typeText("dotnet run");
	await api.pressKey("enter");
});
serenade.app("cmd").command("shutdown", async (api,matches) => {
	await api.pressKey("c", ["control"]);
});
serenade.app("cmd").command("restart", async (api,matches) => {
	await api.pressKey("r", ["control"]);
});
serenade.app("cmd").command("current project folder", async (api,matches) => {
	await api.typeText("C:\\Users\\MPhil\\source\\repos\\Words\\cautious-robot\\client");
});
serenade.app("cmd").command("run code", async (api,matches) => {
	await api.typeText("code .")
	await api.pressKey("enter");
});
serenade.app("cmd").command("git add", async (api,matches) => {
	await api.typeText("git add ");
});
serenade.app("cmd").command("git status", async (api,matches) => {
	await api.typeText("git status");
	await api.pressKey("enter");
});
serenade.app("cmd").command("git commit", async (api,matches) => {
	await api.typeText('git commit -m ""')
	await api.pressKey("left");
});
serenade.app("cmd").command("git push", async (api,matches) => {
	await api.typeText("git push");
	await api.pressKey("enter");
});
serenade.app("cmd").command("edit custom commands", async (api,matches) => {
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
});
serenade.app("cmd").command("git clone", async (api,matches) => {
	await api.typeText("git clone ");
});
serenade.app("cmd").command("serenade custom commands folder", async (api,matches) => {
	await api.typeText("C:\\Users\\MPhil\\vscode\\custom-commands");
});
serenade.app("cmd").command("close window", async (api,matches) => {
	await api.pressKey("f4", ["alt"]);
});
serenade.app("cmd").command("git add commit", async (api, matches) => {
	await api.typeText('git commit -am ""')
	await api.pressKey("left");
});
serenade.app("cmd").command("make directory", async (api,matches) => {
	await api.typeText("mkdir ");
});
serenade.app("cmd").command("start backend", async (api, matches) => {
	await api.typeText("npm run start:backend");
	await api.pressKey("enter");
});
serenade.app("cmd").command("npm install", async (api,matches) => {
	await api.typeText("npm i");
	await api.pressKey("enter");
});
serenade.app("cmd").command("npm start", async (api,matches) => {
	await api.typeText("npm start");
	await api.pressKey("enter");
});
