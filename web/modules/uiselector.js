/**
 * UiSelector 模块 - Web 端封装
 */

(function(window) {
    'use strict';
    
    // 确保命名空间存在
    window.__richauto_modules = window.__richauto_modules || {};
    
    /**
     * 选择器构建器类
     * 用于在 Web 端构建选择器链
     */
    function SelectorBuilder() {
        this._criteria = {};
    }
    
    /**
     * 添加选择器条件
     * @private
     */
    SelectorBuilder.prototype._addCriteria = function(key, value) {
        this._criteria[key] = value;
        return this;
    };
    
    /**
     * 获取选择器条件对象
     * @private
     */
    SelectorBuilder.prototype._getCriteria = function() {
        return this._criteria;
    };
    
    // ==================== ID 选择器系列 ====================
    
    SelectorBuilder.prototype.id = function(str) {
        return this._addCriteria('id', str);
    };
    
    SelectorBuilder.prototype.idStartsWith = function(str) {
        return this._addCriteria('idStartsWith', str);
    };
    
    SelectorBuilder.prototype.idEndsWith = function(str) {
        return this._addCriteria('idEndsWith', str);
    };
    
    SelectorBuilder.prototype.idContains = function(str) {
        return this._addCriteria('idContains', str);
    };
    
    SelectorBuilder.prototype.idMatches = function(regex) {
        return this._addCriteria('idMatches', regex);
    };
    
    SelectorBuilder.prototype.idMatch = function(regex) {
        return this._addCriteria('idMatch', regex);
    };
    
    SelectorBuilder.prototype.idHex = function(str) {
        return this._addCriteria('idHex', str);
    };
    
    // ==================== Text 选择器系列 ====================
    
    SelectorBuilder.prototype.text = function(str) {
        return this._addCriteria('text', str);
    };
    
    SelectorBuilder.prototype.textStartsWith = function(str) {
        return this._addCriteria('textStartsWith', str);
    };
    
    SelectorBuilder.prototype.textEndsWith = function(str) {
        return this._addCriteria('textEndsWith', str);
    };
    
    SelectorBuilder.prototype.textContains = function(str) {
        return this._addCriteria('textContains', str);
    };
    
    SelectorBuilder.prototype.textMatches = function(regex) {
        return this._addCriteria('textMatches', regex);
    };
    
    SelectorBuilder.prototype.textMatch = function(regex) {
        return this._addCriteria('textMatch', regex);
    };
    
    // ==================== Desc 选择器系列 ====================
    
    SelectorBuilder.prototype.desc = function(str) {
        return this._addCriteria('desc', str);
    };
    
    SelectorBuilder.prototype.descStartsWith = function(str) {
        return this._addCriteria('descStartsWith', str);
    };
    
    SelectorBuilder.prototype.descEndsWith = function(str) {
        return this._addCriteria('descEndsWith', str);
    };
    
    SelectorBuilder.prototype.descContains = function(str) {
        return this._addCriteria('descContains', str);
    };
    
    SelectorBuilder.prototype.descMatches = function(regex) {
        return this._addCriteria('descMatches', regex);
    };
    
    SelectorBuilder.prototype.descMatch = function(regex) {
        return this._addCriteria('descMatch', regex);
    };
    
    // ==================== ClassName 选择器系列 ====================
    
    SelectorBuilder.prototype.className = function(str) {
        return this._addCriteria('className', str);
    };
    
    SelectorBuilder.prototype.classNameStartsWith = function(str) {
        return this._addCriteria('classNameStartsWith', str);
    };
    
    SelectorBuilder.prototype.classNameEndsWith = function(str) {
        return this._addCriteria('classNameEndsWith', str);
    };
    
    SelectorBuilder.prototype.classNameContains = function(str) {
        return this._addCriteria('classNameContains', str);
    };
    
    SelectorBuilder.prototype.classNameMatches = function(regex) {
        return this._addCriteria('classNameMatches', regex);
    };
    
    SelectorBuilder.prototype.classNameMatch = function(regex) {
        return this._addCriteria('classNameMatch', regex);
    };
    
    // ==================== PackageName 选择器系列 ====================
    
    SelectorBuilder.prototype.packageName = function(str) {
        return this._addCriteria('packageName', str);
    };
    
    SelectorBuilder.prototype.packageNameStartsWith = function(str) {
        return this._addCriteria('packageNameStartsWith', str);
    };
    
    SelectorBuilder.prototype.packageNameEndsWith = function(str) {
        return this._addCriteria('packageNameEndsWith', str);
    };
    
    SelectorBuilder.prototype.packageNameContains = function(str) {
        return this._addCriteria('packageNameContains', str);
    };
    
    SelectorBuilder.prototype.packageNameMatches = function(regex) {
        return this._addCriteria('packageNameMatches', regex);
    };
    
    SelectorBuilder.prototype.packageNameMatch = function(regex) {
        return this._addCriteria('packageNameMatch', regex);
    };
    
    // ==================== 布尔属性选择器 ====================
    
    SelectorBuilder.prototype.clickable = function(value) {
        return this._addCriteria('clickable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.longClickable = function(value) {
        return this._addCriteria('longClickable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.checkable = function(value) {
        return this._addCriteria('checkable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.checked = function(value) {
        return this._addCriteria('checked', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.focusable = function(value) {
        return this._addCriteria('focusable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.focused = function(value) {
        return this._addCriteria('focused', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.scrollable = function(value) {
        return this._addCriteria('scrollable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.selected = function(value) {
        return this._addCriteria('selected', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.enabled = function(value) {
        return this._addCriteria('enabled', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.editable = function(value) {
        return this._addCriteria('editable', value !== undefined ? value : true);
    };
    
    SelectorBuilder.prototype.multiLine = function(value) {
        return this._addCriteria('multiLine', value !== undefined ? value : true);
    };
    
    // ==================== 深度/索引选择器 ====================
    
    SelectorBuilder.prototype.depth = function(n) {
        return this._addCriteria('depth', n);
    };
    
    SelectorBuilder.prototype.minDepth = function(n) {
        return this._addCriteria('minDepth', n);
    };
    
    SelectorBuilder.prototype.maxDepth = function(n) {
        return this._addCriteria('maxDepth', n);
    };
    
    SelectorBuilder.prototype.row = function(n) {
        return this._addCriteria('row', n);
    };
    
    SelectorBuilder.prototype.rowCount = function(n) {
        return this._addCriteria('rowCount', n);
    };
    
    SelectorBuilder.prototype.column = function(n) {
        return this._addCriteria('column', n);
    };
    
    SelectorBuilder.prototype.columnCount = function(n) {
        return this._addCriteria('columnCount', n);
    };
    
    SelectorBuilder.prototype.drawingOrder = function(n) {
        return this._addCriteria('drawingOrder', n);
    };
    
    // ==================== 边界相关选择器 ====================
    
    SelectorBuilder.prototype.bounds = function(left, top, right, bottom) {
        return this._addCriteria('bounds', [left, top, right, bottom]);
    };
    
    SelectorBuilder.prototype.boundsInside = function(left, top, right, bottom) {
        return this._addCriteria('boundsInside', [left, top, right, bottom]);
    };
    
    SelectorBuilder.prototype.boundsContains = function(left, top, right, bottom) {
        return this._addCriteria('boundsContains', [left, top, right, bottom]);
    };
    
    // ==================== 查找方法 ====================
    
    /**
     * 找到第一个匹配的控件（不等待）
     * @param {number} i - 可选，指定索引
     * @returns {Promise<any>}
     */
    SelectorBuilder.prototype.findOnce = function(i) {
        return $richauto.invoke('uiselector.findOnce', this._getCriteria(), i);
    };
    
    /**
     * 找到所有匹配的控件（不等待）
     * @returns {Promise<Array>}
     */
    SelectorBuilder.prototype.find = function() {
        return $richauto.invoke('uiselector.find', this._getCriteria());
    };
    
    /**
     * 找到第一个匹配的控件（等待指定时间）
     * @param {number} timeout - 超时时间（毫秒）
     * @returns {Promise<any>}
     */
    SelectorBuilder.prototype.findOne = function(timeout) {
        return $richauto.invoke('uiselector.findOne', this._getCriteria(), timeout);
    };
    
    /**
     * 等待直到找到第一个匹配的控件
     * @param {number} timeout - 超时时间（毫秒）
     * @returns {Promise<any>}
     */
    SelectorBuilder.prototype.untilFindOne = function(timeout) {
        return $richauto.invoke('uiselector.untilFindOne', this._getCriteria(), timeout);
    };
    
    /**
     * 等待直到找到匹配的控件
     * @param {number} timeout - 超时时间（毫秒）
     * @returns {Promise<Array>}
     */
    SelectorBuilder.prototype.untilFind = function(timeout) {
        return $richauto.invoke('uiselector.untilFind', this._getCriteria(), timeout);
    };
    
    /**
     * 等待直到控件出现
     * @param {number} timeout - 超时时间（毫秒）
     * @returns {Promise<void>}
     */
    SelectorBuilder.prototype.waitFor = function(timeout) {
        return $richauto.invoke('uiselector.waitFor', this._getCriteria(), timeout);
    };
    
    /**
     * 检查控件是否存在
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.exists = function() {
        return $richauto.invoke('uiselector.exists', this._getCriteria());
    };
    
    // ==================== 行为方法 ====================
    
    /**
     * 点击控件
     * @param {number} i - 可选，指定索引
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.click = function(i) {
        return $richauto.invoke('uiselector.click', this._getCriteria(), i);
    };
    
    /**
     * 长按控件
     * @param {number} i - 可选，指定索引
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.longClick = function(i) {
        return $richauto.invoke('uiselector.longClick', this._getCriteria(), i);
    };
    
    /**
     * 设置文本
     * @param {number|string} arg1 - 索引或文本
     * @param {string} arg2 - 可选，文本
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.setText = function(arg1, arg2) {
        if (arg2 !== undefined) {
            return $richauto.invoke('uiselector.setText', this._getCriteria(), arg1, arg2);
        } else {
            return $richauto.invoke('uiselector.setText', this._getCriteria(), arg1);
        }
    };
    
    /**
     * 向前滚动
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.scrollForward = function() {
        return $richauto.invoke('uiselector.scrollForward', this._getCriteria());
    };
    
    /**
     * 向后滚动
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.scrollBackward = function() {
        return $richauto.invoke('uiselector.scrollBackward', this._getCriteria());
    };
    
    /**
     * 聚焦控件
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.focus = function() {
        return $richauto.invoke('uiselector.focus', this._getCriteria());
    };
    
    /**
     * 清除聚焦
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.clearFocus = function() {
        return $richauto.invoke('uiselector.clearFocus', this._getCriteria());
    };
    
    /**
     * 粘贴文本
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.paste = function() {
        return $richauto.invoke('uiselector.paste', this._getCriteria());
    };
    
    /**
     * 设置选区
     * @param {number} start - 开始位置
     * @param {number} end - 结束位置
     * @returns {Promise<boolean>}
     */
    SelectorBuilder.prototype.setSelection = function(start, end) {
        return $richauto.invoke('uiselector.setSelection', this._getCriteria(), start, end);
    };
    
    // UiSelector 模块定义
    var uiselectorModule = {
        /**
         * 创建空选择器
         * @returns {SelectorBuilder}
         */
        selector: function() {
            return new SelectorBuilder();
        },
        
        // ==================== 全局选择器快捷方法 ====================
        
        /**
         * ID 选择器
         * @param {string} str - ID 值
         * @returns {SelectorBuilder}
         */
        id: function(str) {
            return new SelectorBuilder().id(str);
        },
        
        /**
         * 文本选择器
         * @param {string} str - 文本值
         * @returns {SelectorBuilder}
         */
        text: function(str) {
            return new SelectorBuilder().text(str);
        },
        
        /**
         * 文本包含选择器
         * @param {string} str - 文本值
         * @returns {SelectorBuilder}
         */
        textContains: function(str) {
            return new SelectorBuilder().textContains(str);
        },
        
        /**
         * 文本开始于选择器
         * @param {string} str - 文本值
         * @returns {SelectorBuilder}
         */
        textStartsWith: function(str) {
            return new SelectorBuilder().textStartsWith(str);
        },
        
        /**
         * 文本结束于选择器
         * @param {string} str - 文本值
         * @returns {SelectorBuilder}
         */
        textEndsWith: function(str) {
            return new SelectorBuilder().textEndsWith(str);
        },
        
        /**
         * 文本匹配选择器
         * @param {string|RegExp} regex - 正则表达式
         * @returns {SelectorBuilder}
         */
        textMatches: function(regex) {
            return new SelectorBuilder().textMatches(regex);
        },
        
        /**
         * 文本匹配选择器
         * @param {string|RegExp} regex - 正则表达式
         * @returns {SelectorBuilder}
         */
        textMatch: function(regex) {
            return new SelectorBuilder().textMatch(regex);
        },
        
        /**
         * 描述选择器
         * @param {string} str - 描述值
         * @returns {SelectorBuilder}
         */
        desc: function(str) {
            return new SelectorBuilder().desc(str);
        },
        
        /**
         * 描述包含选择器
         * @param {string} str - 描述值
         * @returns {SelectorBuilder}
         */
        descContains: function(str) {
            return new SelectorBuilder().descContains(str);
        },
        
        /**
         * 描述开始于选择器
         * @param {string} str - 描述值
         * @returns {SelectorBuilder}
         */
        descStartsWith: function(str) {
            return new SelectorBuilder().descStartsWith(str);
        },
        
        /**
         * 描述结束于选择器
         * @param {string} str - 描述值
         * @returns {SelectorBuilder}
         */
        descEndsWith: function(str) {
            return new SelectorBuilder().descEndsWith(str);
        },
        
        /**
         * 描述匹配选择器
         * @param {string|RegExp} regex - 正则表达式
         * @returns {SelectorBuilder}
         */
        descMatches: function(regex) {
            return new SelectorBuilder().descMatches(regex);
        },
        
        /**
         * 描述匹配选择器
         * @param {string|RegExp} regex - 正则表达式
         * @returns {SelectorBuilder}
         */
        descMatch: function(regex) {
            return new SelectorBuilder().descMatch(regex);
        },
        
        /**
         * 类名选择器
         * @param {string} str - 类名值
         * @returns {SelectorBuilder}
         */
        className: function(str) {
            return new SelectorBuilder().className(str);
        },
        
        /**
         * 包名选择器
         * @param {string} str - 包名值
         * @returns {SelectorBuilder}
         */
        packageName: function(str) {
            return new SelectorBuilder().packageName(str);
        },
        
        /**
         * 可点击选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        clickable: function(value) {
            return new SelectorBuilder().clickable(value);
        },
        
        /**
         * 可长按选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        longClickable: function(value) {
            return new SelectorBuilder().longClickable(value);
        },
        
        /**
         * 可滚动选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        scrollable: function(value) {
            return new SelectorBuilder().scrollable(value);
        },
        
        /**
         * 可编辑选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        editable: function(value) {
            return new SelectorBuilder().editable(value);
        },
        
        /**
         * 可勾选选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        checkable: function(value) {
            return new SelectorBuilder().checkable(value);
        },
        
        /**
         * 已选中选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        selected: function(value) {
            return new SelectorBuilder().selected(value);
        },
        
        /**
         * 已启用选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        enabled: function(value) {
            return new SelectorBuilder().enabled(value);
        },
        
        /**
         * 可聚焦选择器
         * @param {boolean} value - 可选，默认 true
         * @returns {SelectorBuilder}
         */
        focusable: function(value) {
            return new SelectorBuilder().focusable(value);
        },
        
        /**
         * 拾取选择器 - 用于快速选取和操作控件
         * @param {Object|SelectorBuilder} selector - 选择器或条件对象
         * @param {string} compass - 罗盘方向
         * @returns {Promise<any>}
         */
        pickup: function(selector, compass) {
            return $richauto.invoke('uiselector.pickup', selector, compass);
        }
    };
    
    // 挂载到临时命名空间
    window.__richauto_modules.uiselector = uiselectorModule;
    
})(window);

