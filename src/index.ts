console.log("Starting tasks...");
import { config } from "dotenv";
config();

import tasks from "./app/tasks";
tasks.run();

import { registerFont } from "canvas";
import { join } from "path";
registerFont(join(__dirname, "../extra/res/PUSAB.otf"), {
	family: "PUSAB",
});
registerFont(join(__dirname, "../extra/res/Roboto-Light.ttf"), {
	family: "Roboto",
});