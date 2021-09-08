import Vue from 'vue' //引入VUE对象，类似于<SCRIPT SRC="vue.js"></script>
import App from './App.vue' //APP.vue 文件里对象引入过来（vue项目入口）

Vue.config.productionTip = false //在控制台里有一句提示消息



new Vue({ //开始实例化vue
        render: h => h(App), //准备渲染APP页面
    }).$mount('#app') //渲染到index.html文件里id叫app的标签上