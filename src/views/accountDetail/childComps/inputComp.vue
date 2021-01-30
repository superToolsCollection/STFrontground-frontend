<template>
    <div class="container">    
        <div class="inputInfor">
            <div class="title">{{title}}</div>
            <!-- <span class="title">用户名</span> -->
            <div class='inputInfor'><input class="input" :type="inputType" :placeholder="placeholder" v-model="inputDate"
            @change="dataChange"></div>
        </div>
        <div class='alter' v-show="altShow">{{alter}}</div>
    </div>
</template>
<script>
export default{
    props:{
        title:{
            type: String,
            default: "标题"
        },
        placeholder:{
            type: String,
            default: "占位符"
        },
        alter:{
            type: String,
            default: "请输入正确的格式"
        },
        inputType:{
            type: String,
            default: "text"
        },
        //正则表达式验证输入的格式
        test:{
            type: String,
            default:''
        },
        defaultValue:{
            type: String,
            default:''
        }
    },
    mounted:function () {
        if(this.test.length>2){
            this.inputTest = new RegExp(this.test.slice(1,-1))
        }
    },
    data(){
       return {

           inputDate: this.defaultValue,

           inputTest: '',

       }
    },
    computed:{
        //使用正则表达式  验证输入信息是否符合  特定输入格式
        altShow: function () {
            // console.log(this.inputTest)
            return ((this.test!="")&&(this.inputDate.length!=0)&&!(this.inputTest.test(this.inputDate)))?true:false;
        },
    },
    methods:{
        dataChange () {
            if(!this.altShow){
                this.$emit('valueChange',this.inputDate)
            }           
        }
    }
}
</script>

<style lang='scss' scoped>
@import "scss-normalize";

.container{
    height: vh(37);
    width: vw(562);
    position: relative;
    display: inline-block;
 
    .inputInfor{
        position: absolute;
        width: 100%;
        height: 100%;

        .title{
            float: left;
            position:absolute;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;

            width: 10%;
            height: 56.7%;
            color: rgba(51, 51, 51, 100);
            font-size: vh(14);
            text-align: center;
            // 清浮动, 父元素计算高度时也把子元素的高度算进去
            @include clearFloat;
            // border: 1px solid red;
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
                padding: vh(9) vw(16) vh(8) vw(18);

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
                // 设置占位符的颜色
                @include placeholder-color( "input",rgba(153, 153, 153, 100));

            }
            // border: 1px solid red;
        }
        // @include alertWrong('.inputInfor','.input','请输入正确的格式');
    }

    .alter{
        position: absolute;
        bottom: vh(-24);
        margin-bottom: 0;
        // bottom: 0;
        right: 0;
        height: vh(18);
        color: red;
        font-size: vh(14);
        line-height: vh(18);
        text-align: right;
    }


}

</style>
