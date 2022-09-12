const grid = document.getElementById('photo-grid')

const photos = [
'https://images.unsplash.com/photo-1662911764923-2cedee43aa2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',

'https://images.unsplash.com/photo-1662748562589-24c5ea7fb87d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80',

'https://images.unsplash.com/photo-1662829138009-625bd8709f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',

'https://images.unsplash.com/photo-1662751283309-829d4591be3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=339&q=80',

'https://images.unsplash.com/photo-1662845364626-196408576daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',

'https://images.unsplash.com/photo-1579612009523-d27464b2870a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80',

'https://images.unsplash.com/photo-1603097097696-048c78b6f2ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',

'https://images.unsplash.com/photo-1662873069474-d7baf7a3f992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',

'https://images.unsplash.com/photo-1559398130-c499784f1006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
]

const viewer = document.querySelector('#viewer')
const viewer_img = document.querySelector('#viewer > .picture img')

const hideViewer = (evt) => viewer.setAttribute('class', 'hidden')
viewer.addEventListener('click', hideViewer)

const showViewer = (src) => {
  
  viewer.setAttribute('class', '')
  viewer_img.setAttribute('src', src)
}

const pictures = photos.map( src => {

  const img = document.createElement('img')
  img.setAttribute('src', src)

  img.addEventListener('click', () => showViewer(src))

  const div = document.createElement('div')
  div.setAttribute('class', 'picture')
  div.appendChild(img)

  return div
})

const newGrid = document.createElement('div')
newGrid.setAttribute('id', 'photo-grid')
newGrid.setAttribute('class', 'grid')

pictures.forEach( p => { newGrid.appendChild(p) })

grid.replaceWith(newGrid)
