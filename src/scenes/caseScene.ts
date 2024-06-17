import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    elementoTexto?: HTMLElement
    private objetoInteracao: any

    private textoDaCena: string = ""

    

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray     
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.E) {
                this.engine.goToScene("exposicao")
            }
        })

        

        


        // Se for a mesa a 
        if ( this.objetoInteracao.nomeDoActor = "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"
            this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTExto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Tornamos um trabalho administrativo muito massante em um trabalho totalmente gamificado e nada intediante.
        Conseguimos fazer com que o acúmulo de cera horas os traga uma recompensa.</p>`

        let actorCase1 = new Actor({
            pos: vec(860, 400 )
        })

        let imagemcase1 = Resources.case1.toSprite()
        
        imagemcase1.scale = vec(0.7, 0.7)
        
        actorCase1.graphics.add(imagemcase1)
        
        this.add(actorCase1)

        

        }


        // Se for a mesa b
        if ( this.objetoInteracao.nomeDoActor = "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"

            this.textoDaCena = "Essa é a descrição do case A"
            this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opacidade do elemento para 1 = visível
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTExto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Mudamos a rotina de uma escola, para um jeito mais divertido e dinâmico para toda criançada.
        Alteramos o modo de preparo das aulas, assim quando os aluno os tiverem mais que 75% de frequência nas aulas,
        ele será recompensado com mais um ponto na matéria.</p>`

        let actorCase2 = new Actor({
            pos: vec(860, 400 )
        })

        let imagemcase2 = Resources.case2.toSprite()
        
        imagemcase2.scale = vec(0.7, 0.7)
        
        actorCase2.graphics.add(imagemcase2)
        
        this.add(actorCase2)



        let actorCase1 = new Actor({
            pos: vec(860, 400 )
        })

        let imagemcase1 = Resources.case1.toSprite()
        
        imagemcase1.scale = vec(0.7, 0.7)
        
        actorCase1.graphics.add(imagemcase1)
        
        this.remove(actorCase1)


        }

        // Se for a mesa c
        if ( this.objetoInteracao.nomeDoActor = "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
        }

        
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}