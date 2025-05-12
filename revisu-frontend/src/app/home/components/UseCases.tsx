import Image from "next/image";

export default function UseCases() {
    return (
        <div>
            <div id="spaced-review" className="flex w-full items-center justify-center px-10">
                <div className="flex-col">
                    <h1 className="text-[56px]">
                        Já <span className="text-[#604993]">esqueceu</span> alguma vez <span className="text-[#604993]">o que estuda</span>?
                    </h1>
                    <p className="text-[18px] pt-6">
                        Revisão espaçada integrada com as suas anotações, o <span className="text-[#604993]">revisu</span> calcula os melhores dias para revisar cada nota e te lembra automaticamente.
                    </p>
                </div>
                    <Image src="/images/avatar/revisu-thinking.svg"
                           alt=""
                           width={600}
                           height={600}
                    />
            </div>

            <div id="organization" className="flex w-full items-center justify-center bg-[#F5F5F5] px-10 h-[380px]">
                <Image src="/images/avatar/revisu-surprised-seat.svg"
                       alt=""
                       width={600}
                       height={600}
                />
                <div className="flex-col">
                    <h1 className="text-[56px]">
                        Suas notas estão <span className="text-[#604993]">jogadas</span> e <span className="text-[#604993]">sem sentido</span>?
                    </h1>
                    <p className="text-[18px] pt-6">
                        Organização por temas, autores ou livros,  transformando textos soltos em conteúdos revisáveis, com contexto, tags e filtros avançados.
                    </p>
                </div>
            </div>

            <div id="feynman-technique" className="flex w-full items-center justify-center px-10">
                <div className="flex-col">
                    <h1 className="text-[56px]">
                        Estuda mas sente que <span className="text-[#604993]">não absorve</span>?
                    </h1>
                    <p className="text-[18px] pt-6">
                        Revisão ativa com perguntas abertas e técnicas de Feynman, o <span className="text-[#604993]">revisu</span> gera questionamentos e resumos guiados com base nas suas anotações.
                    </p>
                </div>
                <Image src="/images/avatar/revisu-sleepy-seat.svg"
                       alt=""
                       width={600}
                       height={600}
                />
            </div>
        </div>
    )
}