/**
 * Color 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    // Color 模块定义
    var colorModule = {
        // ==================== 颜色转换 ====================
        
        /**
         * 将颜色参数转换为颜色整数
         * @param {any} color - 颜色参数
         * @returns {Promise<number>}
         */
        toInt: function(color) {
            return $richauto.invoke('color.toInt', color);
        },
        
        /**
         * 将颜色参数转换为颜色代码 - 支持 1-2 个参数:
         * toHex(color) - 自动处理 alpha
         * toHex(color, alpha) - 指定 alpha 显示方式
         * toHex(color, length) - 指定长度 (3/6/8)
         * @returns {Promise<string>}
         */
        toHex: function() {
            var args = ['color.toHex'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 将颜色参数转换为完整颜色代码 (#AARRGGBB)
         * @param {any} color - 颜色参数
         * @returns {Promise<string>}
         */
        toFullHex: function(color) {
            return $richauto.invoke('color.toFullHex', color);
        },
        
        /**
         * 将颜色参数转换为字符串 (toHex 的别名)
         * @returns {Promise<string>}
         */
        toString: function() {
            var args = ['color.toString'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色摘要
         * @param {any} color - 颜色参数
         * @returns {Promise<string>}
         */
        summary: function(color) {
            return $richauto.invoke('color.summary', color);
        },
        
        // ==================== 颜色分量获取 ====================
        
        /**
         * 获取颜色的 A (alpha) 分量 - 支持 1-2 个参数:
         * alpha(color) - 返回 [0..255]
         * alpha(color, options) - 根据 options.max 返回范围
         * @returns {Promise<number>}
         */
        alpha: function() {
            var args = ['color.alpha'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 R (red) 分量 - 支持 1-2 个参数:
         * red(color) - 返回 [0..255]
         * red(color, options) - 根据 options.max 返回范围
         * @returns {Promise<number>}
         */
        red: function() {
            var args = ['color.red'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 G (green) 分量 - 支持 1-2 个参数:
         * green(color) - 返回 [0..255]
         * green(color, options) - 根据 options.max 返回范围
         * @returns {Promise<number>}
         */
        green: function() {
            var args = ['color.green'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 B (blue) 分量 - 支持 1-2 个参数:
         * blue(color) - 返回 [0..255]
         * blue(color, options) - 根据 options.max 返回范围
         * @returns {Promise<number>}
         */
        blue: function() {
            var args = ['color.blue'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 颜色分量设置 ====================
        
        /**
         * 设置颜色的 A (alpha) 分量
         * @param {any} color - 颜色参数
         * @param {number} alpha - alpha 分量值
         * @returns {Promise<number>}
         */
        setAlpha: function(color, alpha) {
            return $richauto.invoke('color.setAlpha', color, alpha);
        },
        
        /**
         * 设置颜色的 R (red) 分量
         * @param {any} color - 颜色参数
         * @param {number} red - red 分量值
         * @returns {Promise<number>}
         */
        setRed: function(color, red) {
            return $richauto.invoke('color.setRed', color, red);
        },
        
        /**
         * 设置颜色的 G (green) 分量
         * @param {any} color - 颜色参数
         * @param {number} green - green 分量值
         * @returns {Promise<number>}
         */
        setGreen: function(color, green) {
            return $richauto.invoke('color.setGreen', color, green);
        },
        
        /**
         * 设置颜色的 B (blue) 分量
         * @param {any} color - 颜色参数
         * @param {number} blue - blue 分量值
         * @returns {Promise<number>}
         */
        setBlue: function(color, blue) {
            return $richauto.invoke('color.setBlue', color, blue);
        },
        
        // ==================== 颜色合成 ====================
        
        /**
         * 通过 RGB 分量合成颜色 - 支持多个重载:
         * rgb(color) - 从颜色获取 RGB
         * rgb(r, g, b) - 从分量合成
         * rgb([r, g, b]) - 从数组合成
         * @returns {Promise<number>}
         */
        rgb: function() {
            var args = ['color.rgb'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 ARGB 分量合成颜色 - 支持多个重载:
         * argb(colorHex) - 从颜色代码获取
         * argb(a, r, g, b) - 从分量合成
         * argb([a, r, g, b]) - 从数组合成
         * @returns {Promise<number>}
         */
        argb: function() {
            var args = ['color.argb'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 RGBA 分量合成颜色 - 支持多个重载:
         * rgba(colorHex) - 从颜色代码获取
         * rgba(r, g, b, a) - 从分量合成
         * rgba([r, g, b, a]) - 从数组合成
         * @returns {Promise<number>}
         */
        rgba: function() {
            var args = ['color.rgba'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 HSV 分量合成颜色 - 支持多个重载:
         * hsv(h, s, v) - 从分量合成
         * hsv([h, s, v]) - 从数组合成
         * @returns {Promise<number>}
         */
        hsv: function() {
            var args = ['color.hsv'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 HSVA 分量合成颜色 - 支持多个重载:
         * hsva(h, s, v, a) - 从分量合成
         * hsva([h, s, v, a]) - 从数组合成
         * @returns {Promise<number>}
         */
        hsva: function() {
            var args = ['color.hsva'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 HSL 分量合成颜色 - 支持多个重载:
         * hsl(h, s, l) - 从分量合成
         * hsl([h, s, l]) - 从数组合成
         * @returns {Promise<number>}
         */
        hsl: function() {
            var args = ['color.hsl'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 通过 HSLA 分量合成颜色 - 支持多个重载:
         * hsla(h, s, l, a) - 从分量合成
         * hsla([h, s, l, a]) - 从数组合成
         * @returns {Promise<number>}
         */
        hsla: function() {
            var args = ['color.hsla'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 颜色分解 ====================
        
        /**
         * 获取颜色的 RGB 分量数组
         * @param {any} color - 颜色参数
         * @returns {Promise<Array<number>>}
         */
        toRgb: function(color) {
            return $richauto.invoke('color.toRgb', color);
        },
        
        /**
         * 获取颜色的 RGBA 分量数组
         * @returns {Promise<Array<number>>}
         */
        toRgba: function() {
            var args = ['color.toRgba'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 ARGB 分量数组
         * @returns {Promise<Array<number>>}
         */
        toArgb: function() {
            var args = ['color.toArgb'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 HSV 分量数组
         * @returns {Promise<Array<number>>}
         */
        toHsv: function() {
            var args = ['color.toHsv'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 HSVA 分量数组
         * @returns {Promise<Array<number>>}
         */
        toHsva: function() {
            var args = ['color.toHsva'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 HSL 分量数组
         * @returns {Promise<Array<number>>}
         */
        toHsl: function() {
            var args = ['color.toHsl'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 获取颜色的 HSLA 分量数组
         * @returns {Promise<Array<number>>}
         */
        toHsla: function() {
            var args = ['color.toHsla'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 颜色比较 ====================
        
        /**
         * 判断两个颜色是否相似 - 支持多个重载:
         * isSimilar(colorA, colorB)
         * isSimilar(colorA, colorB, threshold)
         * isSimilar(colorA, colorB, threshold, algorithm)
         * isSimilar(colorA, colorB, options)
         * @returns {Promise<boolean>}
         */
        isSimilar: function() {
            var args = ['color.isSimilar'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        /**
         * 判断两个颜色是否相等 - 支持 2-3 个参数:
         * isEqual(colorA, colorB)
         * isEqual(colorA, colorB, alphaMatters)
         * @returns {Promise<boolean>}
         */
        isEqual: function() {
            var args = ['color.isEqual'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== 颜色工具 ====================
        
        /**
         * 获取颜色的亮度值 [0..1]
         * @param {any} color - 颜色参数
         * @returns {Promise<number>}
         */
        luminance: function(color) {
            return $richauto.invoke('color.luminance', color);
        },
        
        // ==================== 颜色常量 ====================
        
        /**
         * 获取黑色常量
         * @returns {Promise<number>}
         */
        get BLACK() {
            return $richauto.invoke('color.BLACK');
        },
        
        /**
         * 获取白色常量
         * @returns {Promise<number>}
         */
        get WHITE() {
            return $richauto.invoke('color.WHITE');
        },
        
        /**
         * 获取红色常量
         * @returns {Promise<number>}
         */
        get RED() {
            return $richauto.invoke('color.RED');
        },
        
        /**
         * 获取绿色常量
         * @returns {Promise<number>}
         */
        get GREEN() {
            return $richauto.invoke('color.GREEN');
        },
        
        /**
         * 获取蓝色常量
         * @returns {Promise<number>}
         */
        get BLUE() {
            return $richauto.invoke('color.BLUE');
        },
        
        /**
         * 获取黄色常量
         * @returns {Promise<number>}
         */
        get YELLOW() {
            return $richauto.invoke('color.YELLOW');
        },
        
        /**
         * 获取青色常量
         * @returns {Promise<number>}
         */
        get CYAN() {
            return $richauto.invoke('color.CYAN');
        },
        
        /**
         * 获取品红色常量
         * @returns {Promise<number>}
         */
        get MAGENTA() {
            return $richauto.invoke('color.MAGENTA');
        },
        
        /**
         * 获取橙色常量
         * @returns {Promise<number>}
         */
        get ORANGE() {
            return $richauto.invoke('color.ORANGE');
        },
        
        /**
         * 获取灰色常量
         * @returns {Promise<number>}
         */
        get GRAY() {
            return $richauto.invoke('color.GRAY');
        },
        
        /**
         * 获取透明色常量
         * @returns {Promise<number>}
         */
        get TRANSPARENT() {
            return $richauto.invoke('color.TRANSPARENT');
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.color = colorModule;
    
})(window);

