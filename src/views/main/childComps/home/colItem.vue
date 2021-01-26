<template>
    <div class="containerItem" @click="viewIt">
        <div class="content" :title="itemTitle">
            <div class="img"><img alt="" :src= "getImg(data.img)"></div>
            <div class="title">{{data.title}}</div>

            <div class="save" @click.stop="saveIt" :title="saveTitle"><img alt="" :src="saveImg" ></div>

            <div class="infor">
                <div class="view"><img alt="" src="~assets/img/main/item/view.svg"><span>{{data.view}}</span></div>
                <div class="favor" @click.stop="favorIt" :title="favorTitle"><img alt="" :src="favor"><span>{{data.favor}}</span></div>
            </div>
            </div>
    </div>
</template>
<script>

export default{
    props:{
        content:{
            type: Object,
            default: function(){
                return {
                        img: "assets/img/main/loadFail.svg",
                        title:'真的什么都没有',
                        url:'',
                        
                        view: 10000,                        
                        isSave: true,

                        favor: 10000,
                        isFavor: true
                }       
            }
        }
    },
    data(){
       return {
           data: this.content,
       }
    },
    computed:{
        // .save元素图标
        saveImg: function(){
            if(this.data.isSave){
                return require('assets/img/main/item/save1.svg')
            } else{
                return require('assets/img/main/item/save2.svg')
            }
        },
        // .favor元素图标
        favor: function(){
            if(this.data.isFavor){
                return require('assets/img/main/item/favour1.svg')
            } else{
                return require('assets/img/main/item/favour2.svg')
            }
        },
        // 悬停在 .save 时显示的提示
        saveTitle: function(){
            return this.data.isSave?'取消收藏':'收藏';
        },
        // 悬停在 .favor时显示的提示
        favorTitle: function(){
            return this.data.isFavor?'取消赞':'赞一个';
        },
        //悬停在该组件上是显示的提示
        itemTitle: function(){
            return this.data.title
        }
    },
    methods:{
        saveIt(){
            this.data.isSave = !this.data.isSave;
        },
        favorIt(){
            this.data.isFavor = !this.data.isFavor;
            if(this.data.isFavor)
                {
                    this.data.favor++;
                }
            else{
                    this.data.favor--;
                }
        },
        viewIt(){
            this.data.view++;
        },
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
    // background-color: blue;
    box-sizing: border-box;
    width: vw(270);
    height: vh(125);
    border: 1px solid gray;
    box-sizing: border-box;
    margin-right: vw(25);
    margin-bottom: vh(20);
    border-radius: 5px;


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
        width: vw(240);
        height: vh(100);
        // border: 1px solid red;
        // background-color: yellow;
        .img{
            float: left;
            width: vw(60);
            height: vw(60);
            // border: 1px solid red;
            box-sizing: border-box;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .title{
            position: relative;
            float: left;
            top: vh(25);
            left: vw(15);
            text-align: left;
            font-size: vh(18);
            // margin-top: vh(6);
            // margin-bottom: vh(9);
        }
        .save{
            position: absolute;
            top: vh(0);
            right: vw(0);
            img{
                width: vh(24);
                height: vh(24);
            }
        }
        .infor{
            position: absolute;
            bottom: vh(0);
            left: vw(15);
            $size: vh(24);
            
            .view,.favor{
                // float: left;
                display: inline-block;
                img{                    
                    width: $size;
                    height: $size;
                    vertical-align: middle;
                }
                span{
                    vertical-align: middle;
                }
            }
            .favor{
                position: relative;
                left: vw(20);
            }
        } 
    }
}
</style>
