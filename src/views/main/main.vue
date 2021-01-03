<template>
    <div class="container">
        <div class="head"></div>
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
    // border: 1px solid black;
    position: relative;
    font-size: 0;
    // padding: 0;
    .head{
        border: 1px solid red;
        height: vh(51);
        width: 100%;
        box-sizing: border-box;
    }

    .leftMenu{
        z-index: 2;
        position: absolute;
        top: vh(51);
        left: vw(-374);
        width: vw(374);
        height: vh(945);

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
        height: vh(945);
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
