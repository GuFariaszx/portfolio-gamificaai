import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    elementoTexto?: HTMLElement
    private objetoInteracao: any
    private textoDaCena?: String
    private ImagemCase?: Actor 
    private listaImagens?: Sprite[]


    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
        
        // Criar elemento com a descricao do case
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.classList.add("texto-case")

        // Adicionar o elemento ao container game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame?.appendChild(this.elementoTexto)

        // Ao pressionar a tecla ( E ), voltar para a exposicao
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.E) {
                // Carregar musica de fundo (BGM) - Background Music
                let press = Resources.press

                // Configurar a musica e executar 
                press.play(0.6)
                 this.engine.goToScene("exposicao")
            }
        })

        // Criar actor para receber a imagem
        this.ImagemCase = new Actor ({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // Carregar imagens das empresas
        let case1 = Resources.case1.toSprite()
        let case2 = Resources.case2.toSprite()
        let case3 = Resources.case3.toSprite()

        this.listaImagens = [case1, case2, case3]
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Faz a caixa texto apareer na cena
        this.elementoTexto!.style.opacity = "1"

        // Receber os dados passados pela cena anterior
        this.objetoInteracao = context.data

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            // Mesa A detectada
            this.textoDaCena = "Essa é a descrição do case A"
            this.elementoTexto!.innerHTML = `<h2>CASE 1</h2>
            <p>A empresa criou um site de educação de linguagens de programação. E aparententemente, enfrenta problemas em melhorar
            a parte em que os ensinamentos se tornem dinâmicos e divertidos.</p>`

            // Inserir o sprite no actor da mesa A
            this.ImagemCase?.graphics.add(this.listaImagens![0])

            // Mudar o zoom da imagem da imagem
            this.ImagemCase!.graphics.current!.scale = vec(0.8, 0.8)

            
        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            // Mesa B detectada
            this.textoDaCena = "Essa é a descrição do case B"
            this.elementoTexto!.innerHTML = `<h2>CASE 2</h2>
            <p>A empresa enfrenta problemas ao tentar incentivar os funcionários. Aparentemente estão desmotivados ao 
            tentarem criar ideias inovadoras.</p>`

            // Inserir o sprite no actor da mesa A
            this.ImagemCase?.graphics.add(this.listaImagens![1])

            // Mudar o zoom da imagem da imagem
            this.ImagemCase!.graphics.current!.scale = vec(0.8, 0.8)
            

        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            // Mesa C detectada
            this.textoDaCena = "Essa é a descrição do case C"
            this.elementoTexto!.innerHTML = `<h2>CASE 3</h2>
            <p>A empresa enfrenta desafios ao criar uma solução para melhorar o sistema de segurança de seu site. Ao
            que parece, houve falhas, e assim tendo problemas com hackers</p>`

            // Inserir o sprite no actor da mesa A
            this.ImagemCase?.graphics.add(this.listaImagens![2])

            // Mudar o zoom da imagem da imagem
            this.ImagemCase!.graphics.current!.scale = vec(1.5, 1.5)
  
        }

        // Adicionar o actor da imagem na tela
        this.add(this.ImagemCase!)

    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela
        this.elementoTexto!.style.opacity = "0"
    }
}