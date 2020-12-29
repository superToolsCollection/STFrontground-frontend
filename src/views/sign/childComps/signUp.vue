<template>
    <div class="upContainer">
        <div class="Title">
            <div class="txt">免费注册</div>
        </div>

        <div class="center">
            <div class="phone" :class="{'phTag': phTag,'alertPhWrong':alertPhWrong}">
                 <input class="phInput" type="text" placeholder="手机号" v-model="phone">
            </div>
            <div class="vfNum" :class="{'vfTag': vfTag,'alertVfWrong':alertVfWrong}">
                <input class="vfInput"  type="text" placeholder="验证码" v-model="vfNum">
                <button :disabled="vfActive" @click="waitVf">{{showVfTrigger}}</button>
            </div>
            <div class="password" :class="{'pwTag': pwTag,'alertPwWrong':alertPwWrong}">
                <input class="pwInput" :type="pwInputType" placeholder="设置密码：6-16位字符，包含字母和数字" v-model="password">
                <img :src="pwImg" alt="" @click="showPw^=true">
            </div>
        </div>

        <div class="rule">
            <input type="checkbox" id="read" value="read">
            <label for="read"> 我已阅读</label>
            <span>《##服务协议》</span>
            <span>《隐私协议》</span>
        </div>
        <button class="login" :disabled="logActive">注册账号</button>
        <div class="textShow">
            <span class="txt1">已有账号？</span>
            <a class="txt2" @click="toSignIn">马上登陆</a>
        </div>
    </div>
</template>
<script>
import ClosedEye from "assets/img/sigin/closed-eye.svg"
import OpenEye from "assets/img/sigin/open-eye.svg"


