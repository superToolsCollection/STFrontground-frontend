<template>
    <div class="container">
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
        </div>    
    </div>
</template>

<script>
import menuLeft from './childComps/menu.vue'
import mnImg from 'assets/img/main/menu.svg'

// import bgImg from 'assets/img/background.png'

export default{
    components:{
        menuLeft
    },
    data(){
       return {
           menuImg: mnImg,

           showMenu: false,
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

.container{
    background-image: url('~assets/img/background.png');
    // background-color: white;
    // border: 1px solid black;
    position: relative;
    font-size: 0;
    // padding: 0;
    .head{
        border: 1px solid red;
        height: vh(77);
        width: 100%;
        .logo{
            float: left;
            margin-left: 3%;
            margin-top: 0.98%;
            border: 1px solid blue;
            height: 52%;
            width: 10%;
            img{
                height: 100%;

            }

        }
        box-sizing: border-box;
        .title{
            ul>li{
                color: white;
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

        transition: left 1s ease; 
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

            transition: left 1s ease; 

        }
        .leftPushMenuImg{
            left: vw(458);
        }
    }
}

</style>
