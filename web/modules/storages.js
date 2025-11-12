/**
 * Storages 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    /**
     * Storage 类 - 封装本地存储实例
     */
    function Storage(name) {
        this.name = name;
    }
    
    /**
     * 存入数据
     * @param {string} key - 键名
     * @param {*} value - 值（支持 number, boolean, string, null, Array, Object 等）
     * @returns {Promise<boolean>}
     */
    Storage.prototype.put = function(key, value) {
        return $richauto.invoke('storage.put', this.name, key, value);
    };
    
    /**
     * 获取数据
     * @param {string} key - 键名
     * @param {*} defaultValue - 默认值（可选）
     * @returns {Promise<*>}
     */
    Storage.prototype.get = function(key, defaultValue) {
        return $richauto.invoke('storage.get', this.name, key, defaultValue);
    };
    
    /**
     * 删除指定键
     * @param {string} key - 键名
     * @returns {Promise<boolean>}
     */
    Storage.prototype.remove = function(key) {
        return $richauto.invoke('storage.remove', this.name, key);
    };
    
    /**
     * 清空所有数据
     * @returns {Promise<boolean>}
     */
    Storage.prototype.clear = function() {
        return $richauto.invoke('storage.clear', this.name);
    };
    
    /**
     * 检查键是否存在
     * @param {string} key - 键名
     * @returns {Promise<boolean>}
     */
    Storage.prototype.contains = function(key) {
        return $richauto.invoke('storage.contains', this.name, key);
    };
    
    // Storages 模块定义
    var storagesModule = {
        /**
         * 创建或获取本地存储
         * @param {string} name - 存储名称
         * @returns {Storage} Storage 实例
         */
        create: function(name) {
            // 同步调用，创建存储实例
            $richauto.invoke('storages.create', name).catch(function(err) {
                console.error('创建存储失败:', err);
            });
            // 返回 Storage 实例
            return new Storage(name);
        },
        
        /**
         * 删除本地存储
         * @param {string} name - 存储名称
         * @returns {Promise<boolean>} name 参数对应的本地存储是否存在
         */
        remove: function(name) {
            return $richauto.invoke('storages.remove', name);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.storages = storagesModule;
    
})(window);


