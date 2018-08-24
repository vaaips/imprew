export default function imprew(options) {
  const image = document.querySelector(options.image)
  const input = document.querySelector(options.input)

  input.addEventListener('change', (event) => {
    var imageFile = input.files[0]
    if (imageFile) {
      const reader = new FileReader()

      reader.onload = (event) => {
        var result = event.target.result
        image.setAttribute('src', result)
      }

      reader.readAsDataURL(imageFile)
    }
  })
}
