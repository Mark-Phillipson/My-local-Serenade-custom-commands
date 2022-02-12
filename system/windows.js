serenade.global().command("close window", async (api,matches) => {
  await api.pressKey("f4",["alt"]);
},
false,"none"
);
serenade.global().command("switch", async (api,matches) => {
  await api.pressKey("tab",["alt"]);
});
serenade.global().command("cycle open apps", async (api,matches) => {
  await api.pressKey("tab",["win"]);
});
serenade.global().command("snap window right", async (api,matches) => {
  await api.pressKey("right",["win"]);
});
serenade.global().command("snap window left", async (api,matches) => {
  await api.pressKey("left", ["win"]);
});
serenade.global().command("snap window up", async (api,matches) => {
  await api.pressKey("up", ["win"]);
});
serenade.global().command("snap window down", async (api,matches) => {
  await api.pressKey("down", ["win"]);
});
serenade.global().command("context menu", async (api,matches) => {
  await api.pressKey("f10", ["shift"]);
});
serenade.global().command("maximize window", async (api,matches) => {
  await api.pressKey("space", ["alt"]);
  await api.delay(300);
  await api.pressKey("x", []);
});
serenade.global().command("window monitor switch", async (api,matches) => {
  await api.pressKey("right", ["win", "shift"]);
});
serenade.global().command("restore window", async (api,matches) => {
  await api.pressKey("space", ["alt"]);
  await api.delay(300);
  await api.pressKey("r", []);
});
serenade.global().command("resize window", async (api,matches) => {
  await api.pressKey("space", ["alt"]);
  await api.delay(300);
  await api.pressKey("s", []);
});
serenade.global().command("switch to one", async (api, matches) => {
	await api.pressKey("1", ["win"]);
});
serenade.global().command("switch to two", async (api, matches) => {
	await api.pressKey("2", ["win"]);
});
serenade.global().command("switch to three", async (api, matches) => {
	await api.pressKey("3", ["win"]);
});
serenade.global().command("switch to four", async (api, matches) => {
	await api.pressKey("4", ["win"]);
});
serenade.global().command("switch to five", async (api, matches) => {
	await api.pressKey("5", ["win"]);
});
serenade.global().command("switch to six", async (api, matches) => {
	await api.pressKey("6", ["win"]);
});
serenade.global().command("switch to seven", async (api, matches) => {
	await api.pressKey("7", ["win"]);
});
serenade.global().command("switch to eight", async (api, matches) => {
	await api.pressKey("8", ["win"]);
});
serenade.global().command("switch to nine", async (api, matches) => {
	await api.pressKey("9", ["win"]);
});
serenade.global().command("switch to zero", async (api, matches) => {
	await api.pressKey("0", ["win"]);
});
serenade.global().command("switch and play", async (api,matches) => {
	await api.pressKey("tab", ["alt"]);
	await api.delay("100");
	await api.pressKey("space");
});
