<template>
<!--  ref -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import Pullup from '@better-scroll/pull-up'
  // BScroll.use(Pullup)

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 3
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll:null
      }
    },
    mounted() {
      // 1.创建BScrol对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        // click: true,
        scrollY: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: true,
        //关闭向上滚动时回弹动画
        bounce:{top:false,bottom:false}
      })

      // 2.监听滚动的位置
      if (this.probeType ===2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll',position)
      })}
      // 3.监听scroll滚到底部
      if (this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
      })
      }

      },
    methods: {
      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
        // console.log('refresh')
        // var context = this
        // setTimeout(function(){console.log(context.getMaxScrollY())},100)
      },
      getScrollY() {
        return  this.scroll ? this.scroll.y : 0
      },
      getMaxScrollY(){
        return  this.scroll ? this.scroll.maxScrollY : 0
      }
    }
    }
</script>

<style scoped>

</style>
