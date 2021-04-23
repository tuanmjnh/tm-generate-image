export function GetFile(files) {
  return new Promise((resolve, reject) => {
    const fReader = new FileReader()
    let file // = document.createElement('img')

    fReader.onload = () => {
      file = fReader.result
      resolve(file)
    }

    console.log(file)
    fReader.readAsDataURL(files)
  })
}

export function LoadVideoFile(videoNode, file) {
  return new Promise((resolve, reject) => {
    videoNode.load()
    videoNode.src = ''
    var type = file.type
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') {
      // reject('')
      resolve(null)
    } else {
      var fileURL = URL.createObjectURL(file)
      videoNode.src = fileURL
      resolve(videoNode)
    }
  })
}

export function GetImage(file) {
  return new Promise((resolve, reject) => {
    const fReader = new FileReader()
    const img = document.createElement('img')

    fReader.onload = () => {
      img.src = fReader.result
      resolve(getBase64Image(img))
    }

    fReader.readAsDataURL(file)
  })
}


export function getBase64Image(img) {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height

  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const dataURL = img.src
  return dataURL
}