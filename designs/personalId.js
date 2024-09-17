import { numeric } from "../utils.js";

function draw(ctx, seed) {
  let size = 100;
  let personalId = numeric(seed)
  ctx.strokeStyle = "";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.font = size / 3 + "px serif";
  ctx.translate(0,size/3)
  ctx.fillText(personalId, size / 2, (size / 3), size);
}

export const schema = {
  draw,
  name: "Personal Id",
  artist: "peet.sh",
  kind: "ProceduralPersonal",
};
