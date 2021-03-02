<template>
    <div class="containerContent">
        <div class="content">
            <!-- <item v-for="(it, index) in showContent"  :key="index"></item> -->
            <item v-for="it in content.data" :content="it" :key="'col'+it.key" class="item" ></item>
        </div>        
    </div>
</template>
<script>
import Item from './colItem.vue'

export default{
    // name: 'colContent',
    props:{
        content: {
            type: Object,
            default: function() {
                return {
                     title: '精品专区',
                     tag: 1,
                     data:  [{img: "assets/img/main/loadFail.svg",
                        title:'什么都没有',
                        description:'真的什么都没有，或者传递参数出错',
                        url:''
                     }]
                }
                        
            }
        }
    },
    // computed:{
    //     showContent:function () {
    //         // console.log(this.list.length)
    //         if(this.content.data.length>this.showLength){
    //             return this.content.data.slice(0,this.showLength);
    //         }else {
    //             return this.content.data;
    //         }    
    //     },
    // },
    components:{
        Item
    },
    data(){
       return {
        //    showLength: '16',
       }
    },
    methods:{
    },
    destroyed(){
        console.log('销毁colContent组件');
        this.$emit('destroycolContent');
    },
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.containerContent{
    position: relative;
    // border: 1px solid red;
    box-sizing: border-box;
    padding: vw(26);
    // margin-left: vw(7);
    width:vw(882);
    transition: height .25s; 

    .content{
        // width:vw(1250);
        // height: vh(600);
        @include clearFloat;
        // border: 1px solid blue;
        box-sizing: border-box;
        //没有设定width属性，设定负margin-left/right会将元素拖向对应的方向，并增加宽度，此时的margin的作用就像padding一样: https://www.html.cn/web/css/17515.html
        margin-right: vw(-14);
        // margin-bottom: vh(25);
        // .item{
        //     transition:  0.5s;
        // }
    }

}
</style>
