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
        <div class="leftMenu" :class="{'leftPushMenu': showMenu}">
            <menu-left></menu-left>
        </div>
        <div class="main">
            <img :src="menuImg" alt="" :class="{'leftPushMenuImg': showMenu}" @click="leftPushMenu">
            <div class="search">
                <input type="text">
            </div>
            <div class="content">
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
                <div class="tools">
                    <content-main></content-main>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import mnImg from 'assets/img/main/menu.svg'

import menuLeft from './childComps/menu.vue'
import contentMain from './childComps/content.vue'

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
       }
    },
    computed:{
    },
    methods:{
        leftPushMenu: function(){
            this.showMenu = !this.showMenu;
            console.log(this.showMenu);
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

    .leftMenu{
        z-index: 2;
        position: absolute;
        top: vh(77);
        left: vw(-374);
        width: vw(374);
        height: vh(849);

        transition: left 0.5s ease; 
        box-sizing: border-box;
        border: 1px solid red;
    }
     .leftPushMenu{
        left: 0;
    }
    .main{
        position: relative;
        left: vw(0);
        box-sizing: border-box;
        border: 1px solid red;
        width: 100%;
        height: vh(849);
        // 触发BFC
        overflow: hidden;
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
            width:vw(1250);
            height: vh(600);
            // border: 1px solid red;
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
                // border: 1px solid red;
                box-sizing: border-box;
                width:vw(1250);
                height: vh(600);
                overflow: hidden;
            }
        }
    }
}

</style>
