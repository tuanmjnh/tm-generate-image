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

