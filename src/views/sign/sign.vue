<template>
    <div class="container">
        <wave ref="signRef1"></wave>
        <wave ref="signRef2"></wave>
        <wave ref="signRef3"></wave>
        <div class="tab">
            <img class="tab1">
            <span class="tab2">superTools</span>
        </div>
        <div class="main-container">
            <div class="left">
                <div class="title">superTools</div>
                <img class="img" alt="" src = "~assets/img/sigin/ride.png">
            </div>
            <div class="right">
                <!-- <sign-in v-if="IUF===1"></sign-in> -->
                <!-- <sign-up></sign-up> -->
                <!-- <re-set-ps></re-set-ps> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// // import signIn from './childComps/signIn.vue'
// // import signUp from './childComps/signUp.vue'
// import reSetPs from './childComps/reSetPs.vue'
import wave from 'components/canvsWave/wave.vue'
export default{
    // components:{
    //     signIn,
    //     signUp,
    //     reSetPs
    // },
    mounted(){
        setTimeout(()=>{
            this.$refs.signRef1.setColor("rgba(127,255,212,0.3)")
            this.$refs.signRef2.setColor("rgba(240,230,140,0.3)")
            this.$refs.signRef3.setColor("rgba(144,238,144,0.3)")
        })
    },
    components:{
        wave
    },
    data(){
       return {
        //    IUF:2
       }
    },
    computed:{
    },
    methods:{
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.container{
    // border: 1px solid red;
    position: relative;
    .tab{
        display: inline-block;
        position: relative;
        top: vh(120);
        height: vh(42);
        right:  vw(500);

        .tab1 {
            content: url("~assets/img/sigin/tab.png");
            overflow: hidden;
            height: vh(41);
            width: vw(41);
            background-size: vh(41);
            // height: 300px;
            // width: 300px;
            // border: 1px solid red;
        }
        .tab2{
            display: inline-block;
            width: vh(139);
            height: vw(35);
            overflow: hidden;
            line-height: vh(35);

            color: rgba(102, 102, 102, 100);
            font-size: vh(22);
            text-align: left;
            font-family: Langar-Regular;
            // border: 1px solid red;
        }
    }
    
    .main-container{
        position: absolute;
        left: 0;
        top: vh(237);
        right: 0;
        margin-left: auto;
        margin-right: auto;

        width: vw(1000);
        height: vh(550);
        
        // border: 1px solid blue;

        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.07);
        border: 1px solid rgba(255, 255, 255, 100);

        .left{
            display: inline-block;
            position: relative;
            width: 50%;
            height: 100%;
            box-sizing: border-box;

            border-radius: vh(4) 0 0 vh(4);
            // border: 1px solid rgba(255,255,255,100);
            box-shadow: 0 vh(2) vh(6) 0;
            background-color: rgba(3, 187, 122, 100);
            // 触发BFC
            overflow: hidden;

            text-align: center;

            .title{
                position: absolute;
                top: vh(85);
                left: vh(145);
                font-size: vh(30);
                text-align: left;
                font-family: Langar-Regular;
                color: rgba(255,255,255,100);
            }
            .img{
                position: absolute;
                top: vh(164);
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                width: vh(435);
                height: vh(338);
                // border: 1px solid red;
            }
        }
        .right{
            display: inline-block;
            position: relative;
            background-color: rgba(255, 255, 255, 100);
            left: 0;
            width: 50%;
            height: 100%;
            // border: 3px solid yellow;
            box-sizing: border-box;
            // 触发BFC
            overflow: hidden;

        }
    }
}

</style>
