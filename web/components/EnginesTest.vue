<template>
    <div>
        <van-cell-group title="脚本执行">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testExecScript" style="margin: 8px;">执行脚本字符串</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testExecScriptWithLoop" style="margin: 8px;">执行循环脚本</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testExecScriptFile" style="margin: 8px;">执行脚本文件</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="脚本控制">
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testStopAll" style="margin: 8px;">停止所有脚本</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testStopAllAndToast" style="margin: 8px;">停止脚本并提示</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="脚本引擎信息">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testMyEngine" style="margin: 8px;">获取当前引擎</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testAllEngines" style="margin: 8px;">获取所有引擎</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetCwd" style="margin: 8px;">获取执行路径</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetSource" style="margin: 8px;">获取脚本源</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="高级功能">
            <van-row type="flex" justify="center">
                <van-button @click="testExecWithDelay" style="margin: 8px;">延迟执行脚本</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="info" @click="testExecFunction" style="margin: 8px;">执行函数</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'EnginesTest',
    methods: {
        // ==================== 脚本执行 ====================
        
        // 测试执行脚本字符串
        async testExecScript() {
            try {
                richauto.global.toastLog('正在执行脚本...');
                
                const script = 'toast("Hello from execScript!");';
                const result = await richauto.engines.execScript('测试脚本', script);
                
                richauto.global.toastLog('脚本已启动，ID: ' + result.id);
            } catch (err) {
                richauto.global.toastLog('执行失败: ' + err);
            }
        },
        
        // 测试执行循环脚本
        async testExecScriptWithLoop() {
            try {
                richauto.global.toastLog('正在执行循环脚本...');
                
                const script = 'var count = 1; toast("循环第 " + count++ + " 次");';
                const config = {
                    loopTimes: 5,
                    interval: 2000
                };
                
                const result = await richauto.engines.execScript('循环脚本', script, config);
                richauto.global.toastLog('循环脚本已启动，将执行 5 次，间隔 2 秒');
            } catch (err) {
                richauto.global.toastLog('执行失败: ' + err);
            }
        },
        
        // 测试执行脚本文件
        async testExecScriptFile() {
            try {
                // 先选择文件
                const path = await richauto.files.selectFile('选择要执行的脚本文件');
                if (!path) {
                    richauto.global.toastLog('未选择文件');
                    return;
                }
                
                richauto.global.toastLog('正在执行脚本文件: ' + path);
                const result = await richauto.engines.execScriptFile(path);
                richauto.global.toastLog('脚本文件已启动，ID: ' + result.id);
            } catch (err) {
                richauto.global.toastLog('执行失败: ' + err);
            }
        },
        
        // ==================== 脚本控制 ====================
        
        // 测试停止所有脚本
        async testStopAll() {
            try {
                await richauto.engines.stopAll();
                richauto.global.toastLog('已停止所有脚本');
            } catch (err) {
                richauto.global.toastLog('停止失败: ' + err);
            }
        },
        
        // 测试停止所有脚本并显示提示
        async testStopAllAndToast() {
            try {
                await richauto.engines.stopAllAndToast();
            } catch (err) {
                richauto.global.toastLog('停止失败: ' + err);
            }
        },
        
        // ==================== 脚本引擎信息 ====================
        
        // 测试获取当前引擎
        async testMyEngine() {
            try {
                const engine = await richauto.engines.myEngine();
                const info = [
                    '当前脚本引擎信息:',
                    'ID: ' + engine.id,
                    'CWD: ' + (engine.cwd || '无'),
                    'execArgv: ' + JSON.stringify(engine.execArgv || {})
                ].join('\n');
                
                richauto.global.toastLog(info);
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // 测试获取所有引擎
        async testAllEngines() {
            try {
                const engines = await richauto.engines.all();
                
                if (!engines || engines.length === 0) {
                    richauto.global.toastLog('当前没有运行中的脚本');
                    return;
                }
                
                const info = ['运行中的脚本引擎: ' + engines.length + ' 个'];
                for (let i = 0; i < engines.length && i < 5; i++) {
                    info.push((i + 1) + '. CWD: ' + (engines[i].cwd || '无'));
                }
                if (engines.length > 5) {
                    info.push('... 还有 ' + (engines.length - 5) + ' 个');
                }
                
                richauto.global.toastLog(info.join('\n'));
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // 测试获取执行路径
        async testGetCwd() {
            try {
                const cwd = await richauto.engines.ScriptEngine.cwd();
                richauto.global.toastLog('脚本执行路径: ' + (cwd || '无'));
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // 测试获取脚本源
        async testGetSource() {
            try {
                const source = await richauto.engines.ScriptEngine.getSource();
                const info = [
                    '脚本源信息:',
                    '名称: ' + source.name,
                    '路径: ' + (source.path || '无')
                ].join('\n');
                
                richauto.global.toastLog(info);
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // ==================== 高级功能 ====================
        
        // 测试延迟执行
        async testExecWithDelay() {
            try {
                richauto.global.toastLog('脚本将在 3 秒后执行...');
                
                const script = 'toast("延迟执行的脚本！");';
                const config = {
                    delay: 3000
                };
                
                const result = await richauto.engines.execScript('延迟脚本', script, config);
                richauto.global.toastLog('延迟脚本已启动');
            } catch (err) {
                richauto.global.toastLog('执行失败: ' + err);
            }
        },
        
        // 测试执行函数（模拟文档中的示例）
        async testExecFunction() {
            try {
                richauto.global.toastLog('正在执行函数...');
                
                // 定义一个函数
                function helloWorld() {
                    toast('Hello World from function!');
                    sleep(1000);
                    toast('函数执行完成');
                }
                
                // 转换为字符串并执行
                const script = 'helloWorld();\n' + helloWorld.toString();
                const result = await richauto.engines.execScript('函数脚本', script);
                
                richauto.global.toastLog('函数脚本已启动');
            } catch (err) {
                richauto.global.toastLog('执行失败: ' + err);
            }
        }
    }
};
</script>



