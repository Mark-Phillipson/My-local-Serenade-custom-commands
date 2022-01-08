serenade.global().command("minimize serenade", async (api,matches) => {
	await api.focusOrLaunchApplication("serenade");
	await api.pressKey("space", ["alt"]);
	await api.pressKey("n");
});
