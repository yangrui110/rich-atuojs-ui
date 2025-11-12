/**
 * Base64 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Base64 模块定义
    var base64Module = {
        /**
         * Base64 编码
         * @param {string|Array} data - 待编码数据（字符串或字节数组）
         * @param {string} encoding - 字符编码（可选，默认 UTF-8）
         * @returns {Promise<string>} 编码后的 Base64 字符串
         */
        encode: function(data, encoding) {
            encoding = encoding || 'UTF-8';
            return $richauto.invoke('base64.encode', data, encoding);
        },
        
        /**
         * Base64 解码
         * @param {string|Array} data - 待解码数据（Base64 字符串或字节数组）
         * @param {string} encoding - 字符编码（可选，默认 UTF-8）
         * @returns {Promise<string>} 解码后的字符串
         */
        decode: function(data, encoding) {
            encoding = encoding || 'UTF-8';
            return $richauto.invoke('base64.decode', data, encoding);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.base64 = base64Module;
    
})(window);

