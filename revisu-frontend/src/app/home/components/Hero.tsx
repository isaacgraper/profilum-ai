import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="section flex justify-center items-center w-full pt-10 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-[64px] text-center">
                    Organize, revise e <br /> memorize com <span className="text-[#604993]">facilidade</span>
                </h1>
                <Link className="bg-[#604993] text-[#F5F5F5F5] cursor-pointer flex gap-2 items-center border-black border-b-8 rounded-[12px] p-4 transition-all duration-200 hover:border-b-4"
                      href="/upload">
                    <Image src="/images/icons/wand.svg"
                           alt="Star Wand"
                           width={35}
                           height={35}
                    />
                    <h2>
                        Carregar suas notas
                    </h2>
                </Link>
                <h3 className="text-[#604993]">
                    Já tem uma conta? <Link href="/login"><span className="bold underline bold">Entrar</span></Link>
                </h3>
            </div>
        </section>
    )
}