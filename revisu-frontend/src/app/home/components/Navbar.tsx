import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return (
            <nav>
                <div className="flex justify-between items-center px-16 w-full">

                    {/* Logo */}
                    <div>
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link href="/">
                                    <Image src="/images/logo/logo-black.png" alt="logo" width={125} height={125} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#why-us">
                                    <span>Por que revisu?</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about">
                                    <span>Sobre</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    <span>Contato</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Login */}
                    <div>
                        <ul className="flex items-center gap-8">
                            <li>
                                <Link href="/login">
                                    <h1>Entrar</h1>
                                </Link>
                            </li>
                            <span className="italic opacity-80">
                                ou
                            </span>
                            <li>
                                <Link href="/login">
                                    <h1>Iniciar Jornada</h1>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
    );
}