# Pinea Test Tuto Demo

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [API Reference](#api-reference)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)

---

### 1. Introduction <a name="introduction"></a>

Pinea is a state management library designed to simplify the management of complex application states in Vue 3 applications. It provides a predictable and efficient way to handle state, actions, and mutations in your Vue components.

### 2. Installation <a name="installation"></a>

To use Pinea in your Vue 3 project, you can install it via npm:

```bash
npm install pinea
```

or using yarn:

```bash
yarn add pinea
```

### 3. Getting Started <a name="getting-started"></a>

After installing Pinea, you need to set it up in your Vue 3 application. Here's a basic example:

```javascript
// main.js or your entry file
import { createApp } from 'vue';
import App from './App.vue';
import Pinea from 'pinea';

const app = createApp(App);

// Use Pinea as a plugin
app.use(Pinea);

app.mount('#app');
```

### 4. Usage <a name="usage"></a>

#### State

Define your state using the `createState` function:

```javascript
// store.js
import { createState } from 'pinea';

export const counterState = createState({
  count: 0,
});
```

#### Actions

Define actions to modify the state:

```javascript
// store.js
import { createActions } from 'pinea';

export const counterActions = createActions({
  increment({ state }) {
    state.count++;
  },
  decrement({ state }) {
    state.count--;
  },
});
```

#### Mutations

Apply mutations to modify the state:

```javascript
// store.js
import { createMutations } from 'pinea';

export const counterMutations = createMutations({
  setCount(state, payload) {
    state.count = payload;
  },
});
```

#### Using in Components

```javascript
// MyComponent.vue
import { usePinea } from 'pinea';
import { counterState, counterActions } from './store';

export default {
  setup() {
    const { state, actions } = usePinea({
      state: counterState,
      actions: counterActions,
    });

    return {
      count: state.count,
      increment: actions.increment,
      decrement: actions.decrement,
    };
  },
};
```

### 5. API Reference <a name="api-reference"></a>

For detailed API reference and advanced usage, please refer to the [official documentation](#).

### 6. Examples <a name="examples"></a>

Explore the [examples](https://github.com/igortuag/pinea-tests/tree/main/examples) folder in the Pinea repository for more usage examples.

### 7. Contributing <a name="contributing"></a>

We welcome contributions! Feel free to open issues and pull requests on the [GitHub repository](https://github.com/igortuag/pinea-tests).

### 8. License <a name="license"></a>

Pinea is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to modify and expand this documentation based on your specific use cases and features of Pinea.