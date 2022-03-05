const open = require('open');
serenade.global().command("curly brackets in", async (api) => {
	await api.typeText("{}");
	await api.pressKey("left");
});
serenade.global().command("curly brackets out", async (api) => {
	await api.typeText("{}");
	await api.pressKey("space");
});
serenade.global().command("chevron in", async (api, matches) => {
	await api.typeText("<>");
	await api.pressKey("left");
});
serenade.global().command("chevron out", async (api, matches) => {
	await api.typeText("<>");
	await api.pressKey("space");
});
serenade.global().command("brackets in", async (api) => {
	await api.typeText("()");
	await api.pressKey("left");
});
serenade.global().command("brackets out", async (api) => {
	await api.typeText("()");
	await api.pressKey("space");
});
serenade.global().command("square brackets in", async (api, matches) => {
	await api.typeText("[]");
	await api.pressKey("left");
});
serenade.global().command("square brackets out", async (api, matches) => {
	await api.typeText("[]");
	await api.pressKey("space");
});
serenade.app("code").command("edit custom commands", async (api) => {
	await api.pressKey("t", ["control", "alt", "shift"]);
	await api.typeText("cd C:\\");
	await api.pressKey("enter");
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
});
//Custom keyboard command to transfer focus to the internal terminal (Ctrl + ' in use by clipboard manager)
serenade.app("code").command("focus terminal", async (api) => {
	await api.pressKey("t", ["control", "alt", "shift"]);
});
// Pause Serenade and Transfer control to Dragon professional individual
serenade.global().command("wake up", async (api) => {
	await api.pressKey("space", ["control", "alt"]);
});
serenade.global().command("open command prompt", async (api) => {
	await api.pressKey("r", ["windows"]);
	await api.delay(300);
	await api.typeText("cmd");
	await api.pressKey("enter", []);
});
serenade.app("code").command("command dotnet watch", async (api) => {
	//await api.focusOrLaunchApplication("cmd");
	await api.pressKey("t", ["control", "alt", "shift"]);
	await api.typeText("dotnet watch");
	await api.pressKey("return");
});
serenade.global().command("fresh line", async (api, matches) => {
	await api.pressKey("end");
	await api.pressKey("enter");
});
serenade.global().command("fresh line above home", async (api, matches) => {
	await api.pressKey("end");
	await api.pressKey("up");
	await api.pressKey("home");
	await api.pressKey("enter");
	await api.pressKey("up");
});
serenade.global().command("fresh line above", async (api, matches) => {
	await api.pressKey("up");
	await api.pressKey("end");
	await api.pressKey("enter");
});
serenade.global().command("words semi colon", async (api, matches) => {
	await api.pressKey("end");
	await api.pressKey(";");
});
serenade.global().command("move right", async (api, matches) => {
	await api.pressKey("right");
});
serenade.global().command("move left", async (api, matches) => {
	await api.pressKey("left");
});
serenade.global().command("move right <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("right");
	}
});
serenade.global().command("move left <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("left");
	}
});
serenade.global().command("move down <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("down");
	}
});
serenade.global().command("move up <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("up");
	}
});
serenade.global().command("backspace <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("backspace");
	}
});
serenade.global().command("delete characters <%number%>", async (api, matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("delete");
	}
});
serenade.global().command("move down", async (api, matches) => {
	await api.pressKey("down");
});
serenade.global().command("move up", async (api, matches) => {
	await api.pressKey("up");
});
serenade.global().command("move to bottom", async (api, matches) => {
	await api.pressKey("end", ["control"]);
});
serenade.global().command("move to top", async (api, matches) => {
	await api.pressKey("home", ["control"]);
});
serenade.global().command("hyphen", async (api, matches) => {
	await api.pressKey("-");
});
serenade.global().command("home it", async (api, matches) => {
	await api.pressKey("home");
});
serenade.global().command("end it", async (api, matches) => {
	await api.pressKey("end");
});
serenade.global().command("clear line", async (api, matches) => {
	await api.pressKey("home");
	await api.pressKey("end", ["shift"]);
	await api.pressKey("delete");
});
// this works but no response in the application!
serenade.global().command("clipboard manager", async (api, matches) => {
	await api.pressKey("'", ["control"]);
});
serenade.global().command("slap", async (api, matches) => {
	await api.pressKey("end", []);
	await api.pressKey("enter");
});
serenade.global().command("fold all", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("0", ["control"]);
});
serenade.global().command("unfold all", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("j", ["control"]);
});
serenade.global().command("fold region", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("[", ["control"]);
});
serenade.global().command("unfold region", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("]", ["control"]);
});
const app = 'C:\\Users\\MPhil\\source\\repos\\SpeechRecognitionHelpers\\VoiceLauncher\\bin\\Release\\VoiceLauncher.exe';
serenade.global().command("search union <%SearchTerm%>", async (api, matches) => {
	await open.openApp(app, { arguments: [' / Union ', ' / ' + matches.SearchTerm + ''] });
});
//to do:
serenade.global().command("show list <%SearchTerm%>", async (api, matches) => {
	await open.openApp(app, { arguments: [' / Unknown ', ' / Unknown ', ' / ' + matches.SearchTerm + ''] });
});
serenade.global().command("intelli sense <%SearchTerm%>", async (api, matches) => {
	await open.openApp(app, { arguments: [' / Not Applicable ', ' / ' + matches.SearchTerm + ''] });
});
serenade.global().command("open google", async (api, matches) => {
	open('http://google.com');
});

serenade.global().command("edit launches <%SearchTerm%>", async (api, matches) => {
	open('https://localhost:5667/launchers?category=' + matches.SearchTerm)
});
serenade.global().command("open voice launcher", async (api, matches) => {
	open("C:\\Users\\MPhil\\OneDrive\\Documents\\Voice Launcher Blazor.bat");

	open('https://localhost:5667/');
});

serenade.global().command("play words games", async (api, matches) => {
	open("C:\\Users\\MPhil\\.serenade\\scripts\\system\\playWords.bat");
	open("C:\\Users\\MPhil\\source\\repos\\wordle\\index.html");
	open("https://ambitious-mushroom-0b1943303.azurestaticapps.net/");
	open("https://www.nytimes.com/games/wordle/index.html");
});

serenade.global().command("browse scripts <%search%>", async (api, matches) => {
	await api.pressKey("r", ["windows"]);
	await api.delay(300);
	await api.typeText("cmd");
	await api.delay(300);
	await api.pressKey("enter", []);
	await api.delay(500);
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
	await api.delay(1500);
	await api.pressKey("f", ["control", "shift"]);
	await api.delay(400);
	await api.typeText(matches.search);
});

serenade.global().command("browse scripts", async (api, matches) => {
	await api.pressKey("r", ["windows"]);
	await api.delay(300);
	await api.typeText("cmd");
	await api.delay(300);
	await api.pressKey("enter", []);
	await api.delay(500);
	await api.typeText("cd C:\\Users\\MPhil\\.serenade\\scripts");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
	await api.delay(1500);
	await api.pressKey("f", ["control", "shift"]);
});
