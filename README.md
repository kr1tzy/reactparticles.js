# [ReactParticles.js](https://kr1tzb1tz.github.io/reactparticles.js/)

Independently configurable React component based on [particles.js](http://vincentgarreau.com/particles.js/) by [vincentgarreau](https://github.com/VincentGarreau).

![reactparticles_gif](img/reactparticles.gif)

## Overview

Plug-and-play into existing React projects using the same downloadable .json configuration as the original [particles.js](http://vincentgarreau.com/particles.js/). Multiple components can be configured independently using seperate .json files.

## Install

```
npm install reactparticles.js
```

## Props

|prop | description | type | required |
|:----|:------------|:-----|:---------|
| id | unique identifier | string | yes |
| config | path to particles configuration file | string | no |
| style | additional styles to add or override | object | no |
| className | class name to apply to component | string | no |

### Configuration

- Create and downloaded your config files from the [particle.js site](http://vincentgarreau.com/particles.js/)

- Place the config file in your public folder

<img src="img/cra-structure.png" width="200px"/>

- Pass the config file path to your component. The path is relative to your index.html.

```jsx
<Particles id="test" config="test-particles.json" />
```

## Acknowledgements

[Vincentgarreau](https://github.com/VincentGarreau) for the original [particles.js](http://vincentgarreau.com/particles.js/).

---

:bird: - @kr1tzb1tz
