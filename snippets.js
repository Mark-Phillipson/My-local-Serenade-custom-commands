serenade.language("javascript").snippet(
	"new global command <%name%>",
	'serenade.global().command("<%name%><%cursor%>", async (api,matches) => {<%newline%>});',
	{"name":["identifier","lowercase"]}
);
serenade.language("javascript").snippet(
	"new application command <%name%>",
	'serenade.app("<%cursor%>").command("<%name%>", async (api,matches) => {<%newline%>});',
	{"name":["identifier","lowercase"]}
);
serenade.language("javascript").snippet(
	"serenade press key",
	'await api.pressKey("<%cursor%>", ["control"]);'
);
serenade.global().snippet(
	"new class <%name%>",
	"public class <%name%><%cursor%> {<%newline%>}", {
		"name": ["pascal", "identifier"]
	},
	"class"
);
serenade.global().snippet(
	"get and set",
	" { get; set;}"
);
serenade.language("javascript").snippet(
	"serenade evaluate in plugin",
	'await api.evaluateInPlugin("<%cursor%>")'
);
serenade.language('javascript').snippet(
	"new snippet <%language%> <%command%>",
	'serenade.language("<%language%>").snippet(<%newline%>"<%command%>",<%newline%>"<%cursor%>"<%newline%>);'
);
serenade.language("javascript").snippet(
"serenade type text",
'await api.typeText("<%cursor%>");'
);
serenade.language("javascript").snippet(
"serenade delay <%number%>",
"await api.delay(<%cursor%><%number%>);"
);
serenade.global().command("serenade placeholder", async (api,matches) => {
	await api.typeText("<%%>");
	await api.pressKey("left", []);
	await api.pressKey("left", []);
});
