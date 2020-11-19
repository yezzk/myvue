const webpack = require("webpack");
module.exports = {
configureWebpack: {
//支持jquery
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
            })
        ]
    },
    // resolve: {
    //     alias: { //配置别名,修改后需要重新编译才能生效
    //         'assets': '@/assets',
    //         // 'common': '@/common',
    //         'components': '@/components',
    //         'network': '@/network',
    //         'views': '@/views',
    //     }
    // }
};

