### Imprew
JavaScript plugin for preview image before upload

#### Installation
```sh
$ npm i -S imprew
```

#### Usage
######  HTML
```html
<input type="file" class="imagepicker">
<img class="previewer">
```

######  JS
```js
import imprew from 'imprew'

imprew({preview: '.previewer', input: '.imagepicker'})
```