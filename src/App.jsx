import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="frame">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
