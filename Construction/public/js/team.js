//背景canvas
$(document).ready(function() {			
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    var c = $("#c");
    var w,h;
    var pi = Math.PI;
    var all_attribute = {
        num:100,            			 // 个数
        start_probability:0.1,		     // 如果数量小于num，有这些几率添加一个新的     		     
        radius_min:1,   			     // 初始半径最小值
        radius_max:2,   			     // 初始半径最大值
        radius_add_min:.3,               // 半径增加最小值
        radius_add_max:.5,               // 半径增加最大值
        opacity_min:0.3,                 // 初始透明度最小值
        opacity_max:0.5, 				 // 初始透明度最大值
        opacity_prev_min:.003,            // 透明度递减值最小值
        opacity_prev_max:.005,            // 透明度递减值最大值
        light_min:40,                 // 颜色亮度最小值
        light_max:70,                 // 颜色亮度最大值
    };
    var style_color = find_random(0,360);  
    var all_element =[];
    window_resize();
    function start(){
        window.requestAnimationFrame(start);
        style_color+=.1;
        ctx.fillStyle = 'hsl('+style_color+',100%,97%)';
        ctx.fillRect(0, 0, w, h);
        if (all_element.length < all_attribute.num && Math.random() < all_attribute.start_probability){
            all_element.push(new ready_run);
        }
        all_element.map(function(line) {
            line.to_step();
        })
    }
    function ready_run(){
        this.to_reset();
    }
    ready_run.prototype = {
        to_reset:function(){
            var t = this;
            t.x = find_random(0,w);
            t.y = find_random(0,h);
            t.radius = find_random(all_attribute.radius_min,all_attribute.radius_max);
            t.radius_change = find_random(all_attribute.radius_add_min,all_attribute.radius_add_max);
            t.opacity = find_random(all_attribute.opacity_min,all_attribute.opacity_max);
            t.opacity_change = find_random(all_attribute.opacity_prev_min,all_attribute.opacity_prev_max);
            t.light = find_random(all_attribute.light_min,all_attribute.light_max);
            t.color = 'hsl('+style_color+',100%,'+t.light+'%)';
        },
        to_step:function(){
            var t = this;
            t.opacity -= t.opacity_change;
            t.radius += t.radius_change;
            if(t.opacity <= 0){
                t.to_reset();
                return false;
            }
            ctx.fillStyle = t.color;
            ctx.globalAlpha = t.opacity;
            ctx.beginPath();
            ctx.arc(t.x,t.y,t.radius,0,2*pi,true);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    function window_resize(){
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }
    $(window).resize(function(){
        window_resize();
    });
    function find_random(num_one,num_two){
        return Math.random()*(num_two-num_one)+num_one;
    }
    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var xx = 0; xx < vendors.length && !window.requestAnimationFrame; ++xx) {
            window.requestAnimationFrame = window[vendors[xx] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[xx] + 'CancelAnimationFrame'] ||
                                          window[vendors[xx] + 'CancelRequestAnimationFrame'];
        }
    
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());
    start();
});

//成员介绍雷达图
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
option1 = {
    title: {
        text: '成员能力雷达图'
    },
    tooltip: {},
    legend: {
        data: ['介绍（Allocated Budget）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#111',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '性格（character）', max: 100},
           { name: '能力（ability）', max: 100},
           { name: '颜值（Face score）', max: 100},
           { name: '身高（height）', max: 200},
           { name: '发型（hairstyle）', max: 100}
        ]
    },
    series: [{
        name: '介绍',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [80, 50, 80, 170, 80],
                name : '介绍雷达图'
            }
        ]
    }]
};
option2 = {
    title: {
        text: '成员能力雷达图'
    },
    tooltip: {},
    legend: {
        data: ['介绍（Allocated Budget）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#111',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '性格（character）', max: 100},
           { name: '能力（ability）', max: 100},
           { name: '颜值（Face score）', max: 100},
           { name: '身高（height）', max: 200},
           { name: '发型（hairstyle）', max: 100}
        ]
    },
    series: [{
        name: '介绍',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [80, 80, 100, 175, 95],
                name : '介绍雷达图'
            }
        ]
    }]
};
option3 = {
    title: {
        text: '成员能力雷达图'
    },
    tooltip: {},
    legend: {
        data: ['介绍（Allocated Budget）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#111',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '性格（character）', max: 100},
           { name: '能力（ability）', max: 100},
           { name: '颜值（Face score）', max: 100},
           { name: '身高（height）', max: 200},
           { name: '发型（hairstyle）', max: 100}
        ]
    },
    series: [{
        name: '介绍',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [80, 80, 100, 175, 95],
                name : '介绍雷达图'
            }
        ]
    }]
};
option4 = {
    title: {
        text: '成员能力雷达图'
    },
    tooltip: {},
    legend: {
        data: ['介绍（Allocated Budget）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#111',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '性格（character）', max: 100},
           { name: '能力（ability）', max: 100},
           { name: '颜值（Face score）', max: 100},
           { name: '身高（height）', max: 200},
           { name: '发型（hairstyle）', max: 100}
        ]
    },
    series: [{
        name: '介绍',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [80, 80, 100, 175, 95],
                name : '介绍雷达图'
            }
        ]
    }]
};
option5 = {
    title: {
        text: '成员能力雷达图'
    },
    tooltip: {},
    legend: {
        data: ['介绍（Allocated Budget）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#111',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '性格（character）', max: 100},
           { name: '能力（ability）', max: 100},
           { name: '颜值（Face score）', max: 100},
           { name: '身高（height）', max: 200},
           { name: '发型（hairstyle）', max: 100}
        ]
    },
    series: [{
        name: '介绍',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [70, 70, 70, 180, 70],
                name : '介绍雷达图'
            }
        ]
    }]
};
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
myChart5.setOption(option5);

//随机颜色
// function colord(){
//     var r,g,b;
//     r = Math.floor(Math.random()*255);
//     g = Math.floor(Math.random()*255);
//     b = Math.floor(Math.random()*255);

//     return `rgb(${r},${g},${b})`;
// }

// $("#name").css("color",colord());