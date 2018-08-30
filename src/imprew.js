export default function imprew (options) {
  const input = document.querySelector(options.input)
  const preview = document.querySelector(options.preview)

  input.addEventListener('change', () => {
    const imageFile = input.files[0]

    if (imageFile) {
      const reader = new window.FileReader()

      reader.onload = (event) => {
        const result = event.target.result
        preview.setAttribute('src', result)
      }

      reader.readAsDataURL(imageFile)
    }
  })
}
