<template>
  <div>
      <button @click.stop="btn">.stop阻止事件冒泡</button>
      <a href="http://baidu.com" @click.prevent="btn">.prevent阻止默认行为</a>
       <button @click.once="btn">.once程序运行期间，只触发一次事件处理函数</button> 
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>