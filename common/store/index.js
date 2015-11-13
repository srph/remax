// Redux Store instance
let instance = null;

export default {
  set(store) {
    instance = store;
  },

  get() {
    return instance;
  }
};
