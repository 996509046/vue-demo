<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{obj.name}}</h2>
    <h3>{{obj.age>=18 ? '成年了':'未成年'}}</h3>
    <a v-bind:href="url">点击去百度</a>
    <img :src="imgUrl" >
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'Hello,vue',
      obj:{
        name:'vue',
        age:5
      },
        url:'http://www.baidu.com',
        imgUrl:"//scpic.chinaz.net/files/pic/pic9/202107/hpic4217.jpg"
    }
    
    
    
  }

}
</script>

<style>

</style>