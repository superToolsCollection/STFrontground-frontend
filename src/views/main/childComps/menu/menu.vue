<template>
    <div class="containerMenu">
       <div class="input">
           <input type="text" placeholder="搜索" v-model="searchInfor" @input="searchInput">
       </div>
       <div class="side">
            <ul>
               <li v-for="(item,key) in list" :key="key"  @click="skipTo(key)" :class="{'hightlight':(inArea===key)&&(searchState===0)}">{{item.title}}</li>
            </ul>
       </div>
       
       <div class="title">{{listTitle}}</div>
       <!-- 这里不要再将scroll包裹在div内 -->
       <scroll class="show" ref="scroll" @scroll="contentscroll" v-show="searchState===0">
           <div>
               <content-menu class="contentMenu"  v-for="(item,key) in list" :content="item" :key="'menu'+key" ref="list"></content-menu>
           </div>
           <!-- <div :class="{'displayToShow':searchState!=0}">
               <content-menu class="contentMenu" v-for="(item,key) in list" :content="item" :key="'menu'+key" ref="list"></content-menu>
           </div> -->

              
        </scroll>
        <scroll class="show" ref="scrollNew" v-show="searchState!=0">
            <div v-show="searchState===1" class="noSearchInfor">
                没有搜索到任何信息
            </div>
             <!-- 显示搜索结果 -->
            <div v-show ="searchState===2">
                <content-menu :content="searchResult"></content-menu>
            </div> 
        </scroll>
            
    </div>
</template>

<script>
// import {mainContent} from 'assets/js/data.js' 
import contentMenu from './contentMenu.vue'
import Scroll from 'components/scroll/Scroll.vue'
import { setTimeout } from 'timers';


// import {mainData} from 'assets/js/data.js' 

export default{
    created(){       
        // this.matchSearch(this.searchInfor)
        // this.list = this.$store.state.a.contentItem;
        this.list = this.$store.getters.getStatecontentItem;
    },
    mounted(){
        // // 获取组件的高度
        // console.log(this.$refs["list"][0].$el.offsetHeight)
        var sum = 0;
        this.listHeight[0] = 0;
        let marginBottm = 0;
        let dom = document.getElementsByClassName('contentMenu')[0]
        if(dom.currentStyle){
            marginBottm = dom.currentStyle['marginBottom']
        }else {
            marginBottm = getComputedStyle(dom,null)['marginBottom']
        }
        //由于得到的marginBottom是带有'px'单位的字符串，因此这里需要将它转换成float类型
        // console.log(marginBottm.substring(0,marginBottm.length-2))
        marginBottm = parseFloat(marginBottm.substring(0,marginBottm.length-2));


        for(var i=0;i<this.$refs["list"].length;i++){
            //this.$refs["list"][i].$el.offsetHeight 获取组件的高度
            sum += this.$refs["list"][i].$el.offsetHeight + marginBottm;
            // console.log(this.$refs["list"][i].$el.marginBottom)

            this.listHeight[i+1] = sum;
        }
        //因为最后一个contentMenu的高度是不包括margin-bottom的
        this.listHeight[this.listHeight.length-1] -= marginBottm;

        
    },
    components:{
        contentMenu,
        Scroll
    },
    data(){
       return {
        //    list: this.$store.contentItem,
            list:[],

           listHeight:[],
           //表示现在滚动到哪个data所在的区域
           inArea:0,
           position:0,

           //在使用scrollTo跳转过程中锁住scroll事件的响应函数。
           lock: false,

           searchInfor:'',
           searchResult: {
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
            },

        }
    },
    computed:{
        //搜索状态，0不进行搜索，1进行搜索但没搜索到任何值，2搜索到值
        searchState(){
            if(this.searchInfor.length===0){
                return 0;
            }else if(this.searchResult.data.length===0){
                return 1;
            }else{
                return 2;
            }
        },
        listTitle(){
            if(this.searchState===0){
                return this.list[this.inArea].title;
            }else {
                return "搜索结果"
            }

        }
    },
    methods:{
        contentscroll(position){
            if(this.searchState===0){
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
            }
        },
        skipTo(index){
            if(this.searchState===0){
                this.inArea = index;
                this.lock = true;
                this.$refs.scroll.scrollTo(0,-this.listHeight[index]);
                //一定要设置setTimeout, 虽然.scrollTo函数已经触发，但在执行完skipTo函数后还没有跳转到对应位置，因此要延时打开锁。
                var context = this;
                setTimeout(function openLock() {
                    context.lock = false;
                },500)
            }
            
        },

        //输入框输入值发生改变
        searchInput(){
            console.log('searchInfor',this.searchInfor)
            if(this.searchInfor){
                this.searchResult.data = this.$store.getters.getSearchResult(this.searchInfor)                 
                this.$refs.scrollNew.scrollTo(0,0,0);                
            }
            else{
                this.searchResult.data = [];
                // this.$refs.scroll.scrollTo(0,this.position,0);
            }
            this.searchResult.searchInfor = this.searchInfor;
            this.$refs.scrollNew.refresh();
            // console.log(this.inArea)
            // console.log('where',this.$refs.scroll.getScrollY())
        },
    },
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
        z-index: 2;
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
        width: vw(195);
        // @include setAttribute('&',height,100%,60);
        text-align: center;
        font-size: vh(15);
        line-height: vh(25);
        overflow: hidden;
        opacity: 1;
        z-index: 1;

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
        // .displayToShow{
        //     // display:none
        //     height: 0;
        // }
        
    }
}


</style>
