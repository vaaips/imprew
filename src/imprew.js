export default function imprew (options) {
  const image = document.querySelector(options.image)
  const input = document.querySelector(options.input)

  input.addEventListener('change', () => {
    const imageFile = input.files[0]

    if (imageFile) {
      const reader = new window.FileReader()

      reader.onload = (event) => {
        const result = event.target.result
        image.setAttribute('src', result)
      }

      reader.readAsDataURL(imageFile)
    }
  })
}
