<template>
    <div class="waveContainer">
        <div class="wave" ref="wave"></div>
    </div>
</template>
<script>
import {Vector} from './zrveeq'
import {Surface} from './script.js'
export default{
    mounted(){
        this.surface = new Surface(8, new Vector(window.innerWidth, window.innerHeight));
        // this.surface.colour = '	#00FFFF';
        window.addEventListener('resize', () => {
          this.surface.dimensions = new Vector(window.innerWidth, window.innerHeight);
        });
        this.$refs.wave.appendChild(this.surface.stage);
        // document.body.appendChild(surface.stage);
    },

    data(){
       return {
       }
    },
    computed:{
    },
    methods:{
        setColor:function(color){
            this.surface.colour = color;
        },
        setNumPoints:function(numPoints){
            this.surface.numPoints = numPoints;
        },
    }
}
</script>
<style lang='scss' scoped>
.waveContainer{
    position: fixed;
    // canvas { touch-action: none; }
    width:100%;
    height: 100%;
    .wave{
        canvas { touch-action: none; }
        width:100%;
        height: 100%;
    }
}
</style>
