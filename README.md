# ResponsiveComponents - rcomps

Based on the script by Philip Walton, here in form of an NPM plugin (https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/). If you work with components you will often reach the limits with media queries. To increase reusability, however, you must be independent of the viewport. And this is exactly where container queries come into play.

## Installation
```bash
npm i rcomps --save
yarn add rcomps --D
```

## Usage
The simplest method is to mark the component with the tag `data-observe-resizes`.

```html
<div data-observe-resizes>
  <div class="component">...</div>
</div>

<!-- Result -->
<div class="xs sm" data-observe-resizes>
  <div class="component">...</div>
</div>
```
In this case, the predefined breakpoints are used (`xs: 320, sm: 560, m: 768, l: 960, xl: 1200`). You can overwrite the breakpoints with a new object - important here is to specify the breakpoints in px.

```js
rcomps({"break1": 500, "break2": 1000})
```

However, you are even more flexible if you can define breakpoints directly at the component. Nice side effect, you can also trigger utility classes (e.g. from tailwind) via the breakpoints.

```html
<div class="wrapper" data-observe-resizes
     data-breakpoints='{"break1": 300, "break2": 600, "break3": 800, "break4": 1000}'>
  <div class="component">...</div>
</div>

<!-- Result -->
<div class="wrapper break1 break2 break3" data-observe-resizes
     data-breakpoints='{"break1": 300, "break2": 600, "break3": 800, "break4": 1000}'>
  <div class="component">...</div>
</div>
```

If you use utility classes, you can trigger them individually, depending on the breakpoint. Adding the data attribute `data-utility` adds only one class at a time. This avoids the order around CSS when it comes to overwriting the declarations.

```html
<div class="wrapper"
     data-observe-resizes
     data-utility
     data-breakpoints='{"bg-green": 300, "bg-red": 600, "bg-blue": 800, "bg-yellow": 1000}'>
  <div class="component">...</div>
</div>

<!-- Result -->
<div class="wrapper bg-blue" 
     data-utility
     data-observe-resizes
     data-breakpoints='{"bg-green": 300, "bg-red": 600, "bg-blue": 800, "bg-yellow": 1000}'>
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
MIT

## Thanks 
To Philip Walton @philipwalton