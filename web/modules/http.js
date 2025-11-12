/**
 * HTTP 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // HTTP 模块定义
    var httpModule = {
        /**
         * HTTP GET 请求
         * @param {string} url - 请求的 URL 地址
         * @param {Object} options - 请求选项（可选）
         * @param {Function} callback - 回调函数（可选）
         * @returns {Promise<Object>} 响应对象
         */
        get: function(url, options, callback) {
            // 处理参数重载
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            
            if (callback) {
                // 异步模式
                return $richauto.invoke('http.get', url, options, callback);
            } else {
                // 同步模式（返回 Promise）
                return $richauto.invoke('http.get', url, options);
            }
        },
        
        /**
         * HTTP POST 请求
         * @param {string} url - 请求的 URL 地址
         * @param {string|Object} data - POST 数据
         * @param {Object} options - 请求选项（可选）
         * @param {Function} callback - 回调函数（可选）
         * @returns {Promise<Object>} 响应对象
         */
        post: function(url, data, options, callback) {
            // 处理参数重载
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            
            if (callback) {
                // 异步模式
                return $richauto.invoke('http.post', url, data, options, callback);
            } else {
                // 同步模式（返回 Promise）
                return $richauto.invoke('http.post', url, data, options);
            }
        },
        
        /**
         * HTTP POST JSON 请求
         * @param {string} url - 请求的 URL 地址
         * @param {Object} data - POST 数据对象（可选）
         * @param {Object} options - 请求选项（可选）
         * @param {Function} callback - 回调函数（可选）
         * @returns {Promise<Object>} 响应对象
         */
        postJson: function(url, data, options, callback) {
            // 处理参数重载
            if (typeof data === 'function') {
                callback = data;
                data = {};
                options = {};
            } else if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            data = data || {};
            options = options || {};
            
            if (callback) {
                // 异步模式
                return $richauto.invoke('http.postJson', url, data, options, callback);
            } else {
                // 同步模式（返回 Promise）
                return $richauto.invoke('http.postJson', url, data, options);
            }
        },
        
        /**
         * HTTP POST Multipart 请求（文件上传）
         * @param {string} url - 请求的 URL 地址
         * @param {Object} files - 文件和参数对象
         * @param {Object} options - 请求选项（可选）
         * @param {Function} callback - 回调函数（可选）
         * @returns {Promise<Object>} 响应对象
         */
        postMultipart: function(url, files, options, callback) {
            // 处理参数重载
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            
            if (callback) {
                // 异步模式
                return $richauto.invoke('http.postMultipart', url, files, options, callback);
            } else {
                // 同步模式（返回 Promise）
                return $richauto.invoke('http.postMultipart', url, files, options);
            }
        },
        
        /**
         * HTTP 通用请求
         * @param {string} url - 请求的 URL 地址
         * @param {Object} options - 请求选项
         * @param {Function} callback - 回调函数（可选）
         * @returns {Promise<Object>} 响应对象
         */
        request: function(url, options, callback) {
            // 处理参数重载
            if (typeof options === 'function') {
                callback = options;
                options = {};
            }
            options = options || {};
            
            if (callback) {
                // 异步模式
                return $richauto.invoke('http.request', url, options, callback);
            } else {
                // 同步模式（返回 Promise）
                return $richauto.invoke('http.request', url, options);
            }
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.http = httpModule;
    
})(window);

