import About from "./components/About"
import DownloadApp from "./components/DownloadApp"
import ContactUs from "./components/ConatctUs"
import FAQ from "./components/FAQ"
import Features from "./components/Features"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import OurTeam from "./components/OurTeam"
import Testimonials from "./components/Testimoanials"
import WatchNow from "./components/WatchNow"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navigation />

            <Header />

            <About />

            <WatchNow />

            <Features />

            <OurTeam />

            <Testimonials />

            <FAQ />

            <ContactUs />

            <DownloadApp />

            <Footer />
        </>
    )
}

export default App

