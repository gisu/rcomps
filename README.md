# ResponsiveComponents

Based on the script by Philip Walton, here in form of an NPM plugin (https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/). If you work with components you will often reach the limits with media queries. To increase reusability, however, you must be independent of the viewport. And this is exactly where container queries come into play.

## Installation
```bash
npm i responiveComponents --save
yarn add responsiveComponents --D
```

## Usage
The simplest method is to mark the component with the tag `data-observe-resizes`.

```html
<div data-observe-resizes>
  <div class="component">...</div>
</div>
```
In dem Fall werden die vordefinierten Breakpoints verwendet (`xs: 320, sm: 560, m: 768, l: 960, xl: 1200`). You can overwrite the breakpoints with a new object - important here is to specify the breakpoints in px.

```js
responsiveComponents({"break1": 500, "break2": 1000})
```

However, you are even more flexible if you can define breakpoints directly at the component. Nice side effect, you can also trigger utility classes (e.g. from tailwind) via the breakpoints.

```html
<div data-observe-resizes
     data-breakpoints='{"break1":500,"break2":1000}'>
  <div class="component">...</div>
</div>
```

## Browser Support
- Firefox 50+
- Chrome
- Internet Explorer 10+ 
- Edge 
- Safari Desktop 10+
- Safari Mobile

## License