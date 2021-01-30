<template>
    <div class="pwContainer">
        <div class="pwTitle " :class="{'Title': pwTriger}" @click="pwVfTrig(true)">密码登录</div>
        <div class="vfTitle" :class="{'Title': !pwTriger}" @click="pwVfTrig(false)">验证码登录</div>

        <div class="pw" v-show="pwTriger">
            <div class="account" :class="{'accTag': accTag,'alertAccWrong':alertAccWrong}">
                <input class="aInput" type="text" placeholder="手机号/账号" v-model="account">
            </div>
            <div class="password" :class="{'pwTag': pwTag,'alertPwWrong':alertPwWrong}">
                <input class="pwInput" :type="pwInputType" placeholder="密码" v-model="password">
                <img :src="pwImg" alt="" @click="showPw^=true">
            </div>
        </div>

        <div class="vf" v-show="!pwTriger">
            <div class="phone" :class="{'phTag': phTag,'alertPhWrong':alertPhWrong}">
                 <input class="phInput" type="text" placeholder="手机号" v-model="phone">
            </div>
            <div class="vfNum" :class="{'vfTag': vfTag,'alertVfWrong':alertVfWrong}">
                <input class="vfInput"  type="text" placeholder="验证码" v-model="vfNum">
                <button :disabled="vfActive" @click="waitVf">{{showVfTrigger}}</button>
            </div>
        </div>

        <div class="fgpw" @click="toResetPs">忘记密码</div>
        <button class="login" :disabled="logActive" @click="login">登录</button>
        <div class="textShow">
            <span class="txt1" >没有账号？</span>
            <a class="txt2" @click="toSignUp">立即注册</a>
        </div>
    </div>
</template>
<script>
import ClosedEye from "assets/img/sigin/closed-eye.svg"
import OpenEye from "assets/img/sigin/open-eye.svg"


