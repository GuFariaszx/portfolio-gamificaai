import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVer from "./images/logoVer.png"
import controle from "./images/controle.png"
import case1 from "./images/case1.png"
import case2 from "./images/case2.png"
import case3 from "./images/case3.png"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/Showroom_map.tmx?url"

import playerSpritePath from "./sprites/Player.png"

import ritmada from "./sounds/ritmada_zelda.mp3"
import classico from "./sounds/zelda.mp3"
import npcASpriteSheet from "./sprites/Npc_a.png"
import npcBSpriteSheet from "./sprites/Npc_b.png"
import npcCSpriteSheet from "./sprites/Npc_c.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(playerSpritePath, { filtering: ImageFiltering.Pixel }),
  logoVer: new ImageSource(logoVer),
  controle: new ImageSource(controle),
  case1: new ImageSource(case1),
  case2: new ImageSource(case2),
  case3: new ImageSource(case3),
  NpcASpriteSheet: new ImageSource(npcASpriteSheet),
  NpcBSpriteSheet: new ImageSource(npcBSpriteSheet),
  NpcCSpriteSheet: new ImageSource(npcCSpriteSheet),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "Showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath },
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx", output: tsxEstoquePath },
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath }
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
