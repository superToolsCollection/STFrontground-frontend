<template>
    <div class="containerMain">
        <div class="head">
            <div class="logo"><img src="~assets/img/main/logo.svg" alt=""><span>superTools</span></div>
            <div class="title">
               
                <ul>
                    <li>首页</li>
                    <li>工具主页</li>
                    <li>关于我们</li>
                    <li>用户</li>
                </ul>
                <div class="search" @click="leftPushMenu">
                    <img :src="searchTitle.img" alt=""><span>{{searchTitle.title}}</span>
                </div>                
            </div>
        </div>
        <div class="main">
            <div class="rightMenu" :class="{'rightPushMenu': showSearchMenu}">
                <menu-right></menu-right>
            </div>

            <div class="content" >
                <div class="tools" >
                    <div class="area" v-for="(it, index) in list"  :key="index">
                        <!-- class为setShow的元素存在的意义纯粹是为了让content-main出现在我想看到的地方 -->
                        <div class="setShow" :id= "'area'+index"></div>
                        <content-main :content=it @packUp="packUp('area'+index)" ></content-main>
                    </div>                  
                </div>
            </div>

            
        </div>    
    </div>
</template>

<script>
import menuRight from './childComps/menu/menu.vue'
import contentMain from './childComps/toolsPage/content.vue'

import {mainData} from 'assets/js/data.js' 

import searchImg from 'assets/img/main/search.svg'
import cancleImg from 'assets/img/main/cancle.svg'

// import bgImg from 'assets/img/background.png'

export default{
    components:{
        menuRight,
        contentMain
    },
    data(){
       return {
           showSearchMenu: false,
           searchTitle:{
               img: searchImg,
               title: "搜索"
           },

           tab: "生活日常",

           whereSit:{},

           list: mainData,

           

        }
    },
    computed:{
        
    },
    methods:{
        leftPushMenu: function(){
            if(this.showSearchMenu){
                this.searchTitle.img = searchImg;
                this.searchTitle.title = '搜索';              
            }else{
                this.searchTitle.img = cancleImg;
                this.searchTitle.title = '取消';
            }
            this.showSearchMenu = !this.showSearchMenu;
            // console.log(this.showSearchMenu);
        },
        packUp: function(param){
            console.log("收起")
            console.log(param)
            // this.$refs[param].scrollIntoView();
            // console.log(this.$refs[param])
            // console.log(this.$refs)
            let elem = document.getElementById(param);
            // let height = elem.offsetHeight;
            // console.log(height)
            // elem.scrollTo({top:height})
            // elem.scrollIntoView(true);
            elem.scrollIntoView({behavior: "smooth", block: "start"});

        }
        
        
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.containerMain{
    // background-image: url('~assets/img/background.png');
    // background-color: white;
    // border: 1px solid black;
    position: relative;
    // font-size: 0;
    // padding: 0;
    height: 100%;

    //禁止鼠标多次点击选中div中的文字，参考：https://blog.csdn.net/xiliuhu/article/details/6885749
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    
    .head{
        position: fixed;
        top: 0;
        // border: 1px solid red;
        height: vh(77);
        width: 100%;
        box-sizing: border-box;
        background-color: white;
        // background-color: rgba(#fff,#fff,#fff);
        opacity: 1;
        z-index: 4;
        border-bottom: 1px solid #f0f0f4;
        .logo{
            float: left;
            position: absolute;
            left: vw(55);
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            // border: 1px solid blue;
            height: vh(42);
            text-align: center;
            img{
                float: left;
                height: vh(42);
                width: vw(42);
            }
            span{
                float: left;
                line-height: vh(42);
                font-size: vh(35);
                font-weight: 600;
                color: #50616d;
            }
        }
        
        .title{
            float: right;
            position: absolute;
            // height = calc(percent - vh(value)) 
            @include setAttribute('&',left,100%,500);
            // margin-right: vw(130);
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            // border: 1px solid blue;
            height: vh(23);

            // @include clearFloat;
            ul{
                float: left;
                // background-color: green;
                font-size: 0;
                text-align: center;
                // display: block;
                // border: 1px solid red;
                list-style-type: none;
                padding: 0;

                li{
                    display: inline-block;
                    // width: vw(74);
                    // display: inline;
                    list-style-type: none;
                    // border: 1px solid red;
                    box-sizing: border-box;
                    color: #696969;
                    line-height: vh(23);
                    font-size: vh(18);
                    font-weight: normal;
                    margin-right: vh(40);
                    @include hoverCursor;
                }
                // li:not(:first-child){
                //     margin-left: vw(40);
                // }
            }
            .search{
                float: left;
                box-sizing: border-box;
                @include hoverCursor;

                // border: 1px solid red;
                // display: inline-block;
                img{
                    width: vh(23);
                    height: vh(23);
                    // border: 1px solid green;
                    box-sizing: border-box;
                    float: left;
                    // color: #696969;
                }
                span{
                    color: #696969;
                    line-height: vh(23);
                    font-size: vh(18);
                    font-weight: normal;
                    float: left;
                }
            }
        }
    }

   
    .main{
        position: relative;
        left: vw(0);
        box-sizing: border-box;
        // border: 1px solid yellow;
        width: 100%;
        margin-top: vh(77);
        margin-bottom: vh(80);

        // margin-bottom: vh(80);
        // min-height: vh(840);
        // height: 100%;

        // height: 100%-vh(77);
        // @include changeHeight(&,77);
        
        // 触发BFC
        // overflow: hidden;
        .rightMenu{
            position: fixed;
            z-index: 3;
            top: vh(77);

            right: vw(-374);
            // right: 0;
            width: vw(374);
            // height = calc(percent - vh(value)) 
            @include setAttribute('&',height,100%,77);
            // height: 100%;
            transition: right 0.5s ease; 
            // box-sizing: border-box;
            // border: 1px solid red;
        }
        .rightPushMenu{
            right: 0;
        }



        .content{
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width:vw(1235);
            top: vh(60);
            // 内部进行：height: 100% - vh(180);
            // @include changeHeight('&',208);
            // border: 1px solid blue;
            

            .tools{
                position: relative;
                
                // left: 0;
                // right: 0;
                // top: 0;
                // margin-left: auto;
                // margin-right: auto;
                // margin-bottom: vh(50);
                // border: 1px solid red;
                box-sizing: border-box;
                width:vw(1250);
                // height: vh(580);
                // @include changeHeight(&,50);
                // overflow: hidden;
                .area{
                    position: relative;
                    .setShow{
                        position: absolute;
                        top: vh(-77);
                    }
                    margin-bottom: vh(50);
                    border: 1px solid #e9e7ef;
                    box-shadow: 3px 3px 3px #e9e7ef;
                    border-radius: vh(5);
                    box-sizing: border-box;
                }
               
            }
        }
    }
}

</style>
