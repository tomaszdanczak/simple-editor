![Simple Editor](gh/simple-editor.gif)
# WTF - The Simple Editor 
It is my refactoring of an interesting project built by [Krzysztof Grudzień ](https://github.com/KrzysztofGrudzien)
## 🚀 Things I made myself
### 👉 I built a minimalistic Webpack configuration
(only the necessary configurations to run the project)  
  
  ![Webpack config](gh/webpack-config.gif)
### 👉 I built the Git history 
  ![GIT History](gh/gitk.png)
### 👉 I used JS modules 
  
  ![ES Modules](gh/es-modules.gif)
### 👉 I rebuilt Media Queries and used other Mixin  
  
![Media Queries](gh/mixins.gif)  
  
### 👉 I changed 7-1 CSS Architecture
### 👉 I changed BEM
## 🚀 Things I learned from Krzysztof
### 👉 **How to create notification bar**  
  
  ![Show Error Alert](gh/show-error-alert.gif)  
    
  ![Show Success Alert](gh/show-success-alert.gif)
### 👉 **How to create a toogle switch**  
  ![Switchers](gh/switchers.gif)
### 👉 **How to create multiple themes**  
  ![changing theme](gh/theme.gif)

## 🚀 Tech stack
👉 Webpack  
👉 Git  
👉 Visual Studio Code  
👉 CSS (Grid, Flexbox, Animations)  
👉 Media Queries  
👉 SASS  
👉 7-1 CSS Architecture  
👉 BEM  
👉 Emmet  
👉 Auto Hotkey  
👉 Bash  
👉 VIM  

## 🚀 Webpack configuration which I created includes
👉 SASS file support  
👉 SourceMap support  
👉 gh-pages  
👉 clean-webpack-plugin  
👉 html-webpack-plugin  
👉 mini-css-extract-plugin    
👉 clean-webpack-plugin

### webpack.config.js
```javascript
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Simple Editor",
      template: "src/templates/simple-editor.html",
    }),
  ],
};
```
### webpack.config.prod.js
```javascript
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name]-[contenthash].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Simple Editor",
      template: "src/templates/simple-editor.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash].css",
    }),
  ],
};

```

### Commands?
- `npm start` - to start development mode
- `npm run prod` - to start production mode
- `npm run publish` - to publish on Github

## 🚀 Some VSC, Text Expander shortcuts I used  
👉 `Ctrl + Shift + K` - Delete line    
  
![Delete line](gh/delete-line.gif)
  
👉 `Ctrl + Enter` - Insert line below   
  
![Insert line](gh/insert-line.gif)  
  
👉 `Alt+ ↑ / ↓` - Move line up/down  
  
![Move lines](gh/move-lines.gif)  
  
👉 `Shift+Alt + ↓ / ↑` - Copy line up/down   
  
![Jump to definition](gh/copy-line.gif)  
  
👉 `Ctrl + R` - Open Recent  
  
  ![Open recent](gh/open-recent.gif)  
    
👉 `Alt + click` - Go to function definition  
   
  ![Jump to definition](gh/jump_to_definition.gif)
   
👉 `Ctrl + D` - Add selection to next find match  
  
  ![Multicursor](gh/multi-cursor.gif)  
    
👉 Auto Hotkey  
  
  ![Use Auto Hotkey](gh/use-text-expander.gif)


