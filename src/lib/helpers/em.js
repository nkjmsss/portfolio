// translate em into px
export default (em, el) => {
  const fontsize = window.getComputedStyle(el).fontSize
  const fontsizeNum = fontsize.replace(/px$/, '')
  const $em = Number(Math.round(fontsizeNum * em))

  return $em
}
