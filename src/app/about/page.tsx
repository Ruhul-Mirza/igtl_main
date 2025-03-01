
import AboutHero from "./AboutHero"
import AboutSection from "./AboutSection"
import VisionMission from "./VisionMission"
export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
            <AboutHero />
            <AboutSection />
            <VisionMission />
        </main>
    )
}