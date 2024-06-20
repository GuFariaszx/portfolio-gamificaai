import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
    constructor(posicao: Vector, nome: string) {
        super ({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Carregar os sprites
        const spriteNpcA = SpriteSheet.fromImageSource({
            image: Resources.NpcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })
        const spriteNpcB = SpriteSheet.fromImageSource({
            image: Resources.NpcBSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })
        const spriteNpcC = SpriteSheet.fromImageSource({
            image: Resources.NpcCSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })

        // Definir o sprite de acordo com o NPC
        let spriteDefinido

        if(this.name == "npc_a") {
            spriteDefinido = spriteNpcA
        } else if (this.name == "npc_b") {
            spriteDefinido = spriteNpcB
        } else if (this.name == "npc_c") {
            spriteDefinido = spriteNpcC
        } else {
            console.log("Nome do NPC não previsto:", this.name);
        }

        // Se tiver um sprite definido -> Criar animação
        if (spriteDefinido) {
            const downIdle = new Animation({
                frames: [
                    { graphic: spriteDefinido.getSprite(30, 10) },
                    { graphic: spriteDefinido.getSprite(31, 10) },
                    { graphic: spriteDefinido.getSprite(32, 10) },
                    { graphic: spriteDefinido.getSprite(33, 10) },
                    { graphic: spriteDefinido.getSprite(34, 10) },
                    { graphic: spriteDefinido.getSprite(35, 10) },
                    { graphic: spriteDefinido.getSprite(36, 10) },
                    { graphic: spriteDefinido.getSprite(37, 10) },
                    { graphic: spriteDefinido.getSprite(38, 10) },
                    { graphic: spriteDefinido.getSprite(39, 10) },
                ],
                frameDuration: 70
            })
            this.graphics.add(downIdle)
        }
    }
} 