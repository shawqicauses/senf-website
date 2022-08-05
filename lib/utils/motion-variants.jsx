export const variants = {
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
  introduction: {
    hidden: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.125,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.125,
        staggerDirection: 1
      }
    }
  },
  list: {
    hidden: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.125,
        staggerDirection: -1
      }
    },
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.125,
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
