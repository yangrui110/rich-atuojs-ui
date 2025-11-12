/**
 * Notice 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Notice 模块定义
    var noticeModule = {
        // ==================== 基本通知方法 ====================
        
        /**
         * 发送通知 - 支持多种重载形式:
         * notice()
         * notice(content)
         * notice(title, content)
         * notice(options)
         * notice(content, options)
         * notice(title, content, options)
         * notice(builder)
         * notice(builder, options)
         * @returns {Promise<number>} 通知 ID
         */
        send: function() {
            var args = ['notice.send'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 通知状态检查 ====================
        
        /**
         * 检测 AutoJs6 的通知是否未被阻止
         * @returns {Promise<boolean>}
         */
        isEnabled: function() {
            return $richauto.invoke('notice.isEnabled');
        },
        
        /**
         * 确保 AutoJs6 的通知未被阻止
         * 当通知被阻止时将抛出异常
         * @returns {Promise<void>}
         */
        ensureEnabled: function() {
            return $richauto.invoke('notice.ensureEnabled');
        },
        
        // ==================== 通知设置 ====================
        
        /**
         * 跳转至 AutoJs6 的通知设置页面
         * @returns {Promise<void>}
         */
        launchSettings: function() {
            return $richauto.invoke('notice.launchSettings');
        },
        
        // ==================== 通知管理 ====================
        
        /**
         * 消除通知
         * @param {number} id - 通知 ID
         * @returns {Promise<void>}
         */
        cancel: function(id) {
            return $richauto.invoke('notice.cancel', id);
        },
        
        // ==================== 通知构建器 ====================
        
        /**
         * 获取一个简单通知构建器
         * @returns {Promise<any>} NoticeBuilder 对象
         */
        getBuilder: function() {
            return $richauto.invoke('notice.getBuilder');
        },
        
        // ==================== 通知配置 ====================
        
        /**
         * 配置通知渠道与通知发送的默认行为
         * @param {Object} preset - 通知预设配置对象
         * @returns {Promise<void>}
         */
        config: function(preset) {
            return $richauto.invoke('notice.config', preset);
        },
        
        // ==================== 通知渠道管理 ====================
        
        /**
         * channel 对象 - 通知渠道相关
         */
        channel: {
            /**
             * 创建通知渠道 - 支持多种重载形式:
             * create(channelId)
             * create(channelId, options)
             * create(options)
             * @returns {Promise<string>} 渠道 ID
             */
            create: function() {
                var args = ['notice.channel.create'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 检查渠道是否存在
             * @param {string|number} channelId - 渠道 ID
             * @returns {Promise<boolean>}
             */
            contains: function(channelId) {
                return $richauto.invoke('notice.channel.contains', channelId);
            },
            
            /**
             * 删除渠道
             * @param {string|number} channelId - 渠道 ID
             * @returns {Promise<boolean>} 删除前渠道是否存在
             */
            remove: function(channelId) {
                return $richauto.invoke('notice.channel.remove', channelId);
            },
            
            /**
             * 获取渠道实例
             * @param {string|number} channelId - 渠道 ID
             * @returns {Promise<Object|null>} 渠道信息对象或 null
             */
            get: function(channelId) {
                return $richauto.invoke('notice.channel.get', channelId);
            },
            
            /**
             * 获取所有通知渠道
             * @returns {Promise<Array>} 渠道信息对象数组
             */
            getAll: function() {
                return $richauto.invoke('notice.channel.getAll');
            }
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.notice = noticeModule;
    
})(window);


