import Hero from "@/app/home/components/Hero";
import Feature from "@/app/home/components/Feature";
import UseCases from "@/app/home/components/UseCases";

export default function Main() {
    return (
        <main className="pt-60 md:pt-48 lg:pt-36">
            {/* Hero section */}
            <Hero />

            {/* Feature section */}
            <Feature />

            {/* UseCases section */}
            <UseCases />
        </main>
    )
}