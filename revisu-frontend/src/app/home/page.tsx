import Header from "@/app/home/components/Header";
import Main from "@/app/home/components/Main";
import Footer from "@/app/home/components/Footer";

export default function Home() {
    return (
        <div className="flex h-screen flex-col scroll-smooth text-gray-800">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}