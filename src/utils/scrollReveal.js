import ScrollReveal from "scrollreveal"

const isServerSideRendering = typeof window === "undefined"
const scrollReveal = isServerSideRendering ? null : ScrollReveal()

export default scrollReveal