export default{
    data(){
        return {
            waitVfTime: 0,
            //验证码按钮计时器
            timeWhile:'',
            showPw:false,

            phone:'',
            vfNum:'',
            password:'',
        }
    },
    computed:{


        //是否显示密码对应的图标
        pwImg: function(){
            return this.showPw? OpenEye: ClosedEye;
        },
        //是否显示密码
        pwInputType: function(){
            return this.showPw? 'text': 'password';
        },
       
        //是否显示输入提示信息
        phTag: function () {
            return this.phone.length==0? false: true;
        },
        vfTag: function () {
            return this.vfNum.length==0? false: true;
        },
        pwTag: function () {
            return this.password.length==0? false: true;
        },


        //显示电话错误提醒信息
        alertPhWrong: function () {
            return ((this.phone.length!=0)&&!(/^1[3456789]\d{9}$/.test(this.phone)))?true:false;
        },
        //显示验证码错误提醒信息
        alertVfWrong: function () {
            return ((this.vfNum.length!=0)&&!(this.vfNum.length>1))?true:false;
        }, 
        //显示密码错误提醒信息
        alertPwWrong: function () {
            return ((this.password.length!=0)&&!(this.password.length>1))?true:false;
        },


        //是否激活注册按钮
        logActive:function () {
            return (this.phone.length!=0&&this.vfNum.length!=0&&this.password.length!=0)? false: true;
        },
        //验证码登录界面是否激活发送验证码按钮
        vfActive:function () {
            if(!(/^1[3456789]\d{9}$/.test(this.phone))||  this.waitVfTime!=0){
                return true
            }else {
                return false
            }
        },
        //验证码登录界面发送验证码按钮显示的内容
        showVfTrigger:function () {
            return this.waitVfTime==0?"获取验证码":this.waitVfTime;
        }
            

    },
    methods:{

        // 验证码登录界面，控制发送验证码按钮倒计时
        waitVf: function(){
            this.waitVfTime = 5;
            var text = this;
             this.timeWhile = setInterval(()=>{
                text.waitVfTime--;
                if(text.waitVfTime==0){
                    clearInterval(text.timeWhile)
                }
            },1000)    
        },
        toSignIn:function () {
            this.$router.push('/sign/signIn')
        }   
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
    .upContainer{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        font-family: NotoSerifSC-Regular;
        position: relative;


        .Title{
            position: absolute;           
            right: 0;
            left: 0;
            margin-left: auto;
            margin-right: auto;

            
            top: vh(58);
            width: vh(380);
            height: vh(62);

            text-align: center;
            font-size: vh(18);
            text-align: center;
            color: rgba(16, 16, 16, 100);
            font: NotoSerifSC-Regular;


            .txt{
                line-height: vh(62);
                height: vh(62);
            }

            .txt:after{
                content: '';
                position: absolute;
                bottom: vh(4);
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right:auto;
                background-color: rgba(3, 187, 122, 100);
                width: 11%;
                height: vh(2);
                text-align: center;
            }  
        }

        .center{
            position: absolute;
            top: vh(159);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            height: vh(180);
            width: vh(380);
            // border: 1px solid red;

            text-align: center;

            font-size: vh(14);
            font-family: NotoSerifSC-Regular;

            // 设置input标签的占位符的颜色
            @include placeholder-color( "input",rgba(153, 153, 153, 100));

            // border: 1px solid red;

            .phone,.vfNum,.password{
                position: relative;             
                box-sizing: border-box;
                width: 100%;
                height: vh(36);
                // border: 1px solid red;
            }
            
            .phInput,.vfInput,.pwInput{
                border-top-style: none;
                border-right-style: none;
                border-left-style: none;
                border-bottom-color: rgba(212, 217, 226, 100);
                border-bottom-width: vh(1);
                outline: none;

                width: 100%;
                height: 100%;
                box-sizing: border-box;


            }

            .vfNum{
                margin-top: vh(36);
                // text-align: center;
                .vfInput{
                    padding-right: vh(104);
                    text-align: left;
                }
                button{
                    position: absolute;
                    right: 0;
                    bottom: vh(10);
                    // border: 1px solid red;
                    box-sizing: border-box;
                    width: vh(104);
                    height: vh(36);
                    font-size: vh(12);
                    text-align: center;
                    line-height: vh(17);
                    border-radius: vh(28);
                    background-color: rgba(255, 255, 255, 100);
                    color: rgba(3, 187, 122, 100);
                    border: vh(1) solid rgba(3, 187, 122, 100);
                    outline: none;
                    @include hoverCursor;
                    &:disabled{
                        background: #ccc;
                        color: #ccc;
                        border-color: #ccc;
                        color: rgba(255, 255, 255, 100);
                    }
                }
            }

            .password{
                margin-top: vh(36);
                // text-align: center;
                .pwInput{
                    padding-right: vh(24);
                }
                img{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    // border: 1px solid red;
                    width: vh(24);
                    height: vh(24);
                    @include hoverCursor;
                }
            }

            .phTag::before{                                    
                position: absolute;
                top: vh(-18);
                left: 0;
                height: vh(18);

                color: rgba(153, 153, 153, 100);;

                font-size: vh(12);
                line-height: vh(18);
                text-align: left;
                font-family: NotoSerifSC-Regular;

                content: '手机号';
            }

            .vfTag::before{
                position: absolute;
                top: vh(-18);
                left: 0;
                height: vh(18);

                color: rgba(153, 153, 153, 100);

                font-size: vh(12);
                line-height: vh(18);
                text-align: left;
                font-family: NotoSerifSC-Regular;

                content: '验证码';
            }

            .pwTag::before{
                position: absolute;
                top: vh(-18);
                left: 0;
                height: vh(18);

                color: rgba(153, 153, 153, 100);

                font-size: vh(12);
                line-height: vh(18);
                text-align: left;
                font-family: NotoSerifSC-Regular;

                content: '密码';
            }

            @include alertWrong('.alertPhWrong','.phInput','请输入正确的手机号格式');
            @include alertWrong('.alertVfWrong','.vfInput','请输入正确的验证码');
            @include alertWrong('.alertPwWrong','.pwInput','请输入正确的密码格式');
        }

        .rule{
            position: absolute;
            top: vh(351);
            right: 0;
            left: 0;
            margin-right: auto;
            margin-left: auto;
            width: vh(380);
            box-sizing: border-box;
            font-size: vh(12);
            text-align: left;
            font-family: NotoSerifSC-Regular;
            color: rgba(102, 102, 102, 100);
            line-height: vh(18);

            &:nth-child(n){
                float: left;
                height: vh(18);
            }
           
            input{
                height: vh(12);
                width: vh(12);
            }
            span{
                display: inline-block;
                color: rgba(153, 153, 153, 100);
                color: rgba(3, 187, 122, 100);
                @include hoverCursor;
            }

            // 清浮动, 父元素计算高度时也把子元素的高度算进去
            @include clearFloat;

        }
        .login{
            position: absolute;
            top: vh(394);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: vh(380);
            height: vh(56);

            line-height: vh(23);
            border-radius: vh(28);
            background-color: rgba(3, 187, 122, 100);
            color: rgba(255, 255, 255, 100);
            font-size: vh(16);
            text-align: center;
            font-family: NotoSerifSC-Regular;
            border: vh(1) solid rgba(255, 255, 255, 100);

            outline: none;
            @include hoverCursor;

            &:disabled{
                background: #ccc;
            }

           


        }

        .textShow{
            position: absolute;
            top: vh(468);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            // width: vh(110);
            height: vh(18);

            color: rgba(102, 102, 102, 100);
            font-size: 0;
            text-align: center;
            font-family: NotoSerifSC-Regular;

            .txt1{
                font-size: vh(12);
                text-align: left;
            }
            .txt2{
                font-size: vh(12);
                text-align: left;
                color: rgba(3, 187, 122, 100);
                @include hoverCursor;
            }
        }
    }
</style>

