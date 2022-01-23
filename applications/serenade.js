serenade.global().command("minimize serenade", async (api,matches) => {
	await api.focus("serenade");
	await api.pressKey("down", ["win"]);
});


