<template>
    <div>
        <van-cell-group title="Base64 编码">
            <van-field
                v-model="encodeInput"
                type="textarea"
                label="待编码文本"
                placeholder="输入要编码的文本"
                rows="3"
                autosize
            />
            <van-field
                v-model="encodeEncoding"
                label="字符编码"
                placeholder="UTF-8"
                input-align="right"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="showEncodingPicker = true">选择</van-button>
                </template>
            </van-field>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testEncode" style="margin: 8px;">编码</van-button>
                <van-button @click="clearEncode" style="margin: 8px;">清空</van-button>
            </van-row>
            <van-field
                v-model="encodeResult"
                type="textarea"
                label="编码结果"
                placeholder="编码后的 Base64 字符串"
                rows="3"
                autosize
                readonly
            >
                <template #button>
                    <van-button v-if="encodeResult" size="small" @click="copyToClipboard(encodeResult)">复制</van-button>
                </template>
            </van-field>
        </van-cell-group>
        
        <van-cell-group title="Base64 解码">
            <van-field
                v-model="decodeInput"
                type="textarea"
                label="待解码文本"
                placeholder="输入 Base64 字符串"
                rows="3"
                autosize
            />
            <van-field
                v-model="decodeEncoding"
                label="字符编码"
                placeholder="UTF-8"
                input-align="right"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="showDecodingPicker = true">选择</van-button>
                </template>
            </van-field>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testDecode" style="margin: 8px;">解码</van-button>
                <van-button @click="clearDecode" style="margin: 8px;">清空</van-button>
            </van-row>
            <van-field
                v-model="decodeResult"
                type="textarea"
                label="解码结果"
                placeholder="解码后的文本"
                rows="3"
                autosize
                readonly
            >
                <template #button>
                    <van-button v-if="decodeResult" size="small" @click="copyToClipboard(decodeResult)">复制</van-button>
                </template>
            </van-field>
        </van-cell-group>
        
        <van-cell-group title="快速测试">
            <van-row type="flex" justify="center">
                <van-button @click="testSimpleString" style="margin: 8px;">测试简单字符串</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testChineseString" style="margin: 8px;">测试中文字符串</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testDifferentEncodings" style="margin: 8px;">测试不同编码</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testReversibility" style="margin: 8px;">测试可逆性</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="实用工具">
            <van-row type="flex" justify="center">
                <van-button type="info" @click="encodeToDecodeTransfer" style="margin: 8px;">编码结果 → 解码输入</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="info" @click="decodeToEncodeTransfer" style="margin: 8px;">解码结果 → 编码输入</van-button>
            </van-row>
        </van-cell-group>
        
        <!-- 编码选择器 -->
        <van-popup v-model="showEncodingPicker" position="bottom">
            <van-picker
                :columns="encodingOptions"
                @confirm="onEncodingConfirm"
                @cancel="showEncodingPicker = false"
            />
        </van-popup>
        
        <!-- 解码选择器 -->
        <van-popup v-model="showDecodingPicker" position="bottom">
            <van-picker
                :columns="encodingOptions"
                @confirm="onDecodingConfirm"
                @cancel="showDecodingPicker = false"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'Base64Test',
    data() {
        return {
            encodeInput: '',
            encodeEncoding: 'UTF-8',
            encodeResult: '',
            decodeInput: '',
            decodeEncoding: 'UTF-8',
            decodeResult: '',
            showEncodingPicker: false,
            showDecodingPicker: false,
            encodingOptions: [
                'UTF-8',
                'UTF-16',
                'UTF-16BE',
                'UTF-16LE',
                'US-ASCII',
                'ISO-8859-1'
            ]
        };
    },
    methods: {
        // ==================== Base64 编码 ====================
        
        async testEncode() {
            if (!this.encodeInput) {
                richauto.global.toastLog('请输入要编码的文本');
                return;
            }
            
            try {
                const encoding = this.encodeEncoding || 'UTF-8';
                const result = await richauto.base64.encode(this.encodeInput, encoding);
                
                if (result.error) {
                    richauto.global.toastLog('编码失败: ' + result.error);
                    this.encodeResult = '';
                } else {
                    this.encodeResult = result;
                    richauto.global.toastLog('编码成功!');
                }
            } catch (err) {
                richauto.global.toastLog('编码失败: ' + err);
                console.error(err);
            }
        },
        
        clearEncode() {
            this.encodeInput = '';
            this.encodeResult = '';
        },
        
        // ==================== Base64 解码 ====================
        
        async testDecode() {
            if (!this.decodeInput) {
                richauto.global.toastLog('请输入要解码的 Base64 字符串');
                return;
            }
            
            try {
                const encoding = this.decodeEncoding || 'UTF-8';
                const result = await richauto.base64.decode(this.decodeInput, encoding);
                
                if (result.error) {
                    richauto.global.toastLog('解码失败: ' + result.error);
                    this.decodeResult = '';
                } else {
                    this.decodeResult = result;
                    richauto.global.toastLog('解码成功!');
                }
            } catch (err) {
                richauto.global.toastLog('解码失败: ' + err);
                console.error(err);
            }
        },
        
        clearDecode() {
            this.decodeInput = '';
            this.decodeResult = '';
        },
        
        // ==================== 快速测试 ====================
        
        async testSimpleString() {
            try {
                const testStr = 'hello';
                richauto.global.toastLog('测试字符串: ' + testStr);
                
                const encoded = await richauto.base64.encode(testStr, 'UTF-8');
                richauto.global.toastLog('编码结果: ' + encoded);
                
                const decoded = await richauto.base64.decode(encoded, 'UTF-8');
                richauto.global.toastLog('解码结果: ' + decoded);
                
                if (decoded === testStr) {
                    richauto.global.toastLog('✓ 可逆性测试通过!');
                } else {
                    richauto.global.toastLog('✗ 可逆性测试失败!');
                }
                
                this.encodeInput = testStr;
                this.encodeResult = encoded;
            } catch (err) {
                richauto.global.toastLog('测试失败: ' + err);
            }
        },
        
        async testChineseString() {
            try {
                const testStr = '简体中文';
                richauto.global.toastLog('测试字符串: ' + testStr);
                
                const encoded = await richauto.base64.encode(testStr, 'UTF-8');
                richauto.global.toastLog('编码结果: ' + encoded);
                
                const decoded = await richauto.base64.decode(encoded, 'UTF-8');
                richauto.global.toastLog('解码结果: ' + decoded);
                
                if (decoded === testStr) {
                    richauto.global.toastLog('✓ 中文可逆性测试通过!');
                } else {
                    richauto.global.toastLog('✗ 中文可逆性测试失败!');
                }
                
                this.encodeInput = testStr;
                this.encodeResult = encoded;
            } catch (err) {
                richauto.global.toastLog('测试失败: ' + err);
            }
        },
        
        async testDifferentEncodings() {
            try {
                const testStr = 'hello';
                richauto.global.toastLog('测试不同编码方式...');
                
                const encodings = ['UTF-8', 'UTF-16', 'UTF-16BE', 'UTF-16LE', 'US-ASCII', 'ISO-8859-1'];
                let results = [];
                
                for (let encoding of encodings) {
                    const encoded = await richauto.base64.encode(testStr, encoding);
                    results.push(encoding + ': ' + encoded);
                }
                
                console.log('不同编码的结果:');
                results.forEach(r => console.log(r));
                richauto.global.toastLog('测试完成，请查看控制台');
            } catch (err) {
                richauto.global.toastLog('测试失败: ' + err);
            }
        },
        
        async testReversibility() {
            try {
                richauto.global.toastLog('测试可逆性...');
                
                const tests = [
                    { text: 'orange', encoding: 'UTF-8' },
                    { text: '简体中文', encoding: 'UTF-8' },
                    { text: 'Hello World!', encoding: 'UTF-8' },
                    { text: '12345', encoding: 'UTF-8' }
                ];
                
                let allPassed = true;
                
                for (let test of tests) {
                    const encoded = await richauto.base64.encode(test.text, test.encoding);
                    const decoded = await richauto.base64.decode(encoded, test.encoding);
                    
                    const passed = decoded === test.text;
                    allPassed = allPassed && passed;
                    
                    console.log(`测试: "${test.text}" (${test.encoding})`);
                    console.log(`  编码: ${encoded}`);
                    console.log(`  解码: ${decoded}`);
                    console.log(`  结果: ${passed ? '✓ 通过' : '✗ 失败'}`);
                }
                
                if (allPassed) {
                    richauto.global.toastLog('✓ 所有可逆性测试通过!');
                } else {
                    richauto.global.toastLog('✗ 部分可逆性测试失败');
                }
            } catch (err) {
                richauto.global.toastLog('测试失败: ' + err);
            }
        },
        
        // ==================== 实用工具 ====================
        
        encodeToDecodeTransfer() {
            if (!this.encodeResult) {
                richauto.global.toastLog('没有编码结果可以传递');
                return;
            }
            this.decodeInput = this.encodeResult;
            this.decodeEncoding = this.encodeEncoding;
            richauto.global.toastLog('已将编码结果传递到解码输入');
        },
        
        decodeToEncodeTransfer() {
            if (!this.decodeResult) {
                richauto.global.toastLog('没有解码结果可以传递');
                return;
            }
            this.encodeInput = this.decodeResult;
            this.encodeEncoding = this.decodeEncoding;
            richauto.global.toastLog('已将解码结果传递到编码输入');
        },
        
        copyToClipboard(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    richauto.global.toastLog('已复制到剪贴板');
                }).catch(() => {
                    richauto.global.toastLog('复制失败');
                });
            } else {
                richauto.global.toastLog('浏览器不支持剪贴板操作');
            }
        },
        
        // ==================== 选择器回调 ====================
        
        onEncodingConfirm(value) {
            this.encodeEncoding = value;
            this.showEncodingPicker = false;
        },
        
        onDecodingConfirm(value) {
            this.decodeEncoding = value;
            this.showDecodingPicker = false;
        }
    }
};
</script>

