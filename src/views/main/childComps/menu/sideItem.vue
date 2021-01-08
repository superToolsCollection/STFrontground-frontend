<template>
    <div class="containerItem">
        <div class="content">
            <div class="img"><img alt="" :src= "getImg(data.img)"></div>
            <div class="txt">
                <!-- <div class="title">{{data.title}}</div> -->
                <div class="title">
                    <span  v-for="(item,key) in data.title1" :key="key">{{item}}</span>
                    <span class="red" v-for="(item,key) in data.title2" :key="key+data.title1.length">{{item}}</span>
                    <span  v-for="(item,key) in data.title3" :key="key+data.title1.length+data.title2.length">{{item}}</span>
                    </div>               
                <div class="description">
                    <div class="text">
                        {{data.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import mnImg from 'assets/img/main/loadFail.svg'
export default{
    props:{
        data:{
            type: Object,
            default: function(){
                return {
                        img: "assets/img/main/loadFail.svg",
                        title:'什么都没有',
                        title1:'',
                        title2:'',
                        title3:'',
                        description:'真的什么都没有，或者传递参数出错,真的什么都没有，或者传递参数出错,真的什么都没有，或者传递参数出错',
                        url:''
                    }       
            }
        }
    },
    data(){
       return {
           
       }
    },
    created(){
        var str = this.data.title.split("|")
        this.data.title1=str[0]
        if(str.length>1){
            this.data.title2=str[1]
        }
        if(str.length>2){
            this.data.title3=str[2]
        }       
    },
    computed:{
    },
    methods:{
        getImg(path){
            if(path.indexOf('item')>0){
                // console.log(path.indexOf('/main/item/'))
                // console.log('loadWell')
                let fileName = path.substring(path.lastIndexOf('/')+1);
                // return require('assets/img/main/loadFail.svg');
                // 传递给require的参数必须是字面量(literal)不能直接传递变量，否则webpack的require不工作。
                // 传递给 require.context 的参数必须是字面量(literal)
                // 该问题可参考：https://webpack.docschina.org/guides/dependency-management/和 https://www.coder.work/article/3937181  和https://segmentfault.com/a/1190000019495695
                // console.log(fileName)
                return require(`assets/img/main/item/${fileName}`)
            }else{
                // console.log('loadFail')
                return require('assets/img/main/loadFail.svg')
            }
        }
    }
}
</script>
<style scoped lang='scss'>
@import "scss-normalize";
.containerItem{
    position: relative;
    // background-color: red;
    width: vw(240);
    height: vh(100);
    border: 2px solid #e9e7ef;
    box-sizing: border-box;
    border-radius: 2px;
    // margin-right: vw(25);
    // 这里好像只能写成10px不能写成vh(10)的型式，因为在menu.vue中mounted函数用到了这个数值
    margin-bottom: 10px;

    @include hoverCursor;


    &:hover{
        border: 1px solid #e9e7ef;
        box-shadow: 3px 3px 3px #e9e7ef;
        border-radius: vh(5);
    }
    .content{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: vw(220);
        height: vh(80);
        // border: 1px solid red;
        // border: 1px solid red;
        box-sizing: border-box;
        .img{
            float: left;
            width: vw(35);
            height: vw(35);
            // border: 1px solid red;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .txt{
            float: left;
            width: vw(170);
            height: vh(80);
            margin-left: vw(8);
            // border: 1px solid blue;
            box-sizing: border-box;
            .title{
                text-align: left;
                font-size: vh(16);
                margin-top: vh(6);
                margin-bottom: vh(9);
                .red{
                    color: red;
                }
            }
            .description{
                // width: 100%;
                // height: vh(65);
                text-align: left;
                // border: 1px solid red;
               
                overflow: hidden;
                

                max-height: vh(40);
                line-height: vh(20);

                &::before{
                    float: left;
                    content: '';
                    width: vh(25);
                    height: vh(40);
                    // border: 1 solid red;
                    box-sizing: border-box;
                    // background-color: red;
                }
                .text{
                    float: right;
                    width: 100%;
                    margin-left: vh(-25);
                    word-break: break-all;
                    color: #abb0bd;
                    font-size: vh(14);
                    line-height: vh(20);
                    z-index: 0;

                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                }
                &::after{
                    float: right;
                    content:'...';
                    width: vh(24);
                    height: vh(20);
                    position: relative;

                    left: 100%;
                    transform: translate(-100%,-100%);
                    // border: 1 solid red;
                    box-sizing: border-box;
                    // z-index: 2;
                    color: #abb0bd;
                    // background: white;
                    background-color: white;

                }
            }
            
        }
    }
}
</style>
