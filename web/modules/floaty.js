/**
 * Floaty 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    /**
     * FloatyWindow 类 - 封装悬浮窗实例操作
     */
    function FloatyWindow(instanceId) {
        this.instanceId = instanceId;
    }
    
    /**
     * 设置是否启用悬浮窗调整功能
     * @param {boolean} enabled - 是否启用
     * @returns {Promise<boolean>}
     */
    FloatyWindow.prototype.setAdjustEnabled = function(enabled) {
        return $richauto.invoke('floaty.setAdjustEnabled', this.instanceId, enabled);
    };
    
    /**
     * 设置悬浮窗位置
     * @param {number} x - X 坐标
     * @param {number} y - Y 坐标
     * @returns {Promise<boolean>}
     */
    FloatyWindow.prototype.setPosition = function(x, y) {
        return $richauto.invoke('floaty.setPosition', this.instanceId, x, y);
    };
    
    /**
     * 获取悬浮窗 X 坐标
     * @returns {Promise<number>}
     */
    FloatyWindow.prototype.getX = function() {
        return $richauto.invoke('floaty.getX', this.instanceId);
    };
    
    /**
     * 获取悬浮窗 Y 坐标
     * @returns {Promise<number>}
     */
    FloatyWindow.prototype.getY = function() {
        return $richauto.invoke('floaty.getY', this.instanceId);
    };
    
    /**
     * 设置悬浮窗大小
     * @param {number} width - 宽度
     * @param {number} height - 高度
     * @returns {Promise<boolean>}
     */
    FloatyWindow.prototype.setSize = function(width, height) {
        return $richauto.invoke('floaty.setSize', this.instanceId, width, height);
    };
    
    /**
     * 获取悬浮窗宽度
     * @returns {Promise<number>}
     */
    FloatyWindow.prototype.getWidth = function() {
        return $richauto.invoke('floaty.getWidth', this.instanceId);
    };
    
    /**
     * 获取悬浮窗高度
     * @returns {Promise<number>}
     */
    FloatyWindow.prototype.getHeight = function() {
        return $richauto.invoke('floaty.getHeight', this.instanceId);
    };
    
    /**
     * 关闭悬浮窗
     * @returns {Promise<boolean>}
     */
    FloatyWindow.prototype.close = function() {
        return $richauto.invoke('floaty.close', this.instanceId);
    };
    
    /**
     * 设置悬浮窗关闭时退出脚本
     * @returns {Promise<boolean>}
     */
    FloatyWindow.prototype.exitOnClose = function() {
        return $richauto.invoke('floaty.exitOnClose', this.instanceId);
    };
    
    // Floaty 模块定义
    var floatyModule = {
        /**
         * 创建包含 WebView 的悬浮窗（仅支持 HTML/Vue）
         * @param {string} layout - HTML 内容或 URL
         * @param {Object} options - 可选配置
         * @param {string} options.type - 类型: 'html'(默认), 'vue'
         * @param {string} options.width - WebView 宽度，如 '300'
         * @param {string} options.height - WebView 高度，如 '400'
         * @param {string} options.url - URL 地址（加载网页时使用）
         * @param {string} options.vueScript - Vue 组件脚本（type='vue' 时必需）
         * @param {string} options.css - 自定义样式
         * @param {string} options.vantUrl - Vant UI CSS CDN 地址
         * @param {string} options.vantJs - Vant UI JS CDN 地址
         * @returns {Promise<FloatyWindow>}
         */
        window: function(layout, options) {
            return $richauto.invoke('floaty.window', layout, options).then(function(instanceId) {
                if (!instanceId) {
                    throw new Error('创建悬浮窗失败');
                }
                return new FloatyWindow(instanceId);
            });
        },
        
        /**
         * 关闭所有悬浮窗
         * @returns {Promise<boolean>}
         */
        closeAll: function() {
            return $richauto.invoke('floaty.closeAll');
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.floaty = floatyModule;
    
})(window);

