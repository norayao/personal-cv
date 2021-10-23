let echart = echarts.init(document.getElementById('echart'))

// 指定图表的配置项和数据
let option = {

    tooltip: {},
    radar:{
        name:{
            textStyle:{
                color: '#fff',
                backgroundColor: '#999',
                fontSize: 9

            }
        },
        indicator: [
            {name: 'HTML+CSS', max: 100},
            {name: 'JavaScript', max: 100},
            {name: 'PHP', max: 100},
            {name: 'React', max: 100},
            {name: 'Linux', max: 100},
            {name: 'Python', max: 100},
            {name: 'MySQL', max: 100},
            {name: 'CCNP', max: 100}
        ]
    },
    series: [
        {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
                {
                    value: [100, 90,90, 80, 80, 75, 70, 65],
                    name: '技能雷达'
                }
            ],
            color: '#537c68'
        }
    ],
    grid:{
        containLabel: true
    }
};

// 柱状图
//
// var option = {
//     dataset: {
//         source: [
//             ['amount', 'skill'],
//             [65, 'CCNP'],
//             [70, 'MySQL'],
//             [75, 'Python'],
//             [80, 'Linux'],
//             [80, 'React'],
//             [90, 'PHP'],
//             [90,'JavaScript'],
//             [100,'HTML+CSS'],
//
//
//         ]
//     },
//
//     xAxis: {
//
//         boundaryGap: false, // 坐标轴两边留白策略，默认为true
//     },
//     yAxis: {
//         type: 'category',
//
//     },
//     series: [
//         {
//             type: 'bar',
//             encode: {
//                 // Map the "amount" column to X axis.
//                 x: 'level',
//                 // Map the "product" column to Y axis
//                 y: 'skills'
//             },
//             color:['#65B581', '#FFCE34', '#FD665F'],
//         }
//     ],
//     grid:{
//         containLabel: true
//     }
// };

// 使用刚指定的配置项和数据显示图表。
echart.setOption(option);