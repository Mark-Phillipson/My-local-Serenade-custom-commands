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
	await api.typeText("C:\\Users\\MPhil\\source\\repos\\Words\\WordsDotNet6")
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
	await api.typeText("cd C:\\Users\\MPhil\\.serenade");
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
