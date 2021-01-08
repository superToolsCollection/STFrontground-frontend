<template>
    <div class="containerMenu">
       <div class="input">
           <input type="text" placeholder="搜索">
       </div>
       <div class="side">
            <ul>
               <li v-for="(item,key) in list" :key="key"  @click="skipTo(key)" :class="{'hightlight':inArea===key}">{{item.title}}</li>
            </ul>
       </div>
       
       <div class="title">{{list[inArea].title}}</div>
       <!-- 这里不要再将scroll包裹在div内 -->
       <scroll class="show" ref="scroll" @scroll="contentscroll">
           <div v-show="searchInfor.length===0">
               <content-menu v-for="(item,key) in list" :content="item" :key="key" ref="list"></content-menu>
           </div>
            <div v-show="(searchInfor.length!=0)&&(searchResult.data.length!=0)">
                <content-menu :content="searchResult"></content-menu>
            </div>
            <div v-show="(searchInfor.length!=0)&&(searchResult.data.length===0)" class="noSearchInfor">
                没有搜索到任何信息
            </div>
        </scroll> 
            
    </div>
</template>

<script>
import contentMenu from './contentMenu'
import Scroll from 'components/scroll/Scroll.vue'


import {mainData} from 'assets/js/data.js' 
import ContentMenu from './contentMenu.vue'

export default{
    created(){       
        this.matchSearch(this.searchInfor)
    },
    mounted(){
        // // 获取组件的高度
        // console.log(this.$refs["list"][0].$el.offsetHeight)
        var sum = 0;
        this.listHeight[0] = 0;

        for(var i=0;i<this.$refs["list"].length;i++){
            //this.$refs["list"][i].$el.offsetHeight 获取组件的高度
            sum += this.$refs["list"][i].$el.offsetHeight+10;

            this.listHeight[i+1] = sum;
        }
        //因为最后一个contentMenu的高度是不包括margin-bottom的
        this.listHeight[this.listHeight.length-1]-=10;
        
    },
    components:{
        contentMenu,
        Scroll
    },
    data(){
        ContentMenu
       return {
           list: mainData,

           listHeight:[],
           //表示现在滚动到哪个data所在的区域
           inArea:0,

           //在使用scrollTo跳转过程中锁住scroll事件的响应函数。
           lock: false,

           searchInfor:'1',
           searchResult: {
                     title: '搜索结果',
                     tag: 0,
                     data:  [{img: "assets/img/main/loadFail.svg",
                        title:'什么|都没|有呀',
                        description:'真的什么都没有，或者传递参数出错',
                        url:''
                     }]
                },
        }
    },
    computed:{
    },
    methods:{
        contentscroll(position){
            if(!this.lock){
                //判断此时滚动位置在哪个data对应的区域
                for(var i = 0; i<this.listHeight.length-1; i++){
                    if(((-position.y)>=this.listHeight[i])&&((-position.y)<this.listHeight[i+1])){
                        this.inArea = i;
                        // console.log(i);
                        break;
                    }
                }
            }
        },
        skipTo(index){
            this.inArea = index;
            this.lock = true;
            this.$refs.scroll.scrollTo(0,-this.listHeight[index]);
            //一定要设置setTimeout, 虽然.scrollTo函数已经触发，但在执行完skipTo函数后还没有跳转到对应位置，因此要延时打开锁。
            var context = this;
            setTimeout(function openLock() {
                context.lock = false;
            },500)
        },

        //功能性函数
        matchSearch(str){
            var t = -1;
            var item;
            
            console.log('here1')
            this.searchResult.data = [];
            for(var i = 0;i<this.list.length;i++){
                for(var j=0;j<this.list[i].data.length;j++){
                    item = this.list[i].data[j];
                    t = item.title.indexOf(str);
                    
                    if(t>-1){
                        // console.log(t)
                        var data = JSON.parse(JSON.stringify(item));
                        // console.log(data)
                        data.title = data.title.slice(0,t)+'|'+str+'|'+data.title.slice(t+str.length)
                        this.searchResult.data.push(data)
                    }
                }
            }
            console.log(this.searchResult)
        },
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
        .hightlight{
            background-color: #f0f0f4;
        }
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
        left: vw(5);
        width: vw(235);
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
        .noSearchInfor{
            position: relative;
            top: vh(30);
        }
        
    }
}


</style>
