<template>
    <div>
        <van-cell-group title="GET 请求">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testGetBaidu" style="margin: 8px;">测试 GET 百度</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetWithHeaders" style="margin: 8px;">带请求头的 GET</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testGetGithub" style="margin: 8px;">测试 GET GitHub</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="POST 请求">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testPostForm" style="margin: 8px;">测试 POST 表单</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testPostJson" style="margin: 8px;">测试 POST JSON</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="API 测试">
            <van-field
                v-model="testUrl"
                label="测试 URL"
                placeholder="输入要测试的 URL"
                input-align="right"
            />
            <van-row type="flex" justify="center">
                <van-button type="info" @click="testCustomUrl" style="margin: 8px;">发送 GET 请求</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="JSON API 测试">
            <van-field
                v-model="jsonApiUrl"
                label="API URL"
                placeholder="JSON API 地址"
                input-align="right"
            />
            <van-field
                v-model="jsonApiData"
                type="textarea"
                label="POST 数据"
                placeholder='{"key": "value"}'
                rows="3"
                autosize
            />
            <van-row type="flex" justify="center">
                <van-button @click="testJsonApi" style="margin: 8px;">发送 JSON 请求</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="响应信息" v-if="lastResponse">
            <van-cell title="状态码" :value="String(lastResponse.statusCode)" />
            <van-cell title="状态消息" :value="lastResponse.statusMessage" />
            <van-cell title="Content-Type" :value="lastResponse.contentType || '无'" />
            <van-cell 
                title="响应体" 
                is-link 
                @click="showResponseBody"
                :value="lastResponse.body ? (lastResponse.body.length > 20 ? lastResponse.body.substring(0, 20) + '...' : lastResponse.body) : '无'"
            />
        </van-cell-group>
        
        <!-- 响应体对话框 -->
        <van-dialog
            v-model="showDialog"
            title="响应内容"
            :message="dialogMessage"
            confirmButtonText="复制"
            cancelButtonText="关闭"
            show-cancel-button
            @confirm="copyResponse"
        />
    </div>
</template>

