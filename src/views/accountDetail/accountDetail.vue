<template>
<div class="accountDetail">
    <div class="title"><span>账号资料</span></div>
    <div class="inforDetail">
        <div class="inputComps">
            <div class="container"><input-comp></input-comp></div>
            <div class="end"></div>
        </div>
        <div class="profileImg"><img></div>
        <button class="ensure">确定</button>
        <button class="cancle">取消</button>
    </div>
    <div class="changePs"> </div>
</div>
</template>
<script>
import inputComp from './childComps/inputComp.vue'
export default{
    components:{
        inputComp
    },
    data(){
       return {
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
.accountDetail{
    height: vh(1400);
    .title{
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: vh(115);

        span{
            display: inline-block;
            position: relative;
            right: vh(411);
            width: vh(122);
            height: vh(56);
            color: rgba(16,16,16,100);
            font-size: vh(24);
            text-align: left;
            font-weight: bold;
        }
    }
    .inforDetail{
        &::before{
            content: '基本资料';
            position: absolute;
            top: vh(-24);
            left: 0;
            width: vh(63);
            height: vh(20);

            color: rgba(51, 51, 51, 100);
            font-size: vh(14);

           }
        position: absolute;
        top: vh(200);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: vh(944);
        height: vh(492);
        // border: 1px solid red;
        box-sizing: border-box;

        border-radius: vh(10);
        color: rgba(16,16,16,100);
        box-shadow: 0 vh(2) vh(10) 0 rgba(0,0,0,0.1);

        .inputComps{
            position: absolute;
            top: vh(63);
            left: vh(58);
            width: vh(562);
            height: vh(303);
            border: 1px solid red;

            .container{
                height: vh(37);
                width: 100%;
            }

           

            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba(3, 187, 122, 100);;
                width: vh(562);
                border: vh(1) solid rgba(243,243,243,100);
            }

        }
        .profileImg{
            position: absolute;
            top: vh(116);
            left: vh(675);
            width: vh(227);
            height: vh(203);
            border: 1px solid red;
        }
        .ensure,.cancle{
            line-height: vh(20);
            border-radius: vh(4);
            text-align: center;
            font-size: vh(18);
            border: 1px solid rgba(153, 153, 153, 100);
        }
        .ensure{
            position: absolute;
            top: vh(401);
            left: vh(155);
            width: vh(76);
            height: vh(38);

            
            background-color: rgba(57, 109, 248, 100);           
            color: rgba(255, 255, 255, 100);           
        }
        .cancle{
            position: absolute;
            top: vh(401);
            left: vh(296);
            width: vh(76);
            height: vh(38);

            background-color: rgba(255, 255, 255, 100);
            color: rgba(51, 51, 51, 100);
        }
        
    }
    .changePs{
        position: absolute;
        top: vh(817);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: vh(944);
        height: vh(389);
        border: 1px solid red;
        box-sizing: border-box;
    }
}

</style>
