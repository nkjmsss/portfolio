// Depth First Search to get all children elements
const DFS = elmsArr => {
  const stack = elmsArr.slice()
  const result = []
  const dequeue = array => {
    const item = array.shift()
    return item
  }

  while (stack.length > 0) {
    const row = dequeue(stack)

    if (row.children) {
      stack.unshift(...row.children)
    }

    result.push(row)
  }

  return result
}

const gettabable = elms => {
  return DFS(elms).filter(el => {
    return el.tabIndex >= 0
  })
}

const handleKeydown = e => {
  const tabable = store.tabable
  const first = tabable[0]
  const last = tabable[tabable.length - 1]

  if (e.keyCode === 9 /* tab */) {
    if (e.shiftKey /* shift + tab */) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else if (document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

const store = {
  __elms__: [],
  get tabable() {
    return gettabable(this.__elms__)
  },
  set elms(v) {
    this.__elms__ = v
  },
}

function tabTrapEnable(...elms) {
  store.elms = elms

  document.addEventListener('keydown', handleKeydown)
}

function tabTrapDisable() {
  document.removeEventListener('keydown', handleKeydown)
}

export { tabTrapEnable, tabTrapDisable }
