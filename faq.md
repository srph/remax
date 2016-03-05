## FAQ
This page contains answers to Frequenly Asked Questions.

<sub>[Back to the documentation](readme.md).</sub>

### Where's my `actions`, `reducers`, and `constants`?
This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).

### What does the bootstrap file do?
The bootstrap file (`import`ed in [`src/index.js#L2`](src/index.js#L2)) is useful for libraries that need to be initialized (e.g., axios interceptors, et al.).
