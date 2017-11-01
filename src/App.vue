<template>
  <div id="app">
    哈哈
    <picker :datas="datas" :title="title" @child-info="get"></picker>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        datas:[
            [
                {
                    text: '小美',
                    value: 1
                },
                {
                  text: '猪猪',
                  value: 2
                }
            ],
            [
                {
                    text: '张三',
                    value: 1
                },
                {
                    text: '李四',
                    value: 2
                },
                {
                    text: '王五',
                    value: 3
                },
                {
                    text: '赵六',
                    value: 4
                },
                {
                    text: '吴七',
                    value: 5
                },
                {
                    text: '陈八',
                    value: 6
                },
                {
                    text: '杜九',
                    value: 7
                },
                {
                    text: '黄十',
                    value: 8
                },
                {
                    text: '呵呵',
                    value: 9
                },
                {
                    text: '哈哈',
                    value: 10
                },
                {
                    text: '嘿嘿',
                    value: 11
                },
                {
                    text: '啦啦',
                    value: 12
                }
            ],
            [
                {
                    text: '开心',
                    value: 1
                }, {
                    text: '生气',
                    value: 2
                },
                {
                    text: '搞笑',
                    value: 3
                }, {
                    text: '难过',
                    value: 4
                }
            ]

        ],
        title:"请选择"

    }
  },
  mounted(){

  },
    methods:{
        get(msg){
            console.log("选择得到的数据是:",msg);
        }
    }
}
</script>

<style>
  @import "assets/css/base.css";
  .choice-one{
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px;
  }
</style>
