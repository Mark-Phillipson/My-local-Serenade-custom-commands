serenade.app("devenv").command("edit in code", async (api,matches) => {
  await api.pressKey("t", ["alt"]);
  await api.pressKey("v");
});
