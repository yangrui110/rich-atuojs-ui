<template>
    <div>
        <van-cell-group title="基于无障碍服务的按键操作">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testBack" style="margin: 8px;">返回键</van-button>
                <van-button type="primary" @click="testHome" style="margin: 8px;">Home键</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testPowerDialog" style="margin: 8px;">电源键菜单</van-button>
                <van-button @click="testNotifications" style="margin: 8px;">通知栏</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testQuickSettings" style="margin: 8px;">快速设置</van-button>
                <van-button @click="testRecents" style="margin: 8px;">最近任务</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSplitScreen" style="margin: 8px;">分屏</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限 - 基础按键">
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testRootHome" style="margin: 8px;">Root Home</van-button>
                <van-button type="warning" @click="testRootBack" style="margin: 8px;">Root 返回</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testRootPower" style="margin: 8px;">Root 电源</van-button>
                <van-button @click="testRootMenu" style="margin: 8px;">Root 菜单</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限 - 音量与相机">
            <van-row type="flex" justify="center">
                <van-button @click="testVolumeUp" style="margin: 8px;">音量+</van-button>
                <van-button @click="testVolumeDown" style="margin: 8px;">音量-</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testCamera" style="margin: 8px;">照相键</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限 - 方向键">
            <van-row type="flex" justify="center" style="margin: 8px 0;">
                <van-button @click="testUp" style="margin: 0 8px;">↑ 上</van-button>
            </van-row>
            <van-row type="flex" justify="center" style="margin: 8px 0;">
                <van-button @click="testLeft" style="margin: 0 8px;">← 左</van-button>
                <van-button type="primary" @click="testOK" style="margin: 0 8px;">OK</van-button>
                <van-button @click="testRight" style="margin: 0 8px;">右 →</van-button>
            </van-row>
            <van-row type="flex" justify="center" style="margin: 8px 0;">
                <van-button @click="testDown" style="margin: 0 8px;">↓ 下</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限 - 文本与按键码">
            <van-cell title="输入文本">
                <template #default>
                    <van-field v-model="textInput" placeholder="输入英文文本" />
                </template>
            </van-cell>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testText" style="margin: 8px;">输入文本</van-button>
            </van-row>
            
            <van-cell title="按键码">
                <template #default>
                    <van-field v-model="keyCodeInput" placeholder="输入按键码或名称" />
                </template>
            </van-cell>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testKeyCode" style="margin: 8px;">发送按键码</van-button>
            </van-row>
            
            <van-cell title="常用按键码示例" is-link @click="showKeyCodeList = true" />
        </van-cell-group>
        
        <!-- 按键码列表弹窗 -->
        <van-popup v-model:show="showKeyCodeList" position="bottom" :style="{ height: '70%' }">
            <van-nav-bar title="常用按键码" @click-left="showKeyCodeList = false">
                <template #left>
                    <van-icon name="cross" size="18" />
                </template>
            </van-nav-bar>
            <van-cell-group>
                <van-cell title="KEYCODE_ENTER (回车)" label="66" @click="setKeyCode('KEYCODE_ENTER')" />
                <van-cell title="KEYCODE_SPACE (空格)" label="62" @click="setKeyCode('KEYCODE_SPACE')" />
                <van-cell title="KEYCODE_DEL (删除)" label="67" @click="setKeyCode('KEYCODE_DEL')" />
                <van-cell title="KEYCODE_A" label="29" @click="setKeyCode('KEYCODE_A')" />
                <van-cell title="KEYCODE_B" label="30" @click="setKeyCode('KEYCODE_B')" />
                <van-cell title="KEYCODE_0" label="7" @click="setKeyCode('KEYCODE_0')" />
                <van-cell title="KEYCODE_1" label="8" @click="setKeyCode('KEYCODE_1')" />
                <van-cell title="KEYCODE_HOME" label="3" @click="setKeyCode('KEYCODE_HOME')" />
                <van-cell title="KEYCODE_BACK" label="4" @click="setKeyCode('KEYCODE_BACK')" />
                <van-cell title="KEYCODE_MENU" label="82" @click="setKeyCode('KEYCODE_MENU')" />
                <van-cell title="KEYCODE_VOLUME_UP" label="24" @click="setKeyCode('KEYCODE_VOLUME_UP')" />
                <van-cell title="KEYCODE_VOLUME_DOWN" label="25" @click="setKeyCode('KEYCODE_VOLUME_DOWN')" />
                <van-cell title="KEYCODE_POWER" label="26" @click="setKeyCode('KEYCODE_POWER')" />
                <van-cell title="KEYCODE_CAMERA" label="27" @click="setKeyCode('KEYCODE_CAMERA')" />
            </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'KeysTest',
    data() {
        return {
            textInput: 'hello',
            keyCodeInput: 'KEYCODE_ENTER',
            showKeyCodeList: false
        };
    },
    methods: {
        // ==================== 基于无障碍服务的按键操作 ====================
        
        // 测试返回键
        async testBack() {
            try {
                const success = await richauto.keys.back();
                richauto.global.toastLog(`返回键${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('返回键失败: ' + err);
            }
        },
        
        // 测试 Home 键
        async testHome() {
            try {
                const success = await richauto.keys.home();
                richauto.global.toastLog(`Home键${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('Home键失败: ' + err);
            }
        },
        
        // 测试电源键菜单
        async testPowerDialog() {
            try {
                const success = await richauto.keys.powerDialog();
                richauto.global.toastLog(`电源键菜单${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('电源键菜单失败: ' + err);
            }
        },
        
        // 测试通知栏
        async testNotifications() {
            try {
                const success = await richauto.keys.notifications();
                richauto.global.toastLog(`通知栏${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('通知栏失败: ' + err);
            }
        },
        
        // 测试快速设置
        async testQuickSettings() {
            try {
                const success = await richauto.keys.quickSettings();
                richauto.global.toastLog(`快速设置${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('快速设置失败: ' + err);
            }
        },
        
        // 测试最近任务
        async testRecents() {
            try {
                const success = await richauto.keys.recents();
                richauto.global.toastLog(`最近任务${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('最近任务失败: ' + err);
            }
        },
        
        // 测试分屏
        async testSplitScreen() {
            try {
                const success = await richauto.keys.splitScreen();
                richauto.global.toastLog(`分屏${success ? '执行成功' : '执行失败'}`);
            } catch (err) {
                richauto.global.toastLog('分屏失败: ' + err);
            }
        },
        
        // ==================== Root 权限 - 基础按键 ====================
        
        // 测试 Root Home
        async testRootHome() {
            try {
                await richauto.keys.Home();
                richauto.global.toastLog('Root Home 执行完成');
            } catch (err) {
                richauto.global.toastLog('Root Home 失败: ' + err);
            }
        },
        
        // 测试 Root 返回
        async testRootBack() {
            try {
                await richauto.keys.Back();
                richauto.global.toastLog('Root 返回 执行完成');
            } catch (err) {
                richauto.global.toastLog('Root 返回 失败: ' + err);
            }
        },
        
        // 测试 Root 电源
        async testRootPower() {
            try {
                await richauto.keys.Power();
                richauto.global.toastLog('Root 电源 执行完成');
            } catch (err) {
                richauto.global.toastLog('Root 电源 失败: ' + err);
            }
        },
        
        // 测试 Root 菜单
        async testRootMenu() {
            try {
                await richauto.keys.Menu();
                richauto.global.toastLog('Root 菜单 执行完成');
            } catch (err) {
                richauto.global.toastLog('Root 菜单 失败: ' + err);
            }
        },
        
        // ==================== Root 权限 - 音量与相机 ====================
        
        // 测试音量上
        async testVolumeUp() {
            try {
                await richauto.keys.VolumeUp();
                richauto.global.toastLog('音量+ 执行完成');
            } catch (err) {
                richauto.global.toastLog('音量+ 失败: ' + err);
            }
        },
        
        // 测试音量下
        async testVolumeDown() {
            try {
                await richauto.keys.VolumeDown();
                richauto.global.toastLog('音量- 执行完成');
            } catch (err) {
                richauto.global.toastLog('音量- 失败: ' + err);
            }
        },
        
        // 测试照相键
        async testCamera() {
            try {
                await richauto.keys.Camera();
                richauto.global.toastLog('照相键 执行完成');
            } catch (err) {
                richauto.global.toastLog('照相键 失败: ' + err);
            }
        },
        
        // ==================== Root 权限 - 方向键 ====================
        
        // 测试上键
        async testUp() {
            try {
                await richauto.keys.Up();
                richauto.global.toastLog('上键 执行完成');
            } catch (err) {
                richauto.global.toastLog('上键 失败: ' + err);
            }
        },
        
        // 测试下键
        async testDown() {
            try {
                await richauto.keys.Down();
                richauto.global.toastLog('下键 执行完成');
            } catch (err) {
                richauto.global.toastLog('下键 失败: ' + err);
            }
        },
        
        // 测试左键
        async testLeft() {
            try {
                await richauto.keys.Left();
                richauto.global.toastLog('左键 执行完成');
            } catch (err) {
                richauto.global.toastLog('左键 失败: ' + err);
            }
        },
        
        // 测试右键
        async testRight() {
            try {
                await richauto.keys.Right();
                richauto.global.toastLog('右键 执行完成');
            } catch (err) {
                richauto.global.toastLog('右键 失败: ' + err);
            }
        },
        
        // 测试确定键
        async testOK() {
            try {
                await richauto.keys.OK();
                richauto.global.toastLog('OK键 执行完成');
            } catch (err) {
                richauto.global.toastLog('OK键 失败: ' + err);
            }
        },
        
        // ==================== Root 权限 - 文本与按键码 ====================
        
        // 测试输入文本
        async testText() {
            if (!this.textInput) {
                richauto.global.toastLog('请输入文本内容');
                return;
            }
            try {
                await richauto.keys.Text(this.textInput);
                richauto.global.toastLog(`已输入文本: ${this.textInput}`);
            } catch (err) {
                richauto.global.toastLog('输入文本失败: ' + err);
            }
        },
        
        // 测试按键码
        async testKeyCode() {
            if (!this.keyCodeInput) {
                richauto.global.toastLog('请输入按键码');
                return;
            }
            try {
                // 判断是数字还是字符串
                const code = isNaN(this.keyCodeInput) ? this.keyCodeInput : Number(this.keyCodeInput);
                await richauto.keys.KeyCode(code);
                richauto.global.toastLog(`已发送按键码: ${this.keyCodeInput}`);
            } catch (err) {
                richauto.global.toastLog('发送按键码失败: ' + err);
            }
        },
        
        // 设置按键码
        setKeyCode(keyCode) {
            this.keyCodeInput = keyCode;
            this.showKeyCodeList = false;
            richauto.global.toastLog(`已选择: ${keyCode}`);
        }
    }
};
</script>