export default{
    data(){
        return {
            //控制，当前显示的是密码登录界面，还是验证码登录界面
            pwTriger: true,
            //控制，密码登录界面，是否显示密码
            showPw: false,

           

            waitVfTime: 0,
            //验证码登录界面，验证码按钮计时器
            timeWhile:'',


            //密码登录界面，账号与密码
            account:'',
            password:'',
            //验证码登录界面，手机号与验证码
            phone:'',
            vfNum:'',
        }
    },
    computed:{
        //在密码登录界面，是否显示密码对应的图标
        pwImg: function(){
            return this.showPw? OpenEye: ClosedEye;
        },
        //密码登录界面，是否显示密码
        pwInputType: function(){
            return this.showPw? 'text': 'password';
        },
        //密码登录界面，是否显示输入提示信息
        accTag: function () {
            return this.account.length==0? false: true;
        },
        pwTag: function () {
            return this.password.length==0? false: true;
        },
        //验证码登录界面，是否显示输入提示信息
        phTag: function () {
            return this.phone.length==0? false: true;
        },
        vfTag: function () {
            return this.vfNum.length==0? false: true;
        },

        //密码登录界面显示账号错误提醒信息
        alertAccWrong: function () {
            return ((this.account.length!=0)&&!(this.account.length>1))?true:false;
        }, 
        //密码登录界面显示密码错误提醒信息
        alertPwWrong: function () {
            return ((this.password.length!=0)&&!(this.password.length>1))?true:false;
        }, 

        //验证码登录界面显示电话错误提醒信息
        alertPhWrong: function () {
            return ((this.phone.length!=0)&&!(/^1[3456789]\d{9}$/.test(this.phone)))?true:false;
        },
        //验证码登录界面显示验证码错误提醒信息
        alertVfWrong: function () {
            return ((this.vfNum.length!=0)&&!(this.vfNum.length>1))?true:false;
        }, 
        

        //是否激活登录按钮
        logActive:function () {
            return (this.account.length!=0&&this.password.length!=0)||(this.phone.length!=0&&this.vfNum.length!=0)? false: true;
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

        //控制，转到密码登录界面，还是验证码登录界面
        pwVfTrig:function(pwTriger){
            this.pwTriger = pwTriger;
            if(pwTriger){
                this.vfNum = '';
                this.phone = '';
            }else{               
                this.account = '';
                this.password = '';
            }
        },

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
        toSignUp:function () {
            this.$router.push('/sign/signUp')
        },
        toResetPs:function () {
            this.$router.push('/sign/resetPs')
        },
        // 若登陆成功跳转到主页main
        login:function(){
            this.$router.push('/main/home')
        }
        
        
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
    .pwContainer{
        height: 100%;
        width: 100%;
        // border: 2px solid red;
        box-sizing: border-box;
        font-family: NotoSerifSC-Regular;

        .pwTitle,.vfTitle{
            width: vw(130);
            height: vh(27);
            

            font-size: vh(20);
            text-align: center;
            color: rgba(153, 153, 153, 100);
            font: NotoSerifSC-Regular;
            @include hoverCursor;
        }

        
        .pwTitle{
            position: absolute;
            top: vh(122);
            left: vw(120);
            
            
        }

        .vfTitle{
            position: absolute;
            top: vh(122);
            right: vw(122);
        }

        .Title{
            color: rgba(16, 16, 16, 100);
            @include hoverCursor($cursor:auto);
            &:after{
                content: '';
                position: absolute;
                bottom: vh(-5);
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right:auto;
                background-color: rgba(3, 187, 122, 100);;
                width: 45%;
                height: vh(2);
            }  
        }

        .pw{
            position: absolute;
            top: vh(211);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            height: vh(108);
            width: vw(380);

            text-align: center;

            font-size: vh(16);
            font-family: NotoSerifSC-Regular;

            // 设置input标签的占位符的颜色
            @include placeholder-color( "input",rgba(153, 153, 153, 100));

            // border: 1px solid red;

            .account,.password{
                position: relative;             
                box-sizing: border-box;
                width: 100%;
                height: vh(36);
            }
            .aInput,.pwInput{
                border-top-style: none;
                border-right-style: none;
                border-left-style: none;
                border-bottom-color: rgba(212, 217, 226, 100);
                border-bottom-width: vh(1);
                outline: none;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
            }

           

            .password{
                margin-top: vh(36);
                // text-align: center;
                .pwInput{
                    padding-right: vw(24);
                }
                img{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    // border: 1px solid red;
                    width: vw(24);
                    height: vh(24);
                    @include hoverCursor;
                }
            }

            .accTag::before{                                    
                position: absolute;
                top: vh(-18);
                left: 0;
                height: vh(18);

                color: rgba(153, 153, 153, 100);;

                font-size: vh(12);
                line-height: vh(18);
                text-align: left;
                font-family: NotoSerifSC-Regular;

                content: '手机号/账号';
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

            @include alertWrong('.alertAccWrong','.aInput','请输入正确的手机号/账号');
            @include alertWrong('.alertPwWrong','.pwInput','请输入正确的密码');
            

            

          
        }

        .vf{
            position: absolute;
            top: vh(211);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            height: vh(108);
            width: vw(380);
            // border: 1px solid red;

            text-align: center;

            font-size: vh(16);
            font-family: NotoSerifSC-Regular;

            // 设置input标签的占位符的颜色
            @include placeholder-color( "input",rgba(153, 153, 153, 100));

            // border: 1px solid red;

            .phone,.vfNum{
                position: relative;             
                box-sizing: border-box;
                width: 100%;
                height: vh(36);
            }
            
            .phInput,.vfInput{
                border-top-style: none;
                border-right-style: none;
                border-left-style: none;
                border-bottom-color: rgba(212, 217, 226, 100);
                border-bottom-width: vw(1);
                outline: none;

            }

            .phInput{
                width: 100%;
                height: vh(36);
                box-sizing: border-box;
            }

            .vfNum{
                margin-top: vh(36);
                // text-align: center;
                .vfInput{
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding-right: vh(104);
                    text-align: left;
                }
                button{
                    position: absolute;
                    right: 0;
                    bottom: vh(10);
                    // border: 1px solid red;
                    box-sizing: border-box;
                    width: vw(104);
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

            @include alertWrong('.alertPhWrong','.phInput','请输入正确的手机号');
            @include alertWrong('.alertVfWrong','.vfInput','请输入正确的验证码');
        }


        .fgpw{
            position: absolute;
            top: vh(340);
            right: vw(71) ;
            // width: vh(48);
            height: vh(18);
            font-size: vh(12);
            text-align: left;
            font-family: NotoSerifSC-Regular;
            color: rgba(102, 102, 102, 100);
            @include hoverCursor;
        }
        .login{
            position: absolute;
            top: vh(394);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: vw(380);
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

