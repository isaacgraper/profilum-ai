import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="flex gap-48 px-10 pb-10">
                <div className="flex-col justify-center items-center">
                    <ul>
                        <li>
                            <h1 className="font-bold py-6">
                                Soluções
                            </h1>
                        </li>
                        <li className="py-4">
                            <a href="#spaced-review">
                                <h3>
                                    Revisão Espaçada
                                </h3>
                            </a>
                        </li>
                        <li className="py-4">
                            <a href="#organization">
                                <h3>
                                    Organização
                                </h3>
                            </a>
                        </li>
                        <li className="py-4">
                            <a href="#feynman-technique">
                                <h3>
                                    Técnica de Feynman
                                </h3>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex-col justify-center items-center">
                        <li>
                            <h1 className="font-bold py-6">
                                Comece por aqui
                            </h1>
                        </li>
                        <li className="py-4">
                            <Link href="/login">
                                <h3>
                                    Entrar
                                </h3>
                            </Link>
                        </li>
                        <li className="py-4">
                            <Link href="/login">
                                <h3>
                                    Começar Jornada
                                </h3>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center px-10 pb-10 opacity-50 text-[14px]">
                <span>
                    @ 2025 revisu. All rights Reserved.
                </span>
                <div className="flex justify-center items-center gap-6">
                    <span>
                        Security
                    </span>
                    <span>
                        Legal
                    </span>
                    <span>
                        Privacy
                    </span>
                </div>
            </div>
        </footer>

    )
}