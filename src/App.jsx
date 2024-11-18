import Eligible from "./components/Eligibile"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Purpose from "./components/Purpose"
import Jury from "./components/Jury"
import Community from "./components/Community"
export default function App() {
  return (
    <main>
      <Hero />
      <Purpose/>
      <Projects/>
      <Eligible/>
      <Jury/>
      <Community/>
    </main>
  )
}