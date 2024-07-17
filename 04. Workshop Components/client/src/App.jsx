import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import UserSection from './components/user-section/UserSection'
import './styles.css'

function App() {

    return (
        <>
            <Header />

            <main className="main">
                <UserSection />
            </main>

            <Footer />
        </>
    )
}


export default App
