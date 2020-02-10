import Mock from 'mockjs';
var Random=Mock.Random;

Mock.mock('https://easy-mock.com/mock/5dc9d54413bff958057d85d6/antd-demo/alldata',
    {
    
    'data|1-10':[{
        'key|+1':1,
        'name':'@name',
        'age':'@integer(18,28)',
        'school':'@province'
    }]
    
})
