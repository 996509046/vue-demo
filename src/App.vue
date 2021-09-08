<template>
  <div>
    <div>
    
       <p :class="{str_col: bool}">你要购买的商品数量:{{count}}</p>
    <!-- 1.绑定事件
    语法：v-on:事件名="少量代码"
    -->
    <button v-on:click="count =count +1">+1</button>
     <!-- 1.绑定事件
    语法：v-on:事件名="methods里函数名"
    -->
    <button v-on:click="addFn">+1</button>
    <!-- 1.绑定事件
    语法：v-on:事件名="methods里函数名（值）"
    -->
    <button v-on:click="addCountFn(5)">+5</button>
    <!-- 1.绑定事件
    语法：@事件名="methods里函数名"
    -->
    <button @click="subFn">-1</button>
    </div>
   
    <div>
      <p>你要购买的商品数量:{{count}}</p>
    </div>
    <div id="bind">
     <Bind></Bind>
    </div>
   
  </div>
  
</template>

<script>


export default {
  
  data(){
    return{
      
      count:1,
      bool:true
    }
  },
  methods:{
    addFn(){
      //this只想的export default的{}
      //data函数会把对象挂到当前组件对象上
      this.count++
    },
    addCountFn(num){
      this.count=this.count+num
    },
    subFn(){
      this.count--
    }
  },
 
};

</script>
<style>
.str_col{
  color:red;
  background: blue;
  width: 300px;
  height: 100px;
  font-size: 30px;
}
</style>