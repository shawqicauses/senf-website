import { motion } from "framer-motion"
import { classes } from "../../lib/utils"

export default function Hiring() {
  const variants = {
    container: {
      hidden: {
        transition: {
          delayChildren: 0,
          staggerChildren: 0.0625,
          staggerDirection: -1
        }
      },
      visible: {
        transition: {
          delayChildren: 0,
          staggerChildren: 0.0625,
          staggerDirection: 1
        }
      }
    },
    item: {
      hidden: {
        y: 20,
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 100
        }
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100
        }
      }
    }
  }

  return (
    <section
      id="التقدم-لوظيفة"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start gap-0",
          "lg:items-center lg:justify-center"
        )}>
        <div
          className={classes(
            "flex flex-col items-start justify-start",
            "lg:items-center lg:justify-center",
            "mb-[3.75rem] gap-3 lg:mb-20"
          )}>
          <motion.h2
            variants={variants.item}
            className={classes(
              "relative text-xl-2 font-semi-bold leading-tight",
              "max-w-none text-right capitalize tracking-tight",
              "md:text-xl-3 lg:max-w-xl-2 xl:text-xl-4",
              "lg:text-center xl:max-w-xl-3"
            )}>
            إذا كنت تمتلك مهارةٌ ما وترغب في الانضمام إلى فريق{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-red-400",
                "bg-clip-text text-transparent no-underline"
              )}>
              سِنف،{" "}
            </span>{" "}
            سارع وقم بتقديم طلب للتوظيف
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-none text-right tracking-normal text-slate-400",
              "md:text-lg lg:max-w-xl-2 lg:text-center xl:text-xl"
            )}>
            فريق منصة سِنف يكبر بانضمامكم إليه، فإذا كنت تمتلك مهارة ما وتمتلك
            الشغف الكامل لتأديتها، انضم إلينا عبر هذا النموذج الذي سيوصلك مباشرة
            معنا
          </motion.p>
        </div>
        <form
          className={classes(
            "flex h-full w-full max-w-xl-2 flex-col",
            "items-start justify-start gap-3 lg:gap-4",
            "lg:items-start lg:justify-start"
          )}>
          <div
            className={classes(
              "flex h-auto w-full flex-col gap-3",
              "items-start justify-start md:flex-row",
              "lg:items-start lg:justify-start lg:gap-4"
            )}>
            <div
              className={classes(
                "flex h-auto w-full flex-col gap-3",
                "items-start justify-start lg:gap-4"
              )}>
              <motion.label
                variants={variants.item}
                htmlFor="first-name"
                className={classes(
                  "text-base font-medium leading-none text-white",
                  "sr-only not-italic no-underline lg:text-xl"
                )}>
                الاسم الأول
              </motion.label>
              <motion.input
                variants={variants.item}
                type="text"
                id="first-name"
                name="first-name"
                placeholder="الاسم الأول"
                className={classes(
                  "placeholder:opacity-1 h-full w-full rounded-lg border-2 border-slate-800",
                  "bg-slate-800/40 p-4 text-lg font-normal leading-normal text-slate-100",
                  "outline transition duration-100 ease-linear placeholder:text-slate-500",
                  "focus:border-2 focus:border-red-500 focus:outline-none focus:ring-0",
                  "outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
                )}
              />
            </div>
            <div
              className={classes(
                "flex h-auto w-full flex-col gap-3",
                "items-start justify-start lg:gap-4"
              )}>
              <motion.label
                variants={variants.item}
                htmlFor="last-name"
                className={classes(
                  "text-base font-medium leading-none text-white",
                  "sr-only not-italic no-underline lg:text-xl"
                )}>
                الاسم الثاني
              </motion.label>
              <motion.input
                variants={variants.item}
                type="text"
                id="last-name"
                name="last-name"
                placeholder="الاسم الثاني"
                className={classes(
                  "placeholder:opacity-1 h-full w-full rounded-lg border-2 border-slate-800",
                  "bg-slate-800/40 p-4 text-lg font-normal leading-normal text-slate-100",
                  "outline transition duration-100 ease-linear placeholder:text-slate-500",
                  "focus:border-2 focus:border-red-500 focus:outline-none focus:ring-0",
                  "outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
                )}
              />
            </div>
          </div>
          <div
            className={classes(
              "flex h-auto w-full flex-col gap-3",
              "items-start justify-start lg:gap-4"
            )}>
            <motion.label
              variants={variants.item}
              htmlFor="email"
              className={classes(
                "text-base font-medium leading-none text-white",
                "sr-only not-italic no-underline lg:text-xl"
              )}>
              البريد الإلكتروني
            </motion.label>
            <motion.input
              variants={variants.item}
              type="email"
              id="email"
              name="email"
              placeholder="البريد الإلكتروني"
              className={classes(
                "placeholder:opacity-1 h-full w-full rounded-lg border-2 border-slate-800",
                "bg-slate-800/40 p-4 text-lg font-normal leading-normal text-slate-100",
                "outline transition duration-100 ease-linear placeholder:text-slate-500",
                "focus:border-2 focus:border-red-500 focus:outline-none focus:ring-0",
                "outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
              )}
            />
          </div>
          <div
            className={classes(
              "flex h-auto w-full flex-col gap-3",
              "items-start justify-start lg:gap-4"
            )}>
            <motion.label
              variants={variants.item}
              htmlFor="portfolio"
              className={classes(
                "text-base font-medium leading-none text-white",
                "sr-only not-italic no-underline lg:text-xl"
              )}>
              رابط ملف الأعمال
            </motion.label>
            <motion.input
              variants={variants.item}
              type="text"
              id="portfolio"
              name="portfolio"
              placeholder="رابط ملف الأعمال"
              className={classes(
                "placeholder:opacity-1 h-full w-full rounded-lg border-2 border-slate-800",
                "bg-slate-800/40 p-4 text-lg font-normal leading-normal text-slate-100",
                "outline transition duration-100 ease-linear placeholder:text-slate-500",
                "focus:border-2 focus:border-red-500 focus:outline-none focus:ring-0",
                "outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent"
              )}
            />
          </div>
          <motion.div
            variants={variants.item}
            className={classes(
              "flex h-auto w-full flex-col gap-3",
              "items-start justify-start lg:gap-4"
            )}>
            <button
              className={classes(
                "flex w-full cursor-pointer items-center justify-center",
                "gap-3 rounded-lg border-2 border-transparent bg-red-500",
                "py-4 px-8 text-lg font-medium leading-normal text-white outline-none",
                "ring-2 ring-transparent ring-offset-4 ring-offset-slate-50/0 transition-all",
                "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-red-500",
                "focus:translate-y-0 focus:ring-offset-slate-900 sm:focus:translate-y-0.5"
              )}>
              أرسل الطلب
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  )
}
