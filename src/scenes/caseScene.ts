import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    elementoTexto?: HTMLElement
    private objetoInteracao: any

    private textoDaCena?: string 

    private imagemCase?: Actor 


    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

       

            this.input.keyboard.on("press", (event) => {
                if (event.key == Keys.E) {
                    this.engine.goToScene("exposicao")
                }
            })
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTExto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        let case1 = Resources.case1.toSprite()
        let case2 = Resources.case2.toSprite()
        let case3 = Resources.case3.toSprite()
        
        this.imagemCase?.graphics.add("case1",case1)
        this.imagemCase?.graphics.add("case2",case2)
        this.imagemCase?.graphics.add("case3",case3)

        

        // Se for a mesa a 
        if (this.objetoInteracao.nomeDoActor = "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"
        
            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto!.innerHTML = `<h2>CASE A</h2>
            <p>Tornamos um trabalho administrativo muito massante em um trabalho totalmente gamificado e nada intediante.
            Conseguimos fazer com que o acúmulo de cera horas os traga uma recompensa.</p>`

            this.imagemCase?.graphics.use("case1")

            
        }

        // Se for a mesa b
        if (this.objetoInteracao.nomeDoActor = "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

        }

        // Se for a mesa c
        if (this.objetoInteracao.nomeDoActor = "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
  
        }


    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}