import { motion } from "framer-motion"
import { classes, variants } from "../../lib/utils"
import { Logo } from "../components"

export default function Navbar() {
  const links = [
    "الرئيسية",
    "تعرف علينا",
    "خدماتنا",
    "التقدم لوظيفة",
    "عملاؤنا",
    "تواصل معنا"
  ]

  return (
    <nav
      className={classes(
        "absolute top-0 left-0 z-10 bg-transparent",
        "flex w-full items-center justify-center py-8",
        "border border-transparent text-white"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "container mx-auto px-5 xl:max-w-xl-7",
          "flex flex-row flex-wrap gap-5",
          "items-center justify-between sm:gap-10"
        )}>
        <motion.div variants={variants.item}>
          <Logo />
        </motion.div>
        <motion.ul
          variants={variants.list}
          className={classes(
            "fixed top-0 left-0 z-10 flex h-full w-full",
            "translate-x-full transform flex-col flex-wrap lg:flex-row",
            "items-center justify-center gap-3 bg-white p-5 lg:p-0",
            "lg:relative lg:w-max lg:translate-x-0 lg:bg-transparent"
          )}>
          {links.map(function (item, index) {
            return (
              <motion.li
                variants={variants.item}
                key={["Link".toUpperCase() + item.toLowerCase()].join("-")}
                className={classes(
                  "flex h-auto w-full cursor-pointer",
                  "flex-col flex-wrap lg:h-max lg:w-max",
                  "transform items-center justify-center"
                )}>
                <a
                  href={"#" + item.split(" ").join("-")}
                  className={classes(
                    "flex w-full flex-col items-center justify-center transition",
                    "text-base font-medium leading-none",
                    "rounded-lg border-2 border-slate-100 p-5 outline-none",
                    "no-underline hover:-translate-y-1 hover:text-red-500",
                    "text-slate-400 focus:translate-y-0.5 focus:text-white",
                    "lg:w-max lg:border-0 lg:border-transparent"
                  )}>
                  {item}
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </nav>
  )
}
