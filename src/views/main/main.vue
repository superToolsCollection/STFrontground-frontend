<template>
    <div class="containerMain">
        <div class="head">
            <div class="logo"><img src="~assets/img/sigin/tab.png" alt=""><span>superTools</span></div>
            <div class="title">
                <ul>
                    <li>首页</li>
                    <li>superTools</li>
                    <li>服务范围</li>
                    <li>资讯中心</li>
                    <li>关于</li>
                    <li>用户</li>
                </ul>
            </div>
        </div>
        
        <div class="main" :style="{height: 260+height+'px'}">
            <div class="leftMenu" :class="{'leftPushMenu': showMenu}">
                <menu-left></menu-left>
            </div>
            <img :src="menuImg" alt="" :class="{'leftPushMenuImg': showMenu}" @click="leftPushMenu">
            <div class="search">
                <input type="text">
            </div>
            <div class="content" :style="{height: 50+height+'px'}">
                <div class="contentTitle">
                    <ul>
                        <li>全部</li>
                        <li>生活日常</li>
                        <li>辅助办公</li>
                        <li>教育学习</li>
                        <li>图片视频</li>
                        <li>程序开发</li>
                    </ul>
                </div>
                <span>{{tab}}</span>
                <div class="tools" :style="{height: height+'px'}">
                    <content-main :list="showContent"></content-main>
                    <div class="showMore" @click="showMore">加载更多</div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import mnImg from 'assets/img/main/menu.svg'

import menuLeft from './childComps/menu.vue'
import contentMain from './childComps/content.vue'

import {mainItem} from 'assets/js/data.js' 

// import bgImg from 'assets/img/background.png'

export default{
    components:{
        menuLeft,
        contentMain
    },
    data(){
       return {
           menuImg: mnImg,

           showMenu: false,

           tab: "生活日常",

           list: mainItem,

           showLength: 16,

           height: 4*145,

        }
    },
    computed:{
        showContent:function () {
            // console.log(this.list.length)

            if(this.list.length>this.showLength){
                return this.list.slice(0,this.showLength);
            }else {
                return this.list;
            }    
        },
    },
    methods:{
        leftPushMenu: function(){
            this.showMenu = !this.showMenu;
            console.log(this.showMenu);
        },
        showMore: function(){
            console.log(this.list.length)
            if(this.showLength+16<=this.list.length){
                this.showLength = this.showLength + 16;
            } else if( this.showLength != this.list.length){
                this.showLength = this.list.length
            }
            this.height =  this.showLength/4*145
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
    .head{
        position: relative;
        border: 1px solid red;
        height: vh(77);
        width: 100%;
        box-sizing: border-box;
        .logo{
            float: left;
            position: absolute;
            left: vw(55);
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            border: 1px solid blue;
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
            }
        }
        
        .title{
            float: right;
            position: absolute;
            right: vw(130);
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            // border: 1px solid blue;
            height: vh(42);

            // @include clearFloat;
            ul{
                // background-color: green;
                font-size: 0;
                text-align: center;
                display: block;
                // border: 1px solid red;
                list-style-type: none;
                padding: 0;

                li{
                    display: inline-block;
                    width: vw(74);
                    // display: inline;
                    list-style-type: none;
                    // border: 1px solid red;
                    // color: ;
                    line-height: vh(42);
                    font-size: vh(15);
                    font-weight:normal;
                }
                li:not(:first-child){
                    margin-left: vw(70);
                }
            }
        }
    }

   
    .main{
        position: relative;
        left: vw(0);
        box-sizing: border-box;
        border: 1px solid yellow;
        width: 100%;
        height: vh(810);
        // 触发BFC
        // overflow: hidden;
        .leftMenu{
            z-index: 2;
            position: absolute;
            top: 0;
            left: vw(-374);
            width: vw(374);
            height: 100%;
            transition: left 0.5s ease; 
            box-sizing: border-box;
            border: 1px solid red;
        }
        .leftPushMenu{
            left: 0;
        }

        img{
            position: absolute;
            left: vw(84);
            top: vh(43);
            width: vw(24);
            height: vh(24);

            transition: left 0.5s ease; 

        }
        .leftPushMenuImg{
            left: vw(458);
        }

        .search{
            position: absolute;
            left: 0;
            right: 0;
            top: vh(100);
            margin-left: auto;
            margin-right: auto;
            width: vw(950);
            height: vh(50);
            // border: 1px solid red;
            box-sizing: border-box;
            input{
                width: 100%;
                height: 100%;
                box-sizing: border-box;
            }
        }

        .content{
            position: absolute;
            left: 0;
            right: 0;
            top: vh(180);
            margin-left: auto;
            margin-right: auto;
            width:vw(1235);
            height: vh(630);
            border: 1px solid blue;
            .contentTitle{
                position: absolute;
                right: vw(0);
                // border: 1px solid blue;
                top: vh(12);
                height: vh(20);
                // @include clearFloat;
                ul{
                    // background-color: green;
                    font-size: 0;
                    text-align: center;
                    display: block;
                    // border: 1px solid red;
                    list-style-type: none;
                    padding: 0;
                    li{
                        display: inline-block;
                        width: vw(74);
                        // display: inline;
                        list-style-type: none;
                        // color: white;
                        line-height: vh(20);
                        font-size: vh(15);
                        font-weight:normal;
                    }
                    li:not(:first-child){
                        margin-left: vw(35);
                    }
                }
            }
            
            span{
                display: block;
                position: absolute;
                top: vh(-4);
                margin-top: 0;
                padding: 0;
                left: vw(18);
                font-size: vh(25);
                font-weight: 720;

            }
            .tools{
                position: absolute;
                left: 0;
                right: 0;
                top: vh(50);
                margin-left: auto;
                margin-right: auto;
                border: 1px solid red;
                box-sizing: border-box;
                width:vw(1250);
                height: vh(580);
                // overflow: hidden;
                .showMore{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    bottom: 0;
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
        }
    }
}

</style>
