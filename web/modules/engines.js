/**
 * Engines 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Engines 模块定义
    var enginesModule = {
        // ==================== 脚本执行 ====================
        
        /**
         * 在新的脚本环境中运行脚本
         * @param {string} name - 要运行的脚本名称
         * @param {string} script - 要运行的脚本内容
         * @param {Object} config - 运行配置项
         * @param {number} config.delay - 延迟执行的毫秒数，默认为0
         * @param {number} config.loopTimes - 循环运行次数，默认为1。0为无限循环
         * @param {number} config.interval - 循环运行时两次运行之间的时间间隔，默认为0
         * @param {Array|string} config.path - 指定脚本运行的目录
         * @returns {Promise<Object>} 返回 ScriptExecution 对象的信息
         */
        execScript: function(name, script, config) {
            return $richauto.invoke('engines.execScript', name, script, config || {});
        },
        
        /**
         * 在新的脚本环境中运行脚本文件
         * @param {string} path - 要运行的脚本路径
         * @param {Object} config - 运行配置项
         * @param {number} config.delay - 延迟执行的毫秒数，默认为0
         * @param {number} config.loopTimes - 循环运行次数，默认为1。0为无限循环
         * @param {number} config.interval - 循环运行时两次运行之间的时间间隔，默认为0
         * @param {Array|string} config.path - 指定脚本运行的目录
         * @returns {Promise<Object>} 返回 ScriptExecution 对象的信息
         */
        execScriptFile: function(path, config) {
            return $richauto.invoke('engines.execScriptFile', path, config || {});
        },
        
        /**
         * 在新的脚本环境中运行录制文件
         * @param {string} path - 要运行的录制文件路径
         * @param {Object} config - 运行配置项
         * @param {number} config.delay - 延迟执行的毫秒数，默认为0
         * @param {number} config.loopTimes - 循环运行次数，默认为1。0为无限循环
         * @param {number} config.interval - 循环运行时两次运行之间的时间间隔，默认为0
         * @param {Array|string} config.path - 指定脚本运行的目录
         * @returns {Promise<Object>} 返回 ScriptExecution 对象的信息
         */
        execAutoFile: function(path, config) {
            return $richauto.invoke('engines.execAutoFile', path, config || {});
        },
        
        // ==================== 脚本控制 ====================
        
        /**
         * 停止所有正在运行的脚本（包括当前脚本自身）
         * @returns {Promise<void>}
         */
        stopAll: function() {
            return $richauto.invoke('engines.stopAll');
        },
        
        /**
         * 停止所有正在运行的脚本并显示停止的脚本数量
         * @returns {Promise<void>}
         */
        stopAllAndToast: function() {
            return $richauto.invoke('engines.stopAllAndToast');
        },
        
        // ==================== 脚本引擎信息 ====================
        
        /**
         * 返回当前脚本的脚本引擎对象
         * @returns {Promise<Object>} 返回包含引擎信息的对象
         */
        myEngine: function() {
            return $richauto.invoke('engines.myEngine');
        },
        
        /**
         * 返回当前所有正在运行的脚本的脚本引擎数组
         * @returns {Promise<Array>} 返回引擎信息数组
         */
        all: function() {
            return $richauto.invoke('engines.all');
        },
        
        // ==================== ScriptEngine 对象 ====================
        
        /**
         * ScriptEngine 对象相关方法
         */
        ScriptEngine: {
            /**
             * 停止脚本引擎的执行
             * @param {string} engineId - 引擎 ID
             * @returns {Promise<void>}
             */
            forceStop: function(engineId) {
                return $richauto.invoke('engines.ScriptEngine.forceStop', engineId);
            },
            
            /**
             * 返回脚本执行的路径
             * @returns {Promise<string>}
             */
            cwd: function() {
                return $richauto.invoke('engines.ScriptEngine.cwd');
            },
            
            /**
             * 返回当前脚本引擎正在执行的脚本对象
             * @returns {Promise<Object>}
             */
            getSource: function() {
                return $richauto.invoke('engines.ScriptEngine.getSource');
            },
            
            /**
             * 向该脚本引擎发送一个事件
             * @param {string} eventName - 事件名称
             * @param {...any} args - 事件参数
             * @returns {Promise<void>}
             */
            emit: function() {
                var args = ['engines.ScriptEngine.emit'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            }
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.engines = enginesModule;
    
})(window);



