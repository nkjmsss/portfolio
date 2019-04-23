export default [
  {
    name: '第91回五月祭 告知ビラ',
    image: '/dtp/MF91_flyer1.png',
  },
  {
    name: '第91回五月祭 公式パンフレット',
    image: '/dtp/MF91_pamphlet.png',
  },
].map(obj => {
  obj.type = 'dtp'
  return obj
})
