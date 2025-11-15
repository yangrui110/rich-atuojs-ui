'ui';
var moduleRegister = require('./modules/register.js');
var pluginUtils = require('./modules/plugin-utils.js');

// 打印调试信息
pluginUtils.printDebugInfo();

ui.layout(
    <vertical>
        <webview id="web" w="*" h="*"/>
    </vertical>,
);

ui.statusBarColor('#ffffff');

var web = ui['web'];

// 初始化 WebView（使用通用方法）
pluginUtils.initWebView(web, moduleRegister, 'web/index.html');


// images.requestScreenCapture();
// let img = images.captureScreen();
// ocr(img);

// 监听返回键
ui.emitter.on("back_pressed", (event) => {
  // 阻止默认返回（否则界面会直接关闭）
  event.consumed = true;

  dialogs.build({
    title: "确认退出？",
    content: "是否退出应用",
    positive: "退出",
    negative: "取消"
  }).on("positive", () => {
    exit()
  }).show();
});
