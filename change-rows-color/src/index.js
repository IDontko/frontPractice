//使用es6语法导入jquery
import $, { removeData } from 'jquery'
import './css/index.css'

$(function() {
    //3. 实现奇偶变色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'cyan')
})

1231