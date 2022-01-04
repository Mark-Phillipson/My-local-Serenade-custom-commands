serenade.global().command("curly brackets in", async (api) => {
	await api.typeText("{}");
	await api.pressKey("left");
});
serenade.global().command("curly brackets out", async (api) => {
	await api.typeText("{}");
	await api.pressKey("space");
});
serenade.global().command("chevron in", async (api,matches) => {
	await api.typeText("<>");
	await api.pressKey("left");
});
serenade.global().command("chevron out", async (api,matches) => {
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
serenade.global().command("square brackets in", async (api,matches) => {
	await api.typeText("[]");
	await api.pressKey("left");
});
serenade.global().command("square brackets out", async (api,matches) => {
	await api.typeText("[]");
	await api.pressKey("space");
});
serenade.app("code").command("edit custom commands", async (api) => {
	await api.pressKey("t", ["control", "alt", "shift"]);
	await api.typeText("cd C:\\");
	await api.pressKey("enter");
	await api.typeText("cd C:\\Users\\MPhil\\.serenade");
	await api.pressKey("enter");
	await api.pressKey("enter");
	await api.typeText("code .");
	await api.pressKey("enter");
});

// serenade.global().command("begin course internal", async (api) => {
//  await api.pressKey("ctrl+alt+shift+t");
//  await api.wait(2000);
//  await api.typeText("cd C:\\Users\\MPhil\\source\\repos\\web-dev-starter");
//  await api.pressKey("enter");
//  await api.typeText("npm start");
//  await api.pressKey("enter");
// });
//Custom keyboard command to transfer focus to the internal terminal (Ctrl + ' in use by clipboard manager)
serenade.app("code").command("focus terminal", async (api) => {
	await api.pressKey("t", ["control", "alt", "shift"]);
});
// Pause Serenade and Transfer control to Dragon professional individual
serenade.global().command("wake up", async (api) => {
	await api.pressKey("space", ["control", "alt"]);
});
serenade.global().command("open command prompt", async (api) => {
	await api.pressKey("r",["windows"]);
	await api.wait(200);
	await api.typeText("cmd");
});
serenade.app("code").command("command dotnet watch", async (api) => {
	//await api.focusOrLaunchApplication("cmd");
	await api.pressKey("t", ["control", "alt", "shift"]);
	await api.typeText("dotnet watch");
	await api.pressKey("return");
});
serenade.global().command("fresh line", async (api,matches) => {
	await api.pressKey("end");
	await api.pressKey("enter");
});
serenade.global().command("fresh line above home", async (api,matches) => {
	await api.pressKey("end");
	await api.pressKey("up");
	await api.pressKey("home");
	await api.pressKey("enter");
	await api.pressKey("up");
});
serenade.global().command("fresh line above", async (api,matches) => {
	await api.pressKey("up");
	await api.pressKey("end");
	await api.pressKey("enter");
});
serenade.global().command("words semi colon", async (api,matches) => {
	await api.pressKey("end");
	await api.pressKey(";");
});
serenade.global().command("move right", async (api,matches) => {
	await api.pressKey("right");
});
serenade.global().command("move left", async (api,matches) => {
	await api.pressKey("left");
});
serenade.global().command("move right <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("right");
	}
});
serenade.global().command("move left <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("left");
	}
});
serenade.global().command("move down <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("down");
	}
});
serenade.global().command("move up <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("up");
	}
});
serenade.global().command("backspace <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("backspace");
	}
});
// this interferes with serenade commands
/* serenade.global().command("delete <%number%>", async (api,matches) => {
	const increments = parseInt(matches.number);
	for (let index = 0; index < increments; index++) {
		await api.pressKey("delete");
	}
}); */
serenade.global().command("move down", async (api,matches) => {
	await api.pressKey("down");
});
serenade.global().command("move up", async (api,matches) => {
	await api.pressKey("up");
});
serenade.global().command("move to bottom", async (api,matches) => {
	await api.pressKey("end", ["control"]);
});
serenade.global().command("move to top", async (api,matches) => {
	await api.pressKey("home", ["control"]);
});
serenade.global().command("hyphen", async (api,matches) => {
	await api.pressKey("-");
});
serenade.global().command("home it", async (api,matches) => {
	await api.pressKey("home");
});
serenade.global().command("end it", async (api,matches) => {
	await api.pressKey("end");
});
