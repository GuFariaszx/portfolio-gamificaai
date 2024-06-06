import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    // Declaração do elementoTexto
    elementoTexto?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval( () => {
            // Se elemento ainda está visivel 
        if (opacidade > 0) {
            // Diminuir a opacidade
            opacidade = opacidade - 0.03

            // Atualizar a opacidade do elemento
            elemento.style.opacity = opacidade.toString()
        }
        }, 20)       
    }

    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTExto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("oq-gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>O que é Gamificalção?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        let controle = new Actor({
            pos: vec(350, 400 )
        })
        
        let imagemcontrole = Resources.controle.toSprite()
        
        imagemcontrole.scale = vec(2, 2)
        
        controle.graphics.add(imagemcontrole)
        
        this.add(controle)

        // Configurar a cena para monitorar o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter) {
                // Criar transição suave do elemento texto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a próxima cena
                engine.goToScene("gamificacao")
            }
        })
    }

    
    onDeactivate(context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}




