import { createCanvas, loadImage } from "canvas";
import { User } from "detritus-client/lib/structures";
import { join } from "path";

export default async (user: User) => {
	const canva = createCanvas(520, 270);
	const ctx = canva.getContext("2d");
	const bg = await loadImage(join(__dirname, "../../../extra/res/bg.jpg"));
	const avatar = await loadImage(user.avatarUrlFormat("png"));
	
	ctx.drawImage(bg, 0, 0, canva.width, canva.height + 42);

	const gr = ctx.createLinearGradient(0, 0, canva.width, canva.height);
    gr.addColorStop(0, "#6002ee");
    gr.addColorStop(0.5, "#02d7ee");
    gr.addColorStop(1, "#00ff00");

	ctx.lineWidth = 4;
    ctx.strokeStyle = gr;
    ctx.strokeRect(0, 0, canva.width, canva.height);

	ctx.font = "30px PUSAB";
	ctx.strokeStyle = "#000000";
    ctx.lineWidth = 6;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
	const ftext = "Bienvenid@!"
	const fwidth = canva.width / 2;
	const fheight = 40;
    ctx.strokeText(ftext, fwidth, fheight);
    ctx.fillText(ftext, fwidth, fheight);

	const yText = 90;
	const tag = user.tag;
    ctx.strokeText(tag, canva.width / 2, canva.height / 2 + yText);
    ctx.fillText(tag, canva.width / 2, canva.height / 2 + yText);

	const y = 60,
        radio = 55,
        x = canva.width / 2 - radio;
    ctx.beginPath();
    ctx.arc(x + radio, y + radio, radio + 1.3, 0, Math.PI * 2, true);
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
    ctx.save();

    ctx.beginPath();
    ctx.arc(x + radio, y + radio, radio, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, x, y, radio * 2, radio * 2);

	// result...
	return canva.toBuffer();
}