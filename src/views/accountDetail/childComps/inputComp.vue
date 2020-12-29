<template>
    <div class="inputInfor">
        <div class="title">用户名</div>
        <!-- <span class="title">用户名</span> -->
        <div class='inputInfor'><input type="text" placeholder="输入您的用户名"></div>
    </div>
</template>
<script>
export default{
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
.inputInfor{
    position: relative;
    width: 100%;
    height: 100%;
    .title{
        float: left;
        position:absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;

        width: 8%;
        height: 56.7%;
        color: rgba(51, 51, 51, 100);
        font-size: vh(14);
        text-align: center;
        // 清浮动, 父元素计算高度时也把子元素的高度算进去
        @include clearFloat;
        border: 1px solid red;
    }
    .inputInfor{
        float: right;
        position: relative;
        width: 83%;
        height: 100%;
        // line-height: vh(20);
        line-height: 54%;
        // 清浮动, 父元素计算高度时也把子元素的高度算进去
        @include clearFloat;
        input{

            box-sizing:border-box;
            padding: vh(9) vh(16) vh(8) vh(18);

            background-color: #F5F5F5;
            // background-color:#B6B6B6 100%;
            border: vh(1) solid rgba(153, 153, 153, 100);
            
            border-radius: vh(4);

            width: 100%;
            height: 100%;
            color: rgba(51, 51, 51, 100 );
            font-size: vh(14);
            text-align: left;

            outline: none;
        }
    }

}
</style>
