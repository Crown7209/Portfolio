import { About, Contactme, Experience, Footer, Header, Hero, Skills, Work, Toggle } from "@/components/Index"
import { useState } from "react"

export default function Home() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <div>

        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />

        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contactme />
        <Footer />
      </div>
    </div>
  )
};
