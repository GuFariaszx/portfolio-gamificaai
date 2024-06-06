import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVer from "./images/logoVer.png"
import controle from "./images/controle.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  logoVer: new ImageSource(logoVer),
  controle: new ImageSource(controle)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
