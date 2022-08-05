export const classes = (...classes) => classes.filter(Boolean).join(" ")
export const url = url => (!/^(https?:)?\/\//.test(url) ? url : "https:" + url)
export { variants } from "./motion-variants"
