<template>
    <div>
        <van-cell-group title="颜色转换">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testToInt" style="margin: 8px;">测试 toInt</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testToHex" style="margin: 8px;">测试 toHex</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSummary" style="margin: 8px;">测试 summary</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="颜色分量">
            <van-row type="flex" justify="center">
                <van-button @click="testGetComponents" style="margin: 8px;">获取颜色分量</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testSetComponents" style="margin: 8px;">设置颜色分量</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="颜色合成">
            <van-row type="flex" justify="center">
                <van-button @click="testRgb" style="margin: 8px;">测试 RGB</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testArgb" style="margin: 8px;">测试 ARGB</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testHsv" style="margin: 8px;">测试 HSV</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="颜色分解">
            <van-row type="flex" justify="center">
                <van-button @click="testToRgb" style="margin: 8px;">转换为 RGB</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testToHsv" style="margin: 8px;">转换为 HSV</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="颜色比较">
            <van-row type="flex" justify="center">
                <van-button @click="testIsSimilar" style="margin: 8px;">测试相似度</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testIsEqual" style="margin: 8px;">测试相等</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="颜色常量">
            <van-row type="flex" justify="center">
                <van-button @click="testConstants" style="margin: 8px;">测试颜色常量</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="综合测试">
            <van-row type="flex" justify="center">
                <van-button type="success" @click="testColorManipulation" style="margin: 8px;">颜色处理综合测试</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'ColorTest',
    methods: {
        // ==================== 颜色转换 ====================
        
        // 测试 toInt
        async testToInt() {
            try {
                // 测试不同格式的颜色转换
                const hexColor = await richauto.color.toInt('#FF5733');
                richauto.global.toastLog(`Hex #FF5733 -> Int: ${hexColor}`);
                
                const shortHex = await richauto.color.toInt('#F57');
                richauto.global.toastLog(`Short Hex #F57 -> Int: ${shortHex}`);
                
                const namedColor = await richauto.color.toInt('orange');
                richauto.global.toastLog(`Named 'orange' -> Int: ${namedColor}`);
            } catch (err) {
                richauto.global.toastLog('toInt 测试失败: ' + err);
            }
        },
        
        // 测试 toHex
        async testToHex() {
            try {
                const hex1 = await richauto.color.toHex('#FFCC5500');
                richauto.global.toastLog(`#FFCC5500 -> ${hex1}`);
                
                const hex2 = await richauto.color.toHex('#C50');
                richauto.global.toastLog(`#C50 -> ${hex2}`);
                
                const hex3 = await richauto.color.toHex('blue');
                richauto.global.toastLog(`'blue' -> ${hex3}`);
                
                // 测试不同长度
                const hex8 = await richauto.color.toHex('#663399', 8);
                richauto.global.toastLog(`#663399 (长度8) -> ${hex8}`);
            } catch (err) {
                richauto.global.toastLog('toHex 测试失败: ' + err);
            }
        },
        
        // 测试 summary
        async testSummary() {
            try {
                const summary = await richauto.color.summary('#BE009688');
                richauto.global.toastLog(`颜色摘要: ${summary}`);
            } catch (err) {
                richauto.global.toastLog('summary 测试失败: ' + err);
            }
        },
        
        // ==================== 颜色分量 ====================
        
        // 获取颜色分量
        async testGetComponents() {
            try {
                const color = '#BE663399';
                const r = await richauto.color.red(color);
                const g = await richauto.color.green(color);
                const b = await richauto.color.blue(color);
                const a = await richauto.color.alpha(color);
                
                richauto.global.toastLog(`${color} 分量: R=${r}, G=${g}, B=${b}, A=${a}`);
            } catch (err) {
                richauto.global.toastLog('获取分量失败: ' + err);
            }
        },
        
        // 设置颜色分量
        async testSetComponents() {
            try {
                const color = '#663399';
                
                // 设置不同的分量
                const newColor1 = await richauto.color.setRed(color, 128);
                const hex1 = await richauto.color.toHex(newColor1);
                richauto.global.toastLog(`设置 R=128: ${hex1}`);
                
                const newColor2 = await richauto.color.setAlpha(color, 0.5);
                const hex2 = await richauto.color.toHex(newColor2, 8);
                richauto.global.toastLog(`设置 A=0.5: ${hex2}`);
            } catch (err) {
                richauto.global.toastLog('设置分量失败: ' + err);
            }
        },
        
        // ==================== 颜色合成 ====================
        
        // 测试 RGB
        async testRgb() {
            try {
                const color1 = await richauto.color.rgb(255, 128, 9);
                const hex1 = await richauto.color.toHex(color1);
                richauto.global.toastLog(`RGB(255,128,9) -> ${hex1}`);
                
                const color2 = await richauto.color.rgb([255, 128, 9]);
                const hex2 = await richauto.color.toHex(color2);
                richauto.global.toastLog(`RGB数组 -> ${hex2}`);
            } catch (err) {
                richauto.global.toastLog('RGB 测试失败: ' + err);
            }
        },
        
        // 测试 ARGB
        async testArgb() {
            try {
                const color = await richauto.color.argb(128, 255, 128, 9);
                const hex = await richauto.color.toHex(color, 8);
                richauto.global.toastLog(`ARGB(128,255,128,9) -> ${hex}`);
            } catch (err) {
                richauto.global.toastLog('ARGB 测试失败: ' + err);
            }
        },
        
        // 测试 HSV
        async testHsv() {
            try {
                const color = await richauto.color.hsv(90, 0.8, 0.64);
                const hex = await richauto.color.toHex(color);
                richauto.global.toastLog(`HSV(90,0.8,0.64) -> ${hex}`);
            } catch (err) {
                richauto.global.toastLog('HSV 测试失败: ' + err);
            }
        },
        
        // ==================== 颜色分解 ====================
        
        // 转换为 RGB
        async testToRgb() {
            try {
                const rgb = await richauto.color.toRgb('#663399');
                richauto.global.toastLog(`#663399 -> RGB: [${rgb.join(', ')}]`);
                
                const rgba = await richauto.color.toRgba('#BE663399');
                richauto.global.toastLog(`#BE663399 -> RGBA: [${rgba.join(', ')}]`);
            } catch (err) {
                richauto.global.toastLog('toRgb 测试失败: ' + err);
            }
        },
        
        // 转换为 HSV
        async testToHsv() {
            try {
                const hsv = await richauto.color.toHsv('#663399');
                richauto.global.toastLog(`#663399 -> HSV: [${hsv.map(v => v.toFixed(2)).join(', ')}]`);
            } catch (err) {
                richauto.global.toastLog('toHsv 测试失败: ' + err);
            }
        },
        
        // ==================== 颜色比较 ====================
        
        // 测试相似度
        async testIsSimilar() {
            try {
                const similar1 = await richauto.color.isSimilar('orange', 'dark-orange', 10);
                richauto.global.toastLog(`orange 和 dark-orange (阈值10): ${similar1}`);
                
                const similar2 = await richauto.color.isSimilar('orange', 'dark-orange', 5);
                richauto.global.toastLog(`orange 和 dark-orange (阈值5): ${similar2}`);
            } catch (err) {
                richauto.global.toastLog('isSimilar 测试失败: ' + err);
            }
        },
        
        // 测试相等
        async testIsEqual() {
            try {
                const equal1 = await richauto.color.isEqual('#FF0000', '#F00');
                richauto.global.toastLog(`#FF0000 == #F00: ${equal1}`);
                
                const equal2 = await richauto.color.isEqual('red', '#FF0000');
                richauto.global.toastLog(`'red' == #FF0000: ${equal2}`);
                
                const equal3 = await richauto.color.isEqual('#A1FF0000', '#A2FF0000', false);
                richauto.global.toastLog(`#A1FF0000 == #A2FF0000 (忽略Alpha): ${equal3}`);
            } catch (err) {
                richauto.global.toastLog('isEqual 测试失败: ' + err);
            }
        },
        
        // ==================== 颜色常量 ====================
        
        // 测试颜色常量
        async testConstants() {
            try {
                const black = await richauto.color.BLACK;
                const blackHex = await richauto.color.toHex(black);
                richauto.global.toastLog(`BLACK: ${blackHex}`);
                
                const red = await richauto.color.RED;
                const redHex = await richauto.color.toHex(red);
                richauto.global.toastLog(`RED: ${redHex}`);
                
                const orange = await richauto.color.ORANGE;
                const orangeHex = await richauto.color.toHex(orange);
                richauto.global.toastLog(`ORANGE: ${orangeHex}`);
            } catch (err) {
                richauto.global.toastLog('常量测试失败: ' + err);
            }
        },
        
        // ==================== 综合测试 ====================
        
        // 颜色处理综合测试
        async testColorManipulation() {
            try {
                richauto.global.toastLog('=== 颜色处理综合测试 ===');
                
                // 1. 创建一个颜色
                const originalColor = '#FF5733';
                richauto.global.toastLog(`原始颜色: ${originalColor}`);
                
                // 2. 获取各分量
                const r = await richauto.color.red(originalColor);
                const g = await richauto.color.green(originalColor);
                const b = await richauto.color.blue(originalColor);
                richauto.global.toastLog(`RGB 分量: (${r}, ${g}, ${b})`);
                
                // 3. 修改透明度
                const semiTransparent = await richauto.color.setAlpha(originalColor, 0.5);
                const semiHex = await richauto.color.toHex(semiTransparent, 8);
                richauto.global.toastLog(`半透明版本: ${semiHex}`);
                
                // 4. 修改颜色分量
                const modifiedColor = await richauto.color.setGreen(semiTransparent, 200);
                const modifiedHex = await richauto.color.toHex(modifiedColor, 8);
                richauto.global.toastLog(`修改G分量后: ${modifiedHex}`);
                
                // 5. 转换到 HSV
                const hsv = await richauto.color.toHsv(modifiedColor);
                richauto.global.toastLog(`HSV: [${hsv.map(v => v.toFixed(2)).join(', ')}]`);
                
                // 6. 计算亮度
                const lum = await richauto.color.luminance(modifiedColor);
                richauto.global.toastLog(`亮度: ${lum.toFixed(3)}`);
                
                // 7. 获取摘要
                const summary = await richauto.color.summary(modifiedColor);
                richauto.global.toastLog(`摘要: ${summary}`);
                
                richauto.global.toastLog('=== 测试完成 ===');
            } catch (err) {
                richauto.global.toastLog('综合测试失败: ' + err);
            }
        }
    }
};
</script>

