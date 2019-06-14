export default bool => {
  const v = bool ? 'auto' : 'hidden'

  document.documentElement.style.overflow = v
  document.body.style.overflow = v
}
