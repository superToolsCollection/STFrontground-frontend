<template>
    <div class="containerContent">
        <div class="title">{{content.title}}</div>
        <div class="content">
            <item v-for="(it, index) in showContent" :data=it :key="index"></item>
        </div>
        <div class="showMore" @click="showMore" v-show="(content.data.length>16)">{{btInfo}}</div>
        
    </div>
</template>
<script>
import Item from '../common/item.vue'

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
       }
    },
    computed:{
        showContent:function () {
            // console.log(this.list.length)
            if(this.content.data.length>this.showLength){
                return this.content.data.slice(0,this.showLength);
            }else {
                return this.content.data;
            }    
        },
    },
    methods:{
        showMore: function(){
            if(this.btStatu===1){
                // console.log(this.list.length)
                if(this.showLength+12<this.content.data.length){
                    this.showLength = this.showLength + 12;
                } else {
                    this.showLength = this.content.data.length
                    this.btStatu = 2;
                    this.btInfo = '收起'
                }
            } else if(this.btStatu==2){
                this.btInfo = '展开'
                this.btStatu = 3
                this.showLength = 16
                this.$emit('packUp')
            }else if(this.btStatu==3){
                this.btStatu =2
                this.btInfo = '收起'
                this.showLength = this.content.data.length                
            }
            
        }
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.containerContent{
    position: relative;
    // border: 1px solid red;
    box-sizing: border-box;
    padding: vw(26);
    margin-left: vw(7);
    transition: height .25s;

  
    .title{
        display: inline-block;
        position: relative;
        @include setAttribute('&',right,50%,80);
        line-height: vh(25);
        font-size: vh(25);
        font-weight: bold;
        // border: 1px solid red;
        box-sizing: border-box;
        color: #75878a;
        // background-color: #e9e7ef;

    }
    .content{
        // width:vw(1250);
        // height: vh(600);
        @include clearFloat;
        // border: 1px solid blue;
        box-sizing: border-box;
        //没有设定width属性，设定负margin-left/right会将元素拖向对应的方向，并增加宽度，此时的margin的作用就像padding一样: https://www.html.cn/web/css/17515.html
        margin-right: vw(-25);
        // margin-bottom: vh(25);
    }
    .showMore{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        // bottom: vh(-32);
        width: vw(80);
        height: vh(30);
        // border: 1px solid red;
        // color: red;
        color: #ECF0F1;
        background-color: #E74C3C;
        font-size: vh(15);
        line-height: vh(30);
        text-align: center;
        // vertical-align: center;
        border-radius: 3px;
        &:hover{
            background-color: #C0392B;
        }
        @include hoverCursor;

    }

}
</style>
