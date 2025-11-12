/**
 * FloatyManager 模块 - Web 端封装
 * 提供高级悬浮窗管理功能：拖动、吸边、菜单展开等
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // FloatyManager 模块定义
    var floatyManagerModule = {
        /**
         * 创建主悬浮窗
         * @returns {Promise<boolean>} 是否成功创建
         */
        create: function() {
            return $richauto.invoke('floatyManager.create');
        },
        
        /**
         * 移除悬浮窗
         * @returns {Promise<boolean>} 是否成功移除
         */
        remove: function() {
            return $richauto.invoke('floatyManager.remove');
        },
        
        /**
         * 获取悬浮窗状态
         * @returns {Promise<{isEnabled: boolean, isExpanded: boolean}>}
         */
        getStatus: function() {
            return $richauto.invoke('floatyManager.getStatus');
        },
        
        /**
         * 切换菜单展开/收起
         * @returns {Promise<boolean>}
         */
        toggleMenu: function() {
            return $richauto.invoke('floatyManager.toggleMenu');
        },
        
        /**
         * 展开悬浮菜单
         * @returns {Promise<boolean>}
         */
        expandMenu: function() {
            return $richauto.invoke('floatyManager.expandMenu');
        },
        
        /**
         * 收起悬浮菜单
         * @returns {Promise<boolean>}
         */
        collapseMenu: function() {
            return $richauto.invoke('floatyManager.collapseMenu');
        },
        
        /**
         * 更新脚本状态按钮
         * @param {boolean} isRunning - 脚本是否正在运行
         * @returns {Promise<boolean>}
         */
        updateScriptButton: function(isRunning) {
            return $richauto.invoke('floatyManager.updateScriptButton', isRunning);
        },
        
        /**
         * 设置脚本状态获取回调
         * @param {string} callbackName - 回调函数名称
         * @returns {Promise<boolean>}
         */
        setScriptStatusCallback: function(callbackName) {
            return $richauto.invoke('floatyManager.setScriptStatusCallback', callbackName);
        },
        
        /**
         * 设置动作回调
         * 当用户点击悬浮菜单按钮时触发
         * @param {string} callbackName - 回调函数名称
         * @returns {Promise<boolean>}
         */
        setActionCallback: function(callbackName) {
            return $richauto.invoke('floatyManager.setActionCallback', callbackName);
        },
        
        /**
         * 注册动作处理器（高级封装）
         * @param {Function} handler - 处理器函数，接收 action 参数
         * @example
         * floatyManager.onAction(function(action) {
         *   console.log('用户点击了:', action);
         *   switch(action) {
         *     case 'toggle': // 启动/停止
         *       break;
         *     case 'log': // 日志
         *       break;
         *     case 'config': // 配置
         *       break;
         *     case 'close': // 关闭
         *       break;
         *   }
         * });
         */
        onAction: function(handler) {
            if (typeof handler !== 'function') {
                throw new Error('handler 必须是一个函数');
            }
            
            // 在全局注册监听器
            $richauto.on('floatyManager.onAction', function(action) {
                handler(action);
            });
            
            // 设置回调名称
            return this.setActionCallback('floatyManager.onAction');
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.floatyManager = floatyManagerModule;
    
})(window);


