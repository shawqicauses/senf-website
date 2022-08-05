import { Fragment } from "react"
import { Navbar } from "../components/components"
import { Header, About, Services, Hiring } from "../containers/containers"

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Hiring />
    </Fragment>
  )
}
