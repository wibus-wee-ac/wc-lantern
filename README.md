# Lantern for Web Components

[![npm](https://img.shields.io/npm/v/wc-lantern)](https://www.npmjs.com/package/wc-lantern)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/wc-lantern)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/wc-lantern)

> Learn from [从零开始写一个 Web Component - GitHub Corners | 云游君的小站](https://www.yunyoujun.cn/posts/how-to-write-a-web-component/)

A web component by [lit](https://github.com/lit/lit)

The final product is an ES module, and it can be used alone.

> Anywhere like Vanilla JS / Vue / React / Angular / Svelte ...

## Demo

![](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/202201311306672.png)

## Usage

```bash
npm i wc-lantern
```

### By CDN

See [demo/index.html](https://github.com/wibus-wee/wc-lantern/blob/main/demo/index.html)

```html
<!-- cdn -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/wc-lantern@latest"
></script>
```

### By NPM

```ts
// main.ts
import "wc-lantern"
```

```html
<!-- index.html -->
<lantern-element></lantern-element>
```

## API

### Example

```html
<lantern-element
  number="2"
  text="Good,Great"
  disPlayBoth
></lantern-element>
<lantern-element
  number="2"
  position="right"
  text="Good,Great"
></lantern-element>
```

<!-- wc-api:start -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
### `src/index.ts`:

#### class: `LanternElement`

##### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

##### Fields

| Name          | Privacy | Type      | Default   | Description                                                                                   | Inherited From |
| ------------- | ------- | --------- | --------- | --------------------------------------------------------------------------------------------- | -------------- |
| `text`        |         | `string`  | `'春,节'`   | The text on lantern，use \`,\` to divide the text                                              |                |
| `number`      |         | `number`  | `2`       | The number of lanterns returned, up to 2                                                      |                |
| `disPlayBoth` |         | `boolean` | `false`   | Whether to display left or right; otherwise, the output will be based on the 'position' field |                |
| `position`    |         | `string`  | `'right'` | The position of the lantern, left or right                                                    |                |

<hr/>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- wc-api:end -->



## Author

GS-server © Wibus, Released under the MIT License.

> [Personal Website](http://iucky.cn/) · [Blog](https://blog.iucky.cn/) · GitHub [@wibus-wee](https://github.com/wibus-wee/) · Telegram [@wibus✪](https://t.me/wibus_wee)