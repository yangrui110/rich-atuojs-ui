<template>
    <div>
        <van-cell-group title="通知状态检查">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testIsEnabled" style="margin: 8px;">检测通知是否启用</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testLaunchSettings" style="margin: 8px;">打开通知设置</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="简单通知">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testSimpleNotice" style="margin: 8px;">发送简单通知</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testNoticeWithTitle" style="margin: 8px;">发送带标题的通知</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testNoticeWithOptions" style="margin: 8px;">发送定制通知</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="通知管理">
            <van-row type="flex" justify="center">
                <van-button @click="testCoverableNotice" style="margin: 8px;">发送可覆盖通知</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testCancelNotice" style="margin: 8px;">取消上一条通知</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="通知配置">
            <van-row type="flex" justify="center">
                <van-button @click="testConfig" style="margin: 8px;">配置静音通知</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testConfiguredNotice" style="margin: 8px;">发送已配置的通知</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="通知渠道">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testCreateChannel" style="margin: 8px;">创建通知渠道</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testChannelContains" style="margin: 8px;">检查渠道是否存在</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetChannel" style="margin: 8px;">获取渠道信息</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetAllChannels" style="margin: 8px;">获取所有渠道</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSendToChannel" style="margin: 8px;">发送到指定渠道</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testRemoveChannel" style="margin: 8px;">删除渠道</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'NoticeTest',
    data() {
        return {
            lastNoticeId: null, // 存储最后一个通知的 ID
            testChannelId: 'test_channel_001' // 测试用的渠道 ID
        };
    },
    methods: {
        // ==================== 通知状态检查 ====================
        
        // 测试检测通知是否启用
        async testIsEnabled() {
            try {
                const enabled = await richauto.notice.isEnabled();
                richauto.global.toastLog(`通知状态: ${enabled ? '已启用' : '已禁用'}`);
            } catch (err) {
                richauto.global.toastLog('检测失败: ' + err);
            }
        },
        
        // 测试打开通知设置
        async testLaunchSettings() {
            try {
                await richauto.notice.launchSettings();
                richauto.global.toastLog('已跳转到通知设置页面');
            } catch (err) {
                richauto.global.toastLog('跳转失败: ' + err);
            }
        },
        
        // ==================== 简单通知 ====================
        
        // 测试发送简单通知
        async testSimpleNotice() {
            try {
                const id = await richauto.notice.send('Hello from Web UI!');
                this.lastNoticeId = id;
                richauto.global.toastLog(`通知已发送，ID: ${id}`);
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // 测试发送带标题的通知
        async testNoticeWithTitle() {
            try {
                const id = await richauto.notice.send('新消息', 'Hello from Web UI!');
                this.lastNoticeId = id;
                richauto.global.toastLog(`带标题的通知已发送，ID: ${id}`);
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // 测试发送定制通知
        async testNoticeWithOptions() {
            try {
                const id = await richauto.notice.send({
                    title: '定制通知',
                    content: '这是一条定制通知',
                    bigContent: '这是一条定制通知的详细内容\n支持多行文本\n来自 Web UI 的测试',
                    isSilent: true,
                    autoCancel: true
                });
                this.lastNoticeId = id;
                richauto.global.toastLog(`定制通知已发送，ID: ${id}`);
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // ==================== 通知管理 ====================
        
        // 测试发送可覆盖的通知
        async testCoverableNotice() {
            try {
                const fixedId = 999;
                
                // 发送第一条通知
                await richauto.notice.send('第一条消息', {
                    notificationId: fixedId
                });
                richauto.global.toastLog('第一条通知已发送');
                
                // 等待 2 秒
                await richauto.global.sleep(2000);
                
                // 发送第二条通知（会覆盖第一条）
                await richauto.notice.send('第二条消息（已覆盖）', {
                    notificationId: fixedId
                });
                richauto.global.toastLog('第二条通知已发送（覆盖了第一条）');
                
                this.lastNoticeId = fixedId;
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // 测试取消通知
        async testCancelNotice() {
            try {
                if (this.lastNoticeId === null) {
                    richauto.global.toastLog('没有可取消的通知，请先发送一条通知');
                    return;
                }
                
                await richauto.notice.cancel(this.lastNoticeId);
                richauto.global.toastLog(`已取消通知 ID: ${this.lastNoticeId}`);
                this.lastNoticeId = null;
            } catch (err) {
                richauto.global.toastLog('取消失败: ' + err);
            }
        },
        
        // ==================== 通知配置 ====================
        
        // 测试配置通知
        async testConfig() {
            try {
                await richauto.notice.config({
                    defaultIsSilent: true,
                    defaultAutoCancel: true
                });
                richauto.global.toastLog('已配置默认通知行为：静音 + 自动取消');
            } catch (err) {
                richauto.global.toastLog('配置失败: ' + err);
            }
        },
        
        // 测试发送已配置的通知
        async testConfiguredNotice() {
            try {
                const id = await richauto.notice.send('配置测试', '这是一条使用默认配置的通知');
                this.lastNoticeId = id;
                richauto.global.toastLog(`已发送配置通知，ID: ${id}`);
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // ==================== 通知渠道 ====================
        
        // 测试创建渠道
        async testCreateChannel() {
            try {
                const channelId = await richauto.notice.channel.create(this.testChannelId, {
                    name: '测试渠道',
                    description: '这是一个测试渠道，用于演示通知渠道功能',
                    importance: 3,
                    enableLights: true,
                    lightColor: 'blue',
                    enableVibration: true
                });
                richauto.global.toastLog(`渠道已创建: ${channelId}`);
            } catch (err) {
                richauto.global.toastLog('创建失败: ' + err);
            }
        },
        
        // 测试检查渠道是否存在
        async testChannelContains() {
            try {
                const exists = await richauto.notice.channel.contains(this.testChannelId);
                richauto.global.toastLog(`渠道 ${this.testChannelId} ${exists ? '存在' : '不存在'}`);
            } catch (err) {
                richauto.global.toastLog('检查失败: ' + err);
            }
        },
        
        // 测试获取渠道信息
        async testGetChannel() {
            try {
                const channel = await richauto.notice.channel.get(this.testChannelId);
                if (channel) {
                    richauto.global.toastLog(`渠道信息:\nID: ${channel.id}\n名称: ${channel.name}\n优先级: ${channel.importance}`);
                } else {
                    richauto.global.toastLog(`渠道 ${this.testChannelId} 不存在`);
                }
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // 测试获取所有渠道
        async testGetAllChannels() {
            try {
                const channels = await richauto.notice.channel.getAll();
                if (channels.length === 0) {
                    richauto.global.toastLog('当前没有任何渠道');
                } else {
                    let message = `共有 ${channels.length} 个渠道:\n`;
                    channels.forEach((ch, index) => {
                        message += `${index + 1}. ${ch.name} (${ch.id})\n`;
                    });
                    richauto.global.toastLog(message);
                }
            } catch (err) {
                richauto.global.toastLog('获取失败: ' + err);
            }
        },
        
        // 测试发送到指定渠道
        async testSendToChannel() {
            try {
                // 先检查渠道是否存在
                const exists = await richauto.notice.channel.contains(this.testChannelId);
                if (!exists) {
                    richauto.global.toastLog('渠道不存在，请先创建渠道');
                    return;
                }
                
                const id = await richauto.notice.send({
                    title: '渠道通知',
                    content: '这是发送到测试渠道的通知',
                    channelId: this.testChannelId
                });
                this.lastNoticeId = id;
                richauto.global.toastLog(`通知已发送到渠道 ${this.testChannelId}`);
            } catch (err) {
                richauto.global.toastLog('发送失败: ' + err);
            }
        },
        
        // 测试删除渠道
        async testRemoveChannel() {
            try {
                const removed = await richauto.notice.channel.remove(this.testChannelId);
                if (removed) {
                    richauto.global.toastLog(`渠道 ${this.testChannelId} 已删除`);
                } else {
                    richauto.global.toastLog(`渠道 ${this.testChannelId} 不存在或已被删除`);
                }
            } catch (err) {
                richauto.global.toastLog('删除失败: ' + err);
            }
        }
    }
};
</script>


