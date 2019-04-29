| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/xy-button.svg?style=flat-square
[npm-url]: http://npmjs.org/package/xy-button
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/xy-button.svg?style=flat-square
[download-url]: https://npmjs.org/package/xy-button

[![xy-button](https://nodei.co/npm/xy-button.png)](https://npmjs.org/package/xy-button)

# Button

按钮用于开始一个即时操作。[](https://xueyou2000.github.io/xy-button/demo)

## 安装

```bash
# yarn
yarn add xy-button classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Button, ButtonGroup } from "xy-button";
ReactDOM.render(<Button>按钮</Button>, container);
```

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

### 按钮

| 属性     | 说明                                                               | 类型           | 默认值    |
| -------- | ------------------------------------------------------------------ | -------------- | --------- |
| ghost    | 幽灵属性，使按钮背景透明                                           | boolean        | false     |
| long     | 是否长按钮                                                         | boolean        | false     |
| icon     | 设置按钮的图标类型                                                 | IconDefinition | -         |
| loading  | 设置按钮载入状态                                                   | boolean        | `false`   |
| disabled | 按钮失效状态                                                       | boolean        | `false`   |
| shape    | 设置按钮形状，可选值为 `circle` 或者不设                           | string         | -         |
| size     | 设置按钮大小，可选值为 `small` `large` 或者不设                    | string         | `default` |
| type     | 设置按钮类型，可选值为 `primary` `dashed` `text` `danger` 或者不设 | string         | -         |
| onClick  | `click` 事件的 handler                                             | function       | -         |

### 按钮组

| 属性     | 说明                                            | 类型    | 默认值    |
| -------- | ----------------------------------------------- | ------- | --------- |
| shape    | 设置按钮形状，可选值为 `circle` 或者不设        | string  | -         |
| size     | 设置按钮大小，可选值为 `small` `large` 或者不设 | string  | `default` |
| vertical | 是否垂直                                        | boolean | false     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-button is released under the MIT license.
