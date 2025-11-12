/**
 * Keys 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Keys 模块定义
    var keysModule = {
        // ==================== 基于无障碍服务的按键模拟 ====================
        
        /**
         * 模拟按下返回键
         * @returns {Promise<boolean>} 是否执行成功
         */
        back: function() {
            return $richauto.invoke('keys.back');
        },
        
        /**
         * 模拟按下 Home 键
         * @returns {Promise<boolean>} 是否执行成功
         */
        home: function() {
            return $richauto.invoke('keys.home');
        },
        
        /**
         * 弹出电源键菜单
         * @returns {Promise<boolean>} 是否执行成功
         */
        powerDialog: function() {
            return $richauto.invoke('keys.powerDialog');
        },
        
        /**
         * 拉出通知栏
         * @returns {Promise<boolean>} 是否执行成功
         */
        notifications: function() {
            return $richauto.invoke('keys.notifications');
        },
        
        /**
         * 显示快速设置(下拉通知栏到底)
         * @returns {Promise<boolean>} 是否执行成功
         */
        quickSettings: function() {
            return $richauto.invoke('keys.quickSettings');
        },
        
        /**
         * 显示最近任务
         * @returns {Promise<boolean>} 是否执行成功
         */
        recents: function() {
            return $richauto.invoke('keys.recents');
        },
        
        /**
         * 分屏
         * @returns {Promise<boolean>} 是否执行成功
         */
        splitScreen: function() {
            return $richauto.invoke('keys.splitScreen');
        },
        
        // ==================== 基于 Root 权限的按键模拟 ====================
        
        /**
         * 模拟按下 Home 键 (Root)
         * @returns {Promise<void>}
         */
        Home: function() {
            return $richauto.invoke('keys.Home');
        },
        
        /**
         * 模拟按下返回键 (Root)
         * @returns {Promise<void>}
         */
        Back: function() {
            return $richauto.invoke('keys.Back');
        },
        
        /**
         * 模拟按下电源键 (Root)
         * @returns {Promise<void>}
         */
        Power: function() {
            return $richauto.invoke('keys.Power');
        },
        
        /**
         * 模拟按下菜单键 (Root)
         * @returns {Promise<void>}
         */
        Menu: function() {
            return $richauto.invoke('keys.Menu');
        },
        
        /**
         * 按下音量上键 (Root)
         * @returns {Promise<void>}
         */
        VolumeUp: function() {
            return $richauto.invoke('keys.VolumeUp');
        },
        
        /**
         * 按键音量下键 (Root)
         * @returns {Promise<void>}
         */
        VolumeDown: function() {
            return $richauto.invoke('keys.VolumeDown');
        },
        
        /**
         * 模拟按下照相键 (Root)
         * @returns {Promise<void>}
         */
        Camera: function() {
            return $richauto.invoke('keys.Camera');
        },
        
        /**
         * 模拟按下物理按键上 (Root)
         * @returns {Promise<void>}
         */
        Up: function() {
            return $richauto.invoke('keys.Up');
        },
        
        /**
         * 模拟按下物理按键下 (Root)
         * @returns {Promise<void>}
         */
        Down: function() {
            return $richauto.invoke('keys.Down');
        },
        
        /**
         * 模拟按下物理按键左 (Root)
         * @returns {Promise<void>}
         */
        Left: function() {
            return $richauto.invoke('keys.Left');
        },
        
        /**
         * 模拟按下物理按键右 (Root)
         * @returns {Promise<void>}
         */
        Right: function() {
            return $richauto.invoke('keys.Right');
        },
        
        /**
         * 模拟按下物理按键确定 (Root)
         * @returns {Promise<void>}
         */
        OK: function() {
            return $richauto.invoke('keys.OK');
        },
        
        /**
         * 输入文字 (Root)
         * @param {string} text - 要输入的文字，只能为英文或英文符号
         * @returns {Promise<void>}
         */
        Text: function(text) {
            return $richauto.invoke('keys.Text', text);
        },
        
        /**
         * 模拟物理按键 (Root)
         * @param {number|string} code - 要按下的按键的数字代码或名称
         * @returns {Promise<void>}
         */
        KeyCode: function(code) {
            return $richauto.invoke('keys.KeyCode', code);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.keys = keysModule;
    
})(window);

