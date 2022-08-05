import {
  DocumentDownloadIcon,
  ExternalLinkIcon,
  MailIcon
} from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { classes, variants } from "../../lib/utils"

export default function Header() {
  return (
    <header
      className={classes(
        "relative flex h-auto w-auto flex-row border-b-2",
        "items-center justify-center border-transparent border-b-slate-800/10",
        "mb-12 py-32 sm:py-40 lg:mb-20 lg:py-48 xl:mb-[5.75rem] xl-2:py-56"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "container mx-auto h-full px-5 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start",
          "md:items-center md:justify-center"
        )}>
        <motion.h1
          variants={variants.item}
          className={classes(
            "max-w-lg text-right text-xl-3 font-bold leading-tight",
            "mb-4 tracking-tight text-white md:mb-8 md:text-center",
            "md:max-w-xl md:text-xl-4 xl:max-w-xl-2 xl:text-xl-5"
          )}>
          نصنع الخطط{" "}
          <span
            className={classes(
              "bg-gradient-to-br from-red-600 to-red-400",
              "bg-clip-text text-transparent no-underline"
            )}>
            التسويقية
          </span>{" "}
          مع عملائنا لنصل للهدف معاً
        </motion.h1>
        <motion.p
          variants={variants.item}
          className={classes(
            "text-lg font-normal leading-relaxed",
            "mb-8 max-w-xl-3 text-right text-slate-400",
            "md:mb-14 md:text-center md:text-xl lg:max-w-xl-4"
          )}>
          منصة سِنف هي منصة أو شركة إعلانات سعودية متخصصة في المساحات الإعلانية
          الرقمية بالإضافة إلى التسويق الرقمي والتي تركز على نمو الإعلانات
          بالطابع المحلي والدولي والعالمي
        </motion.p>
        <motion.div
          variants={variants.item}
          className={classes(
            "flex h-auto w-full flex-col",
            "items-stretch justify-center gap-3",
            "sm:h-max sm:w-max sm:flex-row sm:gap-4"
          )}>
          <button
            className={classes(
              "flex cursor-pointer items-center justify-center",
              "gap-3 rounded-lg bg-gradient-to-br from-red-600 to-red-400",
              "py-5 px-8 text-base font-medium leading-none text-white outline-none",
              "ring-2 ring-transparent ring-offset-4 ring-offset-slate-50/0 transition-all",
              "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-red-500 md:text-lg",
              "focus:translate-y-0 focus:ring-offset-slate-900 sm:focus:translate-y-0.5"
            )}>
            <DocumentDownloadIcon
              strokeWidth={1.5}
              className={classes(
                "relative h-6 w-6",
                "fill-transparent stroke-current"
              )}
            />
            <span>الملف التعريفي</span>
          </button>
          <a
            href="#about"
            className={classes(
              "flex cursor-pointer items-center justify-center",
              "gap-3 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50",
              "py-5 px-8 text-base font-medium leading-none text-white outline-none",
              "ring-2 ring-transparent ring-offset-4 ring-offset-slate-50/0 transition-all",
              "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-slate-800 md:text-lg",
              "focus:translate-y-0 focus:ring-offset-slate-900 sm:focus:translate-y-0.5"
            )}>
            <ExternalLinkIcon
              strokeWidth={1.5}
              className={classes(
                "relative h-6 w-6",
                "fill-transparent stroke-current"
              )}
            />
            <span>تعرف علينا</span>
          </a>
        </motion.div>
      </motion.div>
      <div
        className={classes(
          "absolute h-full w-full overflow-hidden",
          "top-0 left-0 bottom-auto right-auto -z-50",
          "bg-slate-900 transition-all"
        )}>
        <div
          className={classes(
            "absolute flex h-full w-full flex-row",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map(function (item, index) {
            return (
              <div
                key={index}
                className={classes(
                  "relative h-full w-0.5 overflow-hidden",
                  "border border-transparent bg-slate-800/20"
                )}
              />
            )
          })}
        </div>
        <div
          className={classes(
            "absolute flex h-full w-full flex-col",
            "top-0 left-0 bottom-auto right-auto -z-50",
            "items-center justify-center gap-8"
          )}>
          {[...new Array(80)].map(function (item, index) {
            return (
              <div
                key={index}
                className={classes(
                  "relative h-0.5 w-full overflow-hidden",
                  "border border-transparent bg-slate-800/20"
                )}
              />
            )
          })}
        </div>
      </div>
      <div
        className={classes(
          "absolute top-0 left-0 -z-40 h-full w-full overflow-hidden"
        )}>
        <div
          className={classes(
            "absolute -top-10 -right-[70rem] -z-40 block",
            "h-[20rem] w-[100rem] -rotate-12 rounded-tl-full border",
            "rounded-br-full border-red-700/20 bg-red-700/20 blur-[15rem]"
          )}></div>
        <div
          className={classes(
            "absolute -top-10 -right-[70rem] -z-40 block",
            "h-[20rem] w-[100rem] -rotate-12 rounded-tl-full border",
            "rounded-br-full border-red-700/20 bg-transparent blur-[0]"
          )}></div>
        <div
          className={classes(
            "absolute bottom-10 -left-[70rem] -z-40 block",
            "h-[20rem] w-[100rem] -rotate-12 rounded-tl-full border",
            "rounded-br-full border-blue-700/20 bg-blue-700/20 blur-[15rem]"
          )}></div>
        <div
          className={classes(
            "absolute bottom-10 -left-[70rem] -z-40 block",
            "h-[20rem] w-[100rem] -rotate-12 rounded-tl-full border",
            "rounded-br-full border-blue-700/20 bg-transparent blur-[0]"
          )}></div>
      </div>
    </header>
  )
}
