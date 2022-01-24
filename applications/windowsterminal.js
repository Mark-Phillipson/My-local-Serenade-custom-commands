serenade.global().command("open windows terminal", async (api, matches) => {
	await api.pressKey("r", ["win"]);
	await api.delay(200);
	await api.typeText("wt");
	await api.pressKey("enter", []);
});
