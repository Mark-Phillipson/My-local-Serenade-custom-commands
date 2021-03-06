serenade.app("intellij").key(
	"context menu", "enter", ["alt"]
);
serenade.app("intellij").key(
	"format file", "l", ["ctrl", "alt"]
);
serenade.app("intellij").key(
	"rename", "f6", ["shift"]
);
serenade.app("intellij").key(
	"show members", "f12", ["ctrl"]
);
serenade.app("intellij").key(
	"find usages", "f7", ["alt"]
);
serenade.app("intellij").key(
	"go to declaration", "b", ["ctrl"]
);
serenade.app("intellij").key(
	"go to class", "n", ["ctrl"]
);
serenade.app("intellij").key(
	"go back", "left", ["ctrl", "alt"]
);
serenade.app("intellij").key(
	"go forward", "right", ["ctrl", "alt"]
);
serenade.app("intellij").key(
	"search everywhere", "t", ["ctrl"]
);
serenade.app("intellij").key(
	"navigate to", "`", ["alt"]
);
serenade.app("intellij").key(
	"jump to symbol", "\\", ["alt"]
);
serenade.app("intellij").key(
	"start application", "f5", ["ctrl"]
);
serenade.app("intellij").key(
	"reset code", "f5", ["shift"]
);
serenade.app("intellij").key(
	"open smart tag", ".", ["ctrl"]
);
serenade.app("intellij").key(
	"refactor this", "r", ["ctrl", "shift"]
);
serenade.app("intellij").key(
	"close tool window", "escape", ["shift"]
);
serenade.app("intellij").key(
	"solution explorer", "l", ["ctrl", "alt"]
);
serenade.app("intellij").key(
	"go to file", "t", ["ctrl", "shift"]
);
serenade.app("intellij").key(
	"recent files", ",", ["ctrl"]
);
serenade.app("intellij").key(
	"navigation bar", "f2", ["ctrl"]
);
serenade.app("intellij").key(
	"show settings", "s", ["ctrl", "alt"]
);
serenade.app("intellij").key(
	"next problem", "pagedown", ["alt"]
);
serenade.app("intellij").key(
	"action tab", "a", ["ctrl", "shift"]
);
serenade.app("intellij").key(
	"navigate backwards", "-", ["ctrl"]
);
serenade.app("intellij").key(
	"navigate forwards", "+", ["ctrl"]
);
serenade.app("intellij").key(
	"show problems", "6", ["alt"]
);
serenade.app("intellij").key(
	"next error", "pagedown", ["alt", "shift"]
);
serenade.app("intellij").key(
	"previous error", "pageup", ["alt", "shift"]
);
serenade.app("intellij").key(
	"select matching all", ";", ["alt", "shift"]
);
serenade.app("intellij").key(
	"select matching", ".", ["alt", "shift"]
);
serenade.app("intellij").key(
	"navigate to", "`", ["alt"]
);
serenade.app("intellij").command("select matching <%number%>", async (api, matches) => {
	const lines = matches.number;
	for (let i = 0; i < lines; i++) {
		await api.pressKey(".", ["alt", "shift"]);
	}
});
serenade.app("intellij").key(
	"build solution", "b", ["control", "shift"]
);

serenade.app("intellij").key(
	"build project", "f7", ["control", "shift"]
);
serenade.app("intellij").key(
	"comment line", "/", ["control", "alt"]
);
serenade.app("intellij").key(
	"comment block", "/", ["control", "shift"]
);
serenade.app("intellij").key(
	"expand selection", "=", ["alt", "shift"]
);
serenade.app("intellij").key(
	"shrink selection", "-", ["alt", "shift"]
);
serenade.app("intellij").command("toggle bookmark", async (api, matches) => {
	await api.pressKey("k", ["control"]);
	await api.pressKey("k", []);
});
serenade.app("intellij").key(
	"search everything", "t", ["control"]
);
serenade.app("intellij").key(
	"duplicate line", "d", ["control"]
);

serenade.app("intellij").key(
	"generate code", "insert", ["alt"]
);
serenade.app("intellij").command("refactor", async (api, matches) => {
	await api.pressKey("r", ["alt", "shift"]);
	await api.pressKey("r", ["alt", "shift"]);
});

serenade.app("intellij").command("move item <%direction%> <%number%>", async (api, matches) => {
	const direction = matches.direction;
	const number = matches.number;
	for (let index = 0; index < number; index++) {
		if (direction == 'left') {
			await api.pressKey("left", ["control", "shift", "alt"]);
		} else if (direction == "right") {
			await api.pressKey("right", ["control", "alt", "shift"]);
		} else if (direction == "up") {
			await api.pressKey("up", ["control", "shift", "alt"]);
		} else if (direction == "down") {
			await api.pressKey("down", ["control", "shift", "alt"]);
		}
	}

});

serenade.app("intellij").command("format code", async (api, matches) => {
	await api.pressKey("enter", ["alt", "control"]);
});

serenade.app("intellij").command("show usage", async (api, matches) => {
	await api.pressKey("f12", ["shift"]);
});

serenade.app("intellij").command("add existing item", async (api, matches) => {
	await api.pressKey("a", ["alt", "shift"]);
});
serenade.app("intellij").command("add new item", async (api, matches) => {
	await api.pressKey("insert", ["control", "alt"]);
});