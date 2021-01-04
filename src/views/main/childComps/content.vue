<template>
    <div class="containerContent">
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
        <item></item>
    </div>
</template>
<script>
import Item from './item.vue'
export default{
    components:{
        Item
    },
    data(){
       return {
           list:[{
                   img:'1',
                   title:'title1',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               },{
                   img:'2',
                   title:'title2',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               },{
                   img:'3',
                   title:'title3',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               },{
                   img:'4',
                   title:'title4',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               },{
                   img:'5',
                   title:'title5',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               },{
                   img:'6',
                   title:'title6',
                   description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                   url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
               }
           ]
       }
    },
    computed:{
    },
    methods:{
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.containerContent{
    // width:vw(1250);
    // height: vh(600);
    @include clearFloat;
    // border: 1px solid blue;
    box-sizing: border-box;
    //没有设定width属性，设定负margin-left/right会将元素拖向对应的方向，并增加宽度，此时的margin的作用就像padding一样: https://www.html.cn/web/css/17515.html
    margin-right: vw(-46);
    margin-bottom: vh(-23);
}
</style>
