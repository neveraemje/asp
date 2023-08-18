import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// node_modules/markdown-it-container/index.js
var require_markdown_it_container = __commonJS({
  "node_modules/markdown-it-container/index.js"(exports, module) {
    "use strict";
    module.exports = function container_plugin(md, name, options) {
      function validateDefault(params) {
        return params.trim().split(" ", 2)[0] === name;
      }
      function renderDefault(tokens, idx, _options, env, slf) {
        if (tokens[idx].nesting === 1) {
          tokens[idx].attrJoin("class", name);
        }
        return slf.renderToken(tokens, idx, _options, env, slf);
      }
      options = options || {};
      var min_markers = 3, marker_str = options.marker || ":", marker_char = marker_str.charCodeAt(0), marker_len = marker_str.length, validate = options.validate || validateDefault, render = options.render || renderDefault;
      function container(state, startLine, endLine, silent) {
        var pos, nextLine, marker_count, markup, params, token, old_parent, old_line_max, auto_closed = false, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (marker_char !== state.src.charCodeAt(start)) {
          return false;
        }
        for (pos = start + 1; pos <= max; pos++) {
          if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
            break;
          }
        }
        marker_count = Math.floor((pos - start) / marker_len);
        if (marker_count < min_markers) {
          return false;
        }
        pos -= (pos - start) % marker_len;
        markup = state.src.slice(start, pos);
        params = state.src.slice(pos, max);
        if (!validate(params, markup)) {
          return false;
        }
        if (silent) {
          return true;
        }
        nextLine = startLine;
        for (; ; ) {
          nextLine++;
          if (nextLine >= endLine) {
            break;
          }
          start = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (start < max && state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (marker_char !== state.src.charCodeAt(start)) {
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            continue;
          }
          for (pos = start + 1; pos <= max; pos++) {
            if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
              break;
            }
          }
          if (Math.floor((pos - start) / marker_len) < marker_count) {
            continue;
          }
          pos -= (pos - start) % marker_len;
          pos = state.skipSpaces(pos);
          if (pos < max) {
            continue;
          }
          auto_closed = true;
          break;
        }
        old_parent = state.parentType;
        old_line_max = state.lineMax;
        state.parentType = "container";
        state.lineMax = nextLine;
        token = state.push("container_" + name + "_open", "div", 1);
        token.markup = markup;
        token.block = true;
        token.info = params;
        token.map = [startLine, nextLine];
        state.md.block.tokenize(state, startLine + 1, nextLine);
        token = state.push("container_" + name + "_close", "div", -1);
        token.markup = state.src.slice(start, pos);
        token.block = true;
        state.parentType = old_parent;
        state.lineMax = old_line_max;
        state.line = nextLine + (auto_closed ? 1 : 0);
        return true;
      }
      md.block.ruler.before("fence", "container_" + name, container, {
        alt: ["paragraph", "reference", "blockquote", "list"]
      });
      md.renderer.rules["container_" + name + "_open"] = render;
      md.renderer.rules["container_" + name + "_close"] = render;
    };
  }
});

// node_modules/vuepress-plugin-tabs/dist/vuepress-plugin-tabs.esm.js
var require_vuepress_plugin_tabs_esm = __commonJS({
  "node_modules/vuepress-plugin-tabs/dist/vuepress-plugin-tabs.esm.js"(exports, module) {
    var slicedToArray = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var tabIds = /* @__PURE__ */ new Map();
    function dedupeId(id) {
      var normalizedId = String(id).toLowerCase().replace(" ", "-");
      var currentValue = !tabIds.has(normalizedId) ? 1 : tabIds.get(normalizedId) + 1;
      tabIds.set(normalizedId, currentValue);
      return normalizedId + "-" + currentValue;
    }
    function tabAttributes(val) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var attributes = val.trim().slice("tab".length).trim().split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g).map(function(attr) {
        if (!attr.includes("=")) {
          if (!attr.startsWith('"')) {
            attr = '"' + attr;
          }
          if (!attr.endsWith('"')) {
            attr = attr + '"';
          }
          return "name=" + attr;
        }
        return attr;
      });
      if (options.dedupeIds) {
        var idIndex = attributes.findIndex(function(attr) {
          return attr.startsWith("id=");
        });
        var nameIndex = attributes.findIndex(function(attr) {
          return attr.startsWith("name=");
        });
        if (idIndex !== -1) {
          var id = attributes[idIndex];
          var _id$split = id.split("="), _id$split2 = slicedToArray(_id$split, 2), idValue = _id$split2[1];
          attributes[idIndex] = 'id="' + dedupeId(idValue.substring(1, idValue.length - 1)) + '"';
        } else {
          var name = attributes[nameIndex];
          var _name$split = name.split("="), _name$split2 = slicedToArray(_name$split, 2), nameValue = _name$split2[1];
          attributes.unshift('id="' + dedupeId(nameValue.substring(1, nameValue.length - 1)) + '"');
        }
      }
      return attributes.join(" ");
    }
    function tabsAttributes(val) {
      return val.trim().slice("tabs".length).trim();
    }
    function defaultTabsAttributes(attributes) {
      var attributesString = [];
      if (!attributes || Object.keys(attributes).length === 0) {
        return "";
      }
      for (var key in attributes) {
        var substring = ":" + key + "='" + JSON.stringify(attributes[key]) + "'";
        attributesString.push(substring);
      }
      return attributesString.join(" ");
    }
    var container = require_markdown_it_container();
    var tabs = function(md, options) {
      md.use(container, "tabs", {
        render: function render(tokens, idx) {
          var token = tokens[idx];
          var defaultAttributes = defaultTabsAttributes(options.tabsAttributes);
          var attributes = tabsAttributes(token.info);
          if (token.nesting === 1) {
            return "<tabs " + defaultAttributes + " " + attributes + ">\n";
          } else {
            return "</tabs>\n";
          }
        }
      });
    };
    var container$1 = require_markdown_it_container();
    var tab = function(md, options) {
      md.use(container$1, "tab", {
        render: function render(tokens, idx) {
          var token = tokens[idx];
          var attributes = tabAttributes(token.info, options);
          if (token.nesting === 1) {
            return "<tab " + attributes + ">\n";
          } else {
            return "</tab>\n";
          }
        }
      });
    };
    module.exports = function(opts) {
      var defaultOptions = {
        dedupeIds: false
      };
      var options = Object.assign({}, defaultOptions, opts);
      return {
        enhanceAppFiles: [{
          name: "register-vue-tabs-component",
          content: "import Tabs from 'vue-tabs-component';export default ({ Vue }) => Vue.use(Tabs)"
        }],
        extendMarkdown: function extendMarkdown(md) {
          tabs(md, options);
          tab(md, options);
        }
      };
    };
  }
});
export default require_vuepress_plugin_tabs_esm();
//# sourceMappingURL=vuepress-plugin-tabs.js.map
