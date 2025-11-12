/**
 * Automator 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Automator 模块定义
    var automatorModule = {
        // ==================== 基于坐标的触摸模拟 ====================
        
        /**
         * 设置脚本坐标点击所适合的屏幕宽高
         * @param {number} width - 屏幕宽度
         * @param {number} height - 屏幕高度
         * @returns {Promise<any>}
         */
        setScreenMetrics: function(width, height) {
            return $richauto.invoke('automator.setScreenMetrics', width, height);
        },
        
        /**
         * 模拟点击 - 支持 3 个重载 (最多 4 个参数):
         * click(x, y) - 点击坐标
         * click(text[, i]) - 点击文本
         * click(left, top, bottom, right) - 点击区域
         * @returns {Promise<boolean>}
         */
        click: function() {
            var args = ['automator.click'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 模拟长按坐标
         * @param {number} x - 横坐标
         * @param {number} y - 纵坐标
         * @returns {Promise<boolean>}
         */
        longClick: function(x, y) {
            return $richauto.invoke('automator.longClick', x, y);
        },
        
        /**
         * 模拟按住坐标
         * @param {number} x - 横坐标
         * @param {number} y - 纵坐标
         * @param {number} duration - 按住时长（毫秒）
         * @returns {Promise<boolean>}
         */
        press: function(x, y, duration) {
            return $richauto.invoke('automator.press', x, y, duration);
        },
        
        /**
         * 模拟滑动
         * @param {number} x1 - 起始横坐标
         * @param {number} y1 - 起始纵坐标
         * @param {number} x2 - 结束横坐标
         * @param {number} y2 - 结束纵坐标
         * @param {number} duration - 滑动时长（毫秒）
         * @returns {Promise<boolean>}
         */
        swipe: function(x1, y1, x2, y2, duration) {
            return $richauto.invoke('automator.swipe', x1, y1, x2, y2, duration);
        },
        
        /**
         * 模拟手势操作
         * @param {number} duration - 手势时长
         * @param {Array} points - 手势路径坐标数组
         * @returns {Promise<boolean>}
         */
        gesture: function(duration, points) {
            return $richauto.invoke('automator.gesture', duration, points);
        },
        
        /**
         * 同时模拟多个手势
         * @param {Array} gestureArray - 手势数组
         * @returns {Promise<boolean>}
         */
        gestures: function(gestureArray) {
            return $richauto.invoke('automator.gestures', gestureArray);
        },
        
        // ==================== Root 权限简单命令 ====================
        
        /**
         * 使用 Root 权限点击（大写 T）
         * @param {number} x - 横坐标
         * @param {number} y - 纵坐标
         * @returns {Promise<void>}
         */
        Tap: function(x, y) {
            return $richauto.invoke('automator.Tap', x, y);
        },
        
        /**
         * 使用 Root 权限滑动（大写 S） - 最多 5 个参数:
         * Swipe(x1, y1, x2, y2, [duration])
         * @returns {Promise<void>}
         */
        Swipe: function() {
            var args = ['automator.Swipe'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 基于控件的操作 ====================
        
        /**
         * auto 对象 - 无障碍服务相关
         */
        auto: {
            /**
             * 检查并启用无障碍服务 - 支持 0-1 个参数:
             * auto() 或 auto(mode)
             * mode 可选值: 'fast' 或 'normal'
             * @returns {Promise<void>}
             */
            enable: function() {
                var args = ['automator.auto'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 等待无障碍服务启动
             * @returns {Promise<void>}
             */
            waitFor: function() {
                return $richauto.invoke('automator.auto.waitFor');
            },
            
            /**
             * 设置无障碍模式
             * @param {string} mode - 模式（'fast' 或 'normal'）
             * @returns {Promise<void>}
             */
            setMode: function(mode) {
                return $richauto.invoke('automator.auto.setMode', mode);
            },
            
            /**
             * 设置无障碍标志
             * @param {string|Array} flags - 标志
             * @returns {Promise<void>}
             */
            setFlags: function(flags) {
                return $richauto.invoke('automator.auto.setFlags', flags);
            },
            
            /**
             * 获取无障碍服务
             * @returns {Promise<any>}
             */
            getService: function() {
                return $richauto.invoke('automator.auto.service');
            },
            
            /**
             * 获取所有窗口
             * @returns {Promise<Array>}
             */
            getWindows: function() {
                return $richauto.invoke('automator.auto.windows');
            },
            
            /**
             * 获取根元素
             * @returns {Promise<any>}
             */
            getRoot: function() {
                return $richauto.invoke('automator.auto.root');
            },
            
            /**
             * 获取活动窗口根元素
             * @returns {Promise<any>}
             */
            getRootInActiveWindow: function() {
                return $richauto.invoke('automator.auto.rootInActiveWindow');
            },
            
            /**
             * 设置窗口过滤器
             * @param {Function} filter - 过滤函数
             * @returns {Promise<void>}
             */
            setWindowFilter: function(filter) {
                return $richauto.invoke('automator.auto.setWindowFilter', filter);
            },
            
            /**
             * 获取窗口根元素数组
             * @returns {Promise<Array>}
             */
            getWindowRoots: function() {
                return $richauto.invoke('automator.auto.windowRoots');
            }
        },
        
        // ==================== SimpleActionAutomator ====================
        
        /**
         * 点击文本 - 支持 1-2 个参数:
         * clickText(text) - 点击所有匹配文本
         * clickText(text, i) - 点击第 i 个匹配文本
         * @returns {Promise<boolean>}
         */
        clickText: function() {
            var args = ['automator.clickText'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 长按文本 - 支持 1-2 个参数:
         * longClickText(text) - 长按所有匹配文本
         * longClickText(text, i) - 长按第 i 个匹配文本
         * @returns {Promise<boolean>}
         */
        longClickText: function() {
            var args = ['automator.longClickText'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 上滑或左滑 - 支持 0-1 个参数:
         * scrollUp() - 滑动面积最大的可滑动控件
         * scrollUp(i) - 滑动第 i+1 个可滑动控件
         * @returns {Promise<boolean>}
         */
        scrollUp: function() {
            var args = ['automator.scrollUp'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 下滑或右滑 - 支持 0-1 个参数:
         * scrollDown() - 滑动面积最大的可滑动控件
         * scrollDown(i) - 滑动第 i+1 个可滑动控件
         * @returns {Promise<boolean>}
         */
        scrollDown: function() {
            var args = ['automator.scrollDown'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 设置输入框文本 - 支持 2 个重载 (1-2 个参数):
         * setText(text) - 设置所有输入框
         * setText(i, text) - 设置第 i+1 个输入框
         * @returns {Promise<boolean>}
         */
        setText: function() {
            var args = ['automator.setText'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 向输入框追加文本 - 支持 2 个重载 (1-2 个参数):
         * input(text) - 所有输入框追加文本
         * input(i, text) - 第 i+1 个输入框追加文本
         * @returns {Promise<boolean>}
         */
        input: function() {
            var args = ['automator.input'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== RootAutomator ====================
        
        /**
         * RootAutomator 对象 - Root 权限触摸模拟
         */
        RootAutomator: {
            /**
             * 创建 RootAutomator 实例
             * @returns {Promise<string>}
             */
            create: function() {
                return $richauto.invoke('automator.RootAutomator.create');
            },
            
            /**
             * 点击位置 - 支持 2-3 个参数:
             * tap(x, y) 或 tap(x, y, id)
             * @returns {Promise<void>}
             */
            tap: function() {
                var args = ['automator.RootAutomator.tap'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 滑动 - 最多 6 个参数:
             * swipe(x1, y1, x2, y2, [duration, id])
             * @returns {Promise<void>}
             */
            swipe: function() {
                var args = ['automator.RootAutomator.swipe'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 按住 - 支持 3-4 个参数:
             * press(x, y, duration) 或 press(x, y, duration, id)
             * @returns {Promise<void>}
             */
            press: function() {
                var args = ['automator.RootAutomator.press'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 长按 - 支持 2-3 个参数:
             * longPress(x, y) 或 longPress(x, y, id)
             * @returns {Promise<void>}
             */
            longPress: function() {
                var args = ['automator.RootAutomator.longPress'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 模拟手指按下 - 支持 2-3 个参数:
             * touchDown(x, y) 或 touchDown(x, y, id)
             * @returns {Promise<void>}
             */
            touchDown: function() {
                var args = ['automator.RootAutomator.touchDown'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 模拟手指移动 - 支持 2-3 个参数:
             * touchMove(x, y) 或 touchMove(x, y, id)
             * @returns {Promise<void>}
             */
            touchMove: function() {
                var args = ['automator.RootAutomator.touchMove'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 模拟手指弹起 - 支持 0-1 个参数:
             * touchUp() 或 touchUp(id)
             * @returns {Promise<void>}
             */
            touchUp: function() {
                var args = ['automator.RootAutomator.touchUp'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * 退出 RootAutomator
             * @returns {Promise<void>}
             */
            exit: function() {
                return $richauto.invoke('automator.RootAutomator.exit');
            }
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.automator = automatorModule;
    
})(window);


