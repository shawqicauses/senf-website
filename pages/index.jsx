import { Fragment } from "react"
import { Navbar } from "../components/components"
import { Header, Hiring, Services } from "../containers/containers"

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Services />
      <Hiring />
    </Fragment>
  )
}