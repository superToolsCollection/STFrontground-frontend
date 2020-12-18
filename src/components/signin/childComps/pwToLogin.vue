<template>
    <div class="pwContainer">
        <div class="pwTitle">密码登录</div>
        <div class="vfTitle">验证码登录</div>

        <div class="pw" v-show="pwTriger">
            <input class="account" type="text" placeholder="手机号/账号">
            <div class="password">
                <input class="pwInput" type="password" placeholder="密码">
                <img :src="pwImg" alt="">
            </div>
        </div>

        <div class="vf" v-show="!pwTriger">
            <input class="phone" type="text" placeholder="手机号">
            <div class="vfNum">
                <input class="vfInput" type="text" placeholder="验证码">
                <button>获取验证码</button>
            </div>
        </div>

        <div class="fgpw">忘记密码</div>
        <button class="login">登录</button>
        <div class="textShow">
            <span class="txt1">没有账号？</span>
            <a class="txt2">立即注册</a>
        </div>
    </div>
</template>
<script>
import zeClosedEye from "assets/img/sigin/ze-closed-eye.svg"

export default{
    data(){
       return {
           pwImg:zeClosedEye,
           pwTriger: false
       }
    },
    computed:{
    },
    methods:{
    }
}
</script>
<style lang='scss'>
@import "scss-normalize";
    .pwContainer{
        height: 100%;
        width: 100%;
        // border: 2px solid blue;
        box-sizing: border-box;
        font-family: NotoSerifSC-Regular;

        .pwTitle,.vfTitle{
            width: vh(130);
            height: vh(27);
            color: rgba(16, 16, 16, 100);

            font-size: vh(20);
            text-align: center;
            color: rbga(16,16,100);
            font: NotoSerifSC-Regular;
        }

        
        .pwTitle{
            position: absolute;
            top: vh(122);
            left: vh(120);
            
        }

         .vfTitle{
            position: absolute;
            top: vh(122);
            right: vh(122);
           }

        .pwTitle::after{
            
        }   

        .pw{
            position: absolute;
            top: vh(211);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            height: vh(108);
            width: vh(380);

            text-align: center;

            font-size: vh(16);
            font-family: NotoSerifSC-Regular;

            // border: 1px solid red;

            .account,.password{             
                box-sizing: border-box;
                width: 100%;
                height: vh(36);
                
            }
            .account,.pwInput{
                border-top-style: none;
                border-right-style: none;
                border-left-style: none;
                border-bottom-color: rgba(212, 217, 226, 100);
                outline: none;

            }

            .password{
                margin-top: vh(36);
                // text-align: center;
                .pwInput{
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding-right: vh(24);
                }
                img{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    // border: 1px solid red;
                    width: vh(24);
                    height: vh(24);
                }
            }
            
        }

        .vf{
            position: absolute;
            top: vh(211);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            height: vh(108);
            width: vh(380);

            text-align: center;

            font-size: vh(16);
            font-family: NotoSerifSC-Regular;


            .phone,.vfNum{             
                box-sizing: border-box;
                width: 100%;
                height: vh(36);
                
            }
            .phone,.vfInput{
                border-top-style: none;
                border-right-style: none;
                border-left-style: none;
                border-bottom-color: rgba(212, 217, 226, 100);
                outline: none;

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
                    width: vh(104);
                    height: vh(36);
                    font-size: vh(12);
                    text-align: center;
                    line-height: vh(17);
                    border-radius: vh(28);
                    background-color: rgba(255, 255, 255, 100);
                    color: rgba(3, 187, 122, 100);
                    border: vh(1) solid rgba(3, 187, 122, 100);
                }
            }
            
        }


        .fgpw{
            position: absolute;
            top: vh(340);
            right: vh(71) ;
            // width: vh(48);
            height: vh(18);
            font-size: vh(12);
            text-align: left;
            font-family: NotoSerifSC-Regular;
            color: rgba(102, 102, 102, 100);
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
            }
        }

    }
</style>
