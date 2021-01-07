<template>
    <div class="containerMenu">
       <div class="input">
           <input type="text" placeholder="搜索">
       </div>
       <div class="side">
            <ul>
                <li>精品专区</li>
                <li>生活日常</li>
                <li>辅助办公</li>
                <li>教育</li>
            </ul>
       </div>
       <!-- @scroll="contentscroll" -->
       
       <div class="title">精品专区</div>
       <!-- 这里不要再将scroll包裹在div内 -->
       <scroll class="show" ref="scorll">
            <div class="titleList">精品专区</div>
            <content-menu :content="list" ref="list"></content-menu>
        </scroll> 
            
        
       <!-- <div class="show">
                   
       </div> -->
    </div>
</template>

<script>
// import Item from './sideItem'
import contentMenu from './contentMenu'
import Scroll from 'components/scroll/Scroll.vue'


import {mainData} from 'assets/js/data.js' 

export default{
    // mounted(){
    //     console.log("here")
    //     // 获取整个组件的高度
    //     console.log(this.$refs.list.$el.offsetHeight)
    // },
    components:{
        contentMenu,
        Scroll
    },
    data(){
       return {
           list: mainData[0],
       }
    },
    computed:{
    },
    methods:{
        contentscroll(position){
            console.log(-position.y)
            // console.log('最大的ScrollY:',-this.$refs.scorll.getMaxScrollY())
        }
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";

.containerMenu{
    height: 100%;
    width: 100%;
    // position: relative;
    background-color: white;
    border: 2px solid #e9e7ef;
    border-right: 0;
    border-top: 1px;
    box-sizing: border-box;
    border-radius: 5px 0 0 5px;

    .input{
        height: vh(60);
        width: 100%;
        box-sizing: border-box;
        // border: 1px solid red;
        position: relative;
        z-index: 4;
        background-color: white;


        // border-top-style: none;
        // border-right-style: none;
        // border-left-style: none;
        // border-bottom-color: rgba(212, 217, 226, 100);
        // border-bottom-width: vh(1);
       

        input{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 86%;
            height: vh(35);
            padding: vh(5);
            box-sizing: border-box;
            outline: none;
        }
    }
    .side{
        float: left;
        width: 30%;
        @include setAttribute('&',height,100%,60);
        box-sizing: border-box;
        // border: 1px solid blue;
        ul{
            display: block;
            width: 100%;
            font-size: 0;
            text-align: center;
            // 去除li前面的小圆点
            list-style-type: none;
            // 去除li前面的小圆点的占位
            padding-left: 0;

            box-sizing: border-box;
            // border: 1px solid black;

            li{
                box-sizing: border-box;
                // border: 1px solid;
                height: vh(49);
                
                color: #696969;
                line-height: vh(49);
                font-size: vh(18);
                font-weight: normal;
                @include hoverCursor;
            }
        }
    }
    .title{
        position: relative;       
        // left: 30%;
        background-color: #f0f0f4;
        // background-color: white;
        // border: 1px solid #f0f0f4;
        // border: 1px solid red;
        box-sizing: border-box;
        border-radius: 5px 5px 0 0;
        height: vh(25);
        width: vw(240);
        text-align: center;
        font-size: vh(15);
        line-height: vh(25);
        overflow: hidden;
        opacity: 1;
        z-index: 3;

    }
    .show{
        overflow: hidden;
        float: left;
        width: 70%;
        @include setAttribute('&',height,100%,60);
        box-sizing: border-box;
        top: vh(-25);
        position: relative;
        // border: 1px solid yellow;
        // background-color:  #f0f0f4;
        .titleList{
            position: relative;       
            // left: 30%;
            background-color: #f0f0f4;
            opacity: 1;
            // border: 1px solid red;
            box-sizing: border-box;
            border-radius: 5px 5px 0 0;
            height: vh(25);
            width: vw(240);
            text-align: center;
            font-size: vh(15);
            line-height: vh(25);
            overflow: hidden;
        }
        
    }
}


</style>