<script>
export default {
    name: 'HttpTest',
    data() {
        return {
            lastResponse: null,
            testUrl: 'http://httpbin.org/get',
            jsonApiUrl: 'http://httpbin.org/post',
            jsonApiData: '{"test": "value", "number": 123}',
            showDialog: false,
            dialogMessage: ''
        };
    },
    methods: {
        // ==================== GET 请求测试 ====================
        
        // 测试 GET 百度
        async testGetBaidu() {
            try {
                richauto.global.toastLog('正在请求百度...');
                
                const response = await richauto.http.get('http://www.baidu.com');
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('请求成功! 状态码: ' + response.statusCode);
                } else {
                    richauto.global.toastLog('请求失败: ' + response.statusCode + ' ' + response.statusMessage);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
                console.error(err);
            }
        },
        
        // 测试带请求头的 GET
        async testGetWithHeaders() {
            try {
                richauto.global.toastLog('正在发送带自定义请求头的 GET 请求...');
                
                const response = await richauto.http.get('http://httpbin.org/headers', {
                    headers: {
                        'User-Agent': 'AutoJS6-Test/1.0',
                        'Accept': 'application/json',
                        'Custom-Header': 'Test-Value'
                    }
                });
                
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('请求成功!');
                    if (response.bodyJson) {
                        console.log('响应 JSON:', JSON.stringify(response.bodyJson, null, 2));
                    }
                } else {
                    richauto.global.toastLog('请求失败: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
                console.error(err);
            }
        },
        
        // 测试 GET GitHub
        async testGetGithub() {
            try {
                richauto.global.toastLog('正在请求 GitHub API...');
                
                const response = await richauto.http.get('https://api.github.com/zen');
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('GitHub 禅语: ' + response.body);
                } else {
                    richauto.global.toastLog('请求失败: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
            }
        },
        
        // ==================== POST 请求测试 ====================
        
        // 测试 POST 表单
        async testPostForm() {
            try {
                richauto.global.toastLog('正在发送 POST 表单请求...');
                
                const response = await richauto.http.post('http://httpbin.org/post', {
                    username: 'testuser',
                    password: 'testpass',
                    email: 'test@example.com'
                });
                
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('POST 请求成功!');
                    if (response.bodyJson) {
                        console.log('服务器接收到的表单:', response.bodyJson.form);
                    }
                } else {
                    richauto.global.toastLog('请求失败: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
            }
        },
        
        // 测试 POST JSON
        async testPostJson() {
            try {
                richauto.global.toastLog('正在发送 POST JSON 请求...');
                
                const response = await richauto.http.postJson('http://httpbin.org/post', {
                    name: 'AutoJS6',
                    version: '6.0.0',
                    features: ['自动化', 'WebView', 'HTTP'],
                    timestamp: Date.now()
                });
                
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('POST JSON 请求成功!');
                    if (response.bodyJson) {
                        console.log('服务器接收到的 JSON:', response.bodyJson.json);
                    }
                } else {
                    richauto.global.toastLog('请求失败: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
            }
        },
        
        // ==================== 自定义测试 ====================
        
        // 测试自定义 URL
        async testCustomUrl() {
            if (!this.testUrl) {
                richauto.global.toastLog('请输入测试 URL');
                return;
            }
            
            try {
                richauto.global.toastLog('正在请求: ' + this.testUrl);
                
                const response = await richauto.http.get(this.testUrl);
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('请求成功!');
                } else {
                    richauto.global.toastLog('状态码: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
            }
        },
        
        // 测试 JSON API
        async testJsonApi() {
            if (!this.jsonApiUrl) {
                richauto.global.toastLog('请输入 API URL');
                return;
            }
            
            try {
                richauto.global.toastLog('正在发送 JSON 请求...');
                
                // 解析 JSON 数据
                let data = {};
                if (this.jsonApiData) {
                    try {
                        data = JSON.parse(this.jsonApiData);
                    } catch (e) {
                        richauto.global.toastLog('JSON 格式错误: ' + e.message);
                        return;
                    }
                }
                
                const response = await richauto.http.postJson(this.jsonApiUrl, data);
                this.lastResponse = response;
                
                if (response.statusCode === 200) {
                    richauto.global.toastLog('请求成功!');
                } else {
                    richauto.global.toastLog('状态码: ' + response.statusCode);
                }
            } catch (err) {
                richauto.global.toastLog('请求失败: ' + err);
            }
        },
        
        // ==================== 响应处理 ====================
        
        // 显示响应体
        showResponseBody() {
            if (!this.lastResponse || !this.lastResponse.body) {
                richauto.global.toastLog('没有响应内容');
                return;
            }
            
            let message = this.lastResponse.body;
            
            // 如果是 JSON，格式化显示
            if (this.lastResponse.bodyJson) {
                message = JSON.stringify(this.lastResponse.bodyJson, null, 2);
            }
            
            // 限制显示长度
            if (message.length > 1000) {
                message = message.substring(0, 1000) + '\n\n... (内容过长，已截断)';
            }
            
            this.dialogMessage = message;
            this.showDialog = true;
        },
        
        // 复制响应内容
        copyResponse() {
            if (!this.lastResponse || !this.lastResponse.body) {
                richauto.global.toastLog('没有可复制的内容');
                return;
            }
            
            // 这里需要调用系统剪贴板功能
            // 由于是在 WebView 中，我们使用 navigator.clipboard
            const content = this.lastResponse.bodyJson 
                ? JSON.stringify(this.lastResponse.bodyJson, null, 2)
                : this.lastResponse.body;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(content).then(() => {
                    richauto.global.toastLog('已复制到剪贴板');
                }).catch(() => {
                    richauto.global.toastLog('复制失败');
                });
            } else {
                richauto.global.toastLog('浏览器不支持剪贴板操作');
            }
        }
    }
};
</script>

