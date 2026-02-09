import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { initUtmFromLocation } from "@/lib/analytics/utm"
import Home from "@/pages/Home"
import HowItWorks from "@/pages/HowItWorks"
import Calculators from "@/pages/Calculators"
import FAQ from "@/pages/FAQ"
import Register from "@/pages/Register"
import BookCall from "@/pages/BookCall"
import Legal from "@/pages/Legal"

function App() {
  useEffect(() => {
    initUtmFromLocation()

    const params = new URLSearchParams(window.location.search)
    const redirect = params.get("redirect")
    if (redirect) {
      window.history.replaceState(null, "", redirect)
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
