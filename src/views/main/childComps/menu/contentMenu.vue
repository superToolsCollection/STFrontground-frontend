<template>
    <div class="containerContent">
        <div class="content">
            <item v-for="(it, index) in content.data" :data=it :key="index"></item>
        </div>       
    </div>
</template>
<script>
import Item from './sideItem'

export default{
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
    components:{
        Item
    },
    data(){
       return {
           showLength: 16,

           btInfo: '加载更多',
           btStatu: 1,

        //    showContent: 
       }
    },
    computed:{
        // showContent:function () {
        //     // console.log(this.list.length)
        //     if(this.content.data.length>this.showLength){
        //         return this.content.data.slice(0,this.showLength);
        //     }else {
        //         return this.content.data;
        //     }    
        // },
    },
    methods:{
        // showMore: function(){
        //     if(this.btStatu===1){
        //         // console.log(this.list.length)
        //         if(this.showLength+12<this.content.data.length){
        //             this.showLength = this.showLength + 12;
        //         } else {
        //             this.showLength = this.content.data.length
        //             this.btStatu = 2;
        //             this.btInfo = '收起'
        //         }
        //     } else if(this.btStatu==2){
        //         this.btInfo = '展开'
        //         this.btStatu = 3
        //         this.showLength = 16
        //     }else if(this.btStatu==3){
        //         this.btStatu =2
        //         this.btInfo = '收起'
        //         this.showLength = this.content.data.length                
        //     }
            
        // }
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.containerContent{
    position: relative;
    // border: 1px solid green;
    box-sizing: border-box;
    // background-color: w;
  
    
    .content{
        // width:vw(1250);
        // height: vh(600);
        // border: 1px solid blue;
        box-sizing: border-box;
        // margin-bottom: vh(25);
    }
}
</style>
