const spellingModeCommands = [
	serenade.global().key("alpha", "a"),
	serenade.global().key("bravo", "b"),
	serenade.global().key("charlie", "c"),
	serenade.global().key("delta", "d"),
	serenade.global().key("echo", "e"),
	serenade.global().key("foxtrot", "f"),
	serenade.global().key("golf", "g"),
	serenade.global().key("hotel", "h"),
	serenade.global().key("india", "i"),
	serenade.global().key("juliet", "j"),
	serenade.global().key("kilo", "k"),
	serenade.global().key("lima", "l"),
	serenade.global().key("mike", "m"),
	serenade.global().key("november", "n"),
	serenade.global().key("oscar", "o"),
	serenade.global().key("papa", "p"),
	serenade.global().key("quebec", "q"),
	serenade.global().key("romeo", "r"),
	serenade.global().key("sierra", "s"),
	serenade.global().key("tango", "t"),
	serenade.global().key("uniform", "u"),
	serenade.global().key("victor", "v"),
	serenade.global().key("whiskey", "w"),
	serenade.global().key("x-ray", "x"),
	serenade.global().key("yankee", "y"),
	serenade.global().key("zulu", "z")

];

// disabled by default, until you say "start spelling"
serenade.global().disable(spellingModeCommands);

serenade.global().command("start spelling", async (api) => {
	serenade.global().enable(spellingModeCommands);
});

serenade.global().command("stop spelling", async (api) => {
	serenade.global().disable(spellingModeCommands);
});