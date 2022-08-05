import { MailIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import Image from "next/image"
import { classes } from "../../lib/utils"

export default function About() {
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
      id="تعرف-علينا"
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
          "flex flex-col items-start justify-start gap-10",
          "lg:flex-row lg:items-center lg:justify-center",
          "xl:gap-[3.75rem] xl-2:gap-20"
        )}>
        <div
          className={classes(
            "flex shrink grow-0 basis-full flex-col",
            "order-1 items-start justify-start gap-0",
            "lg:order-0 lg:items-start lg:justify-start"
          )}>
          <motion.h2
            variants={variants.item}
            className={classes(
              "relative text-xl-2 font-semi-bold leading-tight",
              "max-w-none text-justify capitalize tracking-tight",
              "md:text-xl-3 lg:max-w-xl-2 xl:text-xl-4",
              "mb-4 lg:mb-6 lg:text-center xl:max-w-xl-3"
            )}>
            من هي{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-red-400",
                "bg-clip-text text-transparent no-underline"
              )}>
              سِنف
            </span>
            ؟
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "text-base font-normal leading-relaxed",
              "text-justify text-slate-400 md:text-lg",
              "mt-auto ml-auto mb-4 lg:mb-6"
            )}>
            شركة سنف للدعاية والإعلان فكر جديد ووجهة نظر جديدة في كل ما تحتاجه
            من دعاية و إعلان بأيدي مجموعة ذوى قدرة عالية على الابتكار والإبــداع
            فنحن ننفذ كبرى الحملات الإعلانية المختلفة للشركات والمعارض فلدينا
            ستجد الهدف الرئيسي إرضـاء العـميل وليس الربح المادي ولذلك أسعارنا لا
            تقبـل المنـافسة
          </motion.p>
          <motion.p
            variants={variants.item}
            className={classes(
              "text-base font-normal leading-relaxed",
              "text-justify text-slate-400 md:text-lg"
              "text-right text-slate-400 md:text-lg"
            )}>
            تسعى شركة سنف للدعاية والإعلان دائما لتحقيق سمعـة طيبـة وإرسـاء
            دعائم فكر وإبـداع من نـوع خـاص فنحن نعدكم بالدقة في الأداء والسرعة
            في إنهاء الأعمال وتقديم أداء راقي لا نسمـح بتقـديم أقـل منـه
          </motion.p>
          <motion.button
            variants={variants.item}
            className={classes(
              "mt-8 flex w-full cursor-pointer items-center justify-center sm:w-max lg:mt-12",
              "gap-3 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50",
              "py-5 px-8 text-base font-medium leading-none text-white outline-none",
              "ring-2 ring-transparent ring-offset-4 ring-offset-slate-50/0 transition-all",
              "hover:-translate-y-1 focus:translate-y-0.5 focus:ring-slate-800 md:text-lg",
              "focus:translate-y-0 focus:ring-offset-slate-900 sm:focus:translate-y-0.5"
            )}>
            <MailIcon
              strokeWidth={1.5}
              className={classes(
                "relative h-6 w-6",
                "fill-transparent stroke-current"
              )}
            />
            <span>تواصل معنا</span>
          </motion.button>
        </div>
        <motion.div
          variants={variants.item}
          className={classes(
            "relative shrink grow-0 basis-full",
            "aspect-square w-full overflow-hidden rounded-lg",
            "flex items-center justify-center gap-0"
          )}>
          <Image
            src="https://images.unsplash.com/photo-1638153534717-fb17b6d19040"
            alt="Senf - About Section"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
