$(function () {
    var ism = GetQueryString("type1") === "1";
    if (ism) {
        var local1 = window.location.href.toLowerCase();
        var ism1 = local1.indexOf("hdzq") > -1;//全空
        var ism2 = local1.indexOf("text") > -1 || local1.indexOf("kfzx") > -1;//留选项卡
        var ism3 = local1.indexOf("platform") > -1;//留边
        if (ism1) {
            $(".subMain").css({ "margin-left": "0px", "width": "960px" });
            $(".bg_subMain").css({ "padding": "0px" });
            $(".bg_subMain .contant").css({ "margin": "0px" });
            $(".bg_subTop,.header,.bg_subMenu").hide();
        } else if (ism2) {
            $(".subMain").css("margin-left", "15px");
            $("body,.bg_subMain").css("background-color", "#F2F5FD");
            $(".bg_subTop,.header,.service").hide();
        } else if (ism3) {
            $(".subMain").css({ "margin-left": "0px" });
            $(".bg_subMain .contant").css({ "margin": "0px" });
            $(".bg_subTop,.header,.bg_subMenu").hide();
        }
    }
    var isa = GetQueryString("refer") === "tsapi";
    if (isa) {
        var local1 = window.location.href.toLowerCase();
        var isa1 = local1.indexOf("hdzq") > -1 && GetQueryString("action") === "D";//cjjl
        if (isa1) {
            $(".service").hide();
        }
    }
});