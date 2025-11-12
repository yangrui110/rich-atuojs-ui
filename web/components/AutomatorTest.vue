<template>
    <div>
        <van-cell-group title="无障碍服务">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testAutoWaitFor" style="margin: 8px;">启用无障碍服务</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testAutoSetMode" style="margin: 8px;">设置无障碍模式</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="基于坐标的触摸模拟">
            <van-row type="flex" justify="center">
                <van-button @click="testSetScreenMetrics" style="margin: 8px;">设置屏幕度量</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testClick" style="margin: 8px;">测试点击坐标</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testLongClick" style="margin: 8px;">测试长按</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSwipe" style="margin: 8px;">测试滑动</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGesture" style="margin: 8px;">测试手势</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="基于控件的操作">
            <van-row type="flex" justify="center">
                <van-button @click="testClickText" style="margin: 8px;">测试点击文本</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testLongClickText" style="margin: 8px;">测试长按文本</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testScrollUp" style="margin: 8px;">测试上滑</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testScrollDown" style="margin: 8px;">测试下滑</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限操作（需要 Root）">
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testRootTap" style="margin: 8px;">测试 Root Tap</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testRootSwipe" style="margin: 8px;">测试 Root Swipe</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'AutomatorTest',
    methods: {
        // ==================== 无障碍服务 ====================
        
        // 测试启用无障碍服务
        testAutoWaitFor() {
            richauto.global.toastLog('正在检查无障碍服务...');
            richauto.automator.auto.waitFor().then(() => {
                richauto.global.toastLog('无障碍服务已启动');
            }).catch((err) => {
                richauto.global.toastLog('无障碍服务启动失败: ' + err);
            });
        },
        
        // 测试设置无障碍模式
        async testAutoSetMode() {
            try {
                await richauto.automator.auto.setMode('fast');
                richauto.global.toastLog('无障碍模式已设置为: fast');
            } catch (err) {
                richauto.global.toastLog('设置失败: ' + err);
            }
        },
        
        // ==================== 基于坐标的触摸模拟 ====================
        
        // 测试设置屏幕度量
        async testSetScreenMetrics() {
            try {
                const width = await richauto.global.WIDTH;
                const height = await richauto.global.HEIGHT;
                await richauto.automator.setScreenMetrics(width, height);
                richauto.global.toastLog(`屏幕度量已设置: ${width}x${height}`);
            } catch (err) {
                richauto.global.toastLog('设置失败: ' + err);
            }
        },
        
        // 测试点击坐标
        async testClick() {
            richauto.global.toastLog('将在 2 秒后点击屏幕中心位置');
            await richauto.global.sleep(2000);
            
            const width = await richauto.global.WIDTH;
            const height = await richauto.global.HEIGHT;
            const centerX = width / 2;
            const centerY = height / 2;
            
            const success = await richauto.automator.click(centerX, centerY);
            richauto.global.toastLog(`点击${success ? '成功' : '失败'}: (${centerX}, ${centerY})`);
        },
        
        // 测试长按
        async testLongClick() {
            richauto.global.toastLog('将在 2 秒后长按屏幕中心位置');
            await richauto.global.sleep(2000);
            
            const width = await richauto.global.WIDTH;
            const height = await richauto.global.HEIGHT;
            const centerX = width / 2;
            const centerY = height / 2;
            
            const success = await richauto.automator.longClick(centerX, centerY);
            richauto.global.toastLog(`长按${success ? '成功' : '失败'}: (${centerX}, ${centerY})`);
        },
        
        // 测试滑动
        async testSwipe() {
            richauto.global.toastLog('将在 2 秒后从屏幕上方向下滑动');
            await richauto.global.sleep(2000);
            
            const width = await richauto.global.WIDTH;
            const height = await richauto.global.HEIGHT;
            const x = width / 2;
            const y1 = height * 0.2;
            const y2 = height * 0.8;
            
            const success = await richauto.automator.swipe(x, y1, x, y2, 500);
            richauto.global.toastLog(`滑动${success ? '成功' : '失败'}`);
        },
        
        // 测试手势
        async testGesture() {
            richauto.global.toastLog('将在 2 秒后绘制一个圆形手势');
            await richauto.global.sleep(2000);
            
            const width = await richauto.global.WIDTH;
            const height = await richauto.global.HEIGHT;
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = 200;
            
            // 绘制圆形的点
            const points = [];
            for (let i = 0; i <= 360; i += 30) {
                const angle = (i * Math.PI) / 180;
                points.push([
                    Math.round(centerX + radius * Math.cos(angle)),
                    Math.round(centerY + radius * Math.sin(angle))
                ]);
            }
            
            const success = await richauto.automator.gesture(1000, points);
            richauto.global.toastLog(`手势${success ? '成功' : '失败'}`);
        },
        
        // ==================== 基于控件的操作 ====================
        
        // 测试点击文本
        async testClickText() {
            richauto.global.toastLog('尝试点击"配置"文本...');
            const success = await richauto.automator.clickText('配置');
            richauto.global.toastLog(`点击文本${success ? '成功' : '失败'}`);
        },
        
        // 测试长按文本
        async testLongClickText() {
            richauto.global.toastLog('尝试长按"配置"文本...');
            const success = await richauto.automator.longClickText('配置');
            richauto.global.toastLog(`长按文本${success ? '成功' : '失败'}`);
        },
        
        // 测试上滑
        async testScrollUp() {
            richauto.global.toastLog('尝试上滑...');
            const success = await richauto.automator.scrollUp();
            richauto.global.toastLog(`上滑${success ? '成功' : '失败'}`);
        },
        
        // 测试下滑
        async testScrollDown() {
            richauto.global.toastLog('尝试下滑...');
            const success = await richauto.automator.scrollDown();
            richauto.global.toastLog(`下滑${success ? '成功' : '失败'}`);
        },
        
        // ==================== Root 权限操作 ====================
        
        // 测试 Root Tap
        async testRootTap() {
            try {
                richauto.global.toastLog('将在 2 秒后使用 Root 权限点击屏幕中心');
                await richauto.global.sleep(2000);
                
                const width = await richauto.global.WIDTH;
                const height = await richauto.global.HEIGHT;
                const centerX = width / 2;
                const centerY = height / 2;
                
                await richauto.automator.Tap(centerX, centerY);
                richauto.global.toastLog(`Root Tap 完成: (${centerX}, ${centerY})`);
            } catch (err) {
                richauto.global.toastLog('Root Tap 失败: ' + err);
            }
        },
        
        // 测试 Root Swipe
        async testRootSwipe() {
            try {
                richauto.global.toastLog('将在 2 秒后使用 Root 权限滑动');
                await richauto.global.sleep(2000);
                
                const width = await richauto.global.WIDTH;
                const height = await richauto.global.HEIGHT;
                const x = width / 2;
                const y1 = height * 0.2;
                const y2 = height * 0.8;
                
                await richauto.automator.Swipe(x, y1, x, y2, 500);
                richauto.global.toastLog('Root Swipe 完成');
            } catch (err) {
                richauto.global.toastLog('Root Swipe 失败: ' + err);
            }
        },
    }
};
</script>

