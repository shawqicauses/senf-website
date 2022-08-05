import { HeartIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"
import { classes, variants } from "../../lib/utils"

export default function Services() {
  const services = [
    {
      title: "التسويق الرقمي",
      description: [
        "دع فريق سِنف للتسويق الرقمي يساعدك على تطوير إستراتيجية التسويق عبر الإنترنت لجذب المزيد",
        "من الزوار المؤهلين إلى موقعك (وسائل التواصل الاجتماعي - الموقع الإلكتروني - التجارة الإلكترونية - تطبيق الجوال)",
        "وتحويل هؤلاء الزوار إلى عملاء متوقعين ومبيعات"
      ].join(" ")
    },
    {
      title: "إعلانات خارج المنزل",
      description: [
        "سِنف للإعلانات خارج المنزل، عبارة عن شاشات إعلانية، يتم وضعها بشكل إستراتيجي",
        "في مواقع عالية الإقبال، مما يمنحك تفاعلاً مباشراً مع الجمهور المستهدف وتمنحك الشاشات الخاصة بنا",
        'انطباعات عالية وتساعدك على إنشاء ميزة "قمة العقل" في عملائك المستهدفين'
      ].join("")
    },
    {
      title: "تطوير المواقع الإلكترونية",
      description: [
        "هذا هو السبب، سِنف تستخدم أحدث التقنيات لتزود عملائها بخدمات تصميم وتطوير",
        "المواقع الإلكترونية، التي بدورها تؤدي إلى تجربة فريدة للمستخدمين",
        "ليس عليك سوى أن تشغل تفكيرك في مشروعك الشخصي وسِنف سيتكفل في إنشاء موقعك الخاص"
      ].join(" ")
    },
    {
      title: "تصميم الفيديوهات",
      description: [
        "تقوم سِنف باختيار أفضل اللقطات التي تحاكي الفكرة الرئيسية وحذف اللقطات غير المرغوب بها",
        "واختيار أفضل المشاهد المناسبة للبداية والنهاية، والعمل على دمج بعض اللقطات",
        "لتصبح فكرة كاملة متناسقة تخلق مرونة للفكرة تماماً كما نعمل على التعديل الصوتي"
      ].join(" ")
    }
  ]

  return (
    <section
      id="خدماتنا"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <motion.div
        variants={variants.container}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
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
              "text-xl-2 font-semi-bold leading-tight",
              "max-w-none text-right tracking-tight",
              "md:text-xl-3 lg:max-w-xl-2 xl:text-xl-4",
              "lg:text-center xl:max-w-xl-3"
            )}>
            تعرف على خدمات منصة{" "}
            <span
              className={classes(
                "bg-gradient-to-br from-red-600 to-red-400",
                "bg-clip-text text-transparent no-underline"
              )}>
              سِنف
            </span>{" "}
            لتصميم وتنفيذ احتياجاتك التقنية والتسويقية
          </motion.h2>
          <motion.p
            variants={variants.item}
            className={classes(
              "max-w-none text-base font-normal leading-normal",
              "max-w-none text-justify tracking-normal text-slate-400",
              "md:text-lg lg:max-w-xl-2 lg:text-center xl:text-xl"
            )}>
            خدماتنا الحالية هي مجرد بداية متواضعة لمنصة سِنف التي ستفاجئكم
            بالمزيد والمزيد من خدماتها وأعمالها وعملائها في الفترة القادمة،
            فكونوا بالقرب
          </motion.p>
        </div>
        <dl
          className={classes(
            "grid h-auto w-full grid-cols-1 gap-10",
            "content-start items-start justify-center",
            "lg:grid-cols-2 xl:gap-[3.75rem] xl-2:gap-20"
          )}>
          {services.map((item, index) => (
            <motion.div
              variants={variants.item}
              key={index}
              className={classes(
                "flex h-auto w-full flex-col",
                "items-start justify-start gap-4",
                "sm:flex-row sm:gap-6"
              )}>
              <div
                className={classes(
                  "flex h-12 w-12 shrink-0 items-center justify-center",
                  "rounded-lg text-white shadow-lg shadow-slate-800",
                  "bg-gradient-to-br from-red-600 to-red-400 md:h-14 md:w-14"
                )}>
                <HeartIcon
                  strokeWidth={1.5}
                  className={classes("h-6 w-6 md:h-8 md:w-8")}
                />
              </div>
              <div>
                <dt>
                  <h3
                    className={classes(
                      "text-lg font-semi-bold leading-none",
                      "text-justify tracking-tight text-white",
                      "mb-4 mt-auto max-w-xs md:text-xl"
                    )}>
                    {item.title}
                  </h3>
                </dt>
                <dd
                  className={classes(
                    "text-sm font-normal leading-relaxed",
                    "text-justify text-slate-400 md:text-base"
                  )}>
                  {item.description}
                </dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}
