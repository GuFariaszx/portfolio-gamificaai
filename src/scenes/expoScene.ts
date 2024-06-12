import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Carrega o mapa
        let tiledMap = Resources.Mapa

        // Definir offset para renderização do mapa
        let offsetX = 138
        let offsetY = 100

        // Adicionar o mapa na cena
        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        // Definir zoom da cmaera para aumentar um pouco a vizualização
        this.camera.zoom = 1.3

        // Criação e configuração do Player
        let jogador = new Player()

        // Define z-index do player, útil se algum outro elemento ficar "por cima" do jogador
        jogador.z = 1

        // Adicionar o player na cena
        this.add(jogador)

        // Adicionar colisão com cada objeto
        // Pegar a camada de objeto colisores
        let camadaObjetoColisores = tiledMap.getObjectLayers("ObjetosColisores")[0]

        console.log(camadaObjetoColisores)

        // Percorrer onjetos com foreach e para cada objeto , renderizar um actor
        camadaObjetoColisores.objects.forEach(objeto => {
            // Configurar o actor
            const objetoAtual = new Actor({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
            })

            // Adicionar o colisor no objeto na cena
            this.add(objetoAtual)
        })
    }

}