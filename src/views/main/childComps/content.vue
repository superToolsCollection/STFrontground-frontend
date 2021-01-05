<template>
    <div class="containerContent">
        <item v-for="(it, index) in list" :content=it :key="index"></item>
    </div>
</template>
<script>
import Item from './item.vue'

export default{
    props:{
        list: {
            type: Array,
            default: function() {
                return [{
                        img: "assets/img/main/loadFail.svg",
                        title:'什么都没有',
                        description:'真的什么都没有，或者传递参数出错',
                        url:''
                    }]
            }
        }
    },
    components:{
        Item
    },
    data(){
       return {
        //    list: mainItem,
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
    margin-right: vw(-25);
    // margin-bottom: vh(25);
}
</style>
