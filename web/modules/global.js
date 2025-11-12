/**
 * Global 模块 - Web 端封装
 * 使用 IIFE 将模块挂载到 window.__richauto_modules
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Global 模块定义
    var globalModule = {
        // ==================== 基础方法 ====================
        
        /**
         * 休眠 - 支持 3 个重载 (最多 2 个参数):
         * sleep(millis)
         * sleep(millisMin, millisMax)
         * sleep(millis, bounds)
         */
        sleep: function() {
            var args = ['global.sleep'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 消息浮动框 - 支持 4 个重载:
         * toast(text)
         * toast(text, isLong)
         * toast(text, isLong, isForcible)
         * toast(text, isForcible)
         */
        toast: function() {
            var args = ['global.toast'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 消息浮动框并打印 - 支持 4 个重载:
         * toastLog(text)
         * toastLog(text, isLong)
         * toastLog(text, isLong, isForcible)
         * toastLog(text, isForcible)
         */
        toastLog: function() {
            var args = ['global.toastLog'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 随机数 - 支持 2 个重载:
         * random()
         * random(min, max)
         */
        random: function() {
            var args = ['global.random'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 等待方法 ====================
        
        /**
         * 等待条件满足 - 支持 6 个重载:
         * wait(condition)
         * wait(condition, limit)
         * wait(condition, limit, interval)
         * wait(condition, callback)
         * wait(condition, limit, callback)
         * wait(condition, limit, interval, callback)
         */
        wait: function() {
            var args = ['global.wait'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 等待 Activity 出现 - 支持 6 个重载:
         * waitForActivity(activityName)
         * waitForActivity(activityName, limit)
         * waitForActivity(activityName, limit, interval)
         * waitForActivity(activityName, callback)
         * waitForActivity(activityName, limit, callback)
         * waitForActivity(activityName, limit, interval, callback)
         */
        waitForActivity: function() {
            var args = ['global.waitForActivity'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 等待 Package 出现 - 支持 6 个重载:
         * waitForPackage(packageName)
         * waitForPackage(packageName, limit)
         * waitForPackage(packageName, limit, interval)
         * waitForPackage(packageName, callback)
         * waitForPackage(packageName, limit, callback)
         * waitForPackage(packageName, limit, interval, callback)
         */
        waitForPackage: function() {
            var args = ['global.waitForPackage'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 脚本控制 ====================
        
        /**
         * 停止脚本运行 - 支持 2 个重载:
         * exit()
         * exit(e)
         */
        exit: function() {
            var args = ['global.exit'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        stop: function() {
            return $richauto.invoke('global.stop');
        },
        
        isStopped: function() {
            return $richauto.invoke('global.isStopped');
        },
        
        isRunning: function() {
            return $richauto.invoke('global.isRunning');
        },
        
        isShuttingDown: function() {
            return $richauto.invoke('global.isShuttingDown');
        },
        
        notStopped: function() {
            return $richauto.invoke('global.notStopped');
        },
        
        // ==================== 版本要求 ====================
        
        requiresApi: function(api) {
            return $richauto.invoke('global.requiresApi', api);
        },
        
        requiresAutojsVersion: function(version) {
            return $richauto.invoke('global.requiresAutojsVersion', version);
        },
        
        // ==================== Java 互操作 ====================
        
        importPackage: function(pkg) {
            return $richauto.invoke('global.importPackage', pkg);
        },
        
        importClass: function(cls) {
            return $richauto.invoke('global.importClass', cls);
        },
        
        // ==================== 系统信息 ====================
        
        currentPackage: function() {
            return $richauto.invoke('global.currentPackage');
        },
        
        currentActivity: function() {
            return $richauto.invoke('global.currentActivity');
        },
        
        // ==================== 剪贴板 ====================
        
        setClip: function(text) {
            return $richauto.invoke('global.setClip', text);
        },
        
        getClip: function() {
            return $richauto.invoke('global.getClip');
        },
        
        // ==================== 选择器相关 ====================
        
        selector: function() {
            return $richauto.invoke('global.selector');
        },
        
        /**
         * 拾取选择器 - pickup(selector, compass)
         */
        pickup: function() {
            var args = ['global.pickup'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 控件探测 - detect(selector, compass)
         */
        detect: function() {
            var args = ['global.detect'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 选择器全部存在 - existsAll(...selectors)
         */
        existsAll: function() {
            var args = ['global.existsAll'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 选择器任一存在 - existsOne(...selectors)
         */
        existsOne: function() {
            var args = ['global.existsOne'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 坐标标度 ====================
        
        /**
         * 横坐标标度 - 支持 4 个重载 (最多 2 个参数):
         * cX()
         * cX(x, base)
         * cX(x, isRatio)
         * cX(x)
         */
        cX: function() {
            var args = ['global.cX'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 纵坐标标度 - 支持 4 个重载 (最多 2 个参数):
         * cY()
         * cY(y, base)
         * cY(y, isRatio)
         * cY(y)
         */
        cY: function() {
            var args = ['global.cY'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 以横坐标度量的纵坐标标度 - 支持 3 个重载 (最多 2 个参数):
         * cYx(coordinateY, baseX) 或 cYx(percentY, ratio)
         * cYx(y, isRatio)
         * cYx(y)
         */
        cYx: function() {
            var args = ['global.cYx'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 以纵坐标度量的横坐标标度 - 支持 3 个重载 (最多 2 个参数):
         * cXy(coordinateX, baseY) 或 cXy(percentX, ratio)
         * cXy(x, isRatio)
         * cXy(x)
         */
        cXy: function() {
            var args = ['global.cXy'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 类型判断 ====================
        
        species: function(o) {
            return $richauto.invoke('global.species', o);
        },
        
        isArray: function(o) {
            return $richauto.invoke('global.isArray', o);
        },
        
        isArrayBuffer: function(o) {
            return $richauto.invoke('global.isArrayBuffer', o);
        },
        
        isBigInt: function(o) {
            return $richauto.invoke('global.isBigInt', o);
        },
        
        isBoolean: function(o) {
            return $richauto.invoke('global.isBoolean', o);
        },
        
        isContinuation: function(o) {
            return $richauto.invoke('global.isContinuation', o);
        },
        
        isDataView: function(o) {
            return $richauto.invoke('global.isDataView', o);
        },
        
        isDate: function(o) {
            return $richauto.invoke('global.isDate', o);
        },
        
        isError: function(o) {
            return $richauto.invoke('global.isError', o);
        },
        
        isFloat32Array: function(o) {
            return $richauto.invoke('global.isFloat32Array', o);
        },
        
        isFloat64Array: function(o) {
            return $richauto.invoke('global.isFloat64Array', o);
        },
        
        isFunction: function(o) {
            return $richauto.invoke('global.isFunction', o);
        },
        
        isHTMLDocument: function(o) {
            return $richauto.invoke('global.isHTMLDocument', o);
        },
        
        isInt16Array: function(o) {
            return $richauto.invoke('global.isInt16Array', o);
        },
        
        isInt32Array: function(o) {
            return $richauto.invoke('global.isInt32Array', o);
        },
        
        isInt8Array: function(o) {
            return $richauto.invoke('global.isInt8Array', o);
        },
        
        isJavaObject: function(o) {
            return $richauto.invoke('global.isJavaObject', o);
        },
        
        isJavaPackage: function(o) {
            return $richauto.invoke('global.isJavaPackage', o);
        },
        
        isMap: function(o) {
            return $richauto.invoke('global.isMap', o);
        },
        
        isNamespace: function(o) {
            return $richauto.invoke('global.isNamespace', o);
        },
        
        isNull: function(o) {
            return $richauto.invoke('global.isNull', o);
        },
        
        isNumber: function(o) {
            return $richauto.invoke('global.isNumber', o);
        },
        
        isObject: function(o) {
            return $richauto.invoke('global.isObject', o);
        },
        
        isQName: function(o) {
            return $richauto.invoke('global.isQName', o);
        },
        
        isRegExp: function(o) {
            return $richauto.invoke('global.isRegExp', o);
        },
        
        isSet: function(o) {
            return $richauto.invoke('global.isSet', o);
        },
        
        isString: function(o) {
            return $richauto.invoke('global.isString', o);
        },
        
        isUint16Array: function(o) {
            return $richauto.invoke('global.isUint16Array', o);
        },
        
        isUint32Array: function(o) {
            return $richauto.invoke('global.isUint32Array', o);
        },
        
        isUint8Array: function(o) {
            return $richauto.invoke('global.isUint8Array', o);
        },
        
        isUint8ClampedArray: function(o) {
            return $richauto.invoke('global.isUint8ClampedArray', o);
        },
        
        isUndefined: function(o) {
            return $richauto.invoke('global.isUndefined', o);
        },
        
        isWeakMap: function(o) {
            return $richauto.invoke('global.isWeakMap', o);
        },
        
        isWeakSet: function(o) {
            return $richauto.invoke('global.isWeakSet', o);
        },
        
        isWindow: function(o) {
            return $richauto.invoke('global.isWindow', o);
        },
        
        isXML: function(o) {
            return $richauto.invoke('global.isXML', o);
        },
        
        isXMLList: function(o) {
            return $richauto.invoke('global.isXMLList', o);
        }
    };
    
    // 添加 WIDTH 和 HEIGHT 属性
    Object.defineProperty(globalModule, 'WIDTH', {
        get: function() {
            return $richauto.invoke('global.WIDTH');
        }
    });
    
    Object.defineProperty(globalModule, 'HEIGHT', {
        get: function() {
            return $richauto.invoke('global.HEIGHT');
        }
    });
    
    // 挂载到临时命名空间
    window.__richauto_modules.global = globalModule;
    
})(window);
