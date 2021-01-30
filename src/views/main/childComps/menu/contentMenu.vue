<template>
    <div class="containerContent">
        <div class="content">
            <div class="titleList">{{content.title}}</div>
            <item class="item" v-for="it in content.data" :content=it 
            :key="'contentMenu'+ content.searchInfor +it.key" :searchInfor=content.searchInfor ></item>
            <!-- <div v-for="it in content.data"  :key="'contentMenu'+it.key">
                <item :content=it></item>
            </div> -->

        </div>       
    </div>
</template>
<script>
// import Item from './sideItem'
import Item from './menuItem'

export default{
    props:{
        content: {
            type: Object,
            default: function() {
                return {
                    title: '搜索结果',
                    tag: 0,
                    searchInfor:'',
                    data:  [{
                       img: "assets/img/main/loadFail.svg",
                       title:'真的什么都没有',
                       url:'',
                       key:'1',

                       view: 10000,                        
                       isSave: true,

                       favor: 10000,
                       isFavor: true
                    }]
                }                        
            }
        }
    },
    destroyed(){
        console.log('销毁contentMenu')
    },
    components:{
        Item
    },
    data(){
       return {

           btInfo: '加载更多',
           showType:'',

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
    // margin-bottom: vh(20);
    margin: 0 0 vh(20) 0;
    
    .content{
        // border: 1px solid blue;
        box-sizing: border-box;
        // margin-bottom: vh(25);
        .titleList{
           position: relative;       
           // left: 30%;
           background-color: #f0f0f4;
           opacity: 1;
           // border: 1px solid red;
           box-sizing: border-box;
           border-radius: 5px 5px 0 0;
           height: vh(25);
           width: vw(200);
           text-align: center;
           font-size: vh(15);
           line-height: vh(25);
           overflow: hidden;
        }
        .item:not(:last-child){
            margin-bottom: vh(20);
            // background-color: red;
        }
        
        
    }
    // .content:nth-child()
    // .content:nth-child(n){
    //         // margin-bottom: vh(20);
    //         background-color: red;
    // }
    // .content:not(:first-child){
    //         // margin-bottom: vh(20);
    //         background-color: red;
    // }
    // .content:not(:first-child):not(:last-child){
    //     margin-bottom: vh(20);
    //     background-color: red;
    // }
}
</style>
