<template>
    <div class="containerItem">
        <div class="content">
            <div class="img"><img alt="" :src= "getImg(data.img)"></div>
            <div class="txt">
                <div class="title">{{data.title}}</div>
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
                        description:'真的什么都没有，或者传递参数出错',
                        url:''
                    }       
            }
        }
    },
    data(){
       return {
           
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
    float: left;
    position: relative;
    // background-color: red;
    width: vw(277);
    height: vh(125);
    // border: 1px solid green;
    box-sizing: border-box;
    margin-right: vw(25);
    margin-bottom: vh(20);

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
        width: vw(260);
        height: vh(100);
        // border: 1px solid red;
        .img{
            float: left;
            width: vw(50);
            height: vw(50);
            // border: 1px solid red;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .txt{
            float: left;
            width: vw(205);
            height: vh(100);
            margin-left: vw(5);
            // border: 1px solid blue;
            box-sizing: border-box;
            .title{
                text-align: left;
                font-size: vh(18);
                margin-top: vh(6);
                margin-bottom: vh(9);
            }
            .description{
                // width: 100%;
                // height: vh(65);
                text-align: left;
                // border: 1px solid red;
               
                overflow: hidden;
                

                max-height: vh(50);
                line-height: vh(25);

                &::before{
                    float: left;
                    content: '';
                    width: vh(25);
                    height: vh(50);
                    // border: 1 solid red;
                    box-sizing: border-box;
                }
                .text{
                    float: right;
                    width: 100%;
                    margin-left: vh(-25);
                    word-break: break-all;
                    color: #abb0bd;
                    font-size: vh(15);
                    line-height: vh(25);
                    z-index: 0;

                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                }
                &::after{
                    float: right;
                    content:'...';
                    width: vh(25);
                    height: vh(25);
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
