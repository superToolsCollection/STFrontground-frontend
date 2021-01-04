<template>
    <div class="containerItem">
    </div>
</template>
<script>
export default{
    data(){
       return {
           item:{
                img:'1',
                title:'title1',
                description: '哟与玉璞IPO培育IP有哒哒哒哒哒哒多多多多多发哒哒哒哒哒哒付付付付付付付付付付付付付付付付付付风二二二二二二二二二二二二二拖大发发',
                url: 'https://blog.csdn.net/water_Popcorn/article/details/93888612',
            },
       }
    },
    computed:{
    },
    methods:{
    }
}
</script>
<style scoped lang='scss'>
@import "scss-normalize";
.containerItem{
    float: left;
    display: inline-block;
    background-color: red;
    width: vw(218);
    height: vh(135);
    border: 1px solid green;
    box-sizing: border-box;
    margin-right: vw(40);
    margin-bottom: vh(20);
}
</style>
