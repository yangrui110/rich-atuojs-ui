/**
 * OCR 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    /**
     * 判断参数是否为图像对象或路径
     * @param {*} arg 
     * @returns {boolean}
     */
    function isImageOrPath(arg) {
        // 简单判断：如果是字符串（路径）或对象（图像包装器）
        return typeof arg === 'string' || (arg && typeof arg === 'object' && !Array.isArray(arg));
    }
    
    /**
     * 判断参数是否为区域对象
     * @param {*} arg 
     * @returns {boolean}
     */
    function isRegion(arg) {
        // 区域可以是数组或对象
        return Array.isArray(arg) || (arg && typeof arg === 'object' && (arg.left !== undefined || arg.x !== undefined));
    }
    
    /**
     * 判断参数是否为选项对象
     * @param {*} arg 
     * @returns {boolean}
     */
    function isOptions(arg) {
        return arg && typeof arg === 'object' && !Array.isArray(arg);
    }
    
    // OCR 模块定义
    var ocrModule = {
        // ==================== 基础属性和方法 ====================
        
        /**
         * 获取当前 OCR 工作模式
         * @returns {Promise<string>}
         */
        getMode: function() {
            return $richauto.invoke('ocr.getMode');
        },
        
        /**
         * 设置 OCR 工作模式
         * @param {string} mode - 'mlkit' 或 'paddle'
         * @returns {Promise<boolean>}
         */
        setMode: function(mode) {
            return $richauto.invoke('ocr.setMode', mode);
        },
        
        /**
         * 切换 OCR 工作模式
         * @param {string} mode - 'mlkit' 或 'paddle'
         * @returns {Promise<void>}
         */
        tap: function(mode) {
            return $richauto.invoke('ocr.tap', mode);
        },
        
        /**
         * 获取 OCR 摘要
         * @returns {Promise<string>}
         */
        summary: function() {
            return $richauto.invoke('ocr.summary');
        },
        
        // ==================== recognizeText 方法（9 个重载）====================
        
        /**
         * 识别图像中的所有文本
         * 支持多种重载:
         * - recognizeText() 或 recognizeText(options)
         * - recognizeText(region)
         * - recognizeText(img) 或 recognizeText(img, options)
         * - recognizeText(img, region)
         * - recognizeText(imgPath) 或 recognizeText(imgPath, options)
         * - recognizeText(imgPath, region)
         * @returns {Promise<string[]>}
         */
        recognizeText: function() {
            var args = ['ocr.recognizeText'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== detect 方法（9 个重载）====================
        
        /**
         * 检测图像中的所有文本（返回详细结果）
         * 支持多种重载:
         * - detect() 或 detect(options)
         * - detect(region)
         * - detect(img) 或 detect(img, options)
         * - detect(img, region)
         * - detect(imgPath) 或 detect(imgPath, options)
         * - detect(imgPath, region)
         * @returns {Promise<OcrResult[]>}
         */
        detect: function() {
            var args = ['ocr.detect'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== ocr() 直接调用 ====================
        
        /**
         * OCR 直接调用（recognizeText 的别名）
         * 支持所有 recognizeText 的重载形式
         * @returns {Promise<string[]>}
         */
        invoke: function() {
            var args = ['ocr.invoke'].concat(Array.prototype.slice.call(arguments));
            return $richauto.invoke.apply($richauto, args);
        },
        
        // ==================== MLKit 引擎 ====================
        
        mlkit: {
            /**
             * MLKit 引擎 - 识别文本
             * @returns {Promise<string[]>}
             */
            recognizeText: function() {
                var args = ['ocr.mlkit.recognizeText'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * MLKit 引擎 - 检测文本
             * @returns {Promise<OcrResult[]>}
             */
            detect: function() {
                var args = ['ocr.mlkit.detect'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * MLKit 引擎 - 直接调用（recognizeText 的别名）
             * @returns {Promise<string[]>}
             */
            invoke: function() {
                var args = ['ocr.mlkit.invoke'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            }
        },
        
        // ==================== Paddle 引擎 ====================
        
        paddle: {
            /**
             * Paddle 引擎 - 识别文本
             * @returns {Promise<string[]>}
             */
            recognizeText: function() {
                var args = ['ocr.paddle.recognizeText'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * Paddle 引擎 - 检测文本
             * @returns {Promise<OcrResult[]>}
             */
            detect: function() {
                var args = ['ocr.paddle.detect'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            },
            
            /**
             * Paddle 引擎 - 直接调用（recognizeText 的别名）
             * @returns {Promise<string[]>}
             */
            invoke: function() {
                var args = ['ocr.paddle.invoke'].concat(Array.prototype.slice.call(arguments));
                return $richauto.invoke.apply($richauto, args);
            }
        }
    };
    
    // 为了更方便使用，添加 mode 属性的 getter 和 setter
    Object.defineProperty(ocrModule, 'mode', {
        get: function() {
            // 注意：这是异步的，实际使用时应该用 getMode() 方法
            // 这里提供一个同步的占位符
            return this._cachedMode || 'mlkit';
        },
        set: function(value) {
            this._cachedMode = value;
            this.setMode(value);
        }
    });
    
    // 挂载到临时命名空间
    window.__richauto_modules.ocr = ocrModule;
    
})(window);

