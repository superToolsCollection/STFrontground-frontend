<template>
<div class="accountDetail">
    <div class="back" @click="backPage">返回上一页</div>
    <div class="title"><span>账号资料</span></div>
    <div class="inforDetail">
        <div class="inputComps">
            <input-comp class="inputBox" title="用户名" :default-value="userInfor.name" placeholder="输入您的用户名" alter="请输入正确的用户名"></input-comp>
            <input-comp class="inputBox" title="电子邮箱" :default-value="userInfor.email" placeholder="注册并验证邮箱" alter="请输入正确的邮箱名"></input-comp>
            <input-comp class="inputBox" title="QQ账号" :default-value="userInfor.qq" placeholder="输入您的QQ账号" alter="请输入正确的QQ账号"></input-comp>
            <input-comp class="inputBox" title="微信账号" :default-value="userInfor.weixin" placeholder="输入您的微信账号" alter="请输入正确的微信账号"></input-comp>
        </div>
        <div class="profileImg"><img :src="profile" alt=""></div>
        <button class="ensure">确定</button>
        <button class="cancle">取消</button>
    </div>

    <div class="changePs">
        <div class="inputComps">
            <input-comp class="inputBox" title="原密码" placeholder="输入原密码以修改密码" alter="密码必须有8-16个字符，并包含至少1个大写字母，1个小写字母和1个数字" 
            inputType="password" test="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/" @valueChange=valueChange></input-comp>
            <input-comp class="inputBox" title="新密码" placeholder="输入您的新密码" alter="请输入正确的密码格式" inputType="password"></input-comp>
            <input-comp class="inputBox" title="确认密码" placeholder="再次输入您的新密码" alter="请输入正确的密码格式" inputType="password"></input-comp>
        </div>
        <button class="ensure">确定</button>
        <button class="cancle">取消</button>
    </div>
</div>
</template>
<script>
import inputComp from './childComps/inputComp.vue'
import profileImg from 'assets/img/head.svg'
export default{
    components:{
        inputComp
    },
    created(){
        this.userInfor = this.$store.getters.getUserInforAll;
    },
    data(){
       return {
        //    userInfor:{
        //         name:'张三',
        //         img:'',
        //         phone:'12345678901',
        //         account:'123456',
        //         password:'123456',
        //         qq: '123456',
        //         weixin:'123456',
        //         email:'123456@qq.com',
        //     }
           userInfor:{},
           profile: profileImg,
       }
    },
    computed:{
    },
    methods:{
        valueChange(newValue){
            console.log(newValue)
        },
        backPage(){
            // if(window.histroy.length<=1){
            //     this.$router.push('/main/home')
            // }else{
            //     // this.$router.go(-1);
            // }
            this.$router.go(-1);
        }
    }
}
</script>
<style lang='scss' scoped>
@import "scss-normalize";
.accountDetail{
    height: vh(1400);
    .back{
        @include hoverCursor;
        position: fixed;
        top: vh(20);
        left: vw(20);
        // width: vw(76);
        height: vh(38);  
        line-height: vh(38);
        border-radius: 5px;
        padding: 8px;    
        background-color: rgba(57, 109, 248, 100);           
        color: rgba(255, 255, 255, 100);
        outline: none;
    }
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
            right: vw(411);
            width: vw(122);
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
            width: vw(63);
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
        width: vw(944);
        height: vh(492);
        // border: 1px solid red;
        box-sizing: border-box;

        border-radius: vh(10);
        color: rgba(16,16,16,100);
        box-shadow: 0 vh(2) vh(10) 0 rgba(0,0,0,0.1);

        .inputComps{
            position: absolute;
            top: vh(63);
            left: vw(58);
            width: vw(562);
            height: vh(320);
            // border: 1px solid red;

            &::after{
                content: '';
                position: absolute;
                bottom: vh(-1);
                left: 0;
                background-color: rgba(3, 187, 122, 100);;
                width: 100%;
                border: vh(1) solid rgba(243,243,243,100);
            }
            .inputBox:nth-child(n){
                margin-bottom: vh(41);
            }

        }
        // .inputComps:nth-child(n){
        //     // margin-bottom: vh(41);
        //     border: 1px solid red;
        // }
        .profileImg{
            position: absolute;
            top: vh(116);
            left: vw(675);
            width: vw(192);
            height: vh(192);

            border-radius: 4px 4px 4px 4px;
            background-color: rgba(255, 255, 255, 100);
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.15);

            img{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;

                width: vw(172);
                height: vh(172);

                @include hoverCursor;


            }
        }
        .ensure,.cancle{
            line-height: vh(20);
            border-radius: vh(4);
            text-align: center;
            font-size: vh(18);
            border: 1px solid rgba(153, 153, 153, 100);
            @include hoverCursor;
        }
        .ensure{
            position: absolute;
            top: vh(401);
            left: vw(155);
            width: vw(76);
            height: vh(38);

            
            background-color: rgba(57, 109, 248, 100);           
            color: rgba(255, 255, 255, 100);
            outline: none;
            
        }
        .cancle{
            position: absolute;
            top: vh(401);
            left: vw(296);
            width: vw(76);
            height: vh(38);

            background-color: rgba(255, 255, 255, 100);
            color: rgba(51, 51, 51, 100);
            outline: none;   
            
        }
        
    }


    .changePs{
        position: absolute;
        top: vh(817);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: vw(944);
        height: vh(389);
        box-sizing: border-box;

        border-radius: vh(10);
        color: rgba(16,16,16,100);
        box-shadow: 0 vh(2) vh(10) 0 rgba(0,0,0,0.1);

        &::before{
            content: '修改密码';
            position: absolute;
            top: vh(-24);
            left: 0;
            width: vw(63);
            height: vh(20);

            color: rgba(51, 51, 51, 100);
            font-size: vh(14);

        }

        .inputComps{
            position: absolute;
            top: vh(63);
            left: vw(58);
            width: vw(562);
            height: vh(240);

            &::after{
                content: '';
                position: absolute;
                bottom: vh(-1);
                left: 0;
                background-color: rgba(3, 187, 122, 100);;
                width: 100%;
                border: vh(1) solid rgba(243,243,243,100);
            }
            .inputBox:nth-child(n){
                margin-bottom: vh(41);
            }

        }
        .ensure,.cancle{
            line-height: vh(20);
            border-radius: vh(4);
            text-align: center;
            font-size: vh(18);
            border: 1px solid rgba(153, 153, 153, 100);
            @include hoverCursor;
        }
        .ensure{
            position: absolute;
            top: vh(401);
            left: vw(155);
            width: vw(76);
            height: vh(38);

            
            background-color: rgba(57, 109, 248, 100);           
            color: rgba(255, 255, 255, 100);
            outline: none;
            
        }
        .cancle{
            position: absolute;
            top: vh(401);
            left: vw(296);
            width: vw(76);
            height: vh(38);

            background-color: rgba(255, 255, 255, 100);
            color: rgba(51, 51, 51, 100);
            outline: none;   
            
        }
    }
}

</style>
