export default [
  {
    name: '第91回五月祭 告知ビラ',
    image: '/dtp/MF91_flyer1.png',
  },
  {
    name: '第91回五月祭 公式パンフレット',
    image: '/dtp/MF91_brochure.png',
    href: 'https://gogatsusai.jp/committee/static/pdf/pamphlet.pdf',
  },
  {
    name: '第92回五月祭 公式パンフレット',
    image: '/dtp/MF92_brochure.png',
    href:
      'https://drive.google.com/file/d/1aRS16Ia6-F6k3w0UCILrW4U3qVKg7wm2/view',
  },
].map(obj => {
  obj.type = 'dtp'
  return obj
})
