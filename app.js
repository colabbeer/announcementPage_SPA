/**
 * Created by Administrator on 2018/1/18.
 */
//������Ϣ
var latest = {};
latest.partial = "latest.html";
latest.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        latest.latest = JSON.parse(partial).latest;
        //console.log(latest.latest);
        miniSPA.render('latest');
    });
}
//�
var activity = {};
activity.partial = "activity.html";
activity.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        activity.activity = JSON.parse(partial).activity;
        miniSPA.render('activity');
    });
}

//�ͷ�
var service = {};
service.partial = "service.html";
service.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        service.service = JSON.parse(partial).service;
        miniSPA.render('service');
    });
}
//ϵͳ
var system = {};
system.partial = "system.html";
system.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        system.system = JSON.parse(partial).system;
        miniSPA.render('system');
    });
}
//�ý�
var reward = {};
reward.partial = "reward.html";
reward.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        reward.reward = JSON.parse(partial).reward;
        miniSPA.render('reward')
    });
}
//ϵ�����
var marquee = {};
marquee.partial = "marquee.html";
marquee.init = function () {
    miniSPA.ajaxRequest('params.json', 'GET', '', function (status, partial) {
        marquee.marquee = JSON.parse(partial).marquee;
        miniSPA.render('marquee')
    });
}

miniSPA.changeUrl();    //initialize


$('#searchItem').on("click", "ul li>a", function () {
    $(this).addClass("onSearch").parent().siblings("li").find("a").removeClass("onSearch");
})