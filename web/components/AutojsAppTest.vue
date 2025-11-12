<template>
    <div>
        <van-cell-group title="语言设置">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testGetLanguage" style="margin: 8px;">获取语言对象</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetLanguageTag" style="margin: 8px;">获取语言标签</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="Root 权限">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testIsRootAvailable" style="margin: 8px;">检查 Root 权限</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetRootMode" style="margin: 8px;">获取 Root 模式</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSetRootMode('auto')" style="margin: 8px;">设置自动模式</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testSetRootMode('root')" style="margin: 8px;">设置强制 Root</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="权限状态">
            <van-row type="flex" justify="center">
                <van-button @click="testCanModifySystemSettings" style="margin: 8px;">修改系统设置权限</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testCanWriteSecureSettings" style="margin: 8px;">修改安全设置权限</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testCanDisplayOverOtherApps" style="margin: 8px;">悬浮窗权限</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testAllPermissions" style="margin: 8px;">检查所有权限</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="版本信息">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testVersionInfo" style="margin: 8px;">获取版本信息</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testVersionComparison" style="margin: 8px;">版本比较测试</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="主题颜色">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testThemeColor" style="margin: 8px;">获取主题颜色</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="applyThemeColor" style="margin: 8px;">应用主题颜色</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="R 资源访问">
            <van-row type="flex" justify="center">
                <van-button @click="testRResources" style="margin: 8px;">测试 R 资源</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'AutojsAppTest',
    methods: {
        // ==================== 语言设置测试 ====================
        
        async testGetLanguage() {
            try {
                const language = await richauto.getLanguage();
                richauto.global.toastLog(
                    `语言对象信息:\n` +
                    `语言标签: ${language.languageTag}\n` +
                    `显示名称: ${language.displayName}\n` +
                    `语言: ${language.language}\n` +
                    `国家: ${language.country}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testGetLanguageTag() {
            try {
                const tag = await richauto.getLanguageTag();
                richauto.global.toastLog(`语言标签: ${tag}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        // ==================== Root 权限测试 ====================
        
        async testIsRootAvailable() {
            try {
                const isAvailable = await richauto.isRootAvailable();
                richauto.global.toastLog(`Root 权限可用: ${isAvailable ? '是' : '否'}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testGetRootMode() {
            try {
                const mode = await richauto.getRootMode();
                const modeMap = {
                    'AUTO_DETECT': '自动检测',
                    'FORCE_ROOT': '强制 Root 模式',
                    'FORCE_NON_ROOT': '强制非 Root 模式'
                };
                richauto.global.toastLog(`Root 模式: ${modeMap[mode] || mode}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testSetRootMode(mode) {
            try {
                const result = await richauto.setRootMode(mode, false);
                const currentMode = await richauto.getRootMode();
                const modeMap = {
                    'auto': '自动检测',
                    'root': '强制 Root 模式',
                    'non-root': '强制非 Root 模式',
                    'AUTO_DETECT': '自动检测',
                    'FORCE_ROOT': '强制 Root 模式',
                    'FORCE_NON_ROOT': '强制非 Root 模式'
                };
                richauto.global.toastLog(
                    `设置结果: ${result ? '成功' : '失败'}\n` +
                    `当前模式: ${modeMap[currentMode] || currentMode}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        // ==================== 权限状态测试 ====================
        
        async testCanModifySystemSettings() {
            try {
                const can = await richauto.canModifySystemSettings();
                richauto.global.toastLog(`修改系统设置权限: ${can ? '已授予' : '未授予'}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testCanWriteSecureSettings() {
            try {
                const can = await richauto.canWriteSecureSettings();
                richauto.global.toastLog(`修改安全设置权限: ${can ? '已授予' : '未授予'}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testCanDisplayOverOtherApps() {
            try {
                const can = await richauto.canDisplayOverOtherApps();
                richauto.global.toastLog(`显示在其他应用上层权限: ${can ? '已授予' : '未授予'}`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testAllPermissions() {
            try {
                const root = await richauto.isRootAvailable();
                const systemSettings = await richauto.canModifySystemSettings();
                const secureSettings = await richauto.canWriteSecureSettings();
                const overlay = await richauto.canDisplayOverOtherApps();
                
                richauto.global.toastLog(
                    `权限状态:\n` +
                    `Root 权限: ${root ? '✓' : '✗'}\n` +
                    `修改系统设置: ${systemSettings ? '✓' : '✗'}\n` +
                    `修改安全设置: ${secureSettings ? '✓' : '✗'}\n` +
                    `悬浮窗显示: ${overlay ? '✓' : '✗'}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        // ==================== 版本信息测试 ====================
        
        async testVersionInfo() {
            try {
                const versionName = await richauto.versionName;
                const versionCode = await richauto.versionCode;
                const versionDate = await richauto.versionDate;
                
                richauto.global.toastLog(
                    `版本信息:\n` +
                    `版本名称: ${versionName}\n` +
                    `版本号: ${versionCode}\n` +
                    `版本日期: ${versionDate}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async testVersionComparison() {
            try {
                const currentVersion = await richauto.version.name;
                
                const isEqual620 = await richauto.version.isEqual('6.2.0');
                const isHigher610 = await richauto.version.isHigherThan('6.1.0');
                const isLower700 = await richauto.version.isLowerThan('7.0.0');
                const isAtLeast620 = await richauto.version.isAtLeast('6.2.0', true);
                
                richauto.global.toastLog(
                    `版本比较测试:\n` +
                    `当前版本: ${currentVersion}\n\n` +
                    `== 6.2.0: ${isEqual620 ? '是' : '否'}\n` +
                    `> 6.1.0: ${isHigher610 ? '是' : '否'}\n` +
                    `< 7.0.0: ${isLower700 ? '是' : '否'}\n` +
                    `>= 6.2.0 (忽略后缀): ${isAtLeast620 ? '是' : '否'}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        // ==================== 主题颜色测试 ====================
        
        async testThemeColor() {
            try {
                const primary = await richauto.themeColor.getColorPrimary();
                const primaryDark = await richauto.themeColor.getColorPrimaryDark();
                const accent = await richauto.themeColor.getColorAccent();
                
                // 转换为 16 进制颜色
                const toHex = (color) => {
                    const hex = (color >>> 0).toString(16).padStart(8, '0');
                    return `#${hex.substring(2)}${hex.substring(0, 2)}`;  // ARGB -> #RRGGBB
                };
                
                richauto.global.toastLog(
                    `主题色:\n` +
                    `Primary: ${toHex(primary)}\n` +
                    `Primary Dark: ${toHex(primaryDark)}\n` +
                    `Accent: ${toHex(accent)}`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        async applyThemeColor() {
            try {
                const primary = await richauto.themeColor.getColorPrimary();
                const toHex = (color) => {
                    const hex = (color >>> 0).toString(16).padStart(8, '0');
                    return `#${hex.substring(2)}${hex.substring(0, 2)}`;
                };
                
                const colorHex = toHex(primary);
                // 应用到页面元素（示例）
                document.body.style.setProperty('--primary-color', colorHex);
                
                richauto.global.toastLog(`主题色 ${colorHex} 已应用到页面`);
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
        
        // ==================== R 资源测试 ====================
        
        async testRResources() {
            try {
                // 测试获取字符串资源
                const appName = await richauto.R.string('app_name');
                
                richauto.global.toastLog(
                    `R 资源测试:\n` +
                    `app_name 字符串: ${appName || '未找到'}\n\n` +
                    `注意: 需要根据 AutoJS6 的实际资源名称调用`
                );
            } catch (e) {
                richauto.global.toastLog(`错误: ${e.message}`);
            }
        },
    }
};
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>

