# react-simple

##从0实现react

```
    1. 0配置打包工具parcel
        cnpm install parcel-bundler --save-dev
    2. 安装babel插件，将jsx语法转换成js对象，即虚拟dom；
        cnpm i babel-core babel-preset-env babel-plugin-transform-react-jsx --save-dev
    3. 新建.babelrc文件，配置babel规则；
        {
            "presets": ["env"],
            "plugins": [
                ["transform-react-jsx", {
                    "prama": "React.createElement"
                }]
            ]
        }

```


