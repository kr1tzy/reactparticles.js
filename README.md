# [ReactParticles.js](https://kr1tzy.github.io/reactparticles.js/)

Independently configurable React component for [particles.js](http://vincentgarreau.com/particles.js/).

## Overview

Plug-and-play particles into existing React projects using the same downloadable JSON configuration as the original [particles.js](http://vincentgarreau.com/particles.js/). Configure multiple components independently using seperate JSON files.

### Install

```
npm install reactparticles.js
```

### Props

| prop      | description                           | type   | required |
| :-------- | :------------------------------------ | :----- | :------- |
| id        | unique identifier                     | string | yes      |
| config    | path to particles configuration file  | string | no       |
| style     | styles to add or override the default | object | no       |
| className | class name to apply to the component  | string | no       |

### Default style

The following style is applied to each instance so it will automatically expand to its parent's height and width. This style can be overridden or expanded by passing an object with the values in as the style prop.

```jsx
style: {
  position: "absolute" as "absolute",
  display: "block",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%"
 }
```

### Configuration

- Customize and downloaded your config files from the [particle.js site](http://vincentgarreau.com/particles.js/)

- Place the config file in your public folder and pass the config file path to your component. 

<img src="img/directory-structure.png" width="200px"/>

### Example use

Below I'm overwriting the default style width and height and adding a background color and opacity.

```tsx
<Particles
  id="config-1"
  config="particles/config-1.json"
  style={{
    width: "50%",
    height: "50%",
    backgroundColor: "green",
    opacity: "0.5"
  }}
  className="particles-class-name"
/>
```
