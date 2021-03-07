
//这个节流函数写的有问题，我有空再来改
export let throttle =(function(time=500){    
    let lock=false;
    //    匿名函数的this由定义所在的地方决定，具名函数的this由调用者决定
    return  function (fn){
                if(lock)return;
                fn();
                lock = true;
                // var context = this;
                // console.log(this);
                setTimeout(()=>lock=false,time);
            }
})()

//节流函数，在time时间内只能响应一次，
// fn是一個函数，但它有一个lock的属性
export let throttleTime =function(fn,time=500){    
    return  function (){
                if(fn.lock)return;
                fn();
                fn.lock = true;
                // var context = this;
                // console.log(this);
                setTimeout(()=>fn.lock=false,time);
            }
}
// export function throttle(){
            
// }
