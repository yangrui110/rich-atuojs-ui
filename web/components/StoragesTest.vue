<template>
    <div>
        <van-cell-group title="本地存储 - 基本操作">
            <van-field v-model="storageName" label="存储名称" placeholder="请输入存储名称" />
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testCreate" style="margin: 8px;">创建/获取存储</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testRemove" style="margin: 8px;">删除存储</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="数据操作">
            <van-field v-model="dataKey" label="键名" placeholder="请输入键名" />
            <van-field v-model="dataValue" label="值" placeholder="请输入值" />
            <van-row type="flex" justify="center">
                <van-button @click="testPut" style="margin: 8px;">存入数据</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testGet" style="margin: 8px;">读取数据</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testContains" style="margin: 8px;">检查键是否存在</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testRemoveKey" style="margin: 8px;">删除键</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="warning" @click="testClear" style="margin: 8px;">清空所有数据</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="复杂数据类型测试">
            <van-row type="flex" justify="center">
                <van-button @click="testComplexTypes" style="margin: 8px;">测试复杂类型</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testReadComplexTypes" style="margin: 8px;">读取复杂类型</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="多存储隔离测试">
            <van-row type="flex" justify="center">
                <van-button @click="testMultiStorage" style="margin: 8px;">测试多存储隔离</van-button>
            </van-row>
        </van-cell-group>
        
        <van-cell-group title="实际应用示例">
            <van-row type="flex" justify="center">
                <van-button type="primary" @click="testAppConfig" style="margin: 8px;">应用配置示例</van-button>
            </van-row>
            <van-row type="flex" justify="center">
                <van-button @click="testUserData" style="margin: 8px;">用户数据示例</van-button>
            </van-row>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'StoragesTest',
    data() {
        return {
            storageName: 'test-storage',
            dataKey: 'testKey',
            dataValue: 'testValue',
            currentStorage: null
        };
    },
    methods: {
        // ==================== 基本操作 ====================
        
        // 创建或获取存储
        testCreate() {
            try {
                this.currentStorage = richauto.storages.create(this.storageName);
                richauto.global.toastLog(`存储 "${this.storageName}" 创建成功`);
            } catch (err) {
                richauto.global.toastLog('创建失败: ' + err);
            }
        },
        
        // 删除存储
        async testRemove() {
            try {
                const existed = await richauto.storages.remove(this.storageName);
                richauto.global.toastLog(`删除存储 "${this.storageName}": ${existed ? '存在并已删除' : '不存在'}`);
                this.currentStorage = null;
            } catch (err) {
                richauto.global.toastLog('删除失败: ' + err);
            }
        },
        
        // ==================== 数据操作 ====================
        
        // 存入数据
        async testPut() {
            if (!this.currentStorage) {
                this.currentStorage = richauto.storages.create(this.storageName);
            }
            
            try {
                // 尝试将字符串解析为 JSON，支持输入对象/数组
                let value = this.dataValue;
                try {
                    value = JSON.parse(this.dataValue);
                } catch (e) {
                    // 如果不是有效的 JSON，就当作字符串处理
                }
                
                await this.currentStorage.put(this.dataKey, value);
                richauto.global.toastLog(`已存入: ${this.dataKey} = ${this.dataValue}`);
            } catch (err) {
                richauto.global.toastLog('存入失败: ' + err);
            }
        },
        
        // 读取数据
        async testGet() {
            if (!this.currentStorage) {
                this.currentStorage = richauto.storages.create(this.storageName);
            }
            
            try {
                const value = await this.currentStorage.get(this.dataKey);
                const displayValue = typeof value === 'object' ? JSON.stringify(value) : value;
                richauto.global.toastLog(`读取 ${this.dataKey}: ${displayValue}`);
            } catch (err) {
                richauto.global.toastLog('读取失败: ' + err);
            }
        },
        
        // 检查键是否存在
        async testContains() {
            if (!this.currentStorage) {
                this.currentStorage = richauto.storages.create(this.storageName);
            }
            
            try {
                const exists = await this.currentStorage.contains(this.dataKey);
                richauto.global.toastLog(`键 "${this.dataKey}" ${exists ? '存在' : '不存在'}`);
            } catch (err) {
                richauto.global.toastLog('检查失败: ' + err);
            }
        },
        
        // 删除键
        async testRemoveKey() {
            if (!this.currentStorage) {
                this.currentStorage = richauto.storages.create(this.storageName);
            }
            
            try {
                await this.currentStorage.remove(this.dataKey);
                richauto.global.toastLog(`已删除键: ${this.dataKey}`);
            } catch (err) {
                richauto.global.toastLog('删除失败: ' + err);
            }
        },
        
        // 清空所有数据
        async testClear() {
            if (!this.currentStorage) {
                this.currentStorage = richauto.storages.create(this.storageName);
            }
            
            try {
                await this.currentStorage.clear();
                richauto.global.toastLog('已清空所有数据');
            } catch (err) {
                richauto.global.toastLog('清空失败: ' + err);
            }
        },
        
        // ==================== 复杂数据类型测试 ====================
        
        // 测试复杂类型
        async testComplexTypes() {
            const sto = richauto.storages.create('complex-test');
            
            try {
                // 数字
                await sto.put('number', 12345);
                // 布尔值
                await sto.put('boolean', true);
                // 字符串
                await sto.put('string', 'Hello World');
                // null
                await sto.put('null', null);
                // 数组
                await sto.put('array', [1, 2, 3, 'four', true]);
                // 对象
                await sto.put('object', { name: '张三', age: 25, hobbies: ['读书', '旅游'] });
                
                richauto.global.toastLog('已存入所有复杂类型数据');
            } catch (err) {
                richauto.global.toastLog('存入失败: ' + err);
            }
        },
        
        // 读取复杂类型
        async testReadComplexTypes() {
            const sto = richauto.storages.create('complex-test');
            
            try {
                const number = await sto.get('number');
                const boolean = await sto.get('boolean');
                const string = await sto.get('string');
                const nullValue = await sto.get('null');
                const array = await sto.get('array');
                const object = await sto.get('object');
                
                console.log('number:', number, typeof number);
                console.log('boolean:', boolean, typeof boolean);
                console.log('string:', string, typeof string);
                console.log('null:', nullValue, typeof nullValue);
                console.log('array:', array, Array.isArray(array));
                console.log('object:', object, typeof object);
                
                richauto.global.toastLog('已读取所有数据，请查看控制台');
            } catch (err) {
                richauto.global.toastLog('读取失败: ' + err);
            }
        },
        
        // ==================== 多存储隔离测试 ====================
        
        // 测试多存储隔离
        async testMultiStorage() {
            try {
                const stoFruit = richauto.storages.create('fruit');
                const stoPhone = richauto.storages.create('phone');
                
                // 两个存储都使用相同的键名
                await stoFruit.put('apple', 7);
                await stoPhone.put('apple', 3);
                
                const fruitApple = await stoFruit.get('apple');
                const phoneApple = await stoPhone.get('apple');
                
                richauto.global.toastLog(
                    `存储隔离测试:\n` +
                    `fruit.apple = ${fruitApple}\n` +
                    `phone.apple = ${phoneApple}`
                );
            } catch (err) {
                richauto.global.toastLog('测试失败: ' + err);
            }
        },
        
        // ==================== 实际应用示例 ====================
        
        // 应用配置示例
        async testAppConfig() {
            try {
                const sto = richauto.storages.create('app-config');
                
                // 保存配置
                await sto.put('theme', 'dark');
                await sto.put('language', 'zh-CN');
                await sto.put('autoStart', true);
                await sto.put('checkInterval', 3600);
                
                // 读取配置
                const theme = await sto.get('theme', 'light');
                const language = await sto.get('language', 'en-US');
                const autoStart = await sto.get('autoStart', false);
                const checkInterval = await sto.get('checkInterval', 1800);
                
                richauto.global.toastLog(
                    `应用配置:\n` +
                    `主题: ${theme}\n` +
                    `语言: ${language}\n` +
                    `自动启动: ${autoStart}\n` +
                    `检查间隔: ${checkInterval}秒`
                );
            } catch (err) {
                richauto.global.toastLog('配置测试失败: ' + err);
            }
        },
        
        // 用户数据示例
        async testUserData() {
            try {
                const sto = richauto.storages.create('user-data');
                
                // 保存用户数据
                await sto.put('userInfo', {
                    username: '张三',
                    email: 'zhangsan@example.com',
                    loginCount: 15,
                    lastLogin: new Date().toISOString()
                });
                
                // 保存收藏列表
                await sto.put('favorites', [
                    { id: 1, title: '文章1', url: 'https://example.com/1' },
                    { id: 2, title: '文章2', url: 'https://example.com/2' }
                ]);
                
                // 读取数据
                const userInfo = await sto.get('userInfo');
                const favorites = await sto.get('favorites');
                
                console.log('用户信息:', userInfo);
                console.log('收藏列表:', favorites);
                
                richauto.global.toastLog(
                    `用户数据已保存:\n` +
                    `用户: ${userInfo.username}\n` +
                    `邮箱: ${userInfo.email}\n` +
                    `收藏数: ${favorites.length}`
                );
            } catch (err) {
                richauto.global.toastLog('用户数据测试失败: ' + err);
            }
        }
    }
};
</script>


