'use strict';
if (function($) {
  /**
   * @param {!Request} selector
   * @param {string} context
   * @return {?}
   */
  function m(selector, context) {
    return new m.prototype.init(selector, context);
  }
  /** @type {number} */
  var uuid = 0;
  /**
   * @param {!Range} range
   * @return {?}
   */
  var StableRange = function(range) {
    return this[0] = range.startOffset, this[1] = range.endOffset, this.range = range, this;
  };
  /**
   * @return {?}
   */
  StableRange.prototype.equals = function() {
    return this[0] === this[1];
  };
  /**
   * @param {string} options
   * @return {?}
   */
  $.fn.redactor = function(options) {
    /** @type {!Array} */
    var objectStack = [];
    /** @type {!Array<?>} */
    var o = Array.prototype.slice.call(arguments, 1);
    return "string" == typeof options ? this.each(function() {
      var val = $.data(this, "redactor");
      if ("undefined" == typeof val || !$.isFunction(val[options])) {
        return $.error('No such method "' + options + '" for Redactor');
      }
      var v = val[options].apply(val, o);
      if (void 0 !== v && v !== val) {
        objectStack.push(v);
      }
    }) : this.each(function() {
      if (!$.data(this, "redactor")) {
        $.data(this, "redactor", m(this, options));
      }
    }), 0 === objectStack.length ? this : 1 === objectStack.length ? objectStack[0] : objectStack;
  };
  /** @type {function(!Request, string): ?} */
  $.Redactor = m;
  /** @type {string} */
  $.Redactor.VERSION = "9.1.7";
  $.Redactor.opts = {
    rangy : false,
    iframe : false,
    fullpage : false,
    css : false,
    lang : "en",
    direction : "ltr",
    placeholder : false,
    wym : false,
    mobile : true,
    cleanup : true,
    tidyHtml : true,
    pastePlainText : false,
    removeEmptyTags : true,
    templateVars : false,
    xhtml : false,
    visual : true,
    focus : false,
    tabindex : false,
    autoresize : true,
    minHeight : false,
    maxHeight : false,
    shortcuts : true,
    autosave : false,
    autosaveInterval : 60,
    plugins : false,
    linkAnchor : true,
    linkEmail : true,
    linkProtocol : "http://",
    linkNofollow : false,
    linkSize : 50,
    imageFloatMargin : "10px",
    imageGetJson : false,
    imageUpload : false,
    imageUploadParam : "file",
    fileUpload : false,
    fileUploadParam : "file",
    clipboardUpload : true,
    clipboardUploadUrl : false,
    dragUpload : true,
    dnbImageTypes : ["image/png", "image/jpeg", "image/gif"],
    s3 : false,
    uploadFields : false,
    observeImages : true,
    observeLinks : true,
    modalOverlay : true,
    tabSpaces : false,
    tabFocus : true,
    air : false,
    airButtons : ["formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent"],
    toolbar : true,
    toolbarFixed : false,
    toolbarFixedTarget : document,
    toolbarFixedTopOffset : 0,
    toolbarFixedBox : false,
    toolbarExternal : false,
    buttonSource : true,
    buttonSeparator : '<li class="redactor_separator"></li>',
    buttonsCustom : {},
    buttonsAdd : [],
    buttons : ["html", "|", "formatting", "|", "bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "outdent", "indent", "|", "image", "video", "file", "table", "link", "|", "alignment", "|", "horizontalrule"],
    activeButtons : ["deleted", "italic", "bold", "underline", "unorderedlist", "orderedlist", "alignleft", "aligncenter", "alignright", "justify", "table"],
    activeButtonsStates : {
      b : "bold",
      strong : "bold",
      i : "italic",
      em : "italic",
      del : "deleted",
      strike : "deleted",
      ul : "unorderedlist",
      ol : "orderedlist",
      u : "underline",
      tr : "table",
      td : "table",
      table : "table"
    },
    activeButtonsAdd : false,
    formattingTags : ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
    linebreaks : false,
    paragraphy : true,
    convertDivs : true,
    convertLinks : true,
    convertImageLinks : false,
    convertVideoLinks : false,
    formattingPre : false,
    phpTags : false,
    allowedTags : false,
    deniedTags : ["html", "head", "link", "body", "meta", "script", "style", "applet"],
    boldTag : "strong",
    italicTag : "em",
    indentValue : 20,
    buffer : [],
    rebuffer : [],
    textareamode : false,
    emptyHtml : "<p>&#x200b;</p>",
    invisibleSpace : "&#x200b;",
    rBlockTest : /^(P|H[1-6]|LI|ADDRESS|SECTION|HEADER|FOOTER|ASIDE|ARTICLE)$/i,
    alignmentTags : ["P", "H1", "H2", "H3", "H4", "H5", "H6", "DD", "DL", "DT", "DIV", "TD", "BLOCKQUOTE", "OUTPUT", "FIGCAPTION", "ADDRESS", "SECTION", "HEADER", "FOOTER", "ASIDE", "ARTICLE"],
    ownLine : ["area", "body", "head", "hr", "i?frame", "link", "meta", "noscript", "style", "script", "table", "tbody", "thead", "tfoot"],
    contOwnLine : ["li", "dt", "dt", "h[1-6]", "option", "script"],
    newLevel : ["blockquote", "div", "dl", "fieldset", "form", "frameset", "map", "ol", "p", "pre", "select", "td", "th", "tr", "ul"],
    blockLevelElements : ["P", "H1", "H2", "H3", "H4", "H5", "H6", "DD", "DL", "DT", "DIV", "LI", "BLOCKQUOTE", "OUTPUT", "FIGCAPTION", "PRE", "ADDRESS", "SECTION", "HEADER", "FOOTER", "ASIDE", "ARTICLE", "TD"],
    langs : {
      en : {
        html : "HTML",
        video : "Insert youtube",
        image : "Insert Image",
        table : "Table",
        link : "Link",
        link_insert : "Insert link",
        link_edit : "Edit link",
        unlink : "Unlink",
        formatting : "Formatting",
        paragraph : "Normal text",
        quote : "Quote",
        code : "Code",
        header1 : "Header 1",
        header2 : "Header 2",
        header3 : "Header 3",
        header4 : "Header 4",
        header5 : "Header 5",
        bold : "Bold",
        italic : "Italic",
        fontcolor : "Font Color",
        backcolor : "Back Color",
        unorderedlist : "Unordered List",
        orderedlist : "Ordered List",
        outdent : "Outdent",
        indent : "Indent",
        cancel : "Cancel",
        insert : "Insert",
        save : "Save",
        _delete : "Delete",
        insert_table : "Insert Table",
        insert_row_above : "Add Row Above",
        insert_row_below : "Add Row Below",
        insert_column_left : "Add Column Left",
        insert_column_right : "Add Column Right",
        delete_column : "Delete Column",
        delete_row : "Delete Row",
        delete_table : "Delete Table",
        rows : "Rows",
        columns : "Columns",
        add_head : "Add Head",
        delete_head : "Delete Head",
        title : "Title",
        image_position : "Position",
        none : "None",
        left : "Left",
        right : "Right",
        image_web_link : "Image Web Link",
        text : "Text",
        mailto : "Email",
        web : "URL",
        video_html_code : "Enter youtube Url",
        file : "Insert File",
        upload : "Upload",
        download : "Download",
        choose : "Choose",
        or_choose : "Or choose",
        drop_file_here : "Drop file here",
        align_left : "Align text to the left",
        align_center : "Center text",
        align_right : "Align text to the right",
        align_justify : "Justify text",
        horizontalrule : "Insert Horizontal Rule",
        deleted : "Deleted",
        anchor : "Anchor",
        link_new_tab : "Open link in new tab",
        underline : "Underline",
        alignment : "Alignment",
        filename : "Name (optional)",
        edit : "Edit"
      }
    }
  };
  m.fn = $.Redactor.prototype = {
    keyCode : {
      BACKSPACE : 8,
      DELETE : 46,
      DOWN : 40,
      ENTER : 13,
      ESC : 27,
      TAB : 9,
      CTRL : 17,
      META : 91,
      LEFT : 37,
      LEFT_WIN : 91
    },
    init : function(element, options) {
      /** @type {boolean} */
      this.rtePaste = false;
      this.$element = this.$source = $(element);
      /** @type {number} */
      this.uuid = uuid++;
      var defaults = $.extend(true, {}, $.Redactor.opts);
      if (this.opts = $.extend({}, defaults, this.$element.data(), options), this.start = true, this.dropdowns = [], this.sourceHeight = this.$source.css("height"), this.sourceWidth = this.$source.css("width"), this.opts.fullpage && (this.opts.iframe = true), this.opts.linebreaks && (this.opts.paragraphy = false), this.opts.paragraphy && (this.opts.linebreaks = false), this.opts.toolbarFixedBox && (this.opts.toolbarFixed = true), this.document = document, this.window = window, this.savedSel = false, 
      this.cleanlineBefore = new RegExp("^<(/?" + this.opts.ownLine.join("|/?") + "|" + this.opts.contOwnLine.join("|") + ")[ >]"), this.cleanlineAfter = new RegExp("^<(br|/?" + this.opts.ownLine.join("|/?") + "|/" + this.opts.contOwnLine.join("|/") + ")[ >]"), this.cleannewLevel = new RegExp("^</?(" + this.opts.newLevel.join("|") + ")[ >]"), this.rTestBlock = new RegExp("^(" + this.opts.blockLevelElements.join("|") + ")$", "i"), this.opts.linebreaks === false) {
        if (this.opts.allowedTags !== false) {
          /** @type {!Array} */
          var checkFor = ["strong", "em", "del"];
          /** @type {!Array} */
          var tags = ["b", "i", "strike"];
          if ("-1" === $.inArray("p", this.opts.allowedTags)) {
            this.opts.allowedTags.push("p");
          }
          for (i in checkFor) {
            if ("-1" != $.inArray(checkFor[i], this.opts.allowedTags)) {
              this.opts.allowedTags.push(tags[i]);
            }
          }
        }
        if (this.opts.deniedTags !== false) {
          var l = $.inArray("p", this.opts.deniedTags);
          if ("-1" !== l) {
            this.opts.deniedTags.splice(l, l);
          }
        }
      }
      if (this.browser("msie") || this.browser("opera")) {
        this.opts.buttons = this.removeFromArrayByValue(this.opts.buttons, "horizontalrule");
      }
      this.opts.curLang = this.opts.langs[this.opts.lang];
      this.buildStart();
    },
    toolbarInit : function(options) {
      return {
        html : {
          title : options.html,
          func : "toggle"
        },
        formatting : {
          title : options.formatting,
          func : "show",
          dropdown : {
            p : {
              title : options.paragraph,
              func : "formatBlocks"
            },
            blockquote : {
              title : options.quote,
              func : "formatQuote",
              className : "redactor_format_blockquote"
            },
            pre : {
              title : options.code,
              func : "formatBlocks",
              className : "redactor_format_pre"
            },
            h1 : {
              title : options.header1,
              func : "formatBlocks",
              className : "redactor_format_h1"
            },
            h2 : {
              title : options.header2,
              func : "formatBlocks",
              className : "redactor_format_h2"
            },
            h3 : {
              title : options.header3,
              func : "formatBlocks",
              className : "redactor_format_h3"
            },
            h4 : {
              title : options.header4,
              func : "formatBlocks",
              className : "redactor_format_h4"
            },
            h5 : {
              title : options.header5,
              func : "formatBlocks",
              className : "redactor_format_h5"
            }
          }
        },
        bold : {
          title : options.bold,
          exec : "bold"
        },
        italic : {
          title : options.italic,
          exec : "italic"
        },
        deleted : {
          title : options.deleted,
          exec : "strikethrough"
        },
        underline : {
          title : options.underline,
          exec : "underline"
        },
        unorderedlist : {
          title : "&bull; " + options.unorderedlist,
          exec : "insertunorderedlist"
        },
        orderedlist : {
          title : "1. " + options.orderedlist,
          exec : "insertorderedlist"
        },
        outdent : {
          title : "< " + options.outdent,
          func : "indentingOutdent"
        },
        indent : {
          title : "> " + options.indent,
          func : "indentingIndent"
        },
        image : {
          title : options.image,
          func : "imageShow"
        },
        video : {
          title : options.video,
          func : "videoShow"
        },
        pdf : {
          title : "my",
          func : "videoShow"
        }
        ,
        file : {
          title : options.file,
          func : "fileShow"
        },
        table : {
          title : options.table,
          func : "show",
          dropdown : {
            insert_table : {
              title : options.insert_table,
              func : "tableShow"
            },
            separator_drop1 : {
              name : "separator"
            },
            insert_row_above : {
              title : options.insert_row_above,
              func : "tableAddRowAbove"
            },
            insert_row_below : {
              title : options.insert_row_below,
              func : "tableAddRowBelow"
            },
            insert_column_left : {
              title : options.insert_column_left,
              func : "tableAddColumnLeft"
            },
            insert_column_right : {
              title : options.insert_column_right,
              func : "tableAddColumnRight"
            },
            separator_drop2 : {
              name : "separator"
            },
            add_head : {
              title : options.add_head,
              func : "tableAddHead"
            },
            delete_head : {
              title : options.delete_head,
              func : "tableDeleteHead"
            },
            separator_drop3 : {
              name : "separator"
            },
            delete_column : {
              title : options.delete_column,
              func : "tableDeleteColumn"
            },
            delete_row : {
              title : options.delete_row,
              func : "tableDeleteRow"
            },
            delete_table : {
              title : options.delete_table,
              func : "tableDeleteTable"
            }
          }
        },
        link : {
          title : options.link,
          func : "show",
          dropdown : {
            link : {
              title : options.link_insert,
              func : "linkShow"
            },
            unlink : {
              title : options.unlink,
              exec : "unlink"
            }
          }
        },
        fontcolor : {
          title : options.fontcolor,
          func : "show"
        },
        backcolor : {
          title : options.backcolor,
          func : "show"
        },
        alignment : {
          title : options.alignment,
          func : "show",
          dropdown : {
            alignleft : {
              title : options.align_left,
              func : "alignmentLeft"
            },
            aligncenter : {
              title : options.align_center,
              func : "alignmentCenter"
            },
            alignright : {
              title : options.align_right,
              func : "alignmentRight"
            },
            justify : {
              title : options.align_justify,
              func : "alignmentJustify"
            }
          }
        },
        alignleft : {
          title : options.align_left,
          func : "alignmentLeft"
        },
        aligncenter : {
          title : options.align_center,
          func : "alignmentCenter"
        },
        alignright : {
          title : options.align_right,
          func : "alignmentRight"
        },
        justify : {
          title : options.align_justify,
          func : "alignmentJustify"
        },
        horizontalrule : {
          exec : "inserthorizontalrule",
          title : options.horizontalrule
        }
      };
    },
    callback : function(name, type, value) {
      var fn = this.opts[name + "Callback"];
      return $.isFunction(fn) ? type === false ? fn.call(this, value) : fn.call(this, type, value) : value;
    },
    destroy : function() {
      clearInterval(this.autosaveInterval);
      $(window).off(".redactor");
      this.$source.off("redactor-textarea");
      this.$element.off(".redactor").removeData("redactor");
      var e = this.get();
      if (this.opts.textareamode) {
        this.$box.after(this.$source);
        this.$box.remove();
        this.$source.val(e).show();
      } else {
        var $wrapper = this.$editor;
        if (this.opts.iframe) {
          $wrapper = this.$element;
        }
        this.$box.after($wrapper);
        this.$box.remove();
        $wrapper.removeClass("redactor_editor").removeClass("redactor_editor_wym").removeAttr("contenteditable").html(e).show();
      }
      if (this.opts.air) {
        $("#redactor_air_" + this.uuid).remove();
      }
    },
    getObject : function() {
      return $.extend({}, this);
    },
    getEditor : function() {
      return this.$editor;
    },
    getBox : function() {
      return this.$box;
    },
    getIframe : function() {
      return this.opts.iframe ? this.$frame : false;
    },
    getToolbar : function() {
      return this.$toolbar ? this.$toolbar : false;
    },
    get : function() {
      return this.$source.val();
    },
    getCodeIframe : function() {
      this.$editor.removeAttr("contenteditable").removeAttr("dir");
      var t = this.outerHtml(this.$frame.contents().children());
      return this.$editor.attr({
        contenteditable : true,
        dir : this.opts.direction
      }), t;
    },
    set : function(editor, element, i) {
      editor = editor.toString();
      if (this.opts.fullpage) {
        this.setCodeIframe(editor);
      } else {
        this.setEditor(editor, element);
      }
      if (i !== false) {
        this.placeholderRemove();
      }
    },
    setEditor : function(e, field) {
      if (field !== false) {
        e = this.cleanSavePreCode(e);
        e = this.cleanStripTags(e);
        e = this.cleanConvertProtected(e);
        e = this.cleanConvertInlineTags(e, true);
        e = this.opts.linebreaks === false ? this.cleanConverters(e) : e.replace(/<p(.*?)>([\w\W]*?)<\/p>/gi, "$2<br>");
      }
      e = this.cleanEmpty(e);
      this.$editor.html(e);
      this.setNonEditable();
      this.setSpansVerified();
      this.sync();
    },
    setCodeIframe : function(id) {
      var e = this.iframePage();
      /** @type {string} */
      this.$frame[0].src = "about:blank";
      id = this.cleanConvertProtected(id);
      id = this.cleanConvertInlineTags(id);
      id = this.cleanRemoveSpaces(id);
      e.open();
      e.write(id);
      e.close();
      if (this.opts.fullpage) {
        this.$editor = this.$frame.contents().find("body").attr({
          contenteditable : true,
          dir : this.opts.direction
        });
      }
      this.setNonEditable();
      this.setSpansVerified();
      this.sync();
    },
    setFullpageOnInit : function(value) {
      value = this.cleanSavePreCode(value, true);
      value = this.cleanConverters(value);
      value = this.cleanEmpty(value);
      this.$editor.html(value);
      this.setNonEditable();
      this.setSpansVerified();
      this.sync();
    },
    setSpansVerified : function() {
      var e = this.$editor.find("span");
      /** @type {string} */
      var i = "inline";
      $.each(e, function() {
        var tpl = this.outerHTML;
        /** @type {!RegExp} */
        var regex = new RegExp("<" + this.tagName, "i");
        var html = tpl.replace(regex, "<" + i);
        /** @type {!RegExp} */
        regex = new RegExp("</" + this.tagName, "i");
        html = html.replace(regex, "</" + i);
        $(this).replaceWith(html);
      });
    },
    setSpansVerifiedHtml : function(originalBaseURL) {
      return originalBaseURL = originalBaseURL.replace(/<span(.*?)>/, "<inline$1>"), originalBaseURL.replace(/<\/span>/, "</inline>");
    },
    setNonEditable : function() {
      this.$editor.find(".noneditable").attr("contenteditable", false);
    },
    sync : function() {
      /** @type {string} */
      var value = "";
      if (this.cleanUnverified(), value = this.opts.fullpage ? this.getCodeIframe() : this.$editor.html(), value = this.syncClean(value), value = this.cleanRemoveEmptyTags(value), value = value.replace(/<\/li><(ul|ol)>([\w\W]*?)<\/(ul|ol)>/gi, "<$1>$2</$1></li>"), "<br>" === $.trim(value) && (value = ""), this.opts.xhtml) {
        /** @type {!Array} */
        var tagSelfClosing = ["br", "hr", "img", "link", "input", "meta"];
        $.each(tagSelfClosing, function(canCreateDiscussions, i) {
          value = value.replace(new RegExp("<" + i + "(.*?[^/$]?)>", "gi"), "<" + i + "$1 />");
        });
      }
      value = this.callback("syncBefore", false, value);
      this.$source.val(value);
      this.callback("syncAfter", false, value);
      if (this.start === false) {
        this.callback("change", false, value);
      }
    },
    syncClean : function(value) {
      return this.opts.fullpage || (value = this.cleanStripTags(value)), value = $.trim(value), value = this.placeholderRemoveFromCode(value), value = value.replace(/&#x200b;/gi, ""), value = value.replace(/&#8203;/gi, ""), value = value.replace(/&nbsp;/gi, " "), this.opts.linkNofollow && (value = value.replace(/<a(.*?)rel="nofollow"(.*?)>/gi, "<a$1$2>"), value = value.replace(/<a(.*?)>/gi, '<a$1 rel="nofollow">')), value = value.replace("\x3c!--?php", "<?php"), value = value.replace("?--\x3e", "?>"), 
      value = value.replace(/<(.*?)class="noeditable"(.*?) contenteditable="false"(.*?)>/gi, '<$1class="noeditable"$2$3>'), value = value.replace(/ data-tagblock=""/gi, ""), value = value.replace(/<br\s?\/?>\n?<\/(P|H[1-6]|LI|ADDRESS|SECTION|HEADER|FOOTER|ASIDE|ARTICLE)>/gi, "</$1>"), value = value.replace(/<span(.*?)id="redactor-image-box"(.*?)>([\w\W]*?)<img(.*?)><\/span>/i, "$3<img$4>"), value = value.replace(/<span(.*?)id="redactor-image-resizer"(.*?)>(.*?)<\/span>/i, ""), value = value.replace(/<span(.*?)id="redactor-image-editter"(.*?)>(.*?)<\/span>/i, 
      ""), value = value.replace(/<font(.*?)>([\w\W]*?)<\/font>/gi, "$2"), value = value.replace(/<span(.*?)>([\w\W]*?)<\/span>/gi, "$2"), value = value.replace(/<inline(.*?)>([\w\W]*?)<\/inline>/gi, "<span$1>$2</span>"), value = value.replace(/<span(.*?)class="redactor_placeholder"(.*?)>([\w\W]*?)<\/span>/gi, ""), value = value.replace(/&amp;/gi, "&"), value = this.cleanReConvertProtected(value);
    },
    buildStart : function() {
      /** @type {string} */
      this.content = "";
      this.$box = $('<div class="redactor_box" />');
      if ("TEXTAREA" === this.$source[0].tagName) {
        /** @type {boolean} */
        this.opts.textareamode = true;
      }
      if (this.opts.mobile === false && this.isMobile()) {
        this.buildMobile();
      } else {
        this.buildContent();
        if (this.opts.iframe) {
          /** @type {boolean} */
          this.opts.autoresize = false;
          this.iframeStart();
        } else {
          if (this.opts.textareamode) {
            this.buildFromTextarea();
          } else {
            this.buildFromElement();
          }
        }
        if (!this.opts.iframe) {
          this.buildOptions();
          this.buildAfter();
        }
      }
    },
    buildMobile : function() {
      if (!this.opts.textareamode) {
        this.$editor = this.$source;
        this.$editor.hide();
        this.$source = this.buildCodearea(this.$editor);
        this.$source.val(this.content);
      }
      this.$box.insertAfter(this.$source).append(this.$source);
    },
    buildContent : function() {
      if (this.opts.textareamode) {
        this.content = $.trim(this.$source.val());
      } else {
        this.content = $.trim(this.$source.html());
      }
    },
    buildFromTextarea : function() {
      this.$editor = $("<div />");
      this.$box.insertAfter(this.$source).append(this.$editor).append(this.$source);
      this.buildAddClasses(this.$editor);
      this.buildEnable();
    },
    buildFromElement : function() {
      this.$editor = this.$source;
      this.$source = this.buildCodearea(this.$editor);
      this.$box.insertAfter(this.$editor).append(this.$editor).append(this.$source);
      this.buildEnable();
    },
    buildCodearea : function(simpleselect) {
      return $("<textarea />").attr("name", simpleselect.attr("id")).css("height", this.sourceHeight);
    },
    buildAddClasses : function(terms) {
      $.each(this.$source.get(0).className.split(/\s+/), function(canCreateDiscussions, s) {
        terms.addClass("redactor_" + s);
      });
    },
    buildEnable : function() {
      this.$editor.addClass("redactor_editor").attr({
        contenteditable : true,
        dir : this.opts.direction
      });
      this.$source.attr("dir", this.opts.direction).hide();
      this.set(this.content, true, false);
    },
    buildOptions : function() {
      var obj = this.$editor;
      if (this.opts.iframe) {
        obj = this.$frame;
      }
      if (this.opts.tabindex) {
        obj.attr("tabindex", this.opts.tabindex);
      }
      if (this.opts.minHeight) {
        obj.css("min-height", this.opts.minHeight + "px");
      }
      if (this.opts.maxHeight) {
        obj.css("max-height", this.opts.maxHeight + "px");
      }
      if (this.opts.wym) {
        this.$editor.addClass("redactor_editor_wym");
      }
      if (!this.opts.autoresize) {
        obj.css("height", this.sourceHeight);
      }
    },
    buildAfter : function() {
      if (this.start = false, this.opts.toolbar && (this.opts.toolbar = this.toolbarInit(this.opts.curLang), this.toolbarBuild()), this.modalTemplatesInit(), this.buildPlugins(), this.buildBindKeyboard(), this.opts.autosave && this.autosave(), setTimeout($.proxy(this.observeStart, this), 4), this.browser("mozilla")) {
        try {
          this.document.execCommand("enableObjectResizing", false, false);
          this.document.execCommand("enableInlineTableEditing", false, false);
        } catch (e) {
        }
      }
      if (this.opts.focus) {
        setTimeout($.proxy(this.focus, this), 100);
      }
      if (!this.opts.visual) {
        setTimeout($.proxy(function() {
          /** @type {boolean} */
          this.opts.visual = true;
          this.toggle(false);
        }, this), 200);
      }
      this.callback("init");
    },
    buildBindKeyboard : function() {
      if (this.opts.dragUpload && this.opts.imageUpload !== false) {
        this.$editor.on("drop.redactor", $.proxy(this.buildEventDrop, this));
      }
      this.$editor.on("paste.redactor", $.proxy(this.buildEventPaste, this));
      this.$editor.on("keydown.redactor", $.proxy(this.buildEventKeydown, this));
      this.$editor.on("keyup.redactor", $.proxy(this.buildEventKeyup, this));
      if ($.isFunction(this.opts.textareaKeydownCallback)) {
        this.$source.on("keydown.redactor-textarea", $.proxy(this.opts.textareaKeydownCallback, this));
      }
      if ($.isFunction(this.opts.focusCallback)) {
        this.$editor.on("focus.redactor", $.proxy(this.opts.focusCallback, this));
      }
      var textArea;
      $(document).mousedown(function(jEvent) {
        textArea = $(jEvent.target);
      });
      this.$editor.on("blur.redactor", $.proxy(function(s) {
        if (!($(textArea).hasClass("redactor_toolbar") || 0 != $(textArea).parents(".redactor_toolbar").size())) {
          /** @type {boolean} */
          this.selectall = false;
          if ($.isFunction(this.opts.blurCallback)) {
            this.callback("blur", s);
          }
        }
      }, this));
    },
    buildEventDrop : function(e) {
      if (e = e.originalEvent || e, void 0 === window.FormData || !e.dataTransfer) {
        return true;
      }
      var i = e.dataTransfer.files.length;
      if (0 == i) {
        return true;
      }
      e.preventDefault();
      var n = e.dataTransfer.files[0];
      if (this.opts.dnbImageTypes !== false && -1 == this.opts.dnbImageTypes.indexOf(n.type)) {
        return true;
      }
      this.bufferSet();
      var input_editor = $('<div id="redactor-progress-drag" class="redactor-progress redactor-progress-striped"><div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div></div>');
      $(document.body).append(input_editor);
      if (this.opts.s3 === false) {
        this.dragUploadAjax(this.opts.imageUpload, n, true, input_editor, e, this.opts.imageUploadParam);
      } else {
        this.s3uploadFile(n);
      }
    },
    buildEventPaste : function(e) {
      /** @type {boolean} */
      var i = false;
      if (this.browser("webkit") && -1 === navigator.userAgent.indexOf("Chrome")) {
        var s = this.browser("version").split(".");
        if (s[0] < 536) {
          /** @type {boolean} */
          i = true;
        }
      }
      if (i) {
        return true;
      }
      if (this.browser("opera")) {
        return true;
      }
      if (this.opts.clipboardUpload && this.buildEventClipboardUpload(e)) {
        return true;
      }
      if (this.opts.cleanup) {
        /** @type {boolean} */
        this.rtePaste = true;
        this.selectionSave();
        if (!this.selectall) {
          if (this.opts.autoresize === true) {
            this.$editor.height(this.$editor.height());
            this.saveScroll = this.document.body.scrollTop;
          } else {
            this.saveScroll = this.$editor.scrollTop();
          }
        }
        var frag = this.extractContent();
        setTimeout($.proxy(function() {
          var pastedFrag = this.extractContent();
          this.$editor.append(frag);
          this.selectionRestore();
          var html = this.getFragmentHtml(pastedFrag);
          this.pasteClean(html);
          if (this.opts.autoresize === true) {
            this.$editor.css("height", "auto");
          }
        }, this), 1);
      }
    },
    buildEventClipboardUpload : function(event) {
      var e = event.originalEvent || event;
      if (this.clipboardFilePaste = false, "undefined" == typeof e.clipboardData) {
        return false;
      }
      if (e.clipboardData.items) {
        var blob = e.clipboardData.items[0].getAsFile();
        if (null !== blob) {
          this.bufferSet();
          /** @type {boolean} */
          this.clipboardFilePaste = true;
          /** @type {!FileReader} */
          var fileReader = new FileReader;
          return fileReader.onload = $.proxy(this.pasteClipboardUpload, this), fileReader.readAsDataURL(blob), true;
        }
      }
      return false;
    },
    buildEventKeydown : function(e) {
      if (this.rtePaste) {
        return false;
      }
      var key = e.which;
      var $lastClicked = e.ctrlKey || e.metaKey;
      var parent = this.getParent();
      var obj = this.getCurrent();
      var input = this.getBlock();
      /** @type {boolean} */
      var PipeBinding = false;
      if (this.callback("keydown", e), this.imageResizeHide(false), (parent && "PRE" === $(parent).get(0).tagName || obj && "PRE" === $(obj).get(0).tagName) && (PipeBinding = true, key === this.keyCode.DOWN && this.insertAfterLastElement(input)), key === this.keyCode.DOWN && (parent && "BLOCKQUOTE" === $(parent)[0].tagName && this.insertAfterLastElement(parent), obj && "BLOCKQUOTE" === $(obj)[0].tagName && this.insertAfterLastElement(obj), parent && "P" === $(parent)[0].tagName && "BLOCKQUOTE" == 
      $(parent).parent()[0].tagName && this.insertAfterLastElement(parent, $(parent).parent()[0]), obj && "P" === $(obj)[0].tagName && parent && "BLOCKQUOTE" == $(parent)[0].tagName && this.insertAfterLastElement(obj, parent)), $lastClicked && !e.shiftKey && this.shortcuts(e, key), $lastClicked && 90 === key && !e.shiftKey && !e.altKey) {
        return e.preventDefault(), void(this.opts.buffer.length ? this.bufferUndo() : this.document.execCommand("undo", false, false));
      }
      if ($lastClicked && 90 === key && e.shiftKey && !e.altKey) {
        return e.preventDefault(), void(0 != this.opts.rebuffer.length ? this.bufferRedo() : this.document.execCommand("redo", false, false));
      }
      if ($lastClicked && 65 === key ? this.selectall = true : key == this.keyCode.LEFT_WIN || $lastClicked || (this.selectall = false), key != this.keyCode.ENTER || e.shiftKey || e.ctrlKey || e.metaKey) {
        if (key === this.keyCode.ENTER && (e.ctrlKey || e.shiftKey)) {
          this.bufferSet();
          e.preventDefault();
          this.insertLineBreak();
        }
      } else {
        if (this.browser("msie") && 1 == parent.nodeType && ("TD" == parent.tagName || "TH" == parent.tagName)) {
          return e.preventDefault(), this.bufferSet(), this.insertNode(document.createElement("br")), this.callback("enter", e), false;
        }
        if (PipeBinding === true) {
          return this.buildEventKeydownPre(e, obj);
        }
        if (!this.opts.linebreaks) {
          if (input && this.opts.rBlockTest.test(input.tagName)) {
            this.bufferSet();
            setTimeout($.proxy(function() {
              var elem = this.getBlock();
              if ("DIV" === elem.tagName && !$(elem).hasClass("redactor_editor")) {
                var i = $("<p>" + this.opts.invisibleSpace + "</p>");
                $(elem).replaceWith(i);
                this.selectionStart(i);
              }
            }, this), 1);
          } else {
            if (input === false) {
              this.bufferSet();
              var $noRangeMsg = $("<p>" + this.opts.invisibleSpace + "</p>");
              return this.insertNode($noRangeMsg[0]), this.selectionStart($noRangeMsg), this.callback("enter", e), false;
            }
          }
        }
        if (this.opts.linebreaks) {
          if (!input || !this.opts.rBlockTest.test(input.tagName)) {
            return this.buildEventKeydownInsertLineBreak(e);
          }
          this.bufferSet();
          setTimeout($.proxy(function() {
            var block = this.getBlock();
            if (!("DIV" !== block.tagName && "P" !== block.tagName || $(block).hasClass("redactor_editor"))) {
              this.replaceLineBreak(block);
            }
          }, this), 1);
        }
        if ("BLOCKQUOTE" == input.tagName || "FIGCAPTION" == input.tagName) {
          return this.buildEventKeydownInsertLineBreak(e);
        }
        this.callback("enter", e);
      }
      return key === this.keyCode.TAB && this.opts.shortcuts ? this.buildEventKeydownTab(e, PipeBinding) : void(key === this.keyCode.BACKSPACE && this.buildEventKeydownBackspace(obj));
    },
    buildEventKeydownPre : function(event, target) {
      event.preventDefault();
      this.bufferSet();
      var objsTree = $(target).parent().text();
      return this.insertNode(document.createTextNode("\n")), -1 == objsTree.search(/\s$/) && this.insertNode(document.createTextNode("\n")), this.sync(), this.callback("enter", event), false;
    },
    buildEventKeydownTab : function(e, k) {
      return this.opts.tabFocus ? this.isEmpty(this.get()) ? true : (e.preventDefault(), k !== true || e.shiftKey ? this.opts.tabSpaces !== false ? (this.bufferSet(), this.insertNode(document.createTextNode(Array(this.opts.tabSpaces + 1).join(" "))), this.sync(), false) : (e.shiftKey ? this.indentingOutdent() : this.indentingIndent(), false) : (this.bufferSet(), this.insertNode(document.createTextNode("\t")), this.sync(), false)) : true;
    },
    buildEventKeydownBackspace : function(node) {
      if ("undefined" != typeof node.tagName && /^(H[1-6])$/i.test(node.tagName)) {
        var i;
        i = $(this.opts.linebreaks === false ? "<p>" + this.opts.invisibleSpace + "</p>" : "<br>" + this.opts.invisibleSpace);
        $(node).replaceWith(i);
        this.selectionStart(i);
      }
      if ("undefined" != typeof node.nodeValue && null !== node.nodeValue && node.remove && 3 === node.nodeType && null == node.nodeValue.match(/[^\/\u200B]/g)) {
        node.remove();
      }
    },
    buildEventKeydownInsertLineBreak : function(event) {
      this.bufferSet();
      event.preventDefault();
      this.insertLineBreak();
      this.callback("enter", event);
    },
    buildEventKeyup : function(e) {
      if (this.rtePaste) {
        return false;
      }
      var key = e.which;
      var p = this.getParent();
      var current = this.getCurrent();
      if (!this.opts.linebreaks && 3 == current.nodeType && (0 == p || "BODY" == p.tagName)) {
        var $this = $("<p>").append($(current).clone());
        $(current).replaceWith($this);
        var $list = $($this).next();
        if ("undefined" != typeof $list[0] && "BR" == $list[0].tagName) {
          $list.remove();
        }
        this.selectionEnd($this);
      }
      return (this.opts.convertLinks || this.opts.convertImageLinks || this.opts.convertVideoLinks) && key === this.keyCode.ENTER && this.buildEventKeyupConverters(), key === this.keyCode.DELETE || key === this.keyCode.BACKSPACE ? this.formatEmpty(e) : (this.callback("keyup", e), void this.sync());
    },
    buildEventKeyupConverters : function() {
      this.formatLinkify(this.opts.linkProtocol, this.opts.convertLinks, this.opts.convertImageLinks, this.opts.convertVideoLinks, this.opts.linkSize);
      setTimeout($.proxy(function() {
        if (this.opts.convertImageLinks) {
          this.observeImages();
        }
        if (this.opts.observeLinks) {
          this.observeLinks();
        }
      }, this), 5);
    },
    buildPlugins : function() {
      if (this.opts.plugins) {
        $.each(this.opts.plugins, $.proxy(function(canCreateDiscussions, s) {
          if (RedactorPlugins[s]) {
            $.extend(this, RedactorPlugins[s]);
            if ($.isFunction(RedactorPlugins[s].init)) {
              this.init();
            }
          }
        }, this));
      }
    },
    iframeStart : function() {
      this.iframeCreate();
      if (this.opts.textareamode) {
        this.iframeAppend(this.$source);
      } else {
        this.$sourceOld = this.$source.hide();
        this.$source = this.buildCodearea(this.$sourceOld);
        this.iframeAppend(this.$sourceOld);
      }
    },
    iframeAppend : function($field) {
      this.$source.attr("dir", this.opts.direction).hide();
      this.$box.insertAfter($field).append(this.$frame).append(this.$source);
    },
    iframeCreate : function() {
      this.$frame = $('<iframe style="width: 100%;" frameborder="0" />').one("load", $.proxy(function() {
        if (this.opts.fullpage) {
          this.iframePage();
          if ("" === this.content) {
            this.content = this.opts.invisibleSpace;
          }
          this.$frame.contents()[0].write(this.content);
          this.$frame.contents()[0].close();
          /** @type {number} */
          var chat_retry = setInterval($.proxy(function() {
            if (this.$frame.contents().find("body").html()) {
              clearInterval(chat_retry);
              this.iframeLoad();
            }
          }, this), 0);
        } else {
          this.iframeLoad();
        }
      }, this));
    },
    iframeDoc : function() {
      return this.$frame[0].contentWindow.document;
    },
    iframePage : function() {
      var el = this.iframeDoc();
      return el.documentElement && el.removeChild(el.documentElement), el;
    },
    iframeAddCss : function(time) {
      time = time || this.opts.css;
      if (this.isString(time)) {
        this.$frame.contents().find("head").append('<link rel="stylesheet" href="' + time + '" />');
      }
      if ($.isArray(time)) {
        $.each(time, $.proxy(function(canCreateDiscussions, localPublishTime) {
          this.iframeAddCss(localPublishTime);
        }, this));
      }
    },
    iframeLoad : function() {
      this.$editor = this.$frame.contents().find("body").attr({
        contenteditable : true,
        dir : this.opts.direction
      });
      if (this.$editor[0]) {
        this.document = this.$editor[0].ownerDocument;
        this.window = this.document.defaultView || window;
      }
      this.iframeAddCss();
      if (this.opts.fullpage) {
        this.setFullpageOnInit(this.$editor.html());
      } else {
        this.set(this.content, true, false);
      }
      this.buildOptions();
      this.buildAfter();
    },
    placeholderStart : function(value) {
      return this.isEmpty(value) && (this.$element.attr("placeholder") && (this.opts.placeholder = this.$element.attr("placeholder")), "" === this.opts.placeholder && (this.opts.placeholder = false), this.opts.placeholder !== false) ? (this.opts.focus = false, this.$editor.one("focus.redactor_placeholder", $.proxy(this.placeholderFocus, this)), $('<span class="redactor_placeholder" data-redactor="verified">').attr("contenteditable", false).text(this.opts.placeholder)) : false;
    },
    placeholderFocus : function() {
      this.$editor.find("span.redactor_placeholder").remove();
      /** @type {string} */
      var html = "";
      if (this.opts.linebreaks === false) {
        html = this.opts.emptyHtml;
      }
      this.$editor.off("focus.redactor_placeholder");
      this.$editor.html(html);
      if (this.opts.linebreaks === false) {
        this.selectionStart(this.$editor.children()[0]);
      } else {
        this.focus();
      }
      this.sync();
    },
    placeholderRemove : function() {
      /** @type {boolean} */
      this.opts.placeholder = false;
      this.$editor.find("span.redactor_placeholder").remove();
      this.$editor.off("focus.redactor_placeholder");
    },
    placeholderRemoveFromCode : function(sHtml) {
      return sHtml.replace(/<span class="redactor_placeholder"(.*?)>(.*?)<\/span>/i, "");
    },
    shortcuts : function(e, x) {
      if (this.opts.shortcuts) {
        if (e.altKey) {
          if (48 === x) {
            this.shortcutsLoadFormat(e, "p");
          } else {
            if (49 === x) {
              this.shortcutsLoadFormat(e, "h1");
            } else {
              if (50 === x) {
                this.shortcutsLoadFormat(e, "h2");
              } else {
                if (51 === x) {
                  this.shortcutsLoadFormat(e, "h3");
                } else {
                  if (52 === x) {
                    this.shortcutsLoadFormat(e, "h4");
                  } else {
                    if (53 === x) {
                      this.shortcutsLoadFormat(e, "h5");
                    } else {
                      if (54 === x) {
                        this.shortcutsLoadFormat(e, "h6");
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (77 === x) {
            this.shortcutsLoad(e, "removeFormat");
          } else {
            if (66 === x) {
              this.shortcutsLoad(e, "bold");
            } else {
              if (73 === x) {
                this.shortcutsLoad(e, "italic");
              } else {
                if (74 === x) {
                  this.shortcutsLoad(e, "insertunorderedlist");
                } else {
                  if (75 === x) {
                    this.shortcutsLoad(e, "insertorderedlist");
                  } else {
                    if (72 === x) {
                      this.shortcutsLoad(e, "superscript");
                    } else {
                      if (76 === x) {
                        this.shortcutsLoad(e, "subscript");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    shortcutsLoad : function(e, cmd) {
      e.preventDefault();
      this.execCommand(cmd, false);
    },
    shortcutsLoadFormat : function(event, label) {
      event.preventDefault();
      this.formatBlocks(label);
    },
    focus : function() {
      if (this.browser("opera")) {
        this.$editor.focus();
      } else {
        this.window.setTimeout($.proxy(this.focusSet, this, true), 1);
      }
    },
    focusEnd : function() {
      this.focusSet();
    },
    focusSet : function(refNode) {
      this.$editor.focus();
      var range = this.getRange();
      range.selectNodeContents(this.$editor[0]);
      range.collapse(refNode || false);
      var sel = this.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    toggle : function(t) {
      if (this.opts.visual) {
        this.toggleCode(t);
      } else {
        this.toggleVisual();
      }
    },
    toggleVisual : function() {
      var val = this.$source.hide().val();
      if ("undefined" != typeof this.modified) {
        /** @type {boolean} */
        this.modified = this.cleanRemoveSpaces(this.modified, false) !== this.cleanRemoveSpaces(val, false);
      }
      if (this.modified) {
        if (this.opts.fullpage && "" === val) {
          this.setFullpageOnInit(val);
        } else {
          this.set(val);
          if (this.opts.fullpage) {
            this.buildBindKeyboard();
          }
        }
      }
      if (this.opts.iframe) {
        this.$frame.show();
      } else {
        this.$editor.show();
      }
      if (this.opts.fullpage) {
        this.$editor.attr("contenteditable", true);
      }
      this.$source.off("keydown.redactor-textarea-indenting");
      this.$editor.focus();
      this.selectionRestore();
      this.observeStart();
      this.buttonActiveVisual();
      this.buttonInactive("html");
      /** @type {boolean} */
      this.opts.visual = true;
    },
    toggleCode : function(end) {
      if (end !== false) {
        this.selectionSave();
      }
      /** @type {null} */
      var editorh = null;
      if (this.opts.iframe) {
        editorh = this.$frame.height();
        if (this.opts.fullpage) {
          this.$editor.removeAttr("contenteditable");
        }
        this.$frame.hide();
      } else {
        editorh = this.$editor.innerHeight();
        this.$editor.hide();
      }
      var val = this.$source.val();
      if ("" !== val && this.opts.tidyHtml) {
        this.$source.val(this.cleanHtml(val));
      }
      this.modified = val;
      this.$source.height(editorh).show().focus();
      this.$source.on("keydown.redactor-textarea-indenting", this.textareaIndenting);
      this.buttonInactiveVisual();
      this.buttonActive("html");
      /** @type {boolean} */
      this.opts.visual = false;
    },
    textareaIndenting : function(event) {
      if (9 === event.keyCode) {
        var i = $(this);
        var ss = i.get(0).selectionStart;
        return i.val(i.val().substring(0, ss) + "\t" + i.val().substring(i.get(0).selectionEnd)), i.get(0).selectionStart = i.get(0).selectionEnd = ss + 1, false;
      }
    },
    autosave : function() {
      /** @type {boolean} */
      var lastTrackTitle = false;
      /** @type {number} */
      this.autosaveInterval = setInterval($.proxy(function() {
        var track = this.get();
        if (lastTrackTitle !== track) {
          $.ajax({
            url : this.opts.autosave,
            type : "post",
            data : this.$source.attr("name") + "=" + escape(encodeURIComponent(track)),
            success : $.proxy(function(value) {
              this.callback("autosave", false, value);
              lastTrackTitle = track;
            }, this)
          });
        }
      }, this), 1E3 * this.opts.autosaveInterval);
    },
    toolbarBuild : function() {
      if (this.opts.air) {
        this.opts.buttons = this.opts.airButtons;
      } else {
        if (!this.opts.buttonSource) {
          var index = this.opts.buttons.indexOf("html");
          var i = this.opts.buttons[index + 1];
          this.opts.buttons.splice(index, 1);
          if ("|" === i) {
            this.opts.buttons.splice(index, 1);
          }
        }
      }
      if ($.extend(this.opts.toolbar, this.opts.buttonsCustom), $.each(this.opts.buttonsAdd, $.proxy(function(canCreateDiscussions, bone_in) {
        this.opts.buttons.push(bone_in);
      }, this)), this.opts.toolbar && $.each(this.opts.toolbar.formatting.dropdown, $.proxy(function(i, canCreateDiscussions) {
        if ("-1" == $.inArray(i, this.opts.formattingTags)) {
          delete this.opts.toolbar.formatting.dropdown[i];
        }
      }, this)), 0 === this.opts.buttons.length) {
        return false;
      }
      if (this.airEnable(), this.$toolbar = $("<ul>").addClass("redactor_toolbar").attr("id", "redactor_toolbar_" + this.uuid), this.opts.air ? (this.$air = $('<div class="redactor_air">').attr("id", "redactor_air_" + this.uuid).hide(), this.$air.append(this.$toolbar), $("body").append(this.$air)) : this.opts.toolbarExternal ? $(this.opts.toolbarExternal).html(this.$toolbar) : this.$box.prepend(this.$toolbar), $.each(this.opts.buttons, $.proxy(function(canCreateDiscussions, i) {
        if ("|" === i) {
          this.$toolbar.append($(this.opts.buttonSeparator));
        } else {
          if (this.opts.toolbar[i]) {
            var s = this.opts.toolbar[i];
            if (this.opts.fileUpload === false && "file" === i) {
              return true;
            }
            this.$toolbar.append($("<li>").append(this.buttonBuild(i, s)));
          }
        }
      }, this)), this.$toolbar.find("a").attr("tabindex", "-1"), this.opts.toolbarFixed && (this.toolbarObserveScroll(), $(this.opts.toolbarFixedTarget).on("scroll.redactor", $.proxy(this.toolbarObserveScroll, this))), this.opts.activeButtons) {
        var value = $.proxy(this.buttonActiveObserver, this);
        this.$editor.on("mouseup.redactor keyup.redactor", value);
      }
    },
    toolbarObserveScroll : function() {
      var formattedGradebookGrade = $(this.opts.toolbarFixedTarget).scrollTop();
      var barTopPosition = this.$box.offset().top;
      /** @type {number} */
      var menuIndexLeft = 0;
      var formattedBestGrade = barTopPosition + this.$box.height() + 40;
      if (formattedGradebookGrade > barTopPosition) {
        /** @type {string} */
        var neededWidth = "100%";
        if (this.opts.toolbarFixedBox) {
          menuIndexLeft = this.$box.offset().left;
          neededWidth = this.$box.innerWidth();
          this.$toolbar.addClass("toolbar_fixed_box");
        }
        /** @type {boolean} */
        this.toolbarFixed = true;
        this.$toolbar.css({
          position : "fixed",
          width : neededWidth,
          zIndex : 1005,
          top : this.opts.toolbarFixedTopOffset + "px",
          left : menuIndexLeft
        });
        if (formattedBestGrade > formattedGradebookGrade) {
          this.$toolbar.css("visibility", "visible");
        } else {
          this.$toolbar.css("visibility", "hidden");
        }
      } else {
        /** @type {boolean} */
        this.toolbarFixed = false;
        this.$toolbar.css({
          position : "relative",
          width : "auto",
          top : 0,
          left : menuIndexLeft
        });
        if (this.opts.toolbarFixedBox) {
          this.$toolbar.removeClass("toolbar_fixed_box");
        }
      }
    },
    airEnable : function() {
      if (this.opts.air) {
        this.$editor.on("mouseup.redactor keyup.redactor", this, $.proxy(function(event) {
          var text = this.getSelectionText();
          if ("mouseup" === event.type && "" != text && this.airShow(event), "keyup" === event.type && event.shiftKey && "" != text) {
            var $attachTo = $(this.getElement(this.getSelection().focusNode));
            var o = $attachTo.offset();
            o.height = $attachTo.height();
            this.airShow(o, true);
          }
        }, this));
      }
    },
    airShow : function(options, anyContent) {
      if (this.opts.air) {
        var result;
        var finalTop;
        if ($(".redactor_air").hide(), anyContent) {
          result = options.left;
          finalTop = options.top + options.height + 14;
          if (this.opts.iframe) {
            finalTop = finalTop + (this.$box.position().top - $(this.document).scrollTop());
            result = result + this.$box.position().left;
          }
        } else {
          var map = this.$air.innerWidth();
          result = options.clientX;
          if ($(this.document).width() < result + map) {
            /** @type {number} */
            result = result - map;
          }
          finalTop = options.clientY + 14;
          if (this.opts.iframe) {
            finalTop = finalTop + this.$box.position().top;
            result = result + this.$box.position().left;
          } else {
            finalTop = finalTop + $(this.document).scrollTop();
          }
        }
        this.$air.css({
          left : result + "px",
          top : finalTop + "px"
        }).show();
        this.airBindHide();
      }
    },
    airBindHide : function() {
      if (this.opts.air) {
        var on = $.proxy(function(butt) {
          $(butt).on("mousedown.redactor", $.proxy(function(i) {
            if (0 === $(i.target).closest(this.$toolbar).length) {
              this.$air.fadeOut(100);
              this.selectionRemove();
              $(butt).off(i);
            }
          }, this)).on("keydown.redactor", $.proxy(function(e) {
            if (e.which === this.keyCode.ESC) {
              this.getSelection().collapseToStart();
            }
            this.$air.fadeOut(100);
            $(butt).off(e);
          }, this));
        }, this);
        on(document);
        if (this.opts.iframe) {
          on(this.document);
        }
      }
    },
    airBindMousemoveHide : function() {
      if (this.opts.air) {
        var on = $.proxy(function(butt) {
          $(butt).on("mousemove.redactor", $.proxy(function(i) {
            if (0 === $(i.target).closest(this.$toolbar).length) {
              this.$air.fadeOut(100);
              $(butt).off(i);
            }
          }, this));
        }, this);
        on(document);
        if (this.opts.iframe) {
          on(this.document);
        }
      }
    },
    dropdownBuild : function($target, props) {
      $.each(props, $.proxy(function(i, d) {
        if (!d.className) {
          /** @type {string} */
          d.className = "";
        }
        var o;
        if ("separator" === d.name) {
          o = $('<a class="redactor_separator_drop">');
        } else {
          o = $('<a href="#" class="' + d.className + " redactor_dropdown_" + i + '">' + d.title + "</a>");
          o.on("click", $.proxy(function(e) {
            if (e.preventDefault) {
              e.preventDefault();
            }
            if (this.browser("msie")) {
              /** @type {boolean} */
              e.returnValue = false;
            }
            if (d.callback) {
              d.callback.call(this, i, o, d, e);
            }
            if (d.exec) {
              this.execCommand(d.exec, i);
            }
            if (d.func) {
              this[d.func](i);
            }
            this.buttonActiveObserver();
            if (this.opts.air) {
              this.$air.fadeOut(100);
            }
          }, this));
        }
        $target.append(o);
      }, this));
    },
    dropdownShow : function(e, key) {
      if (!this.opts.visual) {
        return e.preventDefault(), false;
      }
      var s = this.$toolbar.find(".redactor_dropdown_box_" + key);
      var o = this.buttonGet(key);
      if (o.hasClass("dropact")) {
        this.dropdownHideAll();
      } else {
        this.dropdownHideAll();
        this.buttonActive(key);
        o.addClass("dropact");
        var item = o.position();
        if (this.toolbarFixed) {
          item = o.offset();
        }
        var offset = s.width();
        if (item.left + offset > $(document).width()) {
          item.left -= offset;
        }
        /** @type {string} */
        var left_px = item.left + "px";
        /** @type {number} */
        var padding = 29;
        /** @type {string} */
        var position = "absolute";
        /** @type {string} */
        var y = padding + "px";
        if (this.opts.toolbarFixed && this.toolbarFixed) {
          /** @type {string} */
          position = "fixed";
        } else {
          if (!this.opts.air) {
            /** @type {string} */
            y = item.top + padding + "px";
          }
        }
        s.css({
          position : position,
          left : left_px,
          top : y
        }).show();
      }
      var hdlHideDropDown = $.proxy(function(___j) {
        this.dropdownHide(___j, s);
      }, this);
      $(document).one("click", hdlHideDropDown);
      this.$editor.one("click", hdlHideDropDown);
      e.stopPropagation();
    },
    dropdownHideAll : function() {
      this.$toolbar.find("a.dropact").removeClass("redactor_act").removeClass("dropact");
      $(".redactor_dropdown").hide();
    },
    dropdownHide : function(x, success) {
      if (!$(x.target).hasClass("dropact")) {
        success.removeClass("dropact");
        this.dropdownHideAll();
      }
    },
    buttonBuild : function(key, opts) {
      var d = $('<a href="javascript:;" title="' + opts.title + '" tabindex="-1" class="redactor_btn redactor_btn_' + key + '"></a>');
      if (d.on("click", $.proxy(function(e) {
        return e.preventDefault && e.preventDefault(), this.browser("msie") && (e.returnValue = false), d.hasClass("redactor_button_disabled") ? false : (this.isFocused() !== false || opts.exec || this.$editor.focus(), opts.exec ? (this.$editor.focus(), this.execCommand(opts.exec, key), this.airBindMousemoveHide()) : opts.func && "show" !== opts.func ? (this[opts.func](key), this.airBindMousemoveHide()) : opts.callback ? (opts.callback.call(this, key, d, opts, e), this.airBindMousemoveHide()) : opts.dropdown && 
        this.dropdownShow(e, key), void this.buttonActiveObserver(false, key));
      }, this)), opts.dropdown) {
        var $right = $('<div class="redactor_dropdown redactor_dropdown_box_' + key + '" style="display: none;">');
        $right.appendTo(this.$toolbar);
        this.dropdownBuild($right, opts.dropdown);
      }
      return d;
    },
    buttonGet : function(key) {
      return this.opts.toolbar ? $(this.$toolbar.find("a.redactor_btn_" + key)) : false;
    },
    buttonActiveToggle : function(key) {
      var $tabHeading = this.buttonGet(key);
      if ($tabHeading.hasClass("redactor_act")) {
        $tabHeading.removeClass("redactor_act");
      } else {
        $tabHeading.addClass("redactor_act");
      }
    },
    buttonActive : function(key) {
      this.buttonGet(key).addClass("redactor_act");
    },
    buttonInactive : function(selector) {
      this.buttonGet(selector).removeClass("redactor_act");
    },
    buttonInactiveAll : function(eachIndex) {
      $.each(this.opts.toolbar, $.proxy(function(whitelistSelector) {
        if (whitelistSelector != eachIndex) {
          this.buttonInactive(whitelistSelector);
        }
      }, this));
    },
    buttonActiveVisual : function() {
      this.$toolbar.find("a.redactor_btn").not("a.redactor_btn_html").removeClass("redactor_button_disabled");
    },
    buttonInactiveVisual : function() {
      this.$toolbar.find("a.redactor_btn").not("a.redactor_btn_html").addClass("redactor_button_disabled");
    },
    buttonChangeIcon : function(type, classname) {
      this.buttonGet(type).addClass("redactor_btn_" + classname);
    },
    buttonRemoveIcon : function(key, classname) {
      this.buttonGet(key).removeClass("redactor_btn_" + classname);
    },
    buttonAddSeparator : function() {
      this.$toolbar.append($(this.opts.buttonSeparator));
    },
    buttonAddSeparatorAfter : function(modalId) {
      this.buttonGet(modalId).parent().after($(this.opts.buttonSeparator));
    },
    buttonAddSeparatorBefore : function(modalId) {
      this.buttonGet(modalId).parent().before($(this.opts.buttonSeparator));
    },
    buttonRemoveSeparatorAfter : function(modalId) {
      this.buttonGet(modalId).parent().next().remove();
    },
    buttonRemoveSeparatorBefore : function(modalId) {
      this.buttonGet(modalId).parent().prev().remove();
    },
    buttonSetRight : function(modalId) {
      if (this.opts.toolbar) {
        this.buttonGet(modalId).parent().addClass("redactor_btn_right");
      }
    },
    buttonSetLeft : function(modalId) {
      if (this.opts.toolbar) {
        this.buttonGet(modalId).parent().removeClass("redactor_btn_right");
      }
    },
    buttonAdd : function(w, text, callback, dropdown) {
      if (this.opts.toolbar) {
        var btn = this.buttonBuild(w, {
          title : text,
          callback : callback,
          dropdown : dropdown
        });
        this.$toolbar.append($("<li>").append(btn));
      }
    },
    buttonAddFirst : function(e, i, callback, dropdown) {
      if (this.opts.toolbar) {
        var btn = this.buttonBuild(e, {
          title : i,
          callback : callback,
          dropdown : dropdown
        });
        this.$toolbar.prepend($("<li>").append(btn));
      }
    },
    buttonAddAfter : function(pw, i, s, callback, dropdown) {
      if (this.opts.toolbar) {
        var btn = this.buttonBuild(i, {
          title : s,
          callback : callback,
          dropdown : dropdown
        });
        var n = this.buttonGet(pw);
        if (0 !== n.size()) {
          n.parent().after($("<li>").append(btn));
        } else {
          this.$toolbar.append($("<li>").append(btn));
        }
      }
    },
    buttonAddBefore : function(pw, i, s, callback, dropdown) {
      if (this.opts.toolbar) {
        var btn = this.buttonBuild(i, {
          title : s,
          callback : callback,
          dropdown : dropdown
        });
        var n = this.buttonGet(pw);
        if (0 !== n.size()) {
          n.parent().before($("<li>").append(btn));
        } else {
          this.$toolbar.append($("<li>").append(btn));
        }
      }
    },
    buttonRemove : function(t, xgh2) {
      var tm = this.buttonGet(t);
      if (xgh2) {
        tm.parent().next().remove();
      }
      tm.parent().removeClass("redactor_btn_right");
      tm.remove();
    },
    buttonActiveObserver : function(parent, i) {
      var target = this.getParent();
      if (this.buttonInactiveAll(i), parent === false && "html" !== i) {
        return void(-1 != $.inArray(i, this.opts.activeButtons) && this.buttonActiveToggle(i));
      }
      if (target && "A" === target.tagName) {
        this.$toolbar.find("a.redactor_dropdown_link").text(this.opts.curLang.link_edit);
      } else {
        this.$toolbar.find("a.redactor_dropdown_link").text(this.opts.curLang.link_insert);
      }
      if (this.opts.activeButtonsAdd) {
        $.each(this.opts.activeButtonsAdd, $.proxy(function(canCreateDiscussions, bone_in) {
          this.opts.activeButtons.push(bone_in);
        }, this));
        $.extend(this.opts.activeButtonsStates, this.opts.activeButtonsAdd);
      }
      $.each(this.opts.activeButtonsStates, $.proxy(function(limitToContainer, derTrigger) {
        if (0 != $(target).closest(limitToContainer, this.$editor.get()[0]).length) {
          this.buttonActive(derTrigger);
        }
      }, this));
      var lastCol = $(target).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
      if (lastCol.length) {
        var align = lastCol.css("text-align");
        switch(align) {
          case "right":
            this.buttonActive("alignright");
            break;
          case "center":
            this.buttonActive("aligncenter");
            break;
          case "justify":
            this.buttonActive("justify");
            break;
          default:
            this.buttonActive("alignleft");
        }
      }
    },
    exec : function(cmd, value, _) {
      if ("formatblock" === cmd && this.browser("msie")) {
        /** @type {string} */
        value = "<" + value + ">";
      }
      if ("inserthtml" === cmd && this.browser("msie")) {
        this.$editor.focus();
        this.document.selection.createRange().pasteHTML(value);
      } else {
        this.document.execCommand(cmd, false, value);
      }
      if (_ !== false) {
        this.sync();
      }
      this.callback("execCommand", cmd, value);
    },
    execCommand : function(name, val, data) {
      return this.opts.visual ? "inserthtml" === name ? (this.insertHtml(val, data), void this.callback("execCommand", name, val)) : this.currentOrParentIs("PRE") && !this.opts.formattingPre ? false : "insertunorderedlist" === name || "insertorderedlist" === name ? this.execLists(name, val) : "unlink" === name ? this.execUnlink(name, val) : (this.exec(name, val, data), void("inserthorizontalrule" === name && this.$editor.find("hr").removeAttr("id"))) : (this.$source.focus(), false);
    },
    execUnlink : function(source, value) {
      this.bufferSet();
      var parent = this.currentOrParentIs("A");
      return parent ? ($(parent).replaceWith($(parent).text()), this.sync(), void this.callback("execCommand", source, value)) : void 0;
    },
    execLists : function(type, value) {
      this.bufferSet();
      var parent = this.getParent();
      var $children = $(parent).closest("ol, ul");
      /** @type {boolean} */
      var r = false;
      if ($children.length) {
        /** @type {boolean} */
        r = true;
        var selector = $children[0].tagName;
        if ("insertunorderedlist" === type && "OL" === selector || "insertorderedlist" === type && "UL" === selector) {
          /** @type {boolean} */
          r = false;
        }
      }
      if (this.selectionSave(), r) {
        var args = this.getNodes();
        var blocks = this.getBlocks(args);
        if ("undefined" != typeof args[0] && args.length > 1 && 3 == args[0].nodeType) {
          blocks.unshift(this.getBlock());
        }
        /** @type {string} */
        var pix_color = "";
        /** @type {string} */
        var s = "";
        $.each(blocks, $.proxy(function(canCreateDiscussions, i) {
          if ("LI" == i.tagName) {
            var d = $(i);
            var $this = d.clone();
            $this.find("ul", "ol").remove();
            pix_color = pix_color + (this.opts.linebreaks === false ? this.outerHtml($("<p>").append($this.contents())) : $this.html() + "<br>");
            if (0 == canCreateDiscussions) {
              d.addClass("redactor-replaced").empty();
              s = this.outerHtml(d);
            } else {
              d.remove();
            }
          }
        }, this));
        html = this.$editor.html().replace(s, "</" + selector + ">" + pix_color + "<" + selector + ">");
        this.$editor.html(html);
        this.$editor.find(selector + ":empty").remove();
      } else {
        var p = this.getParent();
        this.document.execCommand(type);
        parent = this.getParent();
        $children = $(parent).closest("ol, ul");
        if (p && "TD" == p.tagName && $children.wrapAll("<td>"), $children.length) {
          if ((this.browser("msie") || this.browser("mozilla")) && "LI" !== parent.tagName) {
            $(parent).replaceWith($(parent).html());
          }
          var p = $children.parent();
          if (this.isParentRedactor(p) && this.nodeTestBlocks(p[0])) {
            p.replaceWith(p.contents());
          }
        }
        if (this.browser("mozilla")) {
          this.$editor.focus();
        }
      }
      this.selectionRestore();
      this.sync();
      this.callback("execCommand", type, value);
    },
    indentingIndent : function() {
      this.indentingStart("indent");
    },
    indentingOutdent : function() {
      this.indentingStart("outdent");
    },
    indentingStart : function(type) {
      if (this.bufferSet(), "indent" === type) {
        var block = this.getBlock();
        if (this.selectionSave(), block && "LI" == block.tagName) {
          var parent = this.getParent();
          var $emptyDialog = $(parent).closest("ol, ul");
          var child_tag = $emptyDialog[0].tagName;
          var blocks = this.getBlocks();
          $.each(blocks, function(canCreateDiscussions, item) {
            if ("LI" == item.tagName) {
              var $result = $(item).prev();
              if (0 != $result.size() && "LI" == $result[0].tagName) {
                var o = $result.children("ul, ol");
                if (0 == o.size()) {
                  $result.append($("<" + child_tag + ">").append(item));
                } else {
                  o.append(item);
                }
              }
            }
          });
        } else {
          if (block === false && this.opts.linebreaks === true) {
            this.exec("formatBlock", "blockquote");
            var parent = this.getBlock();
            block = $('<div data-tagblock="">').html($(parent).html());
            $(parent).replaceWith(block);
            var tt_top = this.normalize($(block).css("margin-left")) + this.opts.indentValue;
            $(block).css("margin-left", tt_top + "px");
          } else {
            var blocks = this.getBlocks();
            $.each(blocks, $.proxy(function(canCreateDiscussions, field) {
              /** @type {boolean} */
              var $video = false;
              if ("TD" !== field.tagName) {
                $video = -1 !== $.inArray(field.tagName, this.opts.alignmentTags) ? $(field) : $(field).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
                var height = this.normalize($video.css("margin-left")) + this.opts.indentValue;
                $video.css("margin-left", height + "px");
              }
            }, this));
          }
        }
        this.selectionRestore();
      } else {
        this.selectionSave();
        block = this.getBlock();
        if (block && "LI" == block.tagName) {
          blocks = this.getBlocks();
          /** @type {number} */
          var NINETY_EIGHT_HOURS = 0;
          this.insideOutdent(block, NINETY_EIGHT_HOURS, blocks);
        } else {
          blocks = this.getBlocks();
          $.each(blocks, $.proxy(function(canCreateDiscussions, field) {
            /** @type {boolean} */
            var input = false;
            input = -1 !== $.inArray(field.tagName, this.opts.alignmentTags) ? $(field) : $(field).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
            /** @type {number} */
            var height = this.normalize(input.css("margin-left")) - this.opts.indentValue;
            if (0 >= height) {
              if (this.opts.linebreaks === true && "undefined" != typeof input.data("tagblock")) {
                input.replaceWith(input.html());
              } else {
                input.css("margin-left", "");
                this.removeEmptyAttr(input, "style");
              }
            } else {
              input.css("margin-left", height + "px");
            }
          }, this));
        }
        this.selectionRestore();
      }
      this.sync();
    },
    insideOutdent : function(item, i, array) {
      if (item && "LI" == item.tagName) {
        var $list = $(item).parent().parent();
        if (0 != $list.size() && "LI" == $list[0].tagName) {
          $list.after(item);
        } else {
          if ("undefined" != typeof array[i]) {
            item = array[i];
            i++;
            this.insideOutdent(item, i, array);
          } else {
            this.execCommand("insertunorderedlist");
          }
        }
      }
    },
    alignmentLeft : function() {
      this.alignmentSet("", "JustifyLeft");
    },
    alignmentRight : function() {
      this.alignmentSet("right", "JustifyRight");
    },
    alignmentCenter : function() {
      this.alignmentSet("center", "JustifyCenter");
    },
    alignmentJustify : function() {
      this.alignmentSet("justify", "JustifyFull");
    },
    alignmentSet : function(name, command) {
      if (this.bufferSet(), this.oldIE()) {
        return this.document.execCommand(command, false, false), true;
      }
      this.selectionSave();
      var node = this.getBlock();
      if (!node && this.opts.linebreaks) {
        this.exec("formatBlock", "blockquote");
        var parent = this.getBlock();
        node = $('<div data-tagblock="">').html($(parent).html());
        $(parent).replaceWith(node);
        $(node).css("text-align", name);
        this.removeEmptyAttr(node, "style");
        if ("" == name && "undefined" != typeof $(node).data("tagblock")) {
          $(node).replaceWith($(node).html());
        }
      } else {
        var blocks = this.getBlocks();
        $.each(blocks, $.proxy(function(i, field) {
          /** @type {boolean} */
          var wrapper = false;
          wrapper = -1 !== $.inArray(field.tagName, this.opts.alignmentTags) ? $(field) : $(field).closest(this.opts.alignmentTags.toString().toLowerCase(), this.$editor[0]);
          if (wrapper) {
            wrapper.css("text-align", name);
            this.removeEmptyAttr(wrapper, "style");
          }
        }, this));
      }
      this.selectionRestore();
      this.sync();
    },
    cleanEmpty : function(token) {
      var plotlystream1 = this.placeholderStart(token);
      return plotlystream1 !== false ? plotlystream1 : (this.opts.linebreaks === false && ("" === token ? token = this.opts.emptyHtml : -1 !== token.search(/^<hr\s?\/?>$/gi) && (token = "<hr>" + this.opts.emptyHtml)), token);
    },
    cleanConverters : function(string) {
      return this.opts.convertDivs && (string = string.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p$1>$2</p>")), this.opts.paragraphy && (string = this.cleanParagraphy(string)), string;
    },
    cleanConvertProtected : function(t) {
      return this.opts.templateVars && (t = t.replace(/\{\{(.*?)\}\}/gi, "\x3c!-- template double $1 --\x3e"), t = t.replace(/\{(.*?)\}/gi, "\x3c!-- template $1 --\x3e")), t = t.replace(/<script(.*?)>([\w\W]*?)<\/script>/gi, '<title type="text/javascript" style="display: none;" class="redactor-script-tag"$1>$2</title>'), t = t.replace(/<style(.*?)>([\w\W]*?)<\/style>/gi, '<section$1 style="display: none;" rel="redactor-style-tag">$2</section>'), t = t.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi, '<section$1 rel="redactor-form-tag">$2</section>'), 
      t = this.opts.phpTags ? t.replace(/<\?php([\w\W]*?)\?>/gi, '<section style="display: none;" rel="redactor-php-tag">$1</section>') : t.replace(/<\?php([\w\W]*?)\?>/gi, "");
    },
    cleanReConvertProtected : function(sHtml) {
      return this.opts.templateVars && (sHtml = sHtml.replace(/\x3c!-- template double (.*?) --\x3e/gi, "{{$1}}"), sHtml = sHtml.replace(/\x3c!-- template (.*?) --\x3e/gi, "{$1}")), sHtml = sHtml.replace(/<title type="text\/javascript" style="display: none;" class="redactor-script-tag"(.*?)>([\w\W]*?)<\/title>/gi, '<script$1 type="text/javascript">$2\x3c/script>'), sHtml = sHtml.replace(/<section(.*?) style="display: none;" rel="redactor-style-tag">([\w\W]*?)<\/section>/gi, "<style$1>$2</style>"), 
      sHtml = sHtml.replace(/<section(.*?)rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi, "<form$1$2>$3</form>"), this.opts.phpTags && (sHtml = sHtml.replace(/<section style="display: none;" rel="redactor-php-tag">([\w\W]*?)<\/section>/gi, "<?php\r\n$1\r\n?>")), sHtml;
    },
    cleanRemoveSpaces : function(s, v) {
      if (v !== false) {
        /** @type {!Array} */
        v = [];
        var nodes = s.match(/<(pre|style|script|title)(.*?)>([\w\W]*?)<\/(pre|style|script|title)>/gi);
        if (null === nodes && (nodes = []), this.opts.phpTags) {
          var indices = s.match(/<\?php([\w\W]*?)\?>/gi);
          if (indices) {
            nodes = $.merge(nodes, indices);
          }
        }
        if (nodes) {
          $.each(nodes, function(cssClass, e) {
            s = s.replace(e, "buffer_" + cssClass);
            v.push(e);
          });
        }
      }
      return s = s.replace(/\n/g, " "), s = s.replace(/[\t]*/g, ""), s = s.replace(/\n\s*\n/g, "\n"), s = s.replace(/^[\s\n]*/g, " "), s = s.replace(/[\s\n]*$/g, " "), s = s.replace(/>\s{2,}</g, "> <"), s = this.cleanReplacer(s, v), s = s.replace(/\n\n/g, "\n");
    },
    cleanReplacer : function(value, key) {
      return key === false ? value : ($.each(key, function(i, replacement) {
        value = value.replace("buffer_" + i, replacement);
      }), value);
    },
    cleanRemoveEmptyTags : function(html) {
      html = html.replace(/<span>([\w\W]*?)<\/span>/gi, "$1");
      html = html.replace(/[\u200B-\u200D\uFEFF]/g, "");
      /** @type {!Array} */
      var n = ["<b>\\s*</b>", "<b>&nbsp;</b>", "<em>\\s*</em>"];
      /** @type {!Array} */
      var pattern = ["<pre></pre>", "<blockquote>\\s*</blockquote>", "<dd></dd>", "<dt></dt>", "<ul></ul>", "<ol></ol>", "<li></li>", "<table></table>", "<tr></tr>", "<span>\\s*<span>", "<span>&nbsp;<span>", "<p>\\s*</p>", "<p></p>", "<p>&nbsp;</p>", "<p>\\s*<br>\\s*</p>", "<div>\\s*</div>", "<div>\\s*<br>\\s*</div>"];
      /** @type {!Array<?>} */
      pattern = this.opts.removeEmptyTags ? pattern.concat(n) : n;
      /** @type {number} */
      var length = pattern.length;
      /** @type {number} */
      var i = 0;
      for (; length > i; ++i) {
        html = html.replace(new RegExp(pattern[i], "gi"), "");
      }
      return html;
    },
    cleanParagraphy : function(path) {
      /**
       * @param {string} regex
       * @param {string} flags
       * @param {string} target
       * @return {?}
       */
      function replace(regex, flags, target) {
        return path.replace(new RegExp(regex, flags), target);
      }
      if (path = $.trim(path), this.opts.linebreaks === true) {
        return path;
      }
      if ("" === path || "<p></p>" === path) {
        return this.opts.emptyHtml;
      }
      path = path + "\n";
      /** @type {!Array} */
      var o = [];
      var s = path.match(/<(table|div|pre|object)(.*?)>([\w\W]*?)<\/(table|div|pre|object)>/gi);
      if (!s) {
        /** @type {!Array} */
        s = [];
      }
      var r = path.match(/\x3c!--([\w\W]*?)--\x3e/gi);
      if (r && (s = $.merge(s, r)), this.opts.phpTags) {
        var a = path.match(/<section(.*?)rel="redactor-php-tag">([\w\W]*?)<\/section>/gi);
        if (a) {
          s = $.merge(s, a);
        }
      }
      if (s) {
        $.each(s, function(t, i) {
          o[t] = i;
          path = path.replace(i, "{replace" + t + "}\n");
        });
      }
      path = path.replace(/<br \/>\s*<br \/>/gi, "\n\n");
      /** @type {string} */
      var n = "(comment|html|body|head|title|meta|style|script|link|iframe|table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|option|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";
      path = replace("(<" + n + "[^>]*>)", "gi", "\n$1");
      path = replace("(</" + n + ">)", "gi", "$1\n\n");
      path = replace("\r\n", "g", "\n");
      path = replace("\r", "g", "\n");
      path = replace("/\n\n+/", "g", "\n\n");
      var ps = path.split(new RegExp("\ns*\n", "g"), -1);
      /** @type {string} */
      path = "";
      var i;
      for (i in ps) {
        if (ps.hasOwnProperty(i)) {
          path = path + (-1 == ps[i].search("{replace") ? "<p>" + ps[i].replace(/^\n+|\n+$/g, "") + "</p>" : ps[i]);
        }
      }
      return path = replace("<p>s*</p>", "gi", ""), path = replace("<p>([^<]+)</(div|address|form)>", "gi", "<p>$1</p></$2>"), path = replace("<p>s*(</?" + n + "[^>]*>)s*</p>", "gi", "$1"), path = replace("<p>(<li.+?)</p>", "gi", "$1"), path = replace("<p>s*(</?" + n + "[^>]*>)", "gi", "$1"), path = replace("(</?" + n + "[^>]*>)s*</p>", "gi", "$1"), path = replace("(</?" + n + "[^>]*>)s*<br />", "gi", "$1"), path = replace("<br />(s*</?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)", "gi", "$1"), path = 
      replace("\n</p>", "gi", "</p>"), path = replace("<li><p>", "gi", "<li>"), path = replace("</p></li>", "gi", "</li>"), path = replace("</li><p>", "gi", "</li>"), path = replace("<p>\t?\n?<p>", "gi", "<p>"), path = replace("</dt><p>", "gi", "</dt>"), path = replace("</dd><p>", "gi", "</dd>"), path = replace("<br></p></blockquote>", "gi", "</blockquote>"), path = replace("<p>\t*</p>", "gi", ""), $.each(o, function(canCreateDiscussions, compressed) {
        path = path.replace("{replace" + canCreateDiscussions + "}", compressed);
      }), $.trim(path);
    },
    cleanConvertInlineTags : function(t, isTangent) {
      /** @type {string} */
      var strong = "strong";
      if ("b" === this.opts.boldTag) {
        /** @type {string} */
        strong = "b";
      }
      /** @type {string} */
      var ep = "em";
      return "i" === this.opts.italicTag && (ep = "i"), t = t.replace(/<span style="font-style: italic;">([\w\W]*?)<\/span>/gi, "<" + ep + ">$1</" + ep + ">"), t = t.replace(/<span style="font-weight: bold;">([\w\W]*?)<\/span>/gi, "<" + strong + ">$1</" + strong + ">"), t = "strong" === this.opts.boldTag ? t.replace(/<b>([\w\W]*?)<\/b>/gi, "<strong>$1</strong>") : t.replace(/<strong>([\w\W]*?)<\/strong>/gi, "<b>$1</b>"), t = "em" === this.opts.italicTag ? t.replace(/<i>([\w\W]*?)<\/i>/gi, "<em>$1</em>") : 
      t.replace(/<em>([\w\W]*?)<\/em>/gi, "<i>$1</i>"), t = isTangent !== true ? t.replace(/<strike>([\w\W]*?)<\/strike>/gi, "<del>$1</del>") : t.replace(/<del>([\w\W]*?)<\/del>/gi, "<strike>$1</strike>");
    },
    cleanStripTags : function(url) {
      if ("" == url || "undefined" == typeof url) {
        return url;
      }
      /** @type {boolean} */
      var value = false;
      if (this.opts.allowedTags !== false) {
        /** @type {boolean} */
        value = true;
      }
      var allowed = value === true ? this.opts.allowedTags : this.opts.deniedTags;
      /** @type {!RegExp} */
      var fontsre = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
      return url = url.replace(fontsre, function(undefined, p_Interval) {
        return value === true ? $.inArray(p_Interval.toLowerCase(), allowed) > "-1" ? undefined : "" : $.inArray(p_Interval.toLowerCase(), allowed) > "-1" ? "" : undefined;
      }), url = this.cleanConvertInlineTags(url);
    },
    cleanSavePreCode : function(e, islongclick) {
      var fields_to_add = e.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/gi);
      return null !== fields_to_add && $.each(fields_to_add, $.proxy(function(canCreateDiscussions, s) {
        var charcompOutput = s.match(/<(pre|code)(.*?)>([\w\W]*?)<\/(pre|code)>/i);
        charcompOutput[3] = charcompOutput[3].replace(/&nbsp;/g, " ");
        if (islongclick !== false) {
          charcompOutput[3] = this.cleanEncodeEntities(charcompOutput[3]);
        }
        e = e.replace(s, "<" + charcompOutput[1] + charcompOutput[2] + ">" + charcompOutput[3] + "</" + charcompOutput[1] + ">");
      }, this)), e;
    },
    cleanEncodeEntities : function(jwertyCode) {
      return jwertyCode = String(jwertyCode).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), String(jwertyCode).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    },
    cleanUnverified : function() {
      var list = this.$editor.find("li, img, a, b, strong, sub, sup, i, em, u, small, strike, del, span, cite");
      list.filter('[style*="background-color: transparent;"][style*="line-height"]').css("background-color", "").css("line-height", "");
      list.filter('[style*="background-color: transparent;"]').css("background-color", "");
      list.css("line-height", "");
      $.each(list, $.proxy(function(canCreateDiscussions, numEditors) {
        this.removeEmptyAttr(numEditors, "style");
      }, this));
      this.$editor.find('div[style="text-align: -webkit-auto;"]').contents().unwrap();
    },
    cleanHtml : function(str) {
      /** @type {number} */
      var index = 0;
      var length = str.length;
      /** @type {number} */
      var start = 0;
      /** @type {null} */
      var i = null;
      /** @type {null} */
      var count = null;
      /** @type {string} */
      var b = "";
      /** @type {string} */
      var result = "";
      /** @type {string} */
      var content = "";
      /** @type {number} */
      this.cleanlevel = 0;
      for (; length > index; index++) {
        if (start = index, -1 == str.substr(index).indexOf("<")) {
          return result = result + str.substr(index), this.cleanFinish(result);
        }
        for (; length > start && "<" != str.charAt(start);) {
          start++;
        }
        if (index != start) {
          content = str.substr(index, start - index);
          if (!content.match(/^\s{2,}$/g)) {
            if ("\n" == result.charAt(result.length - 1)) {
              result = result + this.cleanGetTabs();
            } else {
              if ("\n" == content.charAt(0)) {
                /** @type {string} */
                result = result + ("\n" + this.cleanGetTabs());
                content = content.replace(/^\s+/, "");
              }
            }
            /** @type {string} */
            result = result + content;
          }
          if (content.match(/\n/)) {
            /** @type {string} */
            result = result + ("\n" + this.cleanGetTabs());
          }
        }
        /** @type {number} */
        i = start;
        for (; length > start && ">" != str.charAt(start);) {
          start++;
        }
        b = str.substr(i, start - i);
        /** @type {number} */
        index = start;
        var nameTmpArr;
        if ("!--" == b.substr(1, 3)) {
          if (!b.match(/--$/)) {
            for (; "--\x3e" != str.substr(start, 3);) {
              start++;
            }
            /** @type {number} */
            start = start + 2;
            b = str.substr(i, start - i);
            /** @type {number} */
            index = start;
          }
          if ("\n" != result.charAt(result.length - 1)) {
            /** @type {string} */
            result = result + "\n";
          }
          result = result + this.cleanGetTabs();
          /** @type {string} */
          result = result + (b + ">\n");
        } else {
          if ("!" == b[1]) {
            result = this.placeTag(b + ">", result);
          } else {
            if ("?" == b[1]) {
              /** @type {string} */
              result = result + (b + ">\n");
            } else {
              if (nameTmpArr = b.match(/^<(script|style|pre)/i)) {
                nameTmpArr[1] = nameTmpArr[1].toLowerCase();
                b = this.cleanTag(b);
                result = this.placeTag(b, result);
                /** @type {number} */
                count = String(str.substr(index + 1)).toLowerCase().indexOf("</" + nameTmpArr[1]);
                if (count) {
                  content = str.substr(index + 1, count);
                  /** @type {number} */
                  index = index + count;
                  result = result + content;
                }
              } else {
                b = this.cleanTag(b);
                result = this.placeTag(b, result);
              }
            }
          }
        }
      }
      return this.cleanFinish(result);
    },
    cleanGetTabs : function() {
      /** @type {string} */
      var pix_color = "";
      /** @type {number} */
      var e = 0;
      for (; e < this.cleanlevel; e++) {
        /** @type {string} */
        pix_color = pix_color + "\t";
      }
      return pix_color;
    },
    cleanFinish : function(t) {
      return t = t.replace(/\n\s*\n/g, "\n"), t = t.replace(/^[\s\n]*/, ""), t = t.replace(/[\s\n]*$/, ""), t = t.replace(/<script(.*?)>\n<\/script>/gi, "<script$1>\x3c/script>"), this.cleanlevel = 0, t;
    },
    cleanTag : function(tag) {
      /** @type {string} */
      var string = "";
      tag = tag.replace(/\n/g, " ");
      tag = tag.replace(/\s{2,}/g, " ");
      tag = tag.replace(/^\s+|\s+$/g, " ");
      /** @type {string} */
      var b = "";
      if (tag.match(/\/$/)) {
        /** @type {string} */
        b = "/";
        tag = tag.replace(/\/+$/, "");
      }
      var currentMatch;
      for (; currentMatch = /\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/.exec(tag);) {
        if (currentMatch[2]) {
          /** @type {string} */
          string = string + (currentMatch[1].toLowerCase() + "=" + currentMatch[2]);
        } else {
          if (currentMatch[1]) {
            /** @type {string} */
            string = string + currentMatch[1].toLowerCase();
          }
        }
        /** @type {string} */
        string = string + " ";
        tag = tag.substr(currentMatch[0].length);
      }
      return string.replace(/\s*$/, "") + b + ">";
    },
    placeTag : function(tag, out) {
      var nl = tag.match(this.cleannewLevel);
      return (tag.match(this.cleanlineBefore) || nl) && (out = out.replace(/\s*$/, ""), out = out + "\n"), nl && "/" == tag.charAt(1) && this.cleanlevel--, "\n" == out.charAt(out.length - 1) && (out = out + this.cleanGetTabs()), nl && "/" != tag.charAt(1) && this.cleanlevel++, out = out + tag, (tag.match(this.cleanlineAfter) || tag.match(this.cleannewLevel)) && (out = out.replace(/ *$/, ""), out = out + "\n"), out;
    },
    formatEmpty : function(e) {
      var url = $.trim(this.$editor.html());
      if (this.opts.linebreaks) {
        if ("" == url) {
          e.preventDefault();
          this.$editor.html("");
          this.focus();
        }
      } else {
        url = url.replace(/<br\s?\/?>/i, "");
        var op = url.replace(/<p>\s?<\/p>/gi, "");
        if ("" === url || "" === op) {
          e.preventDefault();
          var html = $(this.opts.emptyHtml).get(0);
          this.$editor.html(html);
          this.focus();
        }
      }
      this.sync();
    },
    formatBlocks : function(width) {
      this.bufferSet();
      var blocks = this.getBlocks();
      this.selectionSave();
      $.each(blocks, $.proxy(function(i, nodeB) {
        if ("LI" !== nodeB.tagName) {
          var $option = $(nodeB).parent();
          if ("p" === width) {
            if ("P" === nodeB.tagName && 0 != $option.size() && "BLOCKQUOTE" === $option[0].tagName || "BLOCKQUOTE" === nodeB.tagName) {
              return void this.formatQuote();
            }
            if (this.opts.linebreaks) {
              return;
            }
          } else {
            this.formatBlock(width, nodeB);
          }
        }
      }, this));
      this.selectionRestore();
      this.sync();
    },
    formatBlock : function(name, node) {
      if (node === false && (node = this.getBlock()), node === false) {
        return this.opts.linebreaks === true && this.execCommand("formatblock", name), true;
      }
      /** @type {string} */
      var path = "";
      if ("pre" !== name ? path = $(node).contents() : (path = $(node).html(), "" === $.trim(path) && (path = '<span id="selection-marker-1"></span>')), "PRE" === node.tagName && (name = "p"), this.opts.linebreaks === true && "p" === name) {
        $(node).replaceWith($("<div>").append(path).html() + "<br>");
      } else {
        var $oldButton = $("<" + name + ">").append(path);
        $(node).replaceWith($oldButton);
      }
    },
    formatChangeTag : function(elem, type, noQualityRestore) {
      if (noQualityRestore !== false) {
        this.selectionSave();
      }
      var top_vals_el = $("<" + type + "/>");
      return $(elem).replaceWith(function() {
        return top_vals_el.append($(this).contents());
      }), noQualityRestore !== false && this.selectionRestore(), top_vals_el;
    },
    formatQuote : function() {
      if (this.bufferSet(), this.opts.linebreaks === false) {
        this.selectionSave();
        var e = this.getBlocks();
        /** @type {boolean} */
        var elem = false;
        var s = e.length;
        if (e) {
          /** @type {string} */
          var html = "";
          /** @type {string} */
          var r = "";
          /** @type {boolean} */
          var last = false;
          /** @type {boolean} */
          var n = true;
          if ($.each(e, function(canCreateDiscussions, new_radio) {
            if ("P" !== new_radio.tagName) {
              /** @type {boolean} */
              n = false;
            }
          }), $.each(e, $.proxy(function(canCreateDiscussions, li) {
            if ("BLOCKQUOTE" === li.tagName) {
              this.formatBlock("p", li, false);
            } else {
              if ("P" === li.tagName) {
                if (elem = $(li).parent(), "BLOCKQUOTE" == elem[0].tagName) {
                  var lastSearch = $(elem).children("p").size();
                  if (1 == lastSearch) {
                    $(elem).replaceWith(li);
                  } else {
                    if (lastSearch == s) {
                      /** @type {string} */
                      last = "blockquote";
                      html = html + this.outerHtml(li);
                    } else {
                      /** @type {string} */
                      last = "html";
                      html = html + this.outerHtml(li);
                      if (0 == canCreateDiscussions) {
                        $(li).addClass("redactor-replaced").empty();
                        r = this.outerHtml(li);
                      } else {
                        $(li).remove();
                      }
                    }
                  }
                } else {
                  if (n === false || 1 == e.length) {
                    this.formatBlock("blockquote", li, false);
                  } else {
                    /** @type {string} */
                    last = "paragraphs";
                    html = html + this.outerHtml(li);
                  }
                }
              } else {
                if ("LI" !== li.tagName) {
                  this.formatBlock("blockquote", li, false);
                }
              }
            }
          }, this)), last) {
            if ("paragraphs" == last) {
              $(e[0]).replaceWith("<blockquote>" + html + "</blockquote>");
              $(e).remove();
            } else {
              if ("blockquote" == last) {
                $(elem).replaceWith(html);
              } else {
                if ("html" == last) {
                  var value = this.$editor.html().replace(r, "</blockquote>" + html + "<blockquote>");
                  this.$editor.html(value);
                  this.$editor.find("blockquote").each(function() {
                    if ("" == $.trim($(this).html())) {
                      $(this).remove();
                    }
                  });
                }
              }
            }
          }
        }
        this.selectionRestore();
      } else {
        var parent = this.getBlock();
        if ("BLOCKQUOTE" === parent.tagName) {
          this.selectionSave();
          value = $.trim($(parent).html());
          var gce_persistent = $.trim(this.getSelectionHtml());
          if (value = value.replace(/<span(.*?)id="selection-marker(.*?)<\/span>/gi, ""), value == gce_persistent) {
            $(parent).replaceWith($(parent).html() + "<br>");
          } else {
            this.inlineFormat("tmp");
            var tmp = this.$editor.find("tmp");
            tmp.empty();
            var html = this.$editor.html().replace("<tmp></tmp>", '</blockquote><span id="selection-marker-1">' + this.opts.invisibleSpace + "</span>" + gce_persistent + "<blockquote>");
            this.$editor.html(html);
            tmp.remove();
            this.$editor.find("blockquote").each(function() {
              if ("" == $.trim($(this).html())) {
                $(this).remove();
              }
            });
          }
          this.selectionRestore();
          this.$editor.find("span#selection-marker-1").attr("id", false);
        } else {
          var p = this.selectionWrap("blockquote");
          value = $(p).html();
          /** @type {!Array} */
          var parents = ["ul", "ol", "table", "tr", "tbody", "thead", "tfoot", "dl"];
          $.each(parents, function(isSlidingUp, canCreateDiscussions) {
            value = value.replace(new RegExp("<" + canCreateDiscussions + "(.*?)>", "gi"), "");
            value = value.replace(new RegExp("</" + canCreateDiscussions + ">", "gi"), "");
          });
          var cells = this.opts.blockLevelElements;
          cells.push("td");
          $.each(cells, function(isSlidingUp, canCreateDiscussions) {
            value = value.replace(new RegExp("<" + canCreateDiscussions + "(.*?)>", "gi"), "");
            value = value.replace(new RegExp("</" + canCreateDiscussions + ">", "gi"), "<br>");
          });
          $(p).html(value);
          this.selectionElement(p);
          var $list = $(p).next();
          if (0 != $list.size() && "BR" === $list[0].tagName) {
            $list.remove();
          }
        }
      }
      this.sync();
    },
    blockRemoveAttr : function(e, islongclick) {
      var arrowDiv = this.getBlocks();
      $(arrowDiv).removeAttr(e);
      this.sync();
    },
    blockSetAttr : function(e, i) {
      var customPlayerControls = this.getBlocks();
      $(customPlayerControls).attr(e, i);
      this.sync();
    },
    blockRemoveStyle : function(propval) {
      var i = this.getBlocks();
      $(i).css(propval, "");
      this.removeEmptyAttr(i, "style");
      this.sync();
    },
    blockSetStyle : function(e, i) {
      var arrowDiv = this.getBlocks();
      $(arrowDiv).css(e, i);
      this.sync();
    },
    blockRemoveClass : function(ctrlNode) {
      var i = this.getBlocks();
      $(i).removeClass(ctrlNode);
      this.removeEmptyAttr(i, "class");
      this.sync();
    },
    blockSetClass : function(standardSize) {
      var IFBox = this.getBlocks();
      $(IFBox).addClass(standardSize);
      this.sync();
    },
    inlineRemoveClass : function(ctrlNode) {
      this.selectionSave();
      this.inlineEachNodes(function(i) {
        $(i).removeClass(ctrlNode);
        this.removeEmptyAttr(i, "class");
      });
      this.selectionRestore();
      this.sync();
    },
    inlineSetClass : function(e) {
      var cell = this.getCurrent();
      if (!$(cell).hasClass(e)) {
        this.inlineMethods("addClass", e);
      }
    },
    inlineRemoveStyle : function(ast) {
      this.selectionSave();
      this.inlineEachNodes(function(i) {
        $(i).css(ast, "");
        this.removeEmptyAttr(i, "style");
      });
      this.selectionRestore();
      this.sync();
    },
    inlineSetStyle : function(p, f) {
      this.inlineMethods("css", p, f);
    },
    inlineRemoveAttr : function(value) {
      this.selectionSave();
      var range = this.getRange();
      var e = this.getElement();
      var nodes = this.getNodes();
      if (range.collapsed || range.startContainer === range.endContainer && e) {
        nodes = $(e);
      }
      $(nodes).removeAttr(value);
      this.inlineUnwrapSpan();
      this.selectionRestore();
      this.sync();
    },
    inlineSetAttr : function(i, resultsPerPage) {
      this.inlineMethods("attr", i, resultsPerPage);
    },
    inlineMethods : function(name, e, data) {
      this.bufferSet();
      this.selectionSave();
      var range = this.getRange();
      var selector = this.getElement();
      if (!range.collapsed && range.startContainer !== range.endContainer || !selector || this.nodeTestBlocks(selector)) {
        this.document.execCommand("fontSize", false, 4);
        var lines = this.$editor.find("font");
        $.each(lines, $.proxy(function(canCreateDiscussions, ___j) {
          this.inlineSetMethods(name, ___j, e, data);
        }, this));
      } else {
        $(selector)[name](e, data);
      }
      this.selectionRestore();
      this.sync();
    },
    inlineSetMethods : function(e, i, head, args) {
      var img;
      var c = $(i).parent();
      return c && "INLINE" === c[0].tagName && 0 != c[0].attributes.length ? (img = c, $(i).replaceWith($(i).html())) : (img = $("<inline>").append($(i).contents()), $(i).replaceWith(img)), $(img)[e](head, args), img;
    },
    inlineEachNodes : function(orig_match) {
      var i;
      var range = this.getRange();
      var e = this.getElement();
      var nodes = this.getNodes();
      if (range.collapsed || range.startContainer === range.endContainer && e) {
        nodes = $(e);
        /** @type {boolean} */
        i = true;
      }
      $.each(nodes, $.proxy(function(s, o) {
        if (!i && "INLINE" !== o.tagName) {
          if ("INLINE" !== o.parentNode.tagName || $(o.parentNode).hasClass("redactor_editor")) {
            return;
          }
          o = o.parentNode;
        }
        orig_match.call(this, o);
      }, this));
    },
    inlineUnwrapSpan : function() {
      var results = this.$editor.find("inline");
      $.each(results, $.proxy(function(canCreateDiscussions, i) {
        var s = $(i);
        if (void 0 === s.attr("class") && void 0 === s.attr("style")) {
          s.contents().unwrap();
        }
      }, this));
    },
    inlineFormat : function(used_blocks) {
      this.selectionSave();
      this.document.execCommand("fontSize", false, 4);
      var currentSurvey;
      var lines = this.$editor.find("font");
      $.each(lines, function(s, elem) {
        var survey = $("<" + used_blocks + "/>").append($(elem).contents());
        $(elem).replaceWith(survey);
        currentSurvey = survey;
      });
      this.selectionRestore();
      this.sync();
    },
    inlineRemoveFormat : function(shortMonthName) {
      this.selectionSave();
      var object = shortMonthName.toUpperCase();
      var nodes = this.getNodes();
      var o = $(this.getParent()).parent();
      $.each(nodes, function(canCreateDiscussions, data) {
        if (data.tagName === object) {
          this.inlineRemoveFormatReplace(data);
        }
      });
      if (o && o[0].tagName === object) {
        this.inlineRemoveFormatReplace(o);
      }
      this.selectionRestore();
      this.sync();
    },
    inlineRemoveFormatReplace : function(parent) {
      $(parent).replaceWith($(parent).contents());
    },
    insertHtml : function(value, html) {
      var current = this.getCurrent();
      var item = current.parentNode;
      this.$editor.focus();
      this.bufferSet();
      var r = $("<div>").append($.parseHTML(value));
      value = r.html();
      value = this.cleanRemoveEmptyTags(value);
      r = $("<div>").append($.parseHTML(value));
      var el = this.getBlock();
      if (1 == r.contents().length) {
        var tagName = r.contents()[0].tagName;
        if ("P" != tagName && tagName == el.tagName || "PRE" == tagName) {
          value = r.text();
          r = $("<div>").append(value);
        }
      }
      if (!this.opts.linebreaks && 1 == r.contents().length && 3 == r.contents()[0].nodeType && (this.getRangeSelectedNodes().length > 2 || !current || "BODY" == current.tagName && !item || "HTML" == item.tagName)) {
        /** @type {string} */
        value = "<p>" + value + "</p>";
      }
      value = this.setSpansVerifiedHtml(value);
      if (r.contents().length > 1 && el || r.contents().is("p, :header, ul, ol, li, div, table, td, blockquote, pre, address, section, header, footer, aside, article")) {
        if (this.browser("msie")) {
          this.document.selection.createRange().pasteHTML(value);
        } else {
          this.document.execCommand("inserthtml", false, value);
        }
      } else {
        this.insertHtmlAdvanced(value, false);
      }
      if (this.selectall) {
        this.window.setTimeout($.proxy(function() {
          if (this.opts.linebreaks) {
            this.focusEnd();
          } else {
            this.selectionEnd(this.$editor.contents().last());
          }
        }, this), 1);
      }
      this.observeStart();
      this.setNonEditable();
      if (html !== false) {
        this.sync();
      }
    },
    insertHtmlAdvanced : function(t, isTangent) {
      var sel = this.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        var range = sel.getRangeAt(0);
        range.deleteContents();
        var c = this.document.createElement("div");
        /** @type {string} */
        c.innerHTML = t;
        var r;
        var text;
        var frag = this.document.createDocumentFragment();
        for (; r = c.firstChild;) {
          text = frag.appendChild(r);
        }
        range.insertNode(frag);
        if (text) {
          range = range.cloneRange();
          range.setStartAfter(text);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
      if (isTangent !== false) {
        this.sync();
      }
    },
    insertText : function(data) {
      var i = $($.parseHTML(data));
      if (i.length) {
        data = i.text();
      }
      this.$editor.focus();
      if (this.browser("msie")) {
        this.document.selection.createRange().pasteHTML(data);
      } else {
        this.document.execCommand("inserthtml", false, data);
      }
      this.sync();
    },
    insertNode : function(element) {
      element = element[0] || element;
      var sel = this.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(element);
        range.setEndAfter(element);
        range.setStartAfter(element);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    },
    insertNodeToCaretPositionFromPoint : function(o, elem) {
      var range;
      var x = o.clientX;
      var y = o.clientY;
      if (this.document.caretPositionFromPoint) {
        var point = this.document.caretPositionFromPoint(x, y);
        range = this.getRange();
        range.setStart(point.offsetNode, point.offset);
        range.collapse(true);
        range.insertNode(elem);
      } else {
        if (this.document.caretRangeFromPoint) {
          range = this.document.caretRangeFromPoint(x, y);
          range.insertNode(elem);
        } else {
          if ("undefined" != typeof document.body.createTextRange) {
            range = this.document.body.createTextRange();
            range.moveToPoint(x, y);
            var sr = range.duplicate();
            sr.moveToPoint(x, y);
            range.setEndPoint("EndToEnd", sr);
            range.select();
          }
        }
      }
    },
    insertAfterLastElement : function(n, c) {
      if ("undefined" != typeof c && (n = c), this.isEndOfElement()) {
        if (this.opts.linebreaks) {
          var fromWay = $("<div>").append($.trim(this.$editor.html())).contents();
          if (this.outerHtml(fromWay.last()[0]) != this.outerHtml(n)) {
            return false;
          }
        } else {
          if (this.$editor.contents().last()[0] !== n) {
            return false;
          }
        }
        if (this.bufferSet(), this.opts.linebreaks === false) {
          var selectEl = $(this.opts.emptyHtml);
          $(n).after(selectEl);
          this.selectionStart(selectEl);
        } else {
          selectEl = $('<span id="selection-marker-1">' + this.opts.invisibleSpace + "</span>", this.document)[0];
          $(n).after(selectEl);
          $(selectEl).after(this.opts.invisibleSpace);
          this.selectionRestore();
          this.$editor.find("span#selection-marker-1").removeAttr("id");
        }
      }
    },
    insertLineBreak : function() {
      this.selectionSave();
      this.$editor.find("#selection-marker-1").before("<br>" + (this.browser("webkit") ? this.opts.invisibleSpace : ""));
      this.selectionRestore();
    },
    insertDoubleLineBreak : function() {
      this.selectionSave();
      this.$editor.find("#selection-marker-1").before("<br><br>" + (this.browser("webkit") ? this.opts.invisibleSpace : ""));
      this.selectionRestore();
    },
    replaceLineBreak : function(elem) {
      var i = $("<br>" + this.opts.invisibleSpace);
      $(elem).replaceWith(i);
      this.selectionStart(i);
    },
    pasteClean : function(url) {
      if (url = this.callback("pasteBefore", false, url), this.opts.pastePlainText) {
        var elem = this.document.createElement("div");
        return url = url.replace(/<br>|<\/H[1-6]>|<\/p>|<\/div>/gi, "\n"), elem.innerHTML = url, url = elem.textContent || elem.innerText, url = $.trim(url), url = url.replace("\n", "<br>"), url = this.cleanParagraphy(url), this.pasteInsert(url), false;
      }
      if (this.currentOrParentIs("PRE")) {
        return url = this.pastePre(url), this.pasteInsert(url), true;
      }
      if (url = url.replace(/<p(.*?)class="MsoListParagraphCxSpFirst"([\w\W]*?)<\/p>/gi, "<ul><li$2</li>"), url = url.replace(/<p(.*?)class="MsoListParagraphCxSpMiddle"([\w\W]*?)<\/p>/gi, "<li$2</li>"), url = url.replace(/<p(.*?)class="MsoListParagraphCxSpLast"([\w\W]*?)<\/p>/gi, "<li$2</li></ul>"), url = url.replace(/<p(.*?)class="MsoListParagraph"([\w\W]*?)<\/p>/gi, "<ul><li$2</li></ul>"), url = url.replace(/\u00b7/g, ""), url = url.replace(/\x3c!--[\s\S]*?--\x3e|<\?(?:php)?[\s\S]*?\?>/gi, ""), 
      url = url.replace(/(&nbsp;){2,}/gi, "&nbsp;"), url = url.replace(/&nbsp;/gi, " "), url = url.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2"), url = url.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, "$3"), url = this.cleanStripTags(url), url = url.replace(/<td><\/td>/gi, "[td]"), url = url.replace(/<td>&nbsp;<\/td>/gi, "[td]"), url = url.replace(/<td><br><\/td>/gi, "[td]"), url = url.replace(/<td(.*?)colspan="(.*?)"(.*?)>([\w\W]*?)<\/td>/gi, '[td colspan="$2"]$4[/td]'), 
      url = url.replace(/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi, '[a href="$2"]$4[/a]'), url = url.replace(/<iframe(.*?)>([\w\W]*?)<\/iframe>/gi, "[iframe$1]$2[/iframe]"), url = url.replace(/<video(.*?)>([\w\W]*?)<\/video>/gi, "[video$1]$2[/video]"), url = url.replace(/<audio(.*?)>([\w\W]*?)<\/audio>/gi, "[audio$1]$2[/audio]"), url = url.replace(/<embed(.*?)>([\w\W]*?)<\/embed>/gi, "[embed$1]$2[/embed]"), url = url.replace(/<object(.*?)>([\w\W]*?)<\/object>/gi, "[object$1]$2[/object]"), url = 
      url.replace(/<param(.*?)>/gi, "[param$1]"), url = url.replace(/<img(.*?)>/gi, "[img$1]"), url = url.replace(/ class="(.*?)"/gi, ""), url = url.replace(/<(\w+)([\w\W]*?)>/gi, "<$1>"), url = url.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, ""), url = url.replace(/<div>\s*?\t*?\n*?(<ul>|<ol>|<p>)/gi, "$1"), url = url.replace(/\[td colspan="(.*?)"\]([\w\W]*?)\[\/td\]/gi, '<td colspan="$1">$2</td>'), url = url.replace(/\[td\]/gi, "<td>&nbsp;</td>"), url = url.replace(/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi, 
      '<a href="$1">$2</a>'), url = url.replace(/\[iframe(.*?)\]([\w\W]*?)\[\/iframe\]/gi, "<iframe$1>$2</iframe>"), url = url.replace(/\[video(.*?)\]([\w\W]*?)\[\/video\]/gi, "<video$1>$2</video>"), url = url.replace(/\[audio(.*?)\]([\w\W]*?)\[\/audio\]/gi, "<audio$1>$2</audio>"), url = url.replace(/\[embed(.*?)\]([\w\W]*?)\[\/embed\]/gi, "<embed$1>$2</embed>"), url = url.replace(/\[object(.*?)\]([\w\W]*?)\[\/object\]/gi, "<object$1>$2</object>"), url = url.replace(/\[param(.*?)\]/gi, "<param$1>"), 
      url = url.replace(/\[img(.*?)\]/gi, "<img$1>"), this.opts.convertDivs && (url = url.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "<p>$2</p>"), url = url.replace(/<\/div><p>/gi, "<p>"), url = url.replace(/<\/p><\/div>/gi, "</p>")), url = this.currentOrParentIs("LI") ? url.replace(/<p>([\w\W]*?)<\/p>/gi, "$1<br>") : this.cleanParagraphy(url), url = url.replace(/<span(.*?)>([\w\W]*?)<\/span>/gi, "$2"), url = url.replace(/<img>/gi, ""), url = url.replace(/<[^\/>][^>][^img|param|source]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, 
      ""), url = url.replace(/\n{3,}/gi, "\n"), url = url.replace(/<p><p>/gi, "<p>"), url = url.replace(/<\/p><\/p>/gi, "</p>"), url = url.replace(/<li>(\s*|\t*|\n*)<p>/gi, "<li>"), url = url.replace(/<\/p>(\s*|\t*|\n*)<\/li>/gi, "</li>"), this.opts.linebreaks === true && (url = url.replace(/<p(.*?)>([\w\W]*?)<\/p>/gi, "$2<br>")), url = url.replace(/<[^\/>][^>][^img|param|source]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, ""), url = url.replace(/<img src="webkit-fake-url:\/\/(.*?)"(.*?)>/gi, ""), url = 
      url.replace(/<td(.*?)>(\s*|\t*|\n*)<p>([\w\W]*?)<\/p>(\s*|\t*|\n*)<\/td>/gi, "<td$1>$3</td>"), url = url.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "$2"), url = url.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, "$2"), this.pasteClipboardMozilla = false, this.browser("mozilla")) {
        if (this.opts.clipboardUpload) {
          var v = url.match(/<img src="data:image(.*?)"(.*?)>/gi);
          if (null !== v) {
            this.pasteClipboardMozilla = v;
            for (k in v) {
              var defaultsDirSpec = v[k].replace("<img", '<img data-mozilla-paste-image="' + k + '" ');
              url = url.replace(v[k], defaultsDirSpec);
            }
          }
        }
        for (; /<br>$/gi.test(url);) {
          url = url.replace(/<br>$/gi, "");
        }
      }
      url = url.replace(/<p>\u2022([\w\W]*?)<\/p>/gi, "<li>$1</li>");
      for (; /<font>([\w\W]*?)<\/font>/gi.test(url);) {
        url = url.replace(/<font>([\w\W]*?)<\/font>/gi, "$1");
      }
      this.pasteInsert(url);
    },
    pastePre : function(url) {
      url = url.replace(/<br>|<\/H[1-6]>|<\/p>|<\/div>/gi, "\n");
      var elem = this.document.createElement("div");
      return elem.innerHTML = url, this.cleanEncodeEntities(elem.textContent || elem.innerText);
    },
    pasteInsert : function(obj) {
      if (this.selectall) {
        if (this.opts.linebreaks) {
          this.$editor.html("");
        } else {
          this.$editor.html(this.opts.emptyHtml);
        }
        this.$editor.focus();
      }
      obj = this.callback("pasteAfter", false, obj);
      this.insertHtml(obj);
      /** @type {boolean} */
      this.selectall = false;
      setTimeout($.proxy(function() {
        /** @type {boolean} */
        this.rtePaste = false;
        if (this.browser("mozilla")) {
          this.$editor.find("p:empty").remove();
        }
        if (this.pasteClipboardMozilla !== false) {
          this.pasteClipboardUploadMozilla();
        }
      }, this), 100);
      if (this.opts.autoresize) {
        $(this.document.body).scrollTop(this.saveScroll);
      } else {
        this.$editor.scrollTop(this.saveScroll);
      }
    },
    pasteClipboardUploadMozilla : function() {
      var fields_to_add = this.$editor.find("img[data-mozilla-paste-image]");
      $.each(fields_to_add, $.proxy(function(canCreateDiscussions, i) {
        var source = $(i);
        var fields = i.src.split(",");
        var names = fields[1];
        var mimeType = fields[0].split(";")[0].split(":")[1];
        $.post(this.opts.clipboardUploadUrl, {
          contentType : mimeType,
          data : names
        }, $.proxy(function(data) {
          var item = "string" == typeof data ? $.parseJSON(data) : data;
          source.attr("src", item.filelink);
          source.removeAttr("data-mozilla-paste-image");
          this.sync();
          this.callback("imageUpload", source, item);
        }, this));
      }, this));
    },
    pasteClipboardUpload : function(fileLoadedEvent) {
      var binaryString = fileLoadedEvent.target.result;
      var fields = binaryString.split(",");
      var names = fields[1];
      var mimeType = fields[0].split(";")[0].split(":")[1];
      if (this.opts.clipboardUpload) {
        $.post(this.opts.clipboardUploadUrl, {
          contentType : mimeType,
          data : names
        }, $.proxy(function(str) {
          var json = "string" == typeof str ? $.parseJSON(str) : str;
          /** @type {string} */
          var arg = '<img src="' + json.filelink + '" id="clipboard-image-marker" />';
          this.execCommand("inserthtml", arg, false);
          var focused = $(this.$editor.find("img#clipboard-image-marker"));
          if (focused.length) {
            focused.removeAttr("id");
          } else {
            /** @type {boolean} */
            focused = false;
          }
          this.sync();
          if (focused) {
            this.callback("imageUpload", focused, json);
          }
        }, this));
      } else {
        this.insertHtml('<img src="' + binaryString + '" />');
      }
    },
    bufferSet : function(data) {
      if (void 0 !== data) {
        this.opts.buffer.push(data);
      } else {
        this.selectionSave();
        this.opts.buffer.push(this.$editor.html());
        this.selectionRemoveMarkers("buffer");
      }
    },
    bufferUndo : function() {
      return 0 === this.opts.buffer.length ? void this.$editor.focus() : (this.selectionSave(), this.opts.rebuffer.push(this.$editor.html()), this.selectionRestore(false, true), this.$editor.html(this.opts.buffer.pop()), this.selectionRestore(), void setTimeout($.proxy(this.observeStart, this), 100));
    },
    bufferRedo : function() {
      return 0 === this.opts.rebuffer.length ? (this.$editor.focus(), false) : (this.selectionSave(), this.opts.buffer.push(this.$editor.html()), this.selectionRestore(false, true), this.$editor.html(this.opts.rebuffer.pop()), this.selectionRestore(true), void setTimeout($.proxy(this.observeStart, this), 4));
    },
    observeStart : function() {
      this.observeImages();
      if (this.opts.observeLinks) {
        this.observeLinks();
      }
    },
    observeLinks : function() {
      this.$editor.find("a").on("click", $.proxy(this.linkObserver, this));
      this.$editor.on("click.redactor", $.proxy(function(li_wrapper) {
        this.linkObserverTooltipClose(li_wrapper);
      }, this));
    },
    observeImages : function() {
      return this.opts.observeImages === false ? false : void this.$editor.find("img").each($.proxy(function(canCreateDiscussions, clicked_el) {
        if (this.browser("msie")) {
          $(clicked_el).attr("unselectable", "on");
        }
        this.imageResize(clicked_el);
      }, this));
    },
    linkObserver : function(jEvent) {
      var i = $(jEvent.target);
      var doc = i.offset();
      if (this.opts.iframe) {
        var ofs = this.$frame.offset();
        doc.top = ofs.top + (doc.top - $(this.document).scrollTop());
        doc.left += ofs.left;
      }
      var r = $('<span class="redactor-link-tooltip"></span>');
      var postIconID = i.attr("href");
      if (postIconID.length > 24) {
        postIconID = postIconID.substring(0, 24) + "...";
      }
      var l = $('<a href="' + i.attr("href") + '" target="_blank">' + postIconID + "</a>").on("click", $.proxy(function(canCreateDiscussions) {
        this.linkObserverTooltipClose(false);
      }, this));
      var tcinContainer = $('<a href="#">' + this.opts.curLang.edit + "</a>").on("click", $.proxy(function(event) {
        event.preventDefault();
        this.linkShow();
        this.linkObserverTooltipClose(false);
      }, this));
      var tcoutContainer = $('<a href="#">' + this.opts.curLang.unlink + "</a>").on("click", $.proxy(function(event) {
        event.preventDefault();
        this.execCommand("unlink");
        this.linkObserverTooltipClose(false);
      }, this));
      r.append(l);
      r.append(" | ");
      r.append(tcinContainer);
      r.append(" | ");
      r.append(tcoutContainer);
      r.css({
        top : doc.top + 20 + "px",
        left : doc.left + "px"
      });
      $(".redactor-link-tooltip").remove();
      $("body").append(r);
    },
    linkObserverTooltipClose : function(target) {
      return target !== false && "A" == target.target.tagName ? false : void $(".redactor-link-tooltip").remove();
    },
    getSelection : function() {
      return this.opts.rangy ? this.opts.iframe ? rangy.getSelection(this.$frame[0]) : rangy.getSelection() : this.document.getSelection();
    },
    getRange : function() {
      if (this.opts.rangy) {
        return this.opts.iframe ? rangy.createRange(this.iframeDoc()) : rangy.createRange();
      }
      if (this.document.getSelection) {
        var sel = this.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          return sel.getRangeAt(0);
        }
      }
      return this.document.createRange();
    },
    selectionElement : function(value) {
      this.setCaret(value);
    },
    selectionStart : function(el) {
      this.selectionSet(el[0] || el, 0, null, 0);
    },
    selectionEnd : function(el) {
      this.selectionSet(el[0] || el, 1, null, 1);
    },
    selectionSet : function(p, offset, index, options) {
      if (null == index) {
        /** @type {string} */
        index = p;
      }
      if (null == options) {
        /** @type {number} */
        options = offset;
      }
      var sel = this.getSelection();
      if (sel) {
        var range = this.getRange();
        range.setStart(p, offset);
        range.setEnd(index, options);
        try {
          sel.removeAllRanges();
        } catch (a) {
        }
        sel.addRange(range);
      }
    },
    selectionWrap : function(name) {
      name = name.toLowerCase();
      var block = this.getBlock();
      if (block) {
        var elem = this.formatChangeTag(block, name);
        return this.sync(), elem;
      }
      var sel = this.getSelection();
      var range = sel.getRangeAt(0);
      /** @type {!Element} */
      elem = document.createElement(name);
      return elem.appendChild(range.extractContents()), range.insertNode(elem), this.selectionElement(elem), elem;
    },
    selectionAll : function() {
      var range = this.getRange();
      range.selectNodeContents(this.$editor[0]);
      var sel = this.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    selectionRemove : function() {
      this.getSelection().removeAllRanges();
    },
    getCaretOffset : function(element) {
      /** @type {number} */
      var tableslen = 0;
      var range = this.getRange();
      var newRange = range.cloneRange();
      return newRange.selectNodeContents(element), newRange.setEnd(range.endContainer, range.endOffset), tableslen = $.trim(newRange.toString()).length;
    },
    getCaretOffsetRange : function() {
      return new StableRange(this.getSelection().getRangeAt(0));
    },
    setCaret : function(element, start, end) {
      if ("undefined" == typeof end) {
        /** @type {number} */
        end = start;
      }
      element = element[0] || element;
      var range = this.getRange();
      range.selectNodeContents(element);
      var offset;
      var nodes = this.getTextNodesIn(element);
      /** @type {boolean} */
      var foundStart = false;
      /** @type {number} */
      var charCount = 0;
      if (1 == nodes.length && start) {
        range.setStart(nodes[0], start);
        range.setEnd(nodes[0], end);
      } else {
        var textNode;
        /** @type {number} */
        var i = 0;
        for (; textNode = nodes[i++];) {
          if (offset = charCount + textNode.length, !foundStart && start >= charCount && (offset > start || start == offset && i < nodes.length) && (range.setStart(textNode, start - charCount), foundStart = true), foundStart && offset >= end) {
            range.setEnd(textNode, end - charCount);
            break;
          }
          charCount = offset;
        }
      }
      var sel = this.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    getTextNodesIn : function(node) {
      /** @type {!Array} */
      var textNodes = [];
      if (3 == node.nodeType) {
        textNodes.push(node);
      } else {
        var items = node.childNodes;
        /** @type {number} */
        var room_id = 0;
        var items_length = items.length;
        for (; items_length > room_id; ++room_id) {
          textNodes.push.apply(textNodes, this.getTextNodesIn(items[room_id]));
        }
      }
      return textNodes;
    },
    getCurrent : function() {
      /** @type {boolean} */
      var containerB = false;
      var sel = this.getSelection();
      return sel.rangeCount > 0 && (containerB = sel.getRangeAt(0).startContainer), this.isParentRedactor(containerB);
    },
    getParent : function(elem) {
      return elem = elem || this.getCurrent(), elem ? this.isParentRedactor($(elem).parent()[0]) : false;
    },
    getBlock : function(c) {
      if ("undefined" == typeof c) {
        c = this.getCurrent();
      }
      for (; c;) {
        if (this.nodeTestBlocks(c)) {
          return $(c).hasClass("redactor_editor") ? false : c;
        }
        c = c.parentNode;
      }
      return false;
    },
    getBlocks : function(a) {
      /** @type {!Array} */
      var svcs = [];
      if ("undefined" == typeof a) {
        var r = this.getRange();
        if (r && r.collapsed === true) {
          return [this.getBlock()];
        }
        a = this.getNodes(r);
      }
      return $.each(a, $.proxy(function(canCreateDiscussions, s) {
        return this.opts.iframe === false && 0 == $(s).parents("div.redactor_editor").size() ? false : void(this.nodeTestBlocks(s) && svcs.push(s));
      }, this)), 0 === svcs.length && (svcs = [this.getBlock()]), svcs;
    },
    nodeTestBlocks : function(t) {
      return 1 == t.nodeType && this.rTestBlock.test(t.nodeName);
    },
    tagTestBlock : function(sVal) {
      return this.rTestBlock.test(sVal);
    },
    getNodes : function(value, id) {
      if ("undefined" == typeof value || 0 == value) {
        value = this.getRange();
      }
      if (value && value.collapsed === true) {
        if ("undefined" == typeof id && this.tagTestBlock(id)) {
          var block = this.getBlock();
          return block.tagName == id ? [block] : [];
        }
        return [this.getCurrent()];
      }
      /** @type {!Array} */
      var tablesongs = [];
      /** @type {!Array} */
      var nodes = [];
      var selection = this.document.getSelection();
      if (selection.isCollapsed || (tablesongs = this.getRangeSelectedNodes(selection.getRangeAt(0))), $.each(tablesongs, $.proxy(function(canCreateDiscussions, el) {
        return this.opts.iframe === false && 0 == $(el).parents("div.redactor_editor").size() ? false : void("undefined" == typeof id ? "" != $.trim(el.textContent) && nodes.push(el) : el.tagName == id && nodes.push(el));
      }, this)), 0 == nodes.length) {
        if ("undefined" == typeof id && this.tagTestBlock(id)) {
          block = this.getBlock();
          return block.tagName == id ? nodes.push(block) : [];
        }
        nodes.push(this.getCurrent());
      }
      return nodes;
    },
    getElement : function(context) {
      if (!context) {
        context = this.getCurrent();
      }
      for (; context;) {
        if (1 == context.nodeType) {
          return $(context).hasClass("redactor_editor") ? false : context;
        }
        context = context.parentNode;
      }
      return false;
    },
    getRangeSelectedNodes : function(range) {
      range = range || this.getRange();
      var node = range.startContainer;
      var endNode = range.endContainer;
      if (node == endNode) {
        return [node];
      }
      /** @type {!Array} */
      var rangeNodes = [];
      for (; node && node != endNode;) {
        rangeNodes.push(node = this.nextNode(node));
      }
      node = range.startContainer;
      for (; node && node != range.commonAncestorContainer;) {
        rangeNodes.unshift(node);
        node = node.parentNode;
      }
      return rangeNodes;
    },
    nextNode : function(node) {
      if (node.hasChildNodes()) {
        return node.firstChild;
      }
      for (; node && !node.nextSibling;) {
        node = node.parentNode;
      }
      return node ? node.nextSibling : null;
    },
    getSelectionText : function() {
      return this.getSelection().toString();
    },
    getSelectionHtml : function() {
      /** @type {string} */
      var sTitle = "";
      var sel = this.getSelection();
      if (sel.rangeCount) {
        var document = this.document.createElement("div");
        var len = sel.rangeCount;
        /** @type {number} */
        var i = 0;
        for (; len > i; ++i) {
          document.appendChild(sel.getRangeAt(i).cloneContents());
        }
        sTitle = document.innerHTML;
      }
      return this.syncClean(sTitle);
    },
    selectionSave : function() {
      if (!this.isFocused()) {
        this.$editor.focus();
      }
      if (this.opts.rangy) {
        this.savedSel = rangy.saveSelection();
      } else {
        this.selectionCreateMarker(this.getRange());
      }
    },
    selectionCreateMarker : function(e, islongclick) {
      if (e) {
        var uboard = $('<span id="selection-marker-1" class="redactor-selection-marker">' + this.opts.invisibleSpace + "</span>", this.document)[0];
        var nberr = $('<span id="selection-marker-2" class="redactor-selection-marker">' + this.opts.invisibleSpace + "</span>", this.document)[0];
        if (e.collapsed === true) {
          this.selectionSetMarker(e, uboard, true);
        } else {
          this.selectionSetMarker(e, uboard, true);
          this.selectionSetMarker(e, nberr, false);
        }
        this.savedSel = this.$editor.html();
        this.selectionRestore(false, false);
      }
    },
    selectionSetMarker : function(r, e, id) {
      var self = r.cloneRange();
      self.collapse(id);
      self.insertNode(e);
      self.detach();
    },
    selectionRestore : function(e, sel) {
      if (this.opts.rangy) {
        rangy.restoreSelection(this.savedSel);
      } else {
        if (e === true && this.savedSel) {
          this.$editor.html(this.savedSel);
        }
        var expRecords = this.$editor.find("span#selection-marker-1");
        var s = this.$editor.find("span#selection-marker-2");
        if (this.browser("mozilla")) {
          this.$editor.focus();
        } else {
          if (!this.isFocused()) {
            this.$editor.focus();
          }
        }
        if (0 != expRecords.length && 0 != s.length) {
          this.selectionSet(expRecords[0], 0, s[0], 0);
        } else {
          if (0 != expRecords.length) {
            this.selectionSet(expRecords[0], 0, null, 0);
          }
        }
        if (sel !== false) {
          this.selectionRemoveMarkers();
          /** @type {boolean} */
          this.savedSel = false;
        }
      }
    },
    selectionRemoveMarkers : function(createdBuffer) {
      if (this.opts.rangy) {
        rangy.removeMarkers(this.savedSel);
      } else {
        $.each(this.$editor.find("span.redactor-selection-marker"), function() {
          var anchorPart = $.trim($(this).html().replace(/[^\u0000-\u1C7F]/g, ""));
          if ("" == anchorPart) {
            $(this).remove();
          } else {
            $(this).removeAttr("class").removeAttr("id");
          }
        });
      }
    },
    tableShow : function() {
      this.selectionSave();
      this.modalInit(this.opts.curLang.table, this.opts.modal_table, 300, $.proxy(function() {
        $("#redactor_insert_table_btn").click($.proxy(this.tableInsert, this));
        setTimeout(function() {
          $("#redactor_table_rows").focus();
        }, 200);
      }, this));
    },
    tableInsert : function() {
      var gasSum;
      var i;
      var formattedGradebookGrade;
      var $attachments_el;
      var costSum = $("#redactor_table_rows").val();
      var formattedBestGrade = $("#redactor_table_columns").val();
      var n = $("<div></div>");
      /** @type {number} */
      var id = Math.floor(99999 * Math.random());
      var c = $('<table id="table' + id + '"><tbody></tbody></table>');
      /** @type {number} */
      gasSum = 0;
      for (; costSum > gasSum; gasSum++) {
        i = $("<tr></tr>");
        /** @type {number} */
        formattedGradebookGrade = 0;
        for (; formattedBestGrade > formattedGradebookGrade; formattedGradebookGrade++) {
          $attachments_el = $("<td>" + this.opts.invisibleSpace + "</td>");
          if (0 === gasSum && 0 === formattedGradebookGrade) {
            $attachments_el.append('<span id="selection-marker-1">' + this.opts.invisibleSpace + "</span>");
          }
          $(i).append($attachments_el);
        }
        c.append(i);
      }
      n.append(c);
      var s = n.html();
      this.modalClose();
      this.selectionRestore();
      var selectEl = this.getBlock() || this.getCurrent();
      if (selectEl && "BODY" != selectEl.tagName) {
        $(selectEl).after(s);
      } else {
        this.insertHtmlAdvanced(s, false);
      }
      this.selectionRestore();
      var $vote = this.$editor.find("#table" + id);
      this.buttonActiveObserver();
      $vote.find("span#selection-marker-1").remove();
      $vote.removeAttr("id");
      this.sync();
    },
    tableDeleteTable : function() {
      var e = $(this.getParent()).closest("table");
      return this.isParentRedactor(e) ? 0 == e.size() ? false : (this.bufferSet(), e.remove(), void this.sync()) : false;
    },
    tableDeleteRow : function() {
      var e = $(this.getParent()).closest("table");
      if (!this.isParentRedactor(e)) {
        return false;
      }
      if (0 == e.size()) {
        return false;
      }
      this.bufferSet();
      var socialButton = $(this.getParent()).closest("tr");
      var row$ = socialButton.prev().length ? socialButton.prev() : socialButton.next();
      if (row$.length) {
        var _stringBuilder = row$.children("td").first();
        if (_stringBuilder.length) {
          _stringBuilder.prepend('<span id="selection-marker-1">' + this.opts.invisibleSpace + "</span>");
        }
      }
      socialButton.remove();
      this.selectionRestore();
      this.sync();
    },
    tableDeleteColumn : function() {
      var e = $(this.getParent()).closest("table");
      if (!this.isParentRedactor(e)) {
        return false;
      }
      if (0 == e.size()) {
        return false;
      }
      this.bufferSet();
      var index = $(this.getParent()).closest("td");
      var i = index.get(0).cellIndex;
      e.find("tr").each($.proxy(function(canCreateDiscussions, mei) {
        var focusIndex = 0 > i - 1 ? i + 1 : i - 1;
        if (0 === canCreateDiscussions) {
          $(mei).find("td").eq(focusIndex).prepend('<span id="selection-marker-1">' + this.opts.invisibleSpace + "</span>");
        }
        $(mei).find("td").eq(i).remove();
      }, this));
      this.selectionRestore();
      this.sync();
    },
    tableAddHead : function() {
      var $table = $(this.getParent()).closest("table");
      if (!this.isParentRedactor($table)) {
        return false;
      }
      if (0 == $table.size()) {
        return false;
      }
      if (this.bufferSet(), 0 !== $table.find("thead").size()) {
        this.tableDeleteHead();
      } else {
        var table = $table.find("tr").first().clone();
        table.find("td").html(this.opts.invisibleSpace);
        $thead = $("<thead></thead>");
        $thead.append(table);
        $table.prepend($thead);
        this.sync();
      }
    },
    tableDeleteHead : function() {
      var table = $(this.getParent()).closest("table");
      if (!this.isParentRedactor(table)) {
        return false;
      }
      var $thead = table.find("thead");
      return 0 == $thead.size() ? false : (this.bufferSet(), $thead.remove(), void this.sync());
    },
    tableAddRowAbove : function() {
      this.tableAddRow("before");
    },
    tableAddRowBelow : function() {
      this.tableAddRow("after");
    },
    tableAddColumnLeft : function() {
      this.tableAddColumn("before");
    },
    tableAddColumnRight : function() {
      this.tableAddColumn("after");
    },
    tableAddRow : function(position) {
      var i = $(this.getParent()).closest("table");
      if (!this.isParentRedactor(i)) {
        return false;
      }
      if (0 == i.size()) {
        return false;
      }
      this.bufferSet();
      var s = $(this.getParent()).closest("tr");
      var o = s.clone();
      o.find("td").html(this.opts.invisibleSpace);
      if ("after" === position) {
        s.after(o);
      } else {
        s.before(o);
      }
      this.sync();
    },
    tableAddColumn : function(position) {
      var i = $(this.getParent()).closest("table");
      if (!this.isParentRedactor(i)) {
        return false;
      }
      if (0 == i.size()) {
        return false;
      }
      this.bufferSet();
      /** @type {number} */
      var s = 0;
      var rowEl = $(this.getParent()).closest("tr");
      var targetParrentElement = $(this.getParent()).closest("td");
      rowEl.find("td").each($.proxy(function(strVersion, i) {
        if ($(i)[0] === targetParrentElement[0]) {
          /** @type {number} */
          s = strVersion;
        }
      }, this));
      i.find("tr").each($.proxy(function(i, mei) {
        var div = $(mei).find("td").eq(s);
        var td = div.clone();
        td.html(this.opts.invisibleSpace);
        if ("after" === position) {
          div.after(td);
        } else {
          div.before(td);
        }
      }, this));
      this.sync();
    },
    videoShow : function() {
      this.selectionSave();
      this.modalInit(this.opts.curLang.video, this.opts.modal_video, 600, $.proxy(function() {
        $("#redactor_insert_video_btn").click($.proxy(this.videoInsert, this));
        setTimeout(function() {
          $("#redactor_insert_video_area").focus();
        }, 200);
      }, this));
    },
    videoInsert : function() {
      var e = $("#redactor_insert_video_area").val();
      e = this.cleanStripTags(e);
      e = this.youtubeUrl(e);
      e = `<iframe width="100%" height="315" src="//www.youtube.com/embed/${e} 
    " frameborder="0" allowfullscreen></iframe>`;
      this.selectionRestore();
      var previousColgroup = this.getBlock() || this.getCurrent();
      
      console.log(e);
      if (previousColgroup) {
        $(previousColgroup).after(e);
      } else {
        this.insertHtmlAdvanced(e, false);
      }
      this.sync();
      this.modalClose();
    },
    youtubeUrl:function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
},
    linkShow : function() {
      this.selectionSave();
      var callback = $.proxy(function() {
        /** @type {boolean} */
        this.insert_link_node = false;
        var selection = this.getSelection();
        /** @type {string} */
        var id = "";
        /** @type {string} */
        var cookieServer = "";
        /** @type {string} */
        var node = "";
        var parent = this.getParent();
        var target = $(parent).parent().get(0);
        if (target && "A" === target.tagName) {
          parent = target;
        }
        if (parent && "A" === parent.tagName) {
          id = parent.href;
          cookieServer = $(parent).text();
          node = parent.target;
          this.insert_link_node = parent;
        } else {
          cookieServer = selection.toString();
        }
        $(".redactor_link_text").val(cookieServer);
        /** @type {string} */
        var n = self.location.href.replace(/\/$/i, "");
        /** @type {string} */
        var text = id.replace(n, "");
        if (this.opts.linkProtocol === false) {
          /** @type {!RegExp} */
          var str = new RegExp("^(http|ftp|https)://" + self.location.host, "i");
          /** @type {string} */
          text = text.replace(str, "");
        }
        var currentHeadersAnchor = $("#redactor_tabs").find("a");
        if (this.opts.linkEmail === false) {
          currentHeadersAnchor.eq(1).remove();
        }
        if (this.opts.linkAnchor === false) {
          currentHeadersAnchor.eq(2).remove();
        }
        if (this.opts.linkEmail === false && this.opts.linkAnchor === false) {
          $("#redactor_tabs").remove();
          $("#redactor_link_url").val(text);
        } else {
          if (0 === id.search("mailto:")) {
            this.modalSetTab.call(this, 2);
            $("#redactor_tab_selected").val(2);
            $("#redactor_link_mailto").val(id.replace("mailto:", ""));
          } else {
            if (0 === text.search(/^#/gi)) {
              this.modalSetTab.call(this, 3);
              $("#redactor_tab_selected").val(3);
              $("#redactor_link_anchor").val(text.replace(/^#/gi, ""));
            } else {
              $("#redactor_link_url").val(text);
            }
          }
        }
        if ("_blank" === node) {
          $("#redactor_link_blank").prop("checked", true);
        }
        $("#redactor_insert_link_btn").click($.proxy(this.linkProcess, this));
        setTimeout(function() {
          $("#redactor_link_url").focus();
        }, 200);
      }, this);
      this.modalInit(this.opts.curLang.link, this.opts.modal_link, 460, callback);
    },
    linkProcess : function() {
      var e = $("#redactor_tab_selected").val();
      /** @type {string} */
      var value = "";
      /** @type {string} */
      var s = "";
      /** @type {string} */
      var th_field = "";
      /** @type {string} */
      var expected = "";
      if ("1" === e) {
        value = $("#redactor_link_url").val();
        s = $("#redactor_link_url_text").val();
        if ($("#redactor_link_blank").prop("checked")) {
          /** @type {string} */
          th_field = ' target="_blank"';
          /** @type {string} */
          expected = "_blank";
        }
        /** @type {string} */
        var _end2 = "((xn--)?[a-z0-9]+(-[a-z0-9]+)*.)+[a-z]{2,}";
        /** @type {!RegExp} */
        var n = new RegExp("^(http|ftp|https)://" + _end2, "i");
        /** @type {!RegExp} */
        var classnameRE = new RegExp("^" + _end2, "i");
        if (-1 == value.search(n) && 0 == value.search(classnameRE) && this.opts.linkProtocol) {
          value = this.opts.linkProtocol + value;
        }
      } else {
        if ("2" === e) {
          value = "mailto:" + $("#redactor_link_mailto").val();
          s = $("#redactor_link_mailto_text").val();
        } else {
          if ("3" === e) {
            value = "#" + $("#redactor_link_anchor").val();
            s = $("#redactor_link_anchor_text").val();
          }
        }
      }
      s = s.replace(/<|>/g, "");
      this.linkInsert('<a href="' + value + '"' + th_field + ">" + s + "</a>", $.trim(s), value, expected);
    },
    linkInsert : function(link, i, t, value) {
      this.selectionRestore();
      if ("" !== i) {
        if (this.insert_link_node) {
          this.bufferSet();
          $(this.insert_link_node).text(i).attr("href", t);
          if ("" !== value) {
            $(this.insert_link_node).attr("target", value);
          } else {
            $(this.insert_link_node).removeAttr("target");
          }
          this.sync();
        } else {
          this.exec("inserthtml", link);
        }
      }
      setTimeout($.proxy(function() {
        if (this.opts.observeLinks) {
          this.observeLinks();
        }
      }, this), 5);
      this.modalClose();
    },
    fileShow : function() {
      this.selectionSave();
      var callback = $.proxy(function() {
        var selection = this.getSelection();
        /** @type {string} */
        var cookieServer = "";
        cookieServer = this.oldIE() ? selection.text : selection.toString();
        $("#redactor_filename").val(cookieServer);
        if (!this.isMobile()) {
          this.draguploadInit("#redactor_file", {
            url : this.opts.fileUpload,
            uploadFields : this.opts.uploadFields,
            success : $.proxy(this.fileCallback, this),
            error : $.proxy(function(canCreateDiscussions, s) {
              this.callback("fileUploadError", s);
            }, this),
            uploadParam : this.opts.fileUploadParam
          });
        }
        this.uploadInit("redactor_file", {
          auto : true,
          url : this.opts.fileUpload,
          success : $.proxy(this.fileCallback, this),
          error : $.proxy(function(canCreateDiscussions, s) {
            this.callback("fileUploadError", s);
          }, this)
        });
      }, this);
      this.modalInit(this.opts.curLang.file, this.opts.modal_file, 500, callback);
    },
    fileCallback : function(json) {
      if (this.selectionRestore(), json !== false) {
        var text = $("#redactor_filename").val();
        if ("" === text) {
          text = json.filename;
        }
        /** @type {string} */
        var i = '<a href="' + json.filelink + '" id="filelink-marker">' + text + "</a>";
        if (this.browser("webkit") && this.window.chrome) {
          /** @type {string} */
          i = i + "&nbsp;";
        }
        this.execCommand("inserthtml", i, false);
        var person = $(this.$editor.find("a#filelink-marker"));
        if (0 != person.size()) {
          person.removeAttr("id");
        } else {
          /** @type {boolean} */
          person = false;
        }
        this.sync();
        this.callback("fileUpload", person, json);
      }
      this.modalClose();
    },
    imageShow : function() {
      this.selectionSave();
      var callback = $.proxy(function() {
        if (this.opts.imageGetJson ? $.getJSON(this.opts.imageGetJson, $.proxy(function(arrayOfOptions) {
          var folders = {};
          /** @type {number} */
          var z = 0;
          $.each(arrayOfOptions, $.proxy(function(canCreateDiscussions, val) {
            if ("undefined" != typeof val.folder) {
              z++;
              folders[val.folder] = z;
            }
          }, this));
          /** @type {boolean} */
          var folderclass = false;
          if ($.each(arrayOfOptions, $.proxy(function(canCreateDiscussions, val) {
            /** @type {string} */
            var thumbtitle = "";
            if ("undefined" != typeof val.title) {
              thumbtitle = val.title;
            }
            /** @type {number} */
            var folderkey = 0;
            if (!($.isEmptyObject(folders) || "undefined" == typeof val.folder)) {
              folderkey = folders[val.folder];
              if (folderclass === false) {
                /** @type {string} */
                folderclass = ".redactorfolder" + folderkey;
              }
            }
            var commandBtn = $('<img src="' + val.thumb + '" class="redactorfolder redactorfolder' + folderkey + '" rel="' + val.image + '" title="' + thumbtitle + '" />');
            $("#redactor_image_box").append(commandBtn);
            $(commandBtn).click($.proxy(this.imageThumbClick, this));
          }, this)), !$.isEmptyObject(folders)) {
            $(".redactorfolder").hide();
            $(folderclass).show();
            /**
             * @param {!Event} jEvent
             * @return {undefined}
             */
            var display_fields = function(jEvent) {
              $(".redactorfolder").hide();
              $(".redactorfolder" + $(jEvent.target).val()).show();
            };
            var a = $('<select id="redactor_image_box_select">');
            $.each(folders, function(canCreateDiscussions, i) {
              a.append($('<option value="' + i + '">' + canCreateDiscussions + "</option>"));
            });
            $("#redactor_image_box").before(a);
            a.change(display_fields);
          }
        }, this)) : $("#redactor_tabs").find("a").eq(1).remove(), this.opts.imageUpload || this.opts.s3) {
          if (!(this.isMobile() || this.opts.s3 !== false)) {
            if ($("#redactor_file").length) {
              this.draguploadInit("#redactor_file", {
                url : this.opts.imageUpload,
                uploadFields : this.opts.uploadFields,
                success : $.proxy(this.imageCallback, this),
                error : $.proxy(function(canCreateDiscussions, s) {
                  this.callback("imageUploadError", s);
                }, this),
                uploadParam : this.opts.imageUploadParam
              });
            }
          }
          if (this.opts.s3 === false) {
            this.uploadInit("redactor_file", {
              auto : true,
              url : this.opts.imageUpload,
              success : $.proxy(this.imageCallback, this),
              error : $.proxy(function(canCreateDiscussions, s) {
                this.callback("imageUploadError", s);
              }, this)
            });
          } else {
            $("#redactor_file").on("change.redactor", $.proxy(this.s3handleFileSelect, this));
          }
        } else {
          if ($(".redactor_tab").hide(), this.opts.imageGetJson) {
            var currentHeadersAnchor = $("#redactor_tabs").find("a");
            currentHeadersAnchor.eq(0).remove();
            currentHeadersAnchor.eq(1).addClass("redactor_tabs_act");
            $("#redactor_tab2").show();
          } else {
            $("#redactor_tabs").remove();
            $("#redactor_tab3").show();
          }
        }
        $("#redactor_upload_btn").click($.proxy(this.imageCallbackLink, this));
        if (!(this.opts.imageUpload || this.opts.imageGetJson)) {
          setTimeout(function() {
            $("#redactor_file_link").focus();
          }, 200);
        }
      }, this);
      this.modalInit(this.opts.curLang.image, this.opts.modal_image, 610, callback);
    },
    imageEdit : function(element) {
      /** @type {!Object} */
      var $el = element;
      var imgLoaded = $el.parent().parent();
      var callback = $.proxy(function() {
        $("#redactor_file_alt").val($el.attr("alt"));
        $("#redactor_image_edit_src").attr("href", $el.attr("src"));
        $("#redactor_form_image_align").val($el.css("float"));
        if ("A" === $(imgLoaded).get(0).tagName) {
          $("#redactor_file_link").val($(imgLoaded).attr("href"));
          if ("_blank" == $(imgLoaded).attr("target")) {
            $("#redactor_link_blank").prop("checked", true);
          }
        }
        $("#redactor_image_delete_btn").click($.proxy(function() {
          this.imageRemove($el);
        }, this));
        $("#redactorSaveBtn").click($.proxy(function() {
          this.imageSave($el);
        }, this));
      }, this);
      this.modalInit(this.opts.curLang.edit, this.opts.modal_image_edit, 380, callback);
    },
    imageRemove : function(input) {
      var previousElement = $(input).parent();
      $(input).remove();
      if (previousElement.length && "P" === previousElement[0].tagName) {
        this.$editor.focus();
        this.selectionStart(previousElement);
      }
      this.callback("imageDelete", input);
      this.modalClose();
      this.sync();
    },
    imageSave : function(el) {
      var li = $(el);
      var $el = li.parent();
      li.attr("alt", $("#redactor_file_alt").val());
      var anchorX = $("#redactor_form_image_align").val();
      if ("left" === anchorX) {
        li.css({
          "float" : "left",
          margin : "0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin + " 0"
        });
      } else {
        if ("right" === anchorX) {
          li.css({
            "float" : "right",
            margin : "0 0 " + this.opts.imageFloatMargin + " " + this.opts.imageFloatMargin
          });
        } else {
          var $parent = li.closest("#redactor-image-box");
          if (0 != $parent.size()) {
            $parent.css({
              "float" : "",
              margin : ""
            });
          }
          li.css({
            "float" : "",
            margin : ""
          });
        }
      }
      var value = $.trim($("#redactor_file_link").val());
      if ("" !== value) {
        /** @type {boolean} */
        var n = false;
        if ($("#redactor_link_blank").prop("checked") && (n = true), "A" !== $el.get(0).tagName) {
          var label = $('<a href="' + value + '">' + this.outerHtml(el) + "</a>");
          if (n) {
            label.attr("target", "_blank");
          }
          li.replaceWith(label);
        } else {
          $el.attr("href", value);
          if (n) {
            $el.attr("target", "_blank");
          } else {
            $el.removeAttr("target");
          }
        }
      } else {
        if ("A" === $el.get(0).tagName) {
          $el.replaceWith(this.outerHtml(el));
        }
      }
      this.modalClose();
      this.observeImages();
      this.sync();
    },
    imageResizeHide : function(e) {
      if (e !== false && 0 != $(e.target).parent().size() && "redactor-image-box" === $(e.target).parent()[0].id) {
        return false;
      }
      var wrapper = this.$editor.find("#redactor-image-box");
      if (0 == wrapper.size()) {
        return false;
      }
      this.$editor.find("#redactor-image-editter, #redactor-image-resizer").remove();
      var margin = wrapper[0].style.margin;
      if ("0px" != margin) {
        wrapper.find("img").css("margin", margin);
        wrapper.css("margin", "");
      }
      wrapper.find("img").css("opacity", "");
      wrapper.replaceWith(function() {
        return $(this).contents();
      });
      $(document).off("click.redactor-image-resize-hide");
      this.$editor.off("click.redactor-image-resize-hide");
      this.$editor.off("keydown.redactor-image-delete");
      this.sync();
    },
    imageResize : function(callback) {
      var el = $(callback);
      el.on("mousedown", $.proxy(function() {
        this.imageResizeHide(false);
      }, this));
      el.on("dragstart", $.proxy(function() {
        this.$editor.on("drop.redactor-image-inside-drop", $.proxy(function() {
          setTimeout($.proxy(function() {
            this.observeImages();
            this.$editor.off("drop.redactor-image-inside-drop");
            this.sync();
          }, this), 1);
        }, this));
      }, this));
      el.on("click", $.proxy(function(canCreateDiscussions) {
        if (0 != this.$editor.find("#redactor-image-box").size()) {
          return false;
        }
        var s;
        var o;
        /** @type {number} */
        var scale = el.width() / el.height();
        /** @type {number} */
        var MIN_DISTANCE = 20;
        var controlEl = this.imageResizeControls(el);
        /** @type {boolean} */
        var l = false;
        controlEl.on("mousedown", function(event) {
          /** @type {boolean} */
          l = true;
          event.preventDefault();
          /** @type {number} */
          scale = el.width() / el.height();
          /** @type {number} */
          s = Math.round(event.pageX - el.eq(0).offset().left);
          /** @type {number} */
          o = Math.round(event.pageY - el.eq(0).offset().top);
        });
        $(this.document.body).on("mousemove", $.proxy(function(event) {
          if (l) {
            /** @type {number} */
            var px = (Math.round(event.pageX - el.eq(0).offset().left) - s, Math.round(event.pageY - el.eq(0).offset().top) - o);
            var imgMaxHeight = el.height();
            /** @type {number} */
            var cloneH = parseInt(imgMaxHeight, 10) + px;
            /** @type {number} */
            var d = Math.round(cloneH * scale);
            if (d > MIN_DISTANCE) {
              el.width(d);
              if (100 > d) {
                this.imageEditter.css({
                  marginTop : "-7px",
                  marginLeft : "-13px",
                  fontSize : "9px",
                  padding : "3px 5px"
                });
              } else {
                this.imageEditter.css({
                  marginTop : "-11px",
                  marginLeft : "-18px",
                  fontSize : "11px",
                  padding : "7px 10px"
                });
              }
            }
            /** @type {number} */
            s = Math.round(event.pageX - el.eq(0).offset().left);
            /** @type {number} */
            o = Math.round(event.pageY - el.eq(0).offset().top);
            this.sync();
          }
        }, this)).on("mouseup", function() {
          /** @type {boolean} */
          l = false;
        });
        this.$editor.on("keydown.redactor-image-delete", $.proxy(function(event) {
          var keyCode = event.which;
          if (this.keyCode.BACKSPACE == keyCode || this.keyCode.DELETE == keyCode) {
            this.imageResizeHide(false);
            this.imageRemove(el);
          }
        }, this));
        $(document).on("click.redactor-image-resize-hide", $.proxy(this.imageResizeHide, this));
        this.$editor.on("click.redactor-image-resize-hide", $.proxy(this.imageResizeHide, this));
      }, this));
    },
    imageResizeControls : function(node) {
      var content = $('<span id="redactor-image-box" data-redactor="verified">');
      content.css({
        position : "relative",
        display : "inline-block",
        lineHeight : 0,
        outline : "1px dashed rgba(0, 0, 0, .6)",
        "float" : node.css("float")
      });
      content.attr("contenteditable", false);
      var margin = node[0].style.margin;
      if ("0px" != margin) {
        content.css("margin", margin);
        node.css("margin", "");
      }
      node.css("opacity", .5).after(content);
      this.imageEditter = $('<span id="redactor-image-editter" data-redactor="verified">' + this.opts.curLang.edit + "</span>");
      this.imageEditter.css({
        position : "absolute",
        zIndex : 2,
        top : "50%",
        left : "50%",
        marginTop : "-11px",
        marginLeft : "-18px",
        lineHeight : 1,
        backgroundColor : "#000",
        color : "#fff",
        fontSize : "11px",
        padding : "7px 10px",
        cursor : "pointer"
      });
      this.imageEditter.attr("contenteditable", false);
      this.imageEditter.on("click", $.proxy(function() {
        this.imageEdit(node);
      }, this));
      content.append(this.imageEditter);
      var element = $('<span id="redactor-image-resizer" data-redactor="verified"></span>');
      return element.css({
        position : "absolute",
        zIndex : 2,
        lineHeight : 1,
        cursor : "nw-resize",
        bottom : "-4px",
        right : "-5px",
        border : "1px solid #fff",
        backgroundColor : "#000",
        width : "8px",
        height : "8px"
      }), element.attr("contenteditable", false), content.append(element), content.append(node), element;
    },
    imageThumbClick : function(jEvent) {
      /** @type {string} */
      var falseySection = '<img id="image-marker" src="' + $(jEvent.target).attr("rel") + '" alt="' + $(jEvent.target).attr("title") + '" />';
      if (this.opts.paragraphy) {
        /** @type {string} */
        falseySection = "<p>" + falseySection + "</p>";
      }
      this.imageInsert(falseySection, true);
    },
    imageCallbackLink : function() {
      var otherNames = $("#redactor_file_link").val();
      if ("" !== otherNames) {
        /** @type {string} */
        var falseySection = '<img id="image-marker" src="' + otherNames + '" />';
        if (this.opts.linebreaks === false) {
          /** @type {string} */
          falseySection = "<p>" + falseySection + "</p>";
        }
        this.imageInsert(falseySection, true);
      } else {
        this.modalClose();
      }
    },
    imageCallback : function(line) {
      this.imageInsert(line);
    },
    imageInsert : function(data, defer_sort) {
      if (this.selectionRestore(), data !== false) {
        /** @type {string} */
        var html = "";
        if (defer_sort !== true) {
          /** @type {string} */
          html = '<img id="image-marker" src="' + data.filelink + '" />';
          if (this.opts.paragraphy) {
            /** @type {string} */
            html = "<p>" + html + "</p>";
          }
        } else {
          /** @type {string} */
          html = data;
        }
        this.execCommand("inserthtml", html, false);
        var focused = $(this.$editor.find("img#image-marker"));
        if (focused.length) {
          focused.removeAttr("id");
        } else {
          /** @type {boolean} */
          focused = false;
        }
        this.sync();
        if (defer_sort !== true) {
          this.callback("imageUpload", focused, data);
        }
      }
      this.modalClose();
      this.observeImages();
    },
    modalTemplatesInit : function() {
      $.extend(this.opts, {
        modal_file : String() + '<section><div id="redactor-progress" class="redactor-progress redactor-progress-striped" style="display: none;"><div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div></div><form id="redactorUploadFileForm" method="post" action="" enctype="multipart/form-data"><label>' + this.opts.curLang.filename + '</label><input type="text" id="redactor_filename" class="redactor_input" /><div style="margin-top: 7px;"><input type="file" id="redactor_file" name="' + 
        this.opts.fileUploadParam + '" class="btn btn-file btn-default" /></div></form></section>',
        modal_image_edit : String() + "<section><label>" + this.opts.curLang.title + '</label><input id="redactor_file_alt" class="redactor_input" /><label>' + this.opts.curLang.link + '</label><input id="redactor_file_link" class="redactor_input" /><label><input type="checkbox" id="redactor_link_blank"> ' + this.opts.curLang.link_new_tab + "</label><label>" + this.opts.curLang.image_position + '</label><select id="redactor_form_image_align"><option value="none">' + this.opts.curLang.none + '</option><option value="left">' + 
        this.opts.curLang.left + '</option><option value="right">' + this.opts.curLang.right + '</option></select></section><footer><button id="redactor_image_delete_btn" class="redactor_modal_btn redactor_modal_delete_btn">' + this.opts.curLang._delete + '</button>&nbsp;&nbsp;&nbsp;<button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button><input type="button" name="save" class="redactor_modal_btn redactor_modal_action_btn" id="redactorSaveBtn" value="' + 
        this.opts.curLang.save + '" /></footer>',
        modal_image : String() + '<section><div id="redactor_tabs"><a href="#" class="redactor_tabs_act">' + this.opts.curLang.upload + '</a><a href="#">' + this.opts.curLang.choose + '</a><a href="#">' + this.opts.curLang.link + '</a></div><div id="redactor-progress" class="redactor-progress redactor-progress-striped" style="display: none;"><div id="redactor-progress-bar" class="redactor-progress-bar" style="width: 100%;"></div></div><form id="redactorInsertImageForm" method="post" action="" enctype="multipart/form-data"><div id="redactor_tab1" class="redactor_tab"><input type="file" id="redactor_file" name="' + 
        this.opts.imageUploadParam + '" class="btn btn-file btn-default" /></div><div id="redactor_tab2" class="redactor_tab" style="display: none;"><div id="redactor_image_box"></div></div></form><div id="redactor_tab3" class="redactor_tab" style="display: none;"><label>' + this.opts.curLang.image_web_link + '</label><input type="text" name="redactor_file_link" id="redactor_file_link" class="redactor_input"  /></div></section><footer><button class="redactor_modal_btn redactor_btn_modal_close">' + 
        this.opts.curLang.cancel + '</button><input type="button" name="upload" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_upload_btn" value="' + this.opts.curLang.insert + '" /></footer>',
        modal_link : String() + '<section><form id="redactorInsertLinkForm" method="post" action=""><div id="redactor_tabs"><a href="#" class="redactor_tabs_act">URL</a><a href="#">Email</a><a href="#">' + this.opts.curLang.anchor + '</a></div><input type="hidden" id="redactor_tab_selected" value="1" /><div class="redactor_tab" id="redactor_tab1"><label>URL</label><input type="text" id="redactor_link_url" class="redactor_input"  /><label>' + this.opts.curLang.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_url_text" /><label><input type="checkbox" id="redactor_link_blank"> ' + 
        this.opts.curLang.link_new_tab + '</label></div><div class="redactor_tab" id="redactor_tab2" style="display: none;"><label>Email</label><input type="text" id="redactor_link_mailto" class="redactor_input" /><label>' + this.opts.curLang.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_mailto_text" /></div><div class="redactor_tab" id="redactor_tab3" style="display: none;"><label>' + this.opts.curLang.anchor + '</label><input type="text" class="redactor_input" id="redactor_link_anchor"  /><label>' + 
        this.opts.curLang.text + '</label><input type="text" class="redactor_input redactor_link_text" id="redactor_link_anchor_text" /></div></form></section><footer><button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button><input type="button" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_link_btn" value="' + this.opts.curLang.insert + '" /></footer>',
        modal_table : String() + "<section><label>" + this.opts.curLang.rows + '</label><input type="text" size="5" value="2" id="redactor_table_rows" /><label>' + this.opts.curLang.columns + '</label><input type="text" size="5" value="3" id="redactor_table_columns" /></section><footer><button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button><input type="button" name="upload" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_table_btn" value="' + 
        this.opts.curLang.insert + '" /></footer>',
        modal_video : String() + '<section><form id="redactorInsertVideoForm"><label>' + this.opts.curLang.video_html_code + '</label><textarea id="redactor_insert_video_area" style="width: 99%; height: 160px;"></textarea></form></section><footer><button class="redactor_modal_btn redactor_btn_modal_close">' + this.opts.curLang.cancel + '</button><input type="button" class="redactor_modal_btn redactor_modal_action_btn" id="redactor_insert_video_btn" value="' + this.opts.curLang.insert + '" /></footer>'
      });
    },
    modalInit : function(content, title, width, callback) {
      var $ctrlHolder = $("#redactor_modal_overlay");
      if (!$ctrlHolder.length) {
        this.$overlay = $ctrlHolder = $('<div id="redactor_modal_overlay" style="display: none;"></div>');
        $("body").prepend(this.$overlay);
      }
      if (this.opts.modalOverlay) {
        $ctrlHolder.show().on("click", $.proxy(this.modalClose, this));
      }
      var element = $("#redactor_modal");
      if (!element.length) {
        this.$modal = element = $('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close">&times;</div><header id="redactor_modal_header"></header><div id="redactor_modal_inner"></div></div>');
        $("body").append(this.$modal);
      }
      $("#redactor_modal_close").on("click", $.proxy(this.modalClose, this));
      this.hdlModalClose = $.proxy(function(event) {
        return event.keyCode === this.keyCode.ESC ? (this.modalClose(), false) : void 0;
      }, this);
      $(document).keyup(this.hdlModalClose);
      this.$editor.keyup(this.hdlModalClose);
      /** @type {boolean} */
      this.modalcontent = false;
      if (0 == title.indexOf("#")) {
        this.modalcontent = $(title);
        $("#redactor_modal_inner").empty().append(this.modalcontent.html());
        this.modalcontent.html("");
      } else {
        $("#redactor_modal_inner").empty().append(title);
      }
      element.find("#redactor_modal_header").html(content);
      if ("undefined" != typeof $.fn.draggable) {
        element.draggable({
          handle : "#redactor_modal_header"
        });
        element.find("#redactor_modal_header").css("cursor", "move");
      }
      var n = $("#redactor_tabs");
      if (n.length) {
        var pn2 = this;
        n.find("a").each(function(i, excludeEl) {
          i++;
          $(excludeEl).on("click", function(event) {
            if (event.preventDefault(), n.find("a").removeClass("redactor_tabs_act"), $(this).addClass("redactor_tabs_act"), $(".redactor_tab").hide(), $("#redactor_tab" + i).show(), $("#redactor_tab_selected").val(i), pn2.isMobile() === false) {
              var s = element.outerHeight();
              element.css("margin-top", "-" + (s + 10) / 2 + "px");
            }
          });
        });
      }
      element.find(".redactor_btn_modal_close").on("click", $.proxy(this.modalClose, this));
      if (this.opts.autoresize === true) {
        this.saveModalScroll = this.document.body.scrollTop;
      } else {
        this.saveModalScroll = this.$editor.scrollTop();
      }
      if (this.isMobile() === false) {
        element.css({
          position : "fixed",
          top : "-2000px",
          left : "50%",
          width : width + "px",
          marginLeft : "-" + (width + 60) / 2 + "px"
        }).show();
        this.modalSaveBodyOveflow = $(document.body).css("overflow");
        $(document.body).css("overflow", "hidden");
      } else {
        element.css({
          position : "fixed",
          width : "100%",
          height : "100%",
          top : "0",
          left : "0",
          margin : "0",
          minHeight : "300px"
        }).show();
      }
      if ("function" == typeof callback) {
        callback();
      }
      if (this.isMobile() === false) {
        setTimeout(function() {
          var t = element.outerHeight();
          element.css({
            top : "50%",
            height : "auto",
            minHeight : "auto",
            marginTop : "-" + (t + 10) / 2 + "px"
          });
        }, 10);
      }
    },
    modalClose : function() {
      return $("#redactor_modal_close").off("click", this.modalClose), $("#redactor_modal").fadeOut("fast", $.proxy(function() {
        var e = $("#redactor_modal_inner");
        if (this.modalcontent !== false) {
          this.modalcontent.html(e.html());
          /** @type {boolean} */
          this.modalcontent = false;
        }
        e.html("");
        if (this.opts.modalOverlay) {
          $("#redactor_modal_overlay").hide().off("click", this.modalClose);
        }
        $(document).unbind("keyup", this.hdlModalClose);
        this.$editor.unbind("keyup", this.hdlModalClose);
        this.selectionRestore();
        if (this.opts.autoresize && this.saveModalScroll) {
          $(this.document.body).scrollTop(this.saveModalScroll);
        } else {
          if (this.opts.autoresize === false && this.saveModalScroll) {
            this.$editor.scrollTop(this.saveModalScroll);
          }
        }
      }, this)), this.isMobile() === false && $(document.body).css("overflow", this.modalSaveBodyOveflow ? this.modalSaveBodyOveflow : "visible"), false;
    },
    modalSetTab : function(i) {
      $(".redactor_tab").hide();
      $("#redactor_tabs").find("a").removeClass("redactor_tabs_act").eq(i - 1).addClass("redactor_tabs_act");
      $("#redactor_tab" + i).show();
    },
    s3handleFileSelect : function(event) {
      var e;
      var f = event.target.files;
      /** @type {number} */
      var i = 0;
      for (; e = f[i]; i++) {
        this.s3uploadFile(e);
      }
    },
    s3uploadFile : function(ast) {
      this.s3executeOnSignedUrl(ast, $.proxy(function(vEventMessage) {
        this.s3uploadToS3(ast, vEventMessage);
      }, this));
    },
    s3executeOnSignedUrl : function(val, cb) {
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      xhr.open("GET", this.opts.s3 + "?name=" + val.name + "&type=" + val.type, true);
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
      /**
       * @param {?} isTimeout
       * @return {undefined}
       */
      xhr.onreadystatechange = function(isTimeout) {
        if (4 == this.readyState && 200 == this.status) {
          $("#redactor-progress").fadeIn();
          cb(decodeURIComponent(this.responseText));
        } else {
          if (4 == this.readyState) {
            200 != this.status;
          }
        }
      };
      xhr.send();
    },
    s3createCORSRequest : function(method, url) {
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      return "withCredentials" in xhr ? xhr.open(method, url, true) : "undefined" != typeof XDomainRequest ? (xhr = new XDomainRequest, xhr.open(method, url)) : xhr = null, xhr;
    },
    s3uploadToS3 : function(request, uri) {
      var xhr = this.s3createCORSRequest("PUT", uri);
      if (xhr) {
        xhr.onload = $.proxy(function() {
          if (200 == xhr.status) {
            $("#redactor-progress, #redactor-progress-drag").hide();
            var e = uri.split("?");
            if (!e[0]) {
              return false;
            }
            this.selectionRestore();
            /** @type {string} */
            var tagName = "";
            /** @type {string} */
            tagName = '<img id="image-marker" src="' + e[0] + '" />';
            if (this.opts.paragraphy) {
              /** @type {string} */
              tagName = "<p>" + tagName + "</p>";
            }
            this.execCommand("inserthtml", tagName, false);
            var focused = $(this.$editor.find("img#image-marker"));
            if (focused.length) {
              focused.removeAttr("id");
            } else {
              /** @type {boolean} */
              focused = false;
            }
            this.sync();
            this.callback("imageUpload", focused, false);
            this.modalClose();
            this.observeImages();
          }
        }, this);
        /**
         * @return {undefined}
         */
        xhr.onerror = function() {
        };
        /**
         * @param {?} nAll
         * @return {undefined}
         */
        xhr.upload.onprogress = function(nAll) {
        };
        xhr.setRequestHeader("Content-Type", request.type);
        xhr.setRequestHeader("x-amz-acl", "public-read");
        xhr.send(request);
      }
    },
    uploadInit : function(element, options) {
      this.uploadOptions = {
        url : false,
        success : false,
        error : false,
        start : false,
        trigger : false,
        auto : false,
        input : false
      };
      $.extend(this.uploadOptions, options);
      var elem = $("#" + element);
      if (elem.length && "INPUT" === elem[0].tagName) {
        this.uploadOptions.input = elem;
        this.el = $(elem[0].form);
      } else {
        this.el = elem;
      }
      this.element_action = this.el.attr("action");
      if (this.uploadOptions.auto) {
        $(this.uploadOptions.input).change($.proxy(function(primaryTxHex) {
          this.el.submit(function(canCreateDiscussions) {
            return false;
          });
          this.uploadSubmit(primaryTxHex);
        }, this));
      } else {
        if (this.uploadOptions.trigger) {
          $("#" + this.uploadOptions.trigger).click($.proxy(this.uploadSubmit, this));
        }
      }
    },
    uploadSubmit : function(primaryTxHex) {
      $("#redactor-progress").fadeIn();
      this.uploadForm(this.element, this.uploadFrame());
    },
    uploadFrame : function() {
      /** @type {string} */
      this.id = "f" + Math.floor(99999 * Math.random());
      var e = this.document.createElement("div");
      /** @type {string} */
      var i = '<iframe style="display:none" id="' + this.id + '" name="' + this.id + '"></iframe>';
      return e.innerHTML = i, $(e).appendTo("body"), this.uploadOptions.start && this.uploadOptions.start(), $("#" + this.id).load($.proxy(this.uploadLoaded, this)), this.id;
    },
    uploadForm : function(f, name) {
      if (this.uploadOptions.input) {
        /** @type {string} */
        var formId = "redactorUploadForm" + this.id;
        /** @type {string} */
        var fileId = "redactorUploadFile" + this.id;
        this.form = $('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + name + '" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data" />');
        if (this.opts.uploadFields !== false && "object" == typeof this.opts.uploadFields) {
          $.each(this.opts.uploadFields, $.proxy(function(newPrinter, i) {
            if (null != i && 0 === i.toString().indexOf("#")) {
              i = $(i).val();
            }
            var linkCont = $("<input/>", {
              type : "hidden",
              name : newPrinter,
              value : i
            });
            $(this.form).append(linkCont);
          }, this));
        }
        var oldElement = this.uploadOptions.input;
        var modalHtml = $(oldElement).clone();
        $(oldElement).attr("id", fileId).before(modalHtml).appendTo(this.form);
        $(this.form).css("position", "absolute").css("top", "-2000px").css("left", "-2000px").appendTo("body");
        this.form.submit();
      } else {
        f.attr("target", name).attr("method", "POST").attr("enctype", "multipart/form-data").attr("action", this.uploadOptions.url);
        this.element.submit();
      }
    },
    uploadLoaded : function() {
      var options;
      var frame = $("#" + this.id)[0];
      if (options = frame.contentDocument ? frame.contentDocument : frame.contentWindow ? frame.contentWindow.document : window.frames[this.id].document, this.uploadOptions.success) {
        if ($("#redactor-progress").hide(), "undefined" != typeof options) {
          var bStr = options.body.innerHTML;
          var storage = bStr.match(/\{(.|\n)*\}/)[0];
          storage = storage.replace(/^\[/, "");
          storage = storage.replace(/\]$/, "");
          var json = $.parseJSON(storage);
          if ("undefined" == typeof json.error) {
            this.uploadOptions.success(json);
          } else {
            this.uploadOptions.error(this, json);
            this.modalClose();
          }
        } else {
          this.modalClose();
          alert("Upload failed!");
        }
      }
      this.el.attr("action", this.element_action);
      this.el.attr("target", "");
    },
    draguploadInit : function(element, i) {
      return this.draguploadOptions = $.extend({
        url : false,
        success : false,
        error : false,
        preview : false,
        uploadFields : false,
        text : this.opts.curLang.drop_file_here,
        atext : this.opts.curLang.or_choose,
        uploadParam : false
      }, i), void 0 === window.FormData ? false : (this.droparea = $('<div class="redactor_droparea"></div>'), this.dropareabox = $('<div class="redactor_dropareabox">' + this.draguploadOptions.text + "</div>"), this.dropalternative = $('<div class="redactor_dropalternative">' + this.draguploadOptions.atext + "</div>"), this.droparea.append(this.dropareabox), $(element).before(this.droparea), $(element).before(this.dropalternative), this.dropareabox.on("dragover", $.proxy(function() {
        return this.draguploadOndrag();
      }, this)), this.dropareabox.on("dragleave", $.proxy(function() {
        return this.draguploadOndragleave();
      }, this)), void(this.dropareabox.get(0).ondrop = $.proxy(function(event) {
        event.preventDefault();
        this.dropareabox.removeClass("hover").addClass("drop");
        this.dragUploadAjax(this.draguploadOptions.url, event.dataTransfer.files[0], false, false, false, this.draguploadOptions.uploadParam);
      }, this)));
    },
    dragUploadAjax : function(r, i, name, target, obj, a) {
      if (!name) {
        var myXhr = $.ajaxSettings.xhr();
        if (myXhr.upload) {
          myXhr.upload.addEventListener("progress", $.proxy(this.uploadProgress, this), false);
        }
        $.ajaxSetup({
          xhr : function() {
            return myXhr;
          }
        });
      }
      /** @type {!FormData} */
      var f = new FormData;
      if (a !== false) {
        f.append(a, i);
      } else {
        f.append("file", i);
      }
      if (this.opts.uploadFields !== false && "object" == typeof this.opts.uploadFields) {
        $.each(this.opts.uploadFields, $.proxy(function(e, i) {
          if (null != i && 0 === i.toString().indexOf("#")) {
            i = $(i).val();
          }
          f.append(e, i);
        }, this));
      }
      $.ajax({
        url : r,
        dataType : "html",
        data : f,
        cache : false,
        contentType : false,
        processData : false,
        type : "POST",
        success : $.proxy(function(str) {
          str = str.replace(/^\[/, "");
          str = str.replace(/\]$/, "");
          var json = "string" == typeof str ? $.parseJSON(str) : str;
          if (name) {
            target.fadeOut("slow", function() {
              $(this).remove();
            });
            var $image = $("<img>");
            $image.attr("src", json.filelink).attr("id", "drag-image-marker");
            this.insertNodeToCaretPositionFromPoint(obj, $image[0]);
            var focused = $(this.$editor.find("img#drag-image-marker"));
            if (focused.length) {
              focused.removeAttr("id");
            } else {
              /** @type {boolean} */
              focused = false;
            }
            this.sync();
            this.observeImages();
            if (focused) {
              this.callback("imageUpload", focused, json);
            }
            if ("undefined" != typeof json.error) {
              this.callback("imageUploadError", json);
            }
          } else {
            if ("undefined" == typeof json.error) {
              this.draguploadOptions.success(json);
            } else {
              this.draguploadOptions.error(this, json);
              this.draguploadOptions.success(false);
            }
          }
        }, this)
      });
    },
    draguploadOndrag : function() {
      return this.dropareabox.addClass("hover"), false;
    },
    draguploadOndragleave : function() {
      return this.dropareabox.removeClass("hover"), false;
    },
    uploadProgress : function(data, id) {
      var deletedFilepath = data.loaded ? parseInt(data.loaded / data.total * 100, 10) : data;
      this.dropareabox.text("Loading " + deletedFilepath + "% " + (id || ""));
    },
    isMobile : function() {
      return /(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent);
    },
    normalize : function(s) {
      return "undefined" == typeof s ? 0 : parseInt(s.replace("px", ""), 10);
    },
    outerHtml : function(element) {
      return $("<div>").append($(element).eq(0).clone()).html();
    },
    isString : function(val) {
      return "[object String]" == Object.prototype.toString.call(val);
    },
    isEmpty : function(line) {
      return line = line.replace(/&#x200b;|<br>|<br\/>|&nbsp;/gi, ""), line = line.replace(/\s/g, ""), line = line.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, ""), "" == line;
    },
    browser : function(browser) {
      /** @type {string} */
      var ua = navigator.userAgent.toLowerCase();
      /** @type {!Array<string>} */
      var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return "version" == browser ? match[2] : "webkit" == browser ? "chrome" == match[1] || "webkit" == match[1] : match[1] == browser;
    },
    oldIE : function() {
      return this.browser("msie") && parseInt(this.browser("version"), 10) < 9 ? true : false;
    },
    getFragmentHtml : function(fragment) {
      var e = fragment.cloneNode(true);
      var op = this.document.createElement("div");
      return op.appendChild(e), op.innerHTML;
    },
    extractContent : function() {
      var dt;
      var e = this.$editor[0];
      var frag = this.document.createDocumentFragment();
      for (; dt = e.firstChild;) {
        frag.appendChild(dt);
      }
      return frag;
    },
    isParentRedactor : function(container) {
      return container ? this.opts.iframe ? container : 0 == $(container).parents("div.redactor_editor").length || $(container).hasClass("redactor_editor") ? false : container : false;
    },
    currentOrParentIs : function(tag) {
      var node = this.getParent();
      var el = this.getCurrent();
      return node && node.tagName === tag ? node : el && el.tagName === tag ? el : false;
    },
    isEndOfElement : function() {
      var textarea = this.getBlock();
      var caretOffset = this.getCaretOffset(textarea);
      var params = $.trim($(textarea).text()).replace(/\n\r\n/g, "");
      var actual_count = params.length;
      return caretOffset == actual_count ? true : false;
    },
    isFocused : function() {
      var node;
      var selection = this.getSelection();
      return selection && selection.rangeCount && selection.rangeCount > 0 && (node = selection.getRangeAt(0).startContainer), node ? this.opts.iframe ? this.getCaretOffsetRange().equals() ? !this.$editor.is(node) : true : 0 != $(node).closest("div.redactor_editor").length : false;
    },
    removeEmptyAttr : function(n, elem) {
      if ("" == $(n).attr(elem)) {
        $(n).removeAttr(elem);
      }
    },
    removeFromArrayByValue : function(cols, c) {
      /** @type {null} */
      var i = null;
      for (; -1 !== (i = cols.indexOf(c));) {
        cols.splice(i, 1);
      }
      return cols;
    }
  };
  m.prototype.init.prototype = m.prototype;
  /**
   * @param {string} dependency
   * @param {!Object} key
   * @param {!Object} model
   * @param {!Object} comp
   * @param {?} width
   * @return {undefined}
   */
  $.Redactor.fn.formatLinkify = function(dependency, key, model, comp, width) {
    /** @type {!RegExp} */
    var a = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g;
    /** @type {!RegExp} */
    var val = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g;
    /** @type {!RegExp} */
    var field = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/gi;
    /** @type {!RegExp} */
    var c = /^.*(youtu.be\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&\?]*).*/;
    /** @type {!RegExp} */
    var startParen = /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    var h = (this.$editor ? this.$editor.get(0) : this).childNodes;
    var i = h.length;
    for (; i--;) {
      var n = h[i];
      if (3 === n.nodeType) {
        var value = n.nodeValue;
        if (comp && value) {
          /** @type {string} */
          var w76 = '<iframe width="500" height="281" src="';
          /** @type {string} */
          var e = '" frameborder="0" allowfullscreen></iframe>';
          if (value.match(c)) {
            value = value.replace(c, w76 + "//www.youtube.com/embed/$2" + e);
            $(n).after(value).remove();
          } else {
            if (value.match(startParen)) {
              value = value.replace(startParen, w76 + "//player.vimeo.com/video/$2" + e);
              $(n).after(value).remove();
            }
          }
        }
        if (model && value && value.match(field) && (value = value.replace(field, '<img src="$1">'), $(n).after(value).remove()), key && value && (value.match(a) || value.match(val))) {
          var label = value.match(a) || value.match(val);
          label = label[0];
          if (label.length > width) {
            label = label.substring(0, width) + "...";
          }
          value = value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(a, '$1<a href="' + dependency + '$2">' + label + "</a>$3").replace(val, '$1<a href="$2">' + label + "</a>$5");
          $(n).after(value).remove();
        }
      } else {
        if (!(1 !== n.nodeType || /^(a|button|textarea)$/i.test(n.tagName))) {
          $.Redactor.fn.formatLinkify.call(n, dependency, key, model, comp, width);
        }
      }
    }
  };
}(jQuery), !RedactorPlugins) {
  var RedactorPlugins = {};
}
RedactorPlugins.fontcolor = {
  init : function() {
    /** @type {!Array} */
    var colors = ["#ffffff", "#000000", "#eeece1", "#1f497d", "#4f81bd", "#c0504d", "#9bbb59", "#8064a2", "#4bacc6", "#f79646", "#ffff00", "#f2f2f2", "#7f7f7f", "#ddd9c3", "#c6d9f0", "#dbe5f1", "#f2dcdb", "#ebf1dd", "#e5e0ec", "#dbeef3", "#fdeada", "#fff2ca", "#d8d8d8", "#595959", "#c4bd97", "#8db3e2", "#b8cce4", "#e5b9b7", "#d7e3bc", "#ccc1d9", "#b7dde8", "#fbd5b5", "#ffe694", "#bfbfbf", "#3f3f3f", "#938953", "#548dd4", "#95b3d7", "#d99694", "#c3d69b", "#b2a2c7", "#b7dde8", "#fac08f", "#f2c314", 
    "#a5a5a5", "#262626", "#494429", "#17365d", "#366092", "#953734", "#76923c", "#5f497a", "#92cddc", "#e36c09", "#c09100", "#7f7f7f", "#0c0c0c", "#1d1b10", "#0f243e", "#244061", "#632423", "#4f6128", "#3f3151", "#31859b", "#974806", "#7f6000"];
    /** @type {!Array} */
    var buttons = ["backcolor", "fontcolor"];
    /** @type {number} */
    var j = 0;
    for (; 2 > j; j++) {
      var name = buttons[j];
      var $dropdown = jQuery('<div class="redactor_dropdown redactor_dropdown_box_' + name + '" style="display: none; width: 210px;">');
      this.pickerBuild($dropdown, name, colors);
      $(this.$toolbar).append($dropdown);
      this.buttonAddFirst(name, this.opts.curLang[name], jQuery.proxy(function(derTrigger, canCreateDiscussions, i, e) {
        this.dropdownShow(e, derTrigger);
      }, this));
    }
  },
  pickerBuild : function($dropdown, name, colors) {
    /** @type {string} */
    var rule = "color";
    if ("backcolor" === name) {
      /** @type {string} */
      rule = "background-color";
    }
    var _self = this;
    /**
     * @param {!Event} e
     * @return {undefined}
     */
    var onSwatch = function(e) {
      e.preventDefault();
      var $target = jQuery(this);
      _self.pickerSet($target.data("rule"), $target.attr("rel"));
    };
    var i = colors.length;
    /** @type {number} */
    var j = 0;
    for (; i > j; j++) {
      var color = colors[j];
      var $swatch = jQuery('<a rel="' + color + '" data-rule="' + rule + '" href="#" style="float: left; font-size: 0; border: 2px solid #fff; padding: 0; margin: 0; width: 15px; height: 15px;"></a>');
      $swatch.css("background-color", color);
      $dropdown.append($swatch);
      $swatch.on("click", onSwatch);
    }
    var toggle = jQuery('<a href="#" style="display: block; clear: both; padding: 4px 0; font-size: 11px; line-height: 1;"></a>').html(this.opts.curLang.none).on("click", function(event) {
      event.preventDefault();
      _self.pickerSet(rule, false);
    });
    $dropdown.append(toggle);
  },
  pickerSet : function(rule, type) {
    this.bufferSet();
    this.$editor.focus();
    this.inlineRemoveStyle(rule);
    if (type !== false) {
      this.inlineSetStyle(rule, type);
    }
    if (this.opts.air) {
      this.$air.fadeOut(100);
    }
    this.sync();
  }
};
/**
 * @param {string} bin
 * @param {number} size
 * @return {?}
 */
function chunkData(bin, size) {
  /** @type {!Array} */
  var results = [];
  var length = bin.length;
  /** @type {number} */
  var i = 0;
  for (; i < length; i = i + size) {
    if (i + size < length) {
      results.push(bin.substring(i, i + size));
    } else {
      results.push(bin.substring(i, length));
    }
  }
  return results;
}
const get = (doc, key) => {
  return doc.getElementById(key);
};

<!-- start
var uv; 
 
function convert_anjal_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/û/g, "க்ஷ");
uv = uv.replace(/û‘/g, "க்ஷா");
uv = uv.replace(/û’/g, "க்ஷி");
uv = uv.replace(/û“/g, "க்ஷீ");
uv = uv.replace(/û”/g, "க்ஷு");
uv = uv.replace(/û•/g, "க்ஷூ");
uv = uv.replace(/—û/g, "க்ஷெ");
uv = uv.replace(/þû/g, "க்ஷே");
uv = uv.replace(/—û‘/g, "க்ஷொ");
uv = uv.replace(/÷ñõ/g, "க்ஷோ");
uv = uv.replace(/—ûã/g, "க்ஷௌ");
uv = uv.replace(/û/g, "க்ஷை");
uv = uv.replace(/ü/g, "க்ஷ்");

uv = uv.replace(/—óó/g, "ஜௌ");
uv = uv.replace(/þó‘/g, "ஜோ");
uv = uv.replace(/—ó‘/g, "ஜொ");
uv = uv.replace(/ó‘/g, "ஜா");
uv = uv.replace(/ó/g, "ஜி");
uv = uv.replace(/ó’/g, "ஜி");
uv = uv.replace(/ó/g, "ஜீ");
uv = uv.replace(/ó”/g, "ஜு");
uv = uv.replace(/ó•/g, "ஜூ");
uv = uv.replace(/—ó/g, "ஜெ");
uv = uv.replace(/þó/g, "ஜே");
uv = uv.replace(/€ó/g, "ஜை");
uv = uv.replace(/ô/g, "ஜ்");
uv = uv.replace(/ó/g, "ஜ");///////////--

uv = uv.replace(/—ã/g, "கௌ");
uv = uv.replace(/þ‘/g, "கோ");
uv = uv.replace(/—‘/g, "கொ");
uv = uv.replace(/‘/g, "கா");
uv = uv.replace(/Ž/g, "கி");
uv = uv.replace(//g, "கீ");
uv = uv.replace(//g, "கு");
uv = uv.replace(/˜/g, "கூ");
uv = uv.replace(/—/g, "கெ");
uv = uv.replace(/þ/g, "கே");
uv = uv.replace(/€/g, "கை");
uv = uv.replace(//g, "க்");
uv = uv.replace(/™/g, "க்");
uv = uv.replace(//g, "க");///////////--

uv = uv.replace(/—šã/g, "ஙௌ");
uv = uv.replace(/þš‘/g, "ஙோ");
uv = uv.replace(/—š‘/g, "ஙொ");
uv = uv.replace(/š‘/g, "ஙா");
uv = uv.replace(/š/g, "ஙி");
uv = uv.replace(/š/g, "ஙீ");
uv = uv.replace(/—š/g, "ஙெ");
uv = uv.replace(/þš/g, "ஙே");
uv = uv.replace(/€š/g, "ஙை");
uv = uv.replace(/›/g, "ங்");
uv = uv.replace(/š/g, "ங");///////////--




uv = uv.replace(/—œã/g, "சௌ");
uv = uv.replace(/þœ‘/g, "சோ");
uv = uv.replace(/—œ‘/g, "சொ");
uv = uv.replace(/œ‘/g, "சா");
uv = uv.replace(//g, "சி");
uv = uv.replace(//g, "சீ");
uv = uv.replace(/Ÿ/g, "சு");
uv = uv.replace(/¡/g, "சூ");
uv = uv.replace(/—œ/g, "செ");
uv = uv.replace(/þœ/g, "சே");
uv = uv.replace(/€œ/g, "சை");
uv = uv.replace(/¢/g, "ச்");
uv = uv.replace(/œ/g, "ச");///////////--
uv = uv.replace(/œ/g, "ச");///////////--
uv = uv.replace(/—£ã/g, "ஞௌ");
uv = uv.replace(/þ£‘/g, "ஞோ");
uv = uv.replace(/—£‘/g, "ஞொ");
uv = uv.replace(/£‘/g, "ஞா");
uv = uv.replace(/£/g, "ஞி");
uv = uv.replace(/£/g, "ஞீ");
uv = uv.replace(/—£/g, "ஞெ");
uv = uv.replace(/þ£/g, "ஞே");
uv = uv.replace(/€£/g, "ஞை");
uv = uv.replace(/¤/g, "ஞ்");
uv = uv.replace(/£/g, "ஞ");///////////--

uv = uv.replace(/—¥ã/g, "டௌ");
uv = uv.replace(/þ¥‘/g, "டோ");
uv = uv.replace(/—¥‘/g, "டொ");
uv = uv.replace(/¥‘/g, "டா");
uv = uv.replace(/¦/g, "டி");
uv = uv.replace(/§/g, "டீ");
uv = uv.replace(/¨/g, "டு");
uv = uv.replace(/©/g, "டூ");
uv = uv.replace(/—¥/g, "டெ");
uv = uv.replace(/þ¥/g, "டே");
uv = uv.replace(/€¥/g, "டை");
uv = uv.replace(/ª/g, "ட்");
uv = uv.replace(/¥/g, "ட");///////////--

uv = uv.replace(/—«ã/g, "ணௌ");
uv = uv.replace(/þ«‘/g, "ணோ");
uv = uv.replace(/—«‘/g, "ணொ");
uv = uv.replace(/«‘/g, "ணா");
uv = uv.replace(/¬/g, "ணி");
uv = uv.replace(/−/g, "ணீ");

uv = uv.replace(/®–/g, "ணூ");
uv = uv.replace(/®/g, "ணு");

uv = uv.replace(/—«/g, "ணெ");
uv = uv.replace(/þ«/g, "ணே");
uv = uv.replace(/€«/g, "ணை");
uv = uv.replace(/¯/g, "ண்");	
uv = uv.replace(/«/g, "ண");///////////--
uv = uv.replace(/—°ã/g, "தௌ");
uv = uv.replace(/þ°‘/g, "தோ");
uv = uv.replace(/—°‘/g, "தொ");
uv = uv.replace(/°‘/g, "தா");
uv = uv.replace(/±/g, "தி");
uv = uv.replace(/²/g, "தீ");
uv = uv.replace(/³–/g, "தூ");
uv = uv.replace(/³/g, "து");

uv = uv.replace(/—°/g, "தெ");
uv = uv.replace(/þ°/g, "தே");
uv = uv.replace(/€°/g, "தை");
uv = uv.replace(/´/g, "த்");
uv = uv.replace(/°/g, "த");///////////--


uv = uv.replace(/—µã/g, "நௌ");
uv = uv.replace(/þµ‘/g, "நோ");
uv = uv.replace(/—µ‘/g, "நொ");
uv = uv.replace(/µ‘/g, "நா");
uv = uv.replace(/¶/g, "நி");
uv = uv.replace(/ÿ/g, "நீ");

uv = uv.replace(/¸–/g, "நூ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/—µ/g, "நெ");
uv = uv.replace(/þµ/g, "நே");
uv = uv.replace(/€µ/g, "நை");
uv = uv.replace(/¹/g, "ந்");
uv = uv.replace(/µ/g, "ந");///////////--


uv = uv.replace(/—îã/g, "னௌ");
uv = uv.replace(/þî‘/g, "னோ");
uv = uv.replace(/—î‘/g, "னொ");
uv = uv.replace(/î‘/g, "னா");
uv = uv.replace(/ï/g, "னி");
uv = uv.replace(/ð/g, "னீ");

uv = uv.replace(/ñ–/g, "னூ");
uv = uv.replace(/ñ/g, "னு");
uv = uv.replace(/—î/g, "னெ");
uv = uv.replace(/þî/g, "னே");
uv = uv.replace(/€î/g, "னை");
uv = uv.replace(/ò/g, "ன்");
uv = uv.replace(/î/g, "ன");///////////--


uv = uv.replace(/—ºã/g, "பௌ");
uv = uv.replace(/þº‘/g, "போ");
uv = uv.replace(/—º‘/g, "பொ");
uv = uv.replace(/º‘/g, "பா");

uv = uv.replace(/»/g, "பி");
uv = uv.replace(/¼/g, "பீ");
uv = uv.replace(/½/g, "பு");
uv = uv.replace(/¾/g, "பூ");
uv = uv.replace(/—º/g, "பெ");
uv = uv.replace(/þº/g, "பே");
uv = uv.replace(/€º/g, "பை");
uv = uv.replace(/¿/g, "ப்");
uv = uv.replace(/º/g, "ப");///////////--

uv = uv.replace(/—Àã/g, "மௌ");
uv = uv.replace(/þÀ‘/g, "மோ");
uv = uv.replace(/—À‘/g, "மொ");
uv = uv.replace(/À‘/g, "மா");
uv = uv.replace(/Á/g, "மி");
uv = uv.replace(/Â/g, "மீ");
uv = uv.replace(/Ã/g, "மு");
uv = uv.replace(/Ä/g, "மூ");
uv = uv.replace(/—À/g, "மெ");
uv = uv.replace(/þÀ/g, "மே");
uv = uv.replace(/€À/g, "மை");
uv = uv.replace(/Å/g, "ம்");
uv = uv.replace(/À/g, "ம");///////////--
uv = uv.replace(/—Æã/g, "யௌ");
uv = uv.replace(/þÆ‘/g, "யோ");
uv = uv.replace(/—Æ‘/g, "யொ");
uv = uv.replace(/Æ‘/g, "யா");
uv = uv.replace(/Ç/g, "யி");
uv = uv.replace(/È/g, "யீ");
uv = uv.replace(/É/g, "யு");
uv = uv.replace(/Ê/g, "யூ");
uv = uv.replace(/—Æ/g, "யெ");
uv = uv.replace(/þÆ/g, "யே");
uv = uv.replace(/€Æ/g, "யை");
uv = uv.replace(/Ë/g, "ய்");
uv = uv.replace(/Æ/g, "ய");///////////--


uv = uv.replace(/—Ìã/g, "ரௌ");
uv = uv.replace(/þÌ‘/g, "ரோ");
uv = uv.replace(/—Ì‘/g, "ரொ");
uv = uv.replace(/Ì‘/g, "ரா");
uv = uv.replace(/Í/g, "ரி");
uv = uv.replace(/Î/g, "ரீ");
uv = uv.replace(/Ï/g, "ரு");
uv = uv.replace(/Ð/g, "ரூ");
uv = uv.replace(/—Ì/g, "ரெ");
uv = uv.replace(/þÌ/g, "ரே");
uv = uv.replace(/€Ì/g, "ரை");
uv = uv.replace(/Ñ/g, "ர்");
uv = uv.replace(/Ì/g, "ர");///////////--



uv = uv.replace(/—Òã/g, "லௌ");
uv = uv.replace(/þÒ‘/g, "லோ");
uv = uv.replace(/—Ò‘/g, "லொ");
uv = uv.replace(/Ò‘/g, "லா");
uv = uv.replace(/Ó/g, "லி");
uv = uv.replace(/Ô/g, "லீ");
uv = uv.replace(/Õ–/g, "லூ");
uv = uv.replace(/Õ/g, "லு");

uv = uv.replace(/—Ò/g, "லெ");
uv = uv.replace(/þÒ/g, "லே");
uv = uv.replace(/€Ò/g, "லை");
uv = uv.replace(/Ö/g, "ல்");
uv = uv.replace(/Ò/g, "ல");///////////--


uv = uv.replace(/—ãã/g, "ளௌ");
uv = uv.replace(/þã‘/g, "ளோ");
uv = uv.replace(/—ã‘/g, "ளொ");
uv = uv.replace(/ã‘/g, "ளா");
uv = uv.replace(/ä/g, "ளி");
uv = uv.replace(/å/g, "ளீ");
uv = uv.replace(/æ/g, "ளு");
uv = uv.replace(/ç/g, "ளூ");
uv = uv.replace(/—ã/g, "ளெ");
uv = uv.replace(/þã/g, "ளே");
uv = uv.replace(/€ã/g, "ளை");
uv = uv.replace(/è/g, "ள்");
uv = uv.replace(/ã/g, "ள");///////////--
uv = uv.replace(/€×/g, "வை");
uv = uv.replace(/—××/g, "வௌ");
uv = uv.replace(/þ×‘/g, "வோ");
uv = uv.replace(/—×‘/g, "வொ");
uv = uv.replace(/×‘/g, "வா");
uv = uv.replace(/Ø/g, "வி");
uv = uv.replace(/Ù/g, "வீ");
uv = uv.replace(/Ú/g, "வு");
uv = uv.replace(/Û/g, "வூ");
uv = uv.replace(/—×/g, "வெ");
uv = uv.replace(/þ×/g, "வே");

uv = uv.replace(/Ü/g, "வ்");
uv = uv.replace(/×/g, "வ");///////////--

uv = uv.replace(/—éé/g, "றௌ");
uv = uv.replace(/þé‘/g, "றோ");
uv = uv.replace(/—é‘/g, "றொ");
uv = uv.replace(/é‘/g, "றா");
uv = uv.replace(/ê/g, "றி");
uv = uv.replace(/ë/g, "றீ");
uv = uv.replace(/ì–/g, "றூ");
uv = uv.replace(/ì/g, "று");

uv = uv.replace(/—é/g, "றெ");
uv = uv.replace(/þé/g, "றே");
uv = uv.replace(/€é/g, "றை");
uv = uv.replace(/í/g, "ற்");
uv = uv.replace(/é/g, "ற");///////////--


uv = uv.replace(/—ùù/g, "ஹௌ");
uv = uv.replace(/þù‘/g, "ஹோ");
uv = uv.replace(/—ù‘/g, "ஹொ");
uv = uv.replace(/ù‘/g, "ஹா");
uv = uv.replace(/ù/g, "ஹி");
uv = uv.replace(/ù/g, "ஹீ");
uv = uv.replace(/ù”/g, "ஹு");
uv = uv.replace(/ù•/g, "ஹூ");
uv = uv.replace(/—ù/g, "ஹெ");
uv = uv.replace(/þù/g, "ஹே");
uv = uv.replace(/€ù/g, "ஹை");
uv = uv.replace(/ú/g, "ஹ்");
uv = uv.replace(/ù/g, "ஹ");///////////--


uv = uv.replace(/—ÝÝ/g, "ழௌ");
uv = uv.replace(/þÝ‘/g, "ழோ");
uv = uv.replace(/—Ý‘/g, "ழொ");
uv = uv.replace(/Ý‘/g, "ழா");
uv = uv.replace(/Þ/g, "ழி");
uv = uv.replace(/ß/g, "ழீ");
uv = uv.replace(/à/g, "ழு");
uv = uv.replace(/á/g, "ழூ");
uv = uv.replace(/—Ý/g, "ழெ");
uv = uv.replace(/þÝ/g, "ழே");
uv = uv.replace(/€Ý/g, "ழை");
uv = uv.replace(/â/g, "ழ்");
uv = uv.replace(/Ý/g, "ழ");///////////--

uv = uv.replace(/öåå/g, "ஷௌ");
uv = uv.replace(/÷åõ/g, "ஷோ");
uv = uv.replace(/öåõ/g, "ஷொ");
uv = uv.replace(/åõ/g, "ஷா");
uv = uv.replace(/æ/g, "ஷி");
uv = uv.replace(/ç/g, "ஷீ");
uv = uv.replace(/åú/g, "ஷு");
uv = uv.replace(/åü/g, "ஷூ");
uv = uv.replace(/öå/g, "ஷெ");
uv = uv.replace(/÷å/g, "ஷே");
uv = uv.replace(/øå/g, "ஷை");
uv = uv.replace(/è/g, "ஷ்");
uv = uv.replace(/å/g, "ஷ");///////////////////////////////////

uv = uv.replace(/—õõ/g, "ஷௌ");
uv = uv.replace(/þõ‘/g, "ஷோ");
uv = uv.replace(/—õ‘/g, "ஷொ");
uv = uv.replace(/õ‘/g, "ஷா");
uv = uv.replace(/õ/g, "ஷி");
uv = uv.replace(/õ/g, "ஷீ");
uv = uv.replace(/—õ/g, "ஷெ");
uv = uv.replace(/þõ/g, "ஷே");
uv = uv.replace(/€õ/g, "ஷை");
uv = uv.replace(/ö/g, "ஷ்");
uv = uv.replace(/õ/g, "ஷ");///////////--

uv = uv.replace(/—÷÷/g, "ஸௌ");
uv = uv.replace(/þ÷‘/g, "ஸோ");
uv = uv.replace(/—÷‘/g, "ஸொ");
uv = uv.replace(/÷‘/g, "ஸா");
uv = uv.replace(/÷/g, "ஸி");
uv = uv.replace(/÷/g, "ஸீ");
uv = uv.replace(/—÷/g, "ஸெ");
uv = uv.replace(/þ÷/g, "ஸே");
uv = uv.replace(/€÷/g, "ஸை");
uv = uv.replace(/ø/g, "ஸ்");
uv = uv.replace(/÷/g, "ஸ");///////////--



uv = uv.replace(//g, "அ");
uv = uv.replace(/‚/g, "ஆ");

uv = uv.replace(/„/g, "ஈ");
uv = uv.replace(/…/g, "உ");
uv = uv.replace(/†/g, "ஊ");
uv = uv.replace(/‡/g, "எ");
uv = uv.replace(/ˆ/g, "ஏ");
uv = uv.replace(/‰/g, "ஐ");
uv = uv.replace(/Š/g, "ஒ")
uv = uv.replace(/‹/g, "ஓ");
uv = uv.replace(/Šã/g, "ஔ");


uv = uv.replace(/Œ/g, "ஃ");
uv = uv.replace(/ƒ/g, "இ");
uv = uv.replace(/ý/g, "ஸ்ரீ");



document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_bamini_2_unicode() {
uv = document.getElementById('source').value;

uv = uv.replace(/sp/g, "ளி");
uv = uv.replace(/hp/g, "ரி");
uv = uv.replace(/hP/g, "ரீ");
uv = uv.replace(/uP/g, "ரீ");
uv = uv.replace(/u;/g, "ர்");
uv = uv.replace(/h;/g, "ர்");
uv = uv.replace(/H/g, "ர்");
uv = uv.replace(/\+/g, "10");


uv = uv.replace(/nfs/g, "கௌ");
uv = uv.replace(/Nfh/g, "கோ");
uv = uv.replace(/nfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/fp/g, "கி");
uv = uv.replace(/fP/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/\$/g, "கூ");
uv = uv.replace(/nf/g, "கெ");
uv = uv.replace(/Nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/f;/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/nqs/g, "ஙௌ");
uv = uv.replace(/Nqh/g, "ஙோ");
uv = uv.replace(/nqh/g, "ஙொ");
uv = uv.replace(/qh/g, "ஙா");
uv = uv.replace(/qp/g, "ஙி");
uv = uv.replace(/qP/g, "ஙீ");
uv = uv.replace(/nq/g, "ஙெ");
uv = uv.replace(/Nq/g, "ஙே");
uv = uv.replace(/iq/g, "ஙை");
uv = uv.replace(/q;/g, "ங்");
uv = uv.replace(/q/g, "ங");///

uv = uv.replace(/nrs/g, "சௌ");
uv = uv.replace(/Nrh/g, "சோ");
uv = uv.replace(/nrh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/rp/g, "சி");
uv = uv.replace(/rP/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/#/g, "சூ");
uv = uv.replace(/nr/g, "செ");
uv = uv.replace(/Nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/r;/g, "ச்");
uv = uv.replace(/r/g, "ச");//



uv = uv.replace(/n\[s/g, "ஜௌ");
uv = uv.replace(/N\[h/g, "ஜோ");
uv = uv.replace(/n\[h/g, "ஜொ");
uv = uv.replace(/\[h/g, "ஜா");
uv = uv.replace(/\[p/g, "ஜி");
uv = uv.replace(/\[P/g, "ஜீ");
uv = uv.replace(/\[{/g, "ஜு");
uv = uv.replace(/\[_/g, "ஜூ");//

uv = uv.replace(/n\[/g, "ஜெ");
uv = uv.replace(/N\[/g, "ஜே");
uv = uv.replace(/i\[/g, "ஜை");
uv = uv.replace(/\[;/g, "ஜ்");
uv = uv.replace(/\[/g, "ஜ");//





uv = uv.replace(/nQs/g, "ஞௌ");
uv = uv.replace(/NQh/g, "ஞோ");
uv = uv.replace(/nQh/g, "ஞொ");
uv = uv.replace(/Qh/g, "ஞா");
uv = uv.replace(/Qp/g, "ஞி");
uv = uv.replace(/QP/g, "ஞீ");
uv = uv.replace(/nQ/g, "ஞெ");
uv = uv.replace(/NQ/g, "ஞே");
uv = uv.replace(/iQ/g, "ஞை");
uv = uv.replace(/Q;/g, "ஞ்");
uv = uv.replace(/Q/g, "ஞ");///

uv = uv.replace(/nls/g, "டௌ");
uv = uv.replace(/Nlh/g, "டோ");
uv = uv.replace(/nlh/g, "டொ");
uv = uv.replace(/lp/g, "டி");
uv = uv.replace(/lP/g, "டீ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/b/g, "டி");
uv = uv.replace(/B/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\^/g, "டூ");
uv = uv.replace(/nl/g, "டெ");
uv = uv.replace(/Nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/l;/g, "ட்");
uv = uv.replace(/l/g, "ட");////

uv = uv.replace(/nzs/g, "ணௌ");
uv = uv.replace(/Nzh/g, "ணோ");
uv = uv.replace(/nzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/zp/g, "ணி");
uv = uv.replace(/zP/g, "ணீ");


uv = uv.replace(/Zh/g, "ணூ");
uv = uv.replace(/Z}/g, "ணூ");

uv = uv.replace(/nz/g, "ணெ");
uv = uv.replace(/Nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");


uv = uv.replace(/z;/g, "ண்");
uv = uv.replace(/Z/g, "ணு");
uv = uv.replace(/z/g, "ண");////



uv = uv.replace(/njs/g, "தௌ");
uv = uv.replace(/Njh/g, "தோ");
uv = uv.replace(/njh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/jp/g, "தி");
uv = uv.replace(/jP/g, "தீ");
uv = uv.replace(/Jh/g, "தூ");
uv = uv.replace(/Jh/g, "தூ");
uv = uv.replace(/J}/g, "தூ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/nj/g, "தெ");
uv = uv.replace(/Nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/j;/g, "த்");
uv = uv.replace(/j/g, "த");//

uv = uv.replace(/nes/g, "நௌ");
uv = uv.replace(/Neh/g, "நோ");
uv = uv.replace(/neh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ep/g, "நி");
uv = uv.replace(/eP/g, "நீ");
uv = uv.replace(/E}/g, "நூ");
uv = uv.replace(/Eh/g, "நூ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/ne/g, "நெ");
uv = uv.replace(/Ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/e;/g, "ந்");
uv = uv.replace(/e/g, "ந");//


uv = uv.replace(/nds/g, "னௌ");
uv = uv.replace(/Ndh/g, "னோ");
uv = uv.replace(/ndh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/dp/g, "னி");
uv = uv.replace(/dP/g, "னீ");
uv = uv.replace(/D}/g, "னூ");

uv = uv.replace(/Dh/g, "னூ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/nd/g, "னெ");
uv = uv.replace(/Nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/d;/g, "ன்");
uv = uv.replace(/d/g, "ன");//

uv = uv.replace(/ngs/g, "பௌ");
uv = uv.replace(/Ngh/g, "போ");
uv = uv.replace(/ngh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/gp/g, "பி");
uv = uv.replace(/gP/g, "பீ");


uv = uv.replace(/G/g, "பு");
uv = uv.replace(/ng/g, "பெ");
uv = uv.replace(/Ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/g;/g, "ப்");
uv = uv.replace(/g/g, "ப");//

uv = uv.replace(/nks/g, "மௌ");
uv = uv.replace(/Nkh/g, "மோ");
uv = uv.replace(/nkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/kp/g, "மி");
uv = uv.replace(/kP/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/%/g, "மூ");
uv = uv.replace(/nk/g, "மெ");
uv = uv.replace(/Nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/k;/g, "ம்");
uv = uv.replace(/k/g, "ம");//


uv = uv.replace(/nas/g, "யௌ");
uv = uv.replace(/Nah/g, "யோ");
uv = uv.replace(/nah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/ap/g, "யி");
uv = uv.replace(/aP/g, "யீ");
uv = uv.replace(/A/g, "யு");
uv = uv.replace(/A+/g, "யூ");
uv = uv.replace(/na/g, "யெ");
uv = uv.replace(/Na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/a;/g, "ய்");
uv = uv.replace(/a/g, "ய");//

uv = uv.replace(/nus/g, "ரௌ");
uv = uv.replace(/Nuh/g, "ரோ");
uv = uv.replace(/nuh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/up/g, "ரி");


uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/&/g, "ரூ");
uv = uv.replace(/nu/g, "ரெ");
uv = uv.replace(/Nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");

uv = uv.replace(/u/g, "ர");//

uv = uv.replace(/nys/g, "லௌ");
uv = uv.replace(/Nyh/g, "லோ");
uv = uv.replace(/nyh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/yp/g, "லி");
uv = uv.replace(/yP/g, "லீ");
uv = uv.replace(/Yh/g, "லூ");
uv = uv.replace(/Y}/g, "லூ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/ny/g, "லெ");
uv = uv.replace(/Ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/y;/g, "ல்");
uv = uv.replace(/y/g, "ல");//

uv = uv.replace(/nss/g, "ளௌ");
uv = uv.replace(/Nsh/g, "ளோ");
uv = uv.replace(/nsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");

uv = uv.replace(/sP/g, "ளீ");
uv = uv.replace(/Sh/g, "ளூ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/ns/g, "ளெ");
uv = uv.replace(/Ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/s;/g, "ள்");
uv = uv.replace(/s/g, "ள");//


uv = uv.replace(/ntt/g, "வௌ");
uv = uv.replace(/Nth/g, "வோ");
uv = uv.replace(/nth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/tp/g, "வி");
uv = uv.replace(/tP/g, "வீ");




uv = uv.replace(/nt/g, "வெ");
uv = uv.replace(/Nt/g, "வே");
uv = uv.replace(/it/g, "வை");

uv = uv.replace(/t;/g, "வ்");
uv = uv.replace(/t/g, "வ");//
uv = uv.replace(/noo/g, "ழௌ");
uv = uv.replace(/Noh/g, "ழோ");
uv = uv.replace(/noh/g, "ழொ");
uv = uv.replace(/oh/g, "ழா");
uv = uv.replace(/op/g, "ழி");
uv = uv.replace(/oP/g, "ழீ");
uv = uv.replace(/\*/g, "ழூ");
uv = uv.replace(/O/g, "ழு");
uv = uv.replace(/no/g, "ழெ");
uv = uv.replace(/No/g, "ழே");
uv = uv.replace(/io/g, "ழை");
uv = uv.replace(/o;/g, "ழ்");
uv = uv.replace(/o/g, "ழ");//

uv = uv.replace(/nws/g, "றௌ");
uv = uv.replace(/Nwh/g, "றோ");
uv = uv.replace(/nwh/g, "றொ");
uv = uv.replace(/wh/g, "றா");
uv = uv.replace(/wp/g, "றி");
uv = uv.replace(/wP/g, "றீ");
uv = uv.replace(/Wh/g, "றூ");
uv = uv.replace(/W}/g, "றூ");

uv = uv.replace(/W/g, "று");
uv = uv.replace(/nw/g, "றெ");
uv = uv.replace(/Nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/w;/g, "ற்");
uv = uv.replace(/w/g, "ற");//

uv = uv.replace(/n``/g, "ஹௌ");
uv = uv.replace(/N`h/g, "ஹோ");
uv = uv.replace(/n`h/g, "ஹொ");
uv = uv.replace(/`h/g, "ஹா");
uv = uv.replace(/`p/g, "ஹி");
uv = uv.replace(/`P/g, "ஹீ");

uv = uv.replace(/n`/g, "ஹெ");
uv = uv.replace(/N`/g, "ஹே");
uv = uv.replace(/i`/g, "ஹை");
uv = uv.replace(/`;/g, "ஹ்");
uv = uv.replace(/`/g, "ஹ");//

uv = uv.replace(/n\\s/g, "ஷௌ");
uv = uv.replace(/N\\h/g, "ஷோ");
uv = uv.replace(/n\\h/g, "ஷொ");
uv = uv.replace(/\\h/g, "ஷா");
uv = uv.replace(/\\p/g, "ஷி");
uv = uv.replace(/\\P/g, "ஷீ");

uv = uv.replace(/n\\/g, "ஷெ");
uv = uv.replace(/N\\/g, "ஷே");
uv = uv.replace(/i\\/g, "ஷை");
uv = uv.replace(/\\;/g, "ஷ்");
uv = uv.replace(/\\/g, "ஷ");//


uv = uv.replace(/n]s/g, "ஸௌ");
uv = uv.replace(/N]h/g, "ஸோ");
uv = uv.replace(/n]h/g, "ஸொ");
uv = uv.replace(/]h/g, "ஸா");
uv = uv.replace(/]p/g, "ஸி");
uv = uv.replace(/]P/g, "ஸீ");

uv = uv.replace(/n]/g, "ஸெ");
uv = uv.replace(/N]/g, "ஸே");
uv = uv.replace(/i]/g, "ஸை");
uv = uv.replace(/];/g, "ஸ்");
uv = uv.replace(/]/g, "ஸ");//


uv = uv.replace(/>/g, "ää");
uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");
uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/xs/g, "ஔ");


uv = uv.replace(/\//g, "ஃ");


uv = uv.replace(/,/g, "இ");

uv = uv.replace(/=/g, "ஸ்ரீ");

uv = uv.replace(/>/g, ",");

uv = uv.replace(/T/g, "வு");

uv = uv.replace(/வு10/g, "வூ");
uv = uv.replace(/G\+/g, "பூ");
uv = uv.replace(/பு10/g, "பூ");
uv = uv.replace(/A\+/g, "யூ");
uv = uv.replace(/யு10/g, "யூ");

document.getElementById('source').value=uv;
}
 
function convert_boomi_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/d/g, "க்ஷ");
uv = uv.replace(/d"/g, "க்ஷா");
uv = uv.replace(/õ/g, "க்ஷி");
uv = uv.replace(/ö/g, "க்ஷீ");
uv = uv.replace(/d#/g, "க்ஷு");
uv = uv.replace(/d$/g, "க்ஷூ");
uv = uv.replace(/%d/g, "க்ஷெ");
uv = uv.replace(/&d/g, "க்ஷே");
uv = uv.replace(/%d"/g, "க்ஷொ");
uv = uv.replace(/&d"/g, "க்ஷோ");
uv = uv.replace(/%d\[/g, "க்ஷௌ");
uv = uv.replace(/\+d/g, "க்ஷை");
uv = uv.replace(/ô/g, "க்ஷ்");

uv = uv.replace(/%\^\[/g, "ஜௌ");
uv = uv.replace(/&\^"/g, "ஜோ");
uv = uv.replace(/%\^"/g, "ஜொ");
uv = uv.replace(/\^"/g, "ஜா");
uv = uv.replace(/é/g, "ஜி");
uv = uv.replace(/ê/g, "ஜீ");
uv = uv.replace(/\^#/g, "ஜு");
uv = uv.replace(/\^\$/g, "ஜூ");
uv = uv.replace(/%\^/g, "ஜெ");
uv = uv.replace(/&\^/g, "ஜே");
uv = uv.replace(/\+\^/g, "ஜை");
uv = uv.replace(/è/g, "ஜ்");
uv = uv.replace(/\^/g, "ஜ");

uv = uv.replace(/%L\[/g, "கௌ");
uv = uv.replace(/&L"/g, "கோ");
uv = uv.replace(/%L"/g, "கொ");
uv = uv.replace(/L"/g, "கா");
uv = uv.replace(/g/g, "கி");
uv = uv.replace(/h/g, "கீ");
uv = uv.replace(/j/g, "கு");
uv = uv.replace(/k/g, "கூ");
uv = uv.replace(/%L/g, "கெ");
uv = uv.replace(/&L/g, "கே");
uv = uv.replace(/\+L/g, "கை");
uv = uv.replace(/f/g, "க்");
uv = uv.replace(/L/g, "க");



uv = uv.replace(/%M\[/g, "ஙௌ");
uv = uv.replace(/&M"/g, "ஙோ");
uv = uv.replace(/%M"/g, "ஙொ");
uv = uv.replace(/M"/g, "ஙா");
uv = uv.replace(/m/g, "ஙி");
uv = uv.replace(/p/g, "ஙீ");
uv = uv.replace(/r/g, "ஙு");
uv = uv.replace(/s/g, "ஙூ");
uv = uv.replace(/%M/g, "ஙெ");
uv = uv.replace(/&M/g, "ஙே");
uv = uv.replace(/\+M/g, "ஙை");
uv = uv.replace(/l/g, "ங்");
uv = uv.replace(/M/g, "ங");



uv = uv.replace(/%N\[/g, "சௌ");
uv = uv.replace(/&N"/g, "சோ");
uv = uv.replace(/%N"/g, "சொ");
uv = uv.replace(/N"/g, "சா");
uv = uv.replace(/t/g, "சி");
uv = uv.replace(/u/g, "சீ");
uv = uv.replace(/v/g, "சு");
uv = uv.replace(/w/g, "சூ");
uv = uv.replace(/%N/g, "செ");
uv = uv.replace(/&N/g, "சே");
uv = uv.replace(/\+N/g, "சை");
uv = uv.replace(/o/g, "ச்");
uv = uv.replace(/N/g, "ச");
uv = uv.replace(/%O\[/g, "ஞௌ");
uv = uv.replace(/&O"/g, "ஞோ");
uv = uv.replace(/%O"/g, "ஞொ");
uv = uv.replace(/O"/g, "ஞா");
uv = uv.replace(/y/g, "ஞி");
uv = uv.replace(/z/g, "ஞீ");
uv = uv.replace(/{/g, "ஞு");
uv = uv.replace(/\|/g, "ஞூ");
uv = uv.replace(/%O/g, "ஞெ");
uv = uv.replace(/&O/g, "ஞே");
uv = uv.replace(/\+O/g, "ஞை");
uv = uv.replace(/x/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");



uv = uv.replace(/%P\[/g, "டௌ");
uv = uv.replace(/&P"/g, "டோ");
uv = uv.replace(/%P"/g, "டொ");
uv = uv.replace(/P"/g, "டா");
uv = uv.replace(/~/g, "டி");
uv = uv.replace(/e/g, "டீ");
uv = uv.replace(/i/g, "டு");
uv = uv.replace(/n/g, "டூ");
uv = uv.replace(/%P/g, "டெ");
uv = uv.replace(/&P/g, "டே");
uv = uv.replace(/\+P/g, "டை");
uv = uv.replace(/}/g, "ட்");
uv = uv.replace(/P/g, "ட");



uv = uv.replace(/%Q\[/g, "ணௌ");
uv = uv.replace(/&Q"/g, "ணோ");
uv = uv.replace(/%Q"/g, "ணொ");
uv = uv.replace(/Q"/g, "ணா");
uv = uv.replace(/¢/g, "ணி");
uv = uv.replace(/£/g, "ணீ");
uv = uv.replace(/¤/g, "ணு");
uv = uv.replace(/¥/g, "ணூ");
uv = uv.replace(/%Q/g, "ணெ");
uv = uv.replace(/&Q/g, "ணே");
uv = uv.replace(/\+Q/g, "ணை");
uv = uv.replace(/¡/g, "ண்");
uv = uv.replace(/Q/g, "ண");




uv = uv.replace(/%R\[/g, "தௌ");
uv = uv.replace(/&R"/g, "தோ");
uv = uv.replace(/%R"/g, "தொ");
uv = uv.replace(/R"/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¨/g, "தீ");
uv = uv.replace(/©/g, "து");
uv = uv.replace(/ª/g, "தூ");
uv = uv.replace(/%R/g, "தெ");
uv = uv.replace(/&R/g, "தே");
uv = uv.replace(/\+R/g, "தை");
uv = uv.replace(/¦/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/%S\[/g, "நௌ");
uv = uv.replace(/&S"/g, "நோ");
uv = uv.replace(/%S"/g, "நொ");
uv = uv.replace(/S"/g, "நா");
uv = uv.replace(/¬/g, "நி");
uv = uv.replace(/­/g, "நீ");
uv = uv.replace(/®/g, "நு");
uv = uv.replace(/°/g, "நூ");
uv = uv.replace(/%S/g, "நெ");
uv = uv.replace(/&S/g, "நே");
uv = uv.replace(/\+S/g, "நை");
uv = uv.replace(/«/g, "ந்");
uv = uv.replace(/S/g, "ந");




uv = uv.replace(/%]\[/g, "னௌ");
uv = uv.replace(/&]"/g, "னோ");
uv = uv.replace(/%]"/g, "னொ");
uv = uv.replace(/]"/g, "னா");
uv = uv.replace(/à/g, "னி");
uv = uv.replace(/á/g, "னீ");
uv = uv.replace(/â/g, "னு");
uv = uv.replace(/ç/g, "னூ");
uv = uv.replace(/%]/g, "னெ");
uv = uv.replace(/&]/g, "னே");
uv = uv.replace(/\+]/g, "னை");
uv = uv.replace(/ß/g, "ன்");
uv = uv.replace(/]/g, "ன");



uv = uv.replace(/%T\[/g, "பௌ");
uv = uv.replace(/&T"/g, "போ");
uv = uv.replace(/%T"/g, "பொ");
uv = uv.replace(/T"/g, "பா");
uv = uv.replace(/²/g, "பி");
uv = uv.replace(/³/g, "பீ");
uv = uv.replace(/´/g, "பு");
uv = uv.replace(/µ/g, "பூ");
uv = uv.replace(/%T/g, "பெ");
uv = uv.replace(/&T/g, "பே");
uv = uv.replace(/\+T/g, "பை");
uv = uv.replace(/±/g, "ப்");
uv = uv.replace(/T/g, "ப");




uv = uv.replace(/%U\[/g, "மௌ");
uv = uv.replace(/&U"/g, "மோ");
uv = uv.replace(/%U"/g, "மொ");
uv = uv.replace(/U"/g, "மா");
uv = uv.replace(/·/g, "மி");
uv = uv.replace(/¸/g, "மீ");
uv = uv.replace(/¹/g, "மு");
uv = uv.replace(/º/g, "மூ");
uv = uv.replace(/%U/g, "மெ");
uv = uv.replace(/&U/g, "மே");
uv = uv.replace(/\+U/g, "மை");
uv = uv.replace(/¶/g, "ம்");
uv = uv.replace(/U/g, "ம");




uv = uv.replace(/%V\[/g, "யௌ");
uv = uv.replace(/&V"/g, "யோ");
uv = uv.replace(/%V"/g, "யொ");
uv = uv.replace(/V"/g, "யா");
uv = uv.replace(/¼/g, "யி");
uv = uv.replace(/½/g, "யீ");
uv = uv.replace(/¾/g, "யு");
uv = uv.replace(/¿/g, "யூ");
uv = uv.replace(/%V/g, "யெ");
uv = uv.replace(/&V/g, "யே");
uv = uv.replace(/\+V/g, "யை");
uv = uv.replace(/»/g, "ய்");
uv = uv.replace(/V/g, "ய");

uv = uv.replace(/%W\[/g, "ரௌ");
uv = uv.replace(/&W"/g, "ரோ");
uv = uv.replace(/%W"/g, "ரொ");
uv = uv.replace(/W"/g, "ரா");
uv = uv.replace(/Á/g, "ரி");
uv = uv.replace(/Â/g, "ரீ");
uv = uv.replace(/Ã/g, "ரு");
uv = uv.replace(/Ä/g, "ரூ");
uv = uv.replace(/%W/g, "ரெ");
uv = uv.replace(/&W/g, "ரே");
uv = uv.replace(/\+W/g, "ரை");
uv = uv.replace(/À/g, "ர்");
uv = uv.replace(/W/g, "ர");
uv = uv.replace(/%X\[/g, "லௌ");
uv = uv.replace(/&X"/g, "லோ");
uv = uv.replace(/%X"/g, "லொ");
uv = uv.replace(/X"/g, "லா");
uv = uv.replace(/Æ/g, "லி");
uv = uv.replace(/Ç/g, "லீ");
uv = uv.replace(/È/g, "லு");
uv = uv.replace(/É/g, "லூ");
uv = uv.replace(/%X/g, "லெ");
uv = uv.replace(/&X/g, "லே");
uv = uv.replace(/\+X/g, "லை");
uv = uv.replace(/Å/g, "ல்");
uv = uv.replace(/X/g, "ல");





uv = uv.replace(/%\[\[/g, "ளௌ");
uv = uv.replace(/&\["/g, "ளோ");
uv = uv.replace(/%\["/g, "ளொ");
uv = uv.replace(/\["/g, "ளா");
uv = uv.replace(/Õ/g, "ளி");
uv = uv.replace(/Ö/g, "ளீ");
uv = uv.replace(/Ø/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/%\[/g, "ளெ");
uv = uv.replace(/&\[/g, "ளே");
uv = uv.replace(/\+\[/g, "ளை");
uv = uv.replace(/Ô/g, "ள்");
uv = uv.replace(/\[/g, "ள");



uv = uv.replace(/%Y\[/g, "வௌ");
uv = uv.replace(/&Y"/g, "வோ");
uv = uv.replace(/%Y"/g, "வொ");
uv = uv.replace(/Y"/g, "வா");
uv = uv.replace(/Ë/g, "வி");
uv = uv.replace(/Ì/g, "வீ");
uv = uv.replace(/Í/g, "வு");
uv = uv.replace(/Î/g, "வூ");
uv = uv.replace(/%Y/g, "வெ");
uv = uv.replace(/&Y/g, "வே");
uv = uv.replace(/\+Y/g, "வை");
uv = uv.replace(/Ê/g, "வ்");
uv = uv.replace(/Y/g, "வ");



uv = uv.replace(/%Z\[/g, "ழௌ");
uv = uv.replace(/&Z"/g, "ழோ");
uv = uv.replace(/%Z"/g, "ழொ");
uv = uv.replace(/Z"/g, "ழா");
uv = uv.replace(/Ð/g, "ழி");
uv = uv.replace(/Ñ/g, "ழீ");
uv = uv.replace(/Ò/g, "ழு");
uv = uv.replace(/Ó/g, "ழூ");
uv = uv.replace(/%Z/g, "ழெ");
uv = uv.replace(/&Z/g, "ழே");
uv = uv.replace(/\+Z/g, "ழை");
uv = uv.replace(/Ï/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");

 
uv = uv.replace(/%\\\[/g, "றௌ");
uv = uv.replace(/&\\"/g, "றோ");
uv = uv.replace(/%\\"/g, "றொ");
uv = uv.replace(/\\"/g, "றா");
uv = uv.replace(/Û/g, "றி");
uv = uv.replace(/Ü/g, "றீ");
uv = uv.replace(/Ý/g, "று");
uv = uv.replace(/Þ/g, "றூ");
uv = uv.replace(/%\\/g, "றெ");
uv = uv.replace(/&\\/g, "றே");
uv = uv.replace(/\+\\/g, "றை");
uv = uv.replace(/Ú/g, "ற்");
uv = uv.replace(/\\/g, "ற");





uv = uv.replace(/%a\[/g, "ஹௌ");
uv = uv.replace(/&a"/g, "ஹோ");
uv = uv.replace(/%a"/g, "ஹொ");
uv = uv.replace(/a"/g, "ஹா");
uv = uv.replace(/ì/g, "ஹி");
uv = uv.replace(/í/g, "ஹீ");
uv = uv.replace(/a#/g, "ஹு");
uv = uv.replace(/a$/g, "ஹூ");
uv = uv.replace(/%a/g, "ஹெ");
uv = uv.replace(/&a/g, "ஹே");
uv = uv.replace(/\+a/g, "ஹை");
uv = uv.replace(/ë/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");


uv = uv.replace(/%c\[/g, "ஷௌ");
uv = uv.replace(/&c"/g, "ஷோ");
uv = uv.replace(/%c"/g, "ஷொ");
uv = uv.replace(/c"/g, "ஷா");
uv = uv.replace(/ò/g, "ஷி");
uv = uv.replace(/ó/g, "ஷீ");
uv = uv.replace(/c#/g, "ஷு");
uv = uv.replace(/c$/g, "ஷூ");
uv = uv.replace(/%c/g, "ஷெ");
uv = uv.replace(/&c/g, "ஷே");
uv = uv.replace(/\+c/g, "ஷை");
uv = uv.replace(/ñ/g, "ஷ்");
uv = uv.replace(/c/g, "ஷ");



uv = uv.replace(/%b\[/g, "ஸௌ");
uv = uv.replace(/&b"/g, "ஸோ");
uv = uv.replace(/%b"/g, "ஸொ");
uv = uv.replace(/b"/g, "ஸா");
uv = uv.replace(/ï/g, "ஸி");
uv = uv.replace(/ð/g, "ஸீ");
uv = uv.replace(/b#/g, "ஸு");
uv = uv.replace(/b$/g, "ஸூ");
uv = uv.replace(/%b/g, "ஸெ");
uv = uv.replace(/&b/g, "ஸே");
uv = uv.replace(/\+b/g, "ஸை");
uv = uv.replace(/î/g, "ஸ்");
uv = uv.replace(/b/g, "ஸ");


uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");


uv = uv.replace(/@/g, "ஃ");

uv = uv.replace(/q/g, "ஸ்ரீ");
uv = uv.replace(/å/g, "-")
uv = uv.replace(/æ/g, "-");
uv = uv.replace(/_/g, "_");
uv = uv.replace(/``/g, "\"");

document.tamil_unicode_utf8.destination.value=uv;
} 
 
function convert_dinakaran_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/&/g, "க்ஷ");
uv = uv.replace(/&h/g, "க்ஷா");
uv = uv.replace(/i&/g, "க்ஷை");
uv = uv.replace(/&p/g, "க்ஷி");
uv = uv.replace(/&P/g, "க்ஷீ");
uv = uv.replace(/&%/g, "க்ஷு");
uv = uv.replace(/&\^/g, "க்ஷூ");
uv = uv.replace(/b&/g, "க்ஷெ");
uv = uv.replace(/n&/g, "க்ஷே");
uv = uv.replace(/b&h/g, "க்ஷொ");
uv = uv.replace(/n&h/g, "க்ஷோ");
uv = uv.replace(/b&s/g, "க்ஷௌ");
uv = uv.replace(/&‚/g, "க்ஷ்");
uv = uv.replace(/$\%/g, "ஜு");
uv = uv.replace(/\%/g, "ு");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/\//g, "0000");
uv = uv.replace(/h;/g, "ர்");
uv = uv.replace(/#;/g, "ஷ்");
uv = uv.replace(/z;/g, "ண்");
uv = uv.replace(/J}/g, "தூ");
uv = uv.replace(/b\$/g, "ஜெ");
uv = uv.replace(/b$s/g, "ஜௌ");
uv = uv.replace(/n$h/g, "ஜோ");
uv = uv.replace(/b$h/g, "ஜொ");
uv = uv.replace(/$h/g, "ஜா");
uv = uv.replace(/$p/g, "ஜி");
uv = uv.replace(/$P/g, "ஜீ");

uv = uv.replace(/$\\^/g, "ஜூ");
uv = uv.replace(/n$/g, "ஜே");
uv = uv.replace(/i$/g, "ஜை");
uv = uv.replace(/$;/g, "ஜ்");
uv = uv.replace(/\$/g, "ஜ");

uv = uv.replace(/bfs/g, "கௌ");
uv = uv.replace(/nfh/g, "கோ");
uv = uv.replace(/bfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/fp/g, "கி");
uv = uv.replace(/fP/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/T/g, "கூ");
uv = uv.replace(/bf/g, "கெ");
uv = uv.replace(/nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/f;/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/b's/g, "ஙௌ");
uv = uv.replace(/n'h/g, "ஙோ");
uv = uv.replace(/b'h/g, "ஙொ");
uv = uv.replace(/'h/g, "ஙா");
uv = uv.replace(/'p/g, "ஙி");
uv = uv.replace(/'P/g, "ஙீ");
uv = uv.replace(/b'/g, "ஙெ");
uv = uv.replace(/n'/g, "ஙே");
uv = uv.replace(/i'/g, "ஙை");
uv = uv.replace(/';/g, "ங்");
uv = uv.replace(/'/g, "ங");
uv = uv.replace(/brs/g, "சௌ");
uv = uv.replace(/nrh/g, "சோ");
uv = uv.replace(/brh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/rp/g, "சி");
uv = uv.replace(/rP/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/r{/g, "சூ");
uv = uv.replace(/br/g, "செ");
uv = uv.replace(/nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/r;/g, "ச்");
uv = uv.replace(/r@/g, "ச்");
uv = uv.replace(/r/g, "ச");


uv = uv.replace(/b"s/g, "ஞௌ");
uv = uv.replace(/n"h/g, "ஞோ");
uv = uv.replace(/b"h/g, "ஞொ");
uv = uv.replace(/"h/g, "ஞா");
uv = uv.replace(/"p/g, "ஞி");
uv = uv.replace(/"P/g, "ஞீ");
uv = uv.replace(/b"/g, "ஞெ");
uv = uv.replace(/n"/g, "ஞே");
uv = uv.replace(/i"/g, "ஞை");
uv = uv.replace(/";/g, "ஞ்");
uv = uv.replace(/"/g, "ஞ");

uv = uv.replace(/bls/g, "டௌ");
uv = uv.replace(/nlh/g, "டோ");
uv = uv.replace(/blh/g, "டொ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/o/g, "டி");
uv = uv.replace(/O/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\?/g, "டூ");
uv = uv.replace(/bl/g, "டெ");
uv = uv.replace(/nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/l;/g, "ட்");
uv = uv.replace(/l/g, "ட");

uv = uv.replace(/bzs/g, "ணௌ");
uv = uv.replace(/nzh/g, "ணோ");
uv = uv.replace(/bzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/zp/g, "ணி");
uv = uv.replace(/zP/g, "ணீ");
uv = uv.replace(/q/g, "ணு");
uv = uv.replace(/q}/g, "ணூ");
uv = uv.replace(/bz/g, "ணெ");
uv = uv.replace(/nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");

uv = uv.replace(/z/g, "ண");
uv = uv.replace(/bjs/g, "தௌ");
uv = uv.replace(/njh/g, "தோ");
uv = uv.replace(/bjh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/jp/g, "தி");
uv = uv.replace(/jP/g, "தீ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/bj/g, "தெ");
uv = uv.replace(/nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/j;/g, "த்");
uv = uv.replace(/j/g, "த");

uv = uv.replace(/bes/g, "நௌ");
uv = uv.replace(/neh/g, "நோ");
uv = uv.replace(/beh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ep/g, "நி");
uv = uv.replace(/eP/g, "நீ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/E}/g, "நூ");
uv = uv.replace(/be/g, "நெ");
uv = uv.replace(/ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/e;/g, "ந்");
uv = uv.replace(/e/g, "ந");
uv = uv.replace(/bds/g, "னௌ");
uv = uv.replace(/ndh/g, "னோ");
uv = uv.replace(/bdh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/dp/g, "னி");
uv = uv.replace(/dP/g, "னீ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/D}/g, "னூ");
uv = uv.replace(/bd/g, "னெ");
uv = uv.replace(/nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/d;/g, "ன்");
uv = uv.replace(/d/g, "ன");


uv = uv.replace(/bgs/g, "பௌ");
uv = uv.replace(/ngh/g, "போ");
uv = uv.replace(/bgh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/gp/g, "பி");
uv = uv.replace(/gP/g, "பீ");
uv = uv.replace(/g\[/g, "பு");
uv = uv.replace(/g{/g, "பூ");
uv = uv.replace(/bg/g, "பெ");
uv = uv.replace(/ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/g;/g, "ப்");
uv = uv.replace(/g/g, "ப");
uv = uv.replace(/bks/g, "மௌ");
uv = uv.replace(/nkh/g, "மோ");
uv = uv.replace(/bkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/kp/g, "மி");
uv = uv.replace(/kP/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/\\/g, "மூ");
uv = uv.replace(/bk/g, "மெ");
uv = uv.replace(/nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/k;/g, "ம்");
uv = uv.replace(/k/g, "ம");

uv = uv.replace(/bas/g, "யௌ");
uv = uv.replace(/nah/g, "யோ");
uv = uv.replace(/bah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/ap/g, "யி");
uv = uv.replace(/aP/g, "யீ");
uv = uv.replace(/a\[/g, "யு");
uv = uv.replace(/a{/g, "யூ");
uv = uv.replace(/ba/g, "யெ");
uv = uv.replace(/na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/a;/g, "ய்");
uv = uv.replace(/a/g, "ய");
uv = uv.replace(/bus/g, "ரௌ");
uv = uv.replace(/nuh/g, "ரோ");
uv = uv.replace(/buh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/up/g, "ரி");
uv = uv.replace(/uP/g, "ரீ");
uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/\+/g, "ரூ");
uv = uv.replace(/bu/g, "ரெ");
uv = uv.replace(/nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");
uv = uv.replace(/u;/g, "ர்");

uv = uv.replace(/u/g, "ர");


uv = uv.replace(/bys/g, "லௌ");
uv = uv.replace(/nyh/g, "லோ");
uv = uv.replace(/byh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/yp/g, "லி");
uv = uv.replace(/yP/g, "லீ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/Y}/g, "லூ");
uv = uv.replace(/by/g, "லெ");
uv = uv.replace(/ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/y;/g, "ல்");
uv = uv.replace(/y/g, "ல");

uv = uv.replace(/bss/g, "ளௌ");
uv = uv.replace(/nsh/g, "ளோ");
uv = uv.replace(/bsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");
uv = uv.replace(/sp/g, "ளி");
uv = uv.replace(/sP/g, "ளீ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/\~/g, "ளூ");
uv = uv.replace(/bs/g, "ளெ");
uv = uv.replace(/ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/s;/g, "ள்");
uv = uv.replace(/s/g, "ள");

uv = uv.replace(/btt/g, "வௌ");
uv = uv.replace(/nth/g, "வோ");
uv = uv.replace(/bth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/tp/g, "வி");
uv = uv.replace(/tP/g, "வீ");
uv = uv.replace(/t\[/g, "வு");
uv = uv.replace(/t{/g, "வூ");
uv = uv.replace(/bt/g, "வெ");
uv = uv.replace(/nt/g, "வே");
uv = uv.replace(/it/g, "வை");
uv = uv.replace(/t;/g, "வ்");
uv = uv.replace(/t/g, "வ");


uv = uv.replace(/bww/g, "றௌ");
uv = uv.replace(/nww/g, "றோ");
uv = uv.replace(/bww/g, "றொ");
uv = uv.replace(/ww/g, "றா");
uv = uv.replace(/wp/g, "றி");
uv = uv.replace(/wP/g, "றீ");
uv = uv.replace(/W/g, "று");
uv = uv.replace(/W}/g, "றூ");
uv = uv.replace(/bw/g, "றெ");
uv = uv.replace(/nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/w;/g, "ற்");
uv = uv.replace(/w/g, "ற");


uv = uv.replace(/bQQ/g, "ஹௌ");
uv = uv.replace(/nQQ/g, "ஹோ");
uv = uv.replace(/bQQ/g, "ஹொ");
uv = uv.replace(/QQ/g, "ஹா");
uv = uv.replace(/Qp/g, "ஹி");
uv = uv.replace(/QP/g, "ஹீ");
uv = uv.replace(/Q%/g, "ஹு");
uv = uv.replace(/Q\^/g, "ஹூ");
uv = uv.replace(/bQ/g, "ஹெ");
uv = uv.replace(/nQ/g, "ஹே");
uv = uv.replace(/iQ/g, "ஹை");
uv = uv.replace(/Q;/g, "ஹ்");
uv = uv.replace(/Q/g, "ஹ");


uv = uv.replace(/t/g, "வ");

uv = uv.replace(/bHH/g, "ழௌ");
uv = uv.replace(/nHh/g, "ழோ");
uv = uv.replace(/bHh/g, "ழொ");
uv = uv.replace(/Hh/g, "ழா");
uv = uv.replace(/Hp/g, "ழி");
uv = uv.replace(/HP/g, "ழீ");
uv = uv.replace(/G/g, "ழு");
uv = uv.replace(/\=/g, "ழூ");
uv = uv.replace(/bH/g, "ழெ");
uv = uv.replace(/nH/g, "ழே");
uv = uv.replace(/iH/g, "ழை");
uv = uv.replace(/H;/g, "ழ்");
uv = uv.replace(/H/g, "ழ");

uv = uv.replace(/öåå/g, "ஷௌ");
uv = uv.replace(/÷åõ/g, "ஷோ");
uv = uv.replace(/öåõ/g, "ஷொ");
uv = uv.replace(/åõ/g, "ஷா");
uv = uv.replace(/æ/g, "ஷி");
uv = uv.replace(/ç/g, "ஷீ");
uv = uv.replace(/åú/g, "ஷு");
uv = uv.replace(/åü/g, "ஷூ");
uv = uv.replace(/öå/g, "ஷெ");
uv = uv.replace(/÷å/g, "ஷே");
uv = uv.replace(/øå/g, "ஷை");
uv = uv.replace(/è/g, "ஷ்");
uv = uv.replace(/å/g, "ஷ");

uv = uv.replace(/b##/g, "ஷௌ");
uv = uv.replace(/n##/g, "ஷோ");
uv = uv.replace(/b##/g, "ஷொ");
uv = uv.replace(/##/g, "ஷா");
uv = uv.replace(/#p/g, "ஷி");
uv = uv.replace(/#P/g, "ஷீ");
uv = uv.replace(/#%/g, "ஷு");
uv = uv.replace(/#^/g, "ஷூ");
uv = uv.replace(/b#/g, "ஷெ");
uv = uv.replace(/n#/g, "ஷே");
uv = uv.replace(/i#/g, "ஷை");

uv = uv.replace(/#/g, "ஷ");

uv = uv.replace(/b!!/g, "ஸௌ");
uv = uv.replace(/n!!/g, "ஸோ");
uv = uv.replace(/b!!/g, "ஸொ");
uv = uv.replace(/!!/g, "ஸா");
uv = uv.replace(/!p/g, "ஸி");
uv = uv.replace(/!P/g, "ஸீ");
uv = uv.replace(/!%/g, "ஸு");
uv = uv.replace(/!^/g, "ஸூ");
uv = uv.replace(/b!/g, "ஸெ");
uv = uv.replace(/n!/g, "ஸே");
uv = uv.replace(/i!/g, "ஸை");
uv = uv.replace(/!;/g, "ஸ்");
uv = uv.replace(/!/g, "ஸ");


uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");

uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/cs/g, "ஔ");


uv = uv.replace(/`/g, "ஃ");
uv = uv.replace(/,/g, "இ");
uv = uv.replace(/\|/g, "ஸ்ரீ");
uv = uv.replace(/ˆ/g, "=");
uv = uv.replace(/‐/g, "-");
uv = uv.replace(/>/g, "?");
uv = uv.replace(/:/g, "்");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/@/g, "்");

uv = uv.replace(/0000/g, ",");

document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_dinamani_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ùb\[/g, "க்ஷௌ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");
uv = uv.replace(/ù_\[/g, "ஜௌ");
uv = uv.replace(/ú_ô/g, "ஜோ");
uv = uv.replace(/ù_ô/g, "ஜொ");
uv = uv.replace(/_ô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/_ý/g, "ஜு");
uv = uv.replace(/_þ/g, "ஜூ");
uv = uv.replace(/ù_/g, "ஜெ");
uv = uv.replace(/ú_/g, "ஜே");
uv = uv.replace(/û_/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");
uv = uv.replace(/_/g, "ஜ");
uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/­/g, "லி");
uv = uv.replace(/#/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/\[ô/g, "ளா");
uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/û\[/g, "ளை");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");
uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");
uv = uv.replace(/ù^\[/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/^ô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/^ý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/û^/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/\^/g, "ஸ");

uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");





uv = uv.replace(/@/g, "ஃ");

uv = uv.replace(/c/g, "ஸ்ரீ");





uv = uv.replace(/ùa\[/g, "ஹௌ");
uv = uv.replace(/úaô/g, "ஹோ");
uv = uv.replace(/ùaô/g, "ஹொ");
uv = uv.replace(/aô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/aý/g, "ஹு");
uv = uv.replace(/aþ/g, "ஹூ");
uv = uv.replace(/ùa/g, "ஹெ");
uv = uv.replace(/úa/g, "ஹே");
uv = uv.replace(/ûa/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");////////4

uv = uv.replace(/ù`\[/g, "ஷௌ");
uv = uv.replace(/ú`ô/g, "ஷோ");
uv = uv.replace(/ù`ô/g, "ஷொ");
uv = uv.replace(/`ô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/`ý/g, "ஷு");
uv = uv.replace(/`þ/g, "ஷூ");
uv = uv.replace(/ù`/g, "ஷெ");
uv = uv.replace(/ú`/g, "ஷே");
uv = uv.replace(/û`/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");
uv = uv.replace(/`/g, "ஷ");////////4


document.tamil_unicode_utf8.destination.value=uv; 
} 
 
function convert_dinathanthy_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/d/g, "க்ஷ");
uv = uv.replace(/dÖ/g, "க்ஷா");
uv = uv.replace(/Ûd/g, "க்ஷை");
uv = uv.replace(/Ô/g, "க்ஷி");
uv = uv.replace(/Õ/g, "க்ஷீ");
uv = uv.replace(/d×/g, "க்ஷு");
uv = uv.replace(/dØ/g, "க்ஷூ");
uv = uv.replace(/Ùd/g, "க்ஷெ");
uv = uv.replace(/Úd/g, "க்ஷே");
uv = uv.replace(/ÙdÖ/g, "க்ஷொ");
uv = uv.replace(/ÚdÖ/g, "க்ஷோ");
uv = uv.replace(/Ùd\[/g, "க்ஷௌ");
uv = uv.replace(/Ó/g, "க்ஷ்");

uv = uv.replace(/Ù\^\[/g, "ஜௌ");
uv = uv.replace(/Ú\^Ö/g, "ஜோ");
uv = uv.replace(/Ù\^Ö/g, "ஜொ");
uv = uv.replace(/\^Ö/g, "ஜா");
uv = uv.replace(/È/g, "ஜி");
uv = uv.replace(/É/g, "ஜீ");
uv = uv.replace(/\^Ø/g, "ஜு");
uv = uv.replace(/\^þ/g, "ஜூ");
uv = uv.replace(/Ù\^/g, "ஜெ");
uv = uv.replace(/Ú\^/g, "ஜே");
uv = uv.replace(/Û\^/g, "ஜை");
uv = uv.replace(/Ç/g, "ஜ்");
uv = uv.replace(/\^/g, "ஜ");



uv = uv.replace(/ÙL\[/g, "கௌ");
uv = uv.replace(/ÚLÖ/g, "கோ");
uv = uv.replace(/ÙLÖ/g, "கொ");
uv = uv.replace(/LÖ/g, "கா");
uv = uv.replace(/f/g, "கி");
uv = uv.replace(/g/g, "கீ");
uv = uv.replace(/h/g, "கு");
uv = uv.replace(/i/g, "கூ");
uv = uv.replace(/ÙL/g, "கெ");
uv = uv.replace(/ÚL/g, "கே");
uv = uv.replace(/ÛL/g, "கை");
uv = uv.replace(/e/g, "க்");
uv = uv.replace(/L/g, "க");
uv = uv.replace(/ÙM\[/g, "ஙௌ");
uv = uv.replace(/ÚMÖ/g, "ஙோ");
uv = uv.replace(/ÙMÖ/g, "ஙொ");
uv = uv.replace(/MÖ/g, "ஙா");
uv = uv.replace(/k/g, "ஙி");
uv = uv.replace(/l/g, "ஙீ");
uv = uv.replace(/m/g, "ஙு");
uv = uv.replace(/n/g, "ஙூ");
uv = uv.replace(/ÙM/g, "ஙெ");
uv = uv.replace(/ÚM/g, "ஙே");
uv = uv.replace(/ÛM/g, "ஙை");
uv = uv.replace(/j/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ÙN\[/g, "சௌ");
uv = uv.replace(/ÚNÖ/g, "சோ");
uv = uv.replace(/ÙNÖ/g, "சொ");
uv = uv.replace(/NÖ/g, "சா");
uv = uv.replace(/p/g, "சி");
uv = uv.replace(/q/g, "சீ");
uv = uv.replace(/r/g, "சு");
uv = uv.replace(/s/g, "சூ");
uv = uv.replace(/ÙN/g, "செ");
uv = uv.replace(/ÚN/g, "சே");
uv = uv.replace(/ÛN/g, "சை");
uv = uv.replace(/o/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ÙO\[/g, "ஞௌ");
uv = uv.replace(/ÚOÖ/g, "ஞோ");
uv = uv.replace(/ÙOÖ/g, "ஞொ");
uv = uv.replace(/OÖ/g, "ஞா");
uv = uv.replace(/u/g, "ஞி");
uv = uv.replace(/v/g, "ஞீ");
uv = uv.replace(/w/g, "ஞு");
uv = uv.replace(/x/g, "ஞூ");
uv = uv.replace(/ÙO/g, "ஞெ");
uv = uv.replace(/ÚO/g, "ஞே");
uv = uv.replace(/ÛO/g, "ஞை");
uv = uv.replace(/t/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");


uv = uv.replace(/ÙP\[/g, "டௌ");
uv = uv.replace(/ÚPÖ/g, "டோ");
uv = uv.replace(/ÙPÖ/g, "டொ");
uv = uv.replace(/PÖ/g, "டா");
uv = uv.replace(/z/g, "டி");
uv = uv.replace(/{/g, "டீ");
uv = uv.replace(/\|/g, "டு");
uv = uv.replace(/}/g, "டூ");
uv = uv.replace(/ÙP/g, "டெ");
uv = uv.replace(/ÚP/g, "டே");
uv = uv.replace(/ÛP/g, "டை");
uv = uv.replace(/y/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ÙQ\[/g, "ணௌ");
uv = uv.replace(/ÚQÖ/g, "ணோ");
uv = uv.replace(/ÙQÖ/g, "ணொ");
uv = uv.replace(/QÖ/g, "ணா");
uv = uv.replace(/‚/g, "ணி");
uv = uv.replace(/ƒ/g, "ணீ");
uv = uv.replace(/„/g, "ணு");
uv = uv.replace(/…/g, "ணூ");
uv = uv.replace(/ÙQ/g, "ணெ");
uv = uv.replace(/ÚQ/g, "ணே");
uv = uv.replace(/ÛQ/g, "ணை");
uv = uv.replace(//g, "ண்");
uv = uv.replace(/Q/g, "ண");
uv = uv.replace(/ÙR\[/g, "தௌ");
uv = uv.replace(/ÚRÖ/g, "தோ");
uv = uv.replace(/ÙRÖ/g, "தொ");
uv = uv.replace(/RÖ/g, "தா");
uv = uv.replace(/‡/g, "தி");
uv = uv.replace(/ˆ/g, "தீ");
uv = uv.replace(/‰/g, "து");
uv = uv.replace(/Š/g, "தூ");
uv = uv.replace(/ÙR/g, "தெ");
uv = uv.replace(/ÚR/g, "தே");
uv = uv.replace(/ÛR/g, "தை");
uv = uv.replace(/†/g, "த்");
uv = uv.replace(/R/g, "த");


uv = uv.replace(/ÙS\[/g, "நௌ");
uv = uv.replace(/ÚSÖ/g, "நோ");
uv = uv.replace(/ÙSÖ/g, "நொ");
uv = uv.replace(/SÖ/g, "நா");
uv = uv.replace(/Œ/g, "நி");
uv = uv.replace(//g, "நீ");
uv = uv.replace(/î/g, "நு");
uv = uv.replace(//g, "நு");
uv = uv.replace(//g, "நூ");
uv = uv.replace(/ÙS/g, "நெ");
uv = uv.replace(/ÚS/g, "நே");
uv = uv.replace(/ÛS/g, "நை");
uv = uv.replace(/‹/g, "ந்");
uv = uv.replace(/S/g, "ந");


uv = uv.replace(/Ù]\[/g, "னௌ");
uv = uv.replace(/Ú]Ö/g, "னோ");
uv = uv.replace(/Ù]Ö/g, "னொ");
uv = uv.replace(/]Ö/g, "னா");
uv = uv.replace(/Â/g, "னி");
uv = uv.replace(/Ã/g, "னீ");
uv = uv.replace(/Ä/g, "னு");
uv = uv.replace(/Å/g, "னூ");
uv = uv.replace(/Ù]/g, "னெ");
uv = uv.replace(/Ú]/g, "னே");
uv = uv.replace(/Û]/g, "னை");
uv = uv.replace(/Á/g, "ன்");
uv = uv.replace(/]/g, "ன");
uv = uv.replace(/ÙT\[/g, "பௌ");
uv = uv.replace(/ÚTÖ/g, "போ");
uv = uv.replace(/ÙTÖ/g, "பொ");
uv = uv.replace(/TÖ/g, "பா");
uv = uv.replace(/‘/g, "பி");
uv = uv.replace(/’/g, "பீ");
uv = uv.replace(/“/g, "பு");
uv = uv.replace(/”/g, "பூ");
uv = uv.replace(/ÙT/g, "பெ");
uv = uv.replace(/ÚT/g, "பே");
uv = uv.replace(/ÛT/g, "பை");
uv = uv.replace(//g, "ப்");
uv = uv.replace(/T/g, "ப");


uv = uv.replace(/ÙU\[/g, "மௌ");
uv = uv.replace(/ÚUÖ/g, "மோ");
uv = uv.replace(/ÙUÖ/g, "மொ");
uv = uv.replace(/UÖ/g, "மா");
uv = uv.replace(/–/g, "மி");
uv = uv.replace(/—/g, "மீ");
uv = uv.replace(/˜/g, "மு");
uv = uv.replace(/™/g, "மூ");
uv = uv.replace(/ÙU/g, "மெ");
uv = uv.replace(/ÚU/g, "மே");
uv = uv.replace(/ÛU/g, "மை");
uv = uv.replace(/•/g, "ம்");
uv = uv.replace(/U/g, "ம");


uv = uv.replace(/ÙV\[/g, "யௌ");
uv = uv.replace(/ÚVÖ/g, "யோ");
uv = uv.replace(/ÙVÖ/g, "யொ");
uv = uv.replace(/VÖ/g, "யா");
uv = uv.replace(/›/g, "யி");
uv = uv.replace(/œ/g, "யீ");
uv = uv.replace(//g, "யு");
uv = uv.replace(//g, "யூ");
uv = uv.replace(/ÙV/g, "யெ");
uv = uv.replace(/ÚV/g, "யே");
uv = uv.replace(/ÛV/g, "யை");
uv = uv.replace(/š/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ÙW\[/g, "ரௌ");
uv = uv.replace(/ÚWÖ/g, "ரோ");
uv = uv.replace(/ÙWÖ/g, "ரொ");
uv = uv.replace(/WÖ/g, "ரா");
uv = uv.replace(/¡/g, "ரி");
uv = uv.replace(/¢/g, "ரீ");
uv = uv.replace(/£/g, "ரு");
uv = uv.replace(/¤/g, "ரூ");
uv = uv.replace(/ÙW/g, "ரெ");
uv = uv.replace(/ÚW/g, "ரே");
uv = uv.replace(/ÛW/g, "ரை");
uv = uv.replace(/Ÿ/g, "ர்");
uv = uv.replace(/W/g, "ர");
uv = uv.replace(/ÙX\[/g, "லௌ");
uv = uv.replace(/ÚXÖ/g, "லோ");
uv = uv.replace(/ÙXÖ/g, "லொ");
uv = uv.replace(/XÖ/g, "லா");
uv = uv.replace(/¦/g, "லி");
uv = uv.replace(/§/g, "லீ");
uv = uv.replace(/¨/g, "லு");
uv = uv.replace(/©/g, "லூ");
uv = uv.replace(/ÙX/g, "லெ");
uv = uv.replace(/ÚX/g, "லே");
uv = uv.replace(/ÛX/g, "லை");
uv = uv.replace(/¥/g, "ல்");
uv = uv.replace(/X/g, "ல");



uv = uv.replace(/Ù\[\[/g, "ளௌ");
uv = uv.replace(/Ú\[Ö/g, "ளோ");
uv = uv.replace(/Ù\[Ö/g, "ளொ");
uv = uv.replace(/\[Ö/g, "ளா");
uv = uv.replace(/¸/g, "ளி");
uv = uv.replace(/¹/g, "ளீ");
uv = uv.replace(/º/g, "ளு");
uv = uv.replace(/»/g, "ளூ");
uv = uv.replace(/Ù\[/g, "ளெ");
uv = uv.replace(/Ú\[/g, "ளே");
uv = uv.replace(/Û\[/g, "ளை");
uv = uv.replace(/·/g, "ள்");
uv = uv.replace(/\[/g, "ள");


uv = uv.replace(/ÙY\[/g, "வௌ");
uv = uv.replace(/ÚYÖ/g, "வோ");
uv = uv.replace(/ÙYÖ/g, "வொ");
uv = uv.replace(/YÖ/g, "வா");
uv = uv.replace(/«/g, "வி");
uv = uv.replace(/®/g, "வீ");
uv = uv.replace(/°/g, "வு");
uv = uv.replace(/±/g, "வூ");
uv = uv.replace(/ÙY/g, "வெ");
uv = uv.replace(/ÚY/g, "வே");
uv = uv.replace(/ÛY/g, "வை");
uv = uv.replace(/ª/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ÙZ\[/g, "ழௌ");
uv = uv.replace(/ÚZÖ/g, "ழோ");
uv = uv.replace(/ÙZÖ/g, "ழொ");
uv = uv.replace(/ZÖ/g, "ழா");
uv = uv.replace(/³/g, "ழி");
uv = uv.replace(/´/g, "ழீ");
uv = uv.replace(/µ/g, "ழு");
uv = uv.replace(/¶/g, "ழூ");
uv = uv.replace(/ÙZ/g, "ழெ");
uv = uv.replace(/ÚZ/g, "ழே");
uv = uv.replace(/ÛZ/g, "ழை");
uv = uv.replace(/²/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");
uv = uv.replace(/Ù\\\[/g, "றௌ");
uv = uv.replace(/Ú\\Ö/g, "றோ");
uv = uv.replace(/Ù\\Ö/g, "றொ");
uv = uv.replace(/\\Ö/g, "றா");
uv = uv.replace(/½/g, "றி");
uv = uv.replace(/¾/g, "றீ");
uv = uv.replace(/¿/g, "று");
uv = uv.replace(/À/g, "றூ");
uv = uv.replace(/Ù\\/g, "றெ");
uv = uv.replace(/Ú\\/g, "றே");
uv = uv.replace(/Û\\/g, "றை");
uv = uv.replace(/¼/g, "ற்");
uv = uv.replace(/\\/g, "ற");





uv = uv.replace(/Ùa\[/g, "ஹௌ");
uv = uv.replace(/ÚaÖ/g, "ஹோ");
uv = uv.replace(/ÙaÖ/g, "ஹொ");
uv = uv.replace(/aÖ/g, "ஹா");
uv = uv.replace(/Ë/g, "ஹி");
uv = uv.replace(/Ì/g, "ஹீ");
uv = uv.replace(/a×/g, "ஹு");
uv = uv.replace(/aØ/g, "ஹூ");
uv = uv.replace(/Ùa/g, "ஹெ");
uv = uv.replace(/Úa/g, "ஹே");
uv = uv.replace(/Ûa/g, "ஹை");
uv = uv.replace(/Ê/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");


uv = uv.replace(/Ùc\[/g, "ஷௌ");
uv = uv.replace(/ÚcÖ/g, "ஷோ");
uv = uv.replace(/ÙcÖ/g, "ஷொ");
uv = uv.replace(/cÖ/g, "ஷா");
uv = uv.replace(/Ñ/g, "ஷி");
uv = uv.replace(/Ò/g, "ஷீ");
uv = uv.replace(/c×/g, "ஷு");
uv = uv.replace(/cØ/g, "ஷூ");
uv = uv.replace(/Ùc/g, "ஷெ");
uv = uv.replace(/Úc/g, "ஷே");
uv = uv.replace(/Ûc/g, "ஷை");
uv = uv.replace(/Ð/g, "ஷ்");
uv = uv.replace(/c/g, "ஷ");

uv = uv.replace(/Ùb\[/g, "ஸௌ");
uv = uv.replace(/ÚbÖ/g, "ஸோ");
uv = uv.replace(/ÙbÖ/g, "ஸொ");
uv = uv.replace(/bÖ/g, "ஸா");
uv = uv.replace(/Î/g, "ஸி");
uv = uv.replace(/Ï/g, "ஸீ");
uv = uv.replace(/b×/g, "ஸு");
uv = uv.replace(/bØ/g, "ஸூ");
uv = uv.replace(/Ùb/g, "ஸெ");
uv = uv.replace(/Úb/g, "ஸே");
uv = uv.replace(/Ûb/g, "ஸை");
uv = uv.replace(/Í/g, "ஸ்");
uv = uv.replace(/b/g, "ஸ");

uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");

uv = uv.replace(/@/g, "ஃ");
uv = uv.replace(/Ü/g, "-");
uv = uv.replace(/Ý/g, "_");
uv = uv.replace(/~/g, "ஸ்ரீ");

document.tamil_unicode_utf8.destination.value=uv;
} 
 
function convert_kavipriya_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/û/g, "க்ஷ");
   
uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/ùக்ஷ\[/g, "க்ஷௌ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/_/g, "ஜ");
uv = uv.replace(/ùஜ/g, "ஜெ");
uv = uv.replace(/ùஜ\[/g, "ஜௌ");
uv = uv.replace(/úஜô/g, "ஜோ");
uv = uv.replace(/ùஜô/g, "ஜொ");
uv = uv.replace(/ஜô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/ஜý/g, "ஜு");
uv = uv.replace(/ஜþ/g, "ஜூ");
uv = uv.replace(/úஜ/g, "ஜே");
uv = uv.replace(/ûஜ/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");////////4

uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");////////4

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");////////4

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");////////4

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");////////4

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");////////4

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");////////4

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");////////4

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");////////4

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");////////4

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");////////4

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");////////4

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");////////4


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");////////4


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/#/g, "லி");
uv = uv.replace(/\-/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");////////4


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");
uv = uv.replace(/ûள/g, "ளை");
uv = uv.replace(/ளô/g, "ளா");
////////4

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");////////4

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");////////4

uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");////////4

uv = uv.replace(/\^/g, "ஸ");
uv = uv.replace(/ெஸள/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/ஸô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/ஸý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/ûஸ/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");////////4

uv = uv.replace(/@/g, "அ");
uv = uv.replace(/A/g, "ஆ");
uv = uv.replace(/B/g, "இ");
uv = uv.replace(/C/g, "ஈ");
uv = uv.replace(/D/g, "உ");
uv = uv.replace(/E/g, "ஊ");
uv = uv.replace(/F/g, "எ");
uv = uv.replace(/G/g, "ஏ");
uv = uv.replace(/H/g, "ஐ");
uv = uv.replace(/I/g, "ஒ")
uv = uv.replace(/J/g, "ஓ");
uv = uv.replace(/K/g, "ஃ");
uv = uv.replace(/I\[/g, "ஔ");




uv = uv.replace(/c/g, "ஸ்ரீ");




uv = uv.replace(/a/g, "ஹ");
uv = uv.replace(/ùஹ\[/g, "ஹௌ");
uv = uv.replace(/úஹô/g, "ஹோ");
uv = uv.replace(/ùஹô/g, "ஹொ");
uv = uv.replace(/ஹô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/ஹý/g, "ஹு");
uv = uv.replace(/ஹþ/g, "ஹூ");
uv = uv.replace(/ùஹ/g, "ஹெ");
uv = uv.replace(/úஹ/g, "ஹே");
uv = uv.replace(/ûஹ/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");////////4


uv = uv.replace(/`/g, "ஷ");
uv = uv.replace(/ˆ/g, "ஷ");
uv = uv.replace(/ùஷ/g, "ஷெ");
uv = uv.replace(/ùஷ\[/g, "ஷௌ");
uv = uv.replace(/úஷô/g, "ஷோ");
uv = uv.replace(/ùஷô/g, "ஷொ");
uv = uv.replace(/ஷô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/ஷý/g, "ஷு");
uv = uv.replace(/ஷþ/g, "ஷூ");
uv = uv.replace(/úஷ/g, "ஷே");
uv = uv.replace(/ûஷ/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");////////4


uv = uv.replace(/\‘/g, "'");
uv = uv.replace(/\’/g, "'");
uv = uv.replace(/\“/g, "'");
uv = uv.replace(/\”/g, "'");
uv = uv.replace(/\"/g, "'");
uv = uv.replace(/…/g, "...");

document.tamil_unicode_utf8.destination.value=uv;
} 
   
function convert_murasoli_2_unicode() {   

uv = document.tamil_unicode_utf8.source.value;
 
uv = uv.replace(/b#s/g, "ஜௌ");
uv = uv.replace(/n#h/g, "ஜோ");
uv = uv.replace(/b#h/g, "ஜொ");
uv = uv.replace(/#h/g, "ஜா");
uv = uv.replace(/í/g, "ஜி");
uv = uv.replace(/É/g, "ஜீ");
uv = uv.replace(/#&/g, "ஜு");
uv = uv.replace(/#]/g, "ஜூ");
uv = uv.replace(/b#/g, "ஜெ");
uv = uv.replace(/n#/g, "ஜே");
uv = uv.replace(/i#/g, "ஜை");
uv = uv.replace(/{/g, "ஜ்");
uv = uv.replace(/#/g, "ஜ");

uv = uv.replace(/bfs/g, "கௌ");
uv = uv.replace(/nfh/g, "கோ");
uv = uv.replace(/bfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/»/g, "கி");
uv = uv.replace(/Ñ/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/T/g, "கூ");
uv = uv.replace(/bf/g, "கெ");
uv = uv.replace(/nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/¡/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/b‡s/g, "ஙௌ");
uv = uv.replace(/n‡h/g, "ஙோ");
uv = uv.replace(/b‡h/g, "ஙொ");
uv = uv.replace(/‡h/g, "ஙா");
uv = uv.replace(/à/g, "ஙி");
uv = uv.replace(/†/g, "ஙீ");
uv = uv.replace(/¼/g, "ஙு");
uv = uv.replace(/½/g, "ஙூ");
uv = uv.replace(/b‡/g, "ஙெ");
uv = uv.replace(/n‡/g, "ஙே");
uv = uv.replace(/i‡/g, "ஙை");
uv = uv.replace(/§/g, "ங்");
uv = uv.replace(/‡/g, "ங");


uv = uv.replace(/brs/g, "சௌ");
uv = uv.replace(/nrh/g, "சோ");
uv = uv.replace(/brh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/Á/g, "சி");
uv = uv.replace(/Ó/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/N/g, "சூ");
uv = uv.replace(/br/g, "செ");
uv = uv.replace(/nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/¢/g, "ச்");
uv = uv.replace(/r/g, "ச");
uv = uv.replace(/bPs/g, "ஞௌ");
uv = uv.replace(/nPh/g, "ஞோ");
uv = uv.replace(/bPh/g, "ஞொ");
uv = uv.replace(/Ph/g, "ஞா");
uv = uv.replace(/á/g, "ஞி");
uv = uv.replace(/Ø/g, "ஞீ");
uv = uv.replace(/\|/g, "ஞு");
uv = uv.replace(/ú/g, "ஞூ");
uv = uv.replace(/bP/g, "ஞெ");
uv = uv.replace(/nP/g, "ஞே");
uv = uv.replace(/iP/g, "ஞை");
uv = uv.replace(/Š/g, "ஞ்");
uv = uv.replace(/P/g, "ஞ");


uv = uv.replace(/bls/g, "டௌ");
uv = uv.replace(/nlh/g, "டோ");
uv = uv.replace(/blh/g, "டொ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/o/g, "டி");
uv = uv.replace(/O/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\^/g, "டூ");
uv = uv.replace(/bl/g, "டெ");
uv = uv.replace(/nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/£/g, "ட்");
uv = uv.replace(/l/g, "ட");




uv = uv.replace(/bzs/g, "ணௌ");
uv = uv.replace(/nzh/g, "ணோ");
uv = uv.replace(/bzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/â/g, "ணி");
uv = uv.replace(/Ù/g, "ணீ");
uv = uv.replace(/Q/g, "ணு");
uv = uv.replace(/û/g, "ணூ");
uv = uv.replace(/bz/g, "ணெ");
uv = uv.replace(/nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");
uv = uv.replace(/©/g, "ண்");
uv = uv.replace(/z/g, "ண");



uv = uv.replace(/bjs/g, "தௌ");
uv = uv.replace(/njh/g, "தோ");
uv = uv.replace(/bjh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/Â/g, "தி");
uv = uv.replace(/Ô/g, "தீ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/ö/g, "தூ");
uv = uv.replace(/bj/g, "தெ");
uv = uv.replace(/nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/¤/g, "த்");
uv = uv.replace(/j/g, "த");




uv = uv.replace(/bes/g, "நௌ");
uv = uv.replace(/neh/g, "நோ");
uv = uv.replace(/beh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ã/g, "நி");
uv = uv.replace(/Ú/g, "நீ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/ü/g, "நூ");
uv = uv.replace(/be/g, "நெ");
uv = uv.replace(/ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/ª/g, "ந்");
uv = uv.replace(/e/g, "ந");



uv = uv.replace(/bds/g, "னௌ");
uv = uv.replace(/ndh/g, "னோ");
uv = uv.replace(/bdh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/å/g, "னி");
uv = uv.replace(/Ü/g, "னீ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/}/g, "னூ");
uv = uv.replace(/bd/g, "னெ");
uv = uv.replace(/nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/‹/g, "ன்");
uv = uv.replace(/d/g, "ன");



uv = uv.replace(/bgs/g, "பௌ");
uv = uv.replace(/ngh/g, "போ");
uv = uv.replace(/bgh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/Ã/g, "பி");
uv = uv.replace(/Õ/g, "பீ");
uv = uv.replace(/ò/g, "பு");
uv = uv.replace(/ó/g, "பூ");
uv = uv.replace(/bg/g, "பெ");
uv = uv.replace(/ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/¥/g, "ப்");
uv = uv.replace(/g/g, "ப");



uv = uv.replace(/bks/g, "மௌ");
uv = uv.replace(/nkh/g, "மோ");
uv = uv.replace(/bkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/ä/g, "மி");
uv = uv.replace(/Û/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/_/g, "மூ");
uv = uv.replace(/bk/g, "மெ");
uv = uv.replace(/nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/«/g, "ம்");
uv = uv.replace(/k/g, "ம");



uv = uv.replace(/bas/g, "யௌ");
uv = uv.replace(/nah/g, "யோ");
uv = uv.replace(/bah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/æ/g, "யி");
uv = uv.replace(/p/g, "யீ");
uv = uv.replace(/Í/g, "யு");
uv = uv.replace(/ô/g, "யூ");
uv = uv.replace(/ba/g, "யெ");
uv = uv.replace(/na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/Œ/g, "ய்");
uv = uv.replace(/a/g, "ய");

uv = uv.replace(/bus/g, "ரௌ");
uv = uv.replace(/nuh/g, "ரோ");
uv = uv.replace(/buh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/ç/g, "ரி");
uv = uv.replace(/ß/g, "ரீ");
uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/%/g, "ரூ");
uv = uv.replace(/bu/g, "ரெ");
uv = uv.replace(/nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");
uv = uv.replace(/®/g, "ர்");
uv = uv.replace(/u/g, "ர");



uv = uv.replace(/bys/g, "லௌ");
uv = uv.replace(/nyh/g, "லோ");
uv = uv.replace(/byh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/è/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/ÿ/g, "லூ");
uv = uv.replace(/by/g, "லெ");
uv = uv.replace(/ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/š/g, "ல்");
uv = uv.replace(/y/g, "ல");



uv = uv.replace(/bss/g, "ளௌ");
uv = uv.replace(/nsh/g, "ளோ");
uv = uv.replace(/bsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");
uv = uv.replace(/ë/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/q/g, "ளூ");
uv = uv.replace(/bs/g, "ளெ");
uv = uv.replace(/ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/Ÿ/g, "ள்");
uv = uv.replace(/s/g, "ள");


uv = uv.replace(/bts/g, "வௌ");
uv = uv.replace(/nth/g, "வோ");
uv = uv.replace(/bth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/é/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Î/g, "வு");
uv = uv.replace(/ñ/g, "வூ");
uv = uv.replace(/bt/g, "வெ");
uv = uv.replace(/nt/g, "வே");
uv = uv.replace(/it/g, "வை");
uv = uv.replace(/›/g, "வ்");
uv = uv.replace(/t/g, "வ");



uv = uv.replace(/bHs/g, "ழௌ");
uv = uv.replace(/nHh/g, "ழோ");
uv = uv.replace(/bHh/g, "ழொ");
uv = uv.replace(/Hh/g, "ழா");
uv = uv.replace(/ê/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/G/g, "ழு");
uv = uv.replace(/>/g, "ழூ");
uv = uv.replace(/bH/g, "ழெ");
uv = uv.replace(/nH/g, "ழே");
uv = uv.replace(/iH/g, "ழை");
uv = uv.replace(/œ/g, "ழ்");
uv = uv.replace(/H/g, "ழ");


uv = uv.replace(/bws/g, "றௌ");
uv = uv.replace(/nwh/g, "றோ");
uv = uv.replace(/bwh/g, "றொ");
uv = uv.replace(/wh/g, "றா");
uv = uv.replace(/¿/g, "றி");
uv = uv.replace(/Ö/g, "றீ");
uv = uv.replace(/W/g, "று");
uv = uv.replace(/ù/g, "றூ");
uv = uv.replace(/bw/g, "றெ");
uv = uv.replace(/nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/‰/g, "ற்");
uv = uv.replace(/w/g, "ற");




uv = uv.replace(/bAs/g, "ஹௌ");
uv = uv.replace(/nAh/g, "ஹோ");
uv = uv.replace(/bAh/g, "ஹொ");
uv = uv.replace(/Ah/g, "ஹா");
uv = uv.replace(/ï/g, "ஹி");
uv = uv.replace(/Ë/g, "ஹீ");
uv = uv.replace(/A&/g, "ஹு");
uv = uv.replace(/A\]/g, "ஹூ");
uv = uv.replace(/bA/g, "ஹெ");
uv = uv.replace(/nA/g, "ஹே");
uv = uv.replace(/iA/g, "ஹை");
uv = uv.replace(/À/g, "ஹ்");
uv = uv.replace(/A/g, "ஹ");

uv = uv.replace(/bõs/g, "ஷௌ");
uv = uv.replace(/nõh/g, "ஷோ");
uv = uv.replace(/bõh/g, "ஷொ");
uv = uv.replace(/õh/g, "ஷா");
uv = uv.replace(/î/g, "ஷி");
uv = uv.replace(/Ê/g, "ஷீ");
uv = uv.replace(/õ&/g, "ஷு");
uv = uv.replace(/õ]/g, "ஷூ");
uv = uv.replace(/bõ/g, "ஷெ");
uv = uv.replace(/nõ/g, "ஷே");
uv = uv.replace(/iõ/g, "ஷை");
uv = uv.replace(/Z/g, "ஷ்");
uv = uv.replace(/õ/g, "ஷ");

uv = uv.replace(/b\[s/g, "ஸௌ");
uv = uv.replace(/n\[h/g, "ஸோ");
uv = uv.replace(/b\[h/g, "ஸொ");
uv = uv.replace(/\[h/g, "ஸா");
uv = uv.replace(/ì/g, "ஸி");
uv = uv.replace(/È/g, "ஸீ");
uv = uv.replace(/\[&/g, "ஸு");
uv = uv.replace(/\[\]/g, "ஸூ");
uv = uv.replace(/b\[/g, "ஸெ");
uv = uv.replace(/n\[/g, "ஸே");
uv = uv.replace(/i\[/g, "ஸை");
uv = uv.replace(/°/g, "ஸ்");
uv = uv.replace(/\[/g, "ஸ");

uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");
uv = uv.replace(/Ï/g, "இ");
uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/xs/g, "ஔ");



uv = uv.replace(/~/g, "ஃ");

uv = uv.replace(/\$/g, "ஸ்ரீ");

uv = uv.replace(/˜/g, "?");

uv = uv.replace(/B/g, "க்ஷ");
uv = uv.replace(/Bh/g, "க்ஷா");
uv = uv.replace(/iB/g, "க்ஷை");
uv = uv.replace(/ø/g, "க்ஷி");
uv = uv.replace(/Ì/g, "க்ஷீ");
uv = uv.replace(/B&/g, "க்ஷு");
uv = uv.replace(/B\]/g, "க்ஷூ");
uv = uv.replace(/bB/g, "க்ஷெ");
uv = uv.replace(/nB/g, "க்ஷே");
uv = uv.replace(/bBh/g, "க்ஷொ");
uv = uv.replace(/nBh/g, "க்ஷோ");
uv = uv.replace(/bBs/g, "க்ஷௌ");
uv = uv.replace(/º/g, "க்ஷ்");


document.tamil_unicode_utf8.destination.value=uv;
}   
function convert_mylai_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/X/g, "க்ஷ");
uv = uv.replace(/Xa/g, "க்ஷா");
uv = uv.replace(/AX/g, "க்ஷை");
uv = uv.replace(/Xi/g, "க்ஷி");
uv = uv.replace(/XI  /g, "க்ஷீ");
uv = uv.replace(/XH/g, "க்ஷு");
uv = uv.replace(/XJ/g, "க்ஷூ");
uv = uv.replace(/eX/g, "க்ஷெ");
uv = uv.replace(/EX/g, "க்ஷே");
uv = uv.replace(/eXa/g, "க்ஷொ");
uv = uv.replace(/EXa/g, "க்ஷோ");
uv = uv.replace(/eXq/g, "க்ஷௌ");
uv = uv.replace(/Xf/g, "க்ஷ்");
uv = uv.replace(/ai/g, "ரி");
uv = uv.replace(/af/g, "ர்");
uv = uv.replace(/ejq/g, "ஜௌ");
uv = uv.replace(/Eja/g, "ஜோ");
uv = uv.replace(/eja/g, "ஜொ");
uv = uv.replace(/ja/g, "ஜா");
uv = uv.replace(/ji/g, "ஜி");
uv = uv.replace(/jI/g, "ஜீ");
uv = uv.replace(/jH/g, "ஜு");
uv = uv.replace(/jJ/g, "ஜூ");
uv = uv.replace(/ej/g, "ஜெ");
uv = uv.replace(/Ej/g, "ஜே");
uv = uv.replace(/Aj/g, "ஜை");
uv = uv.replace(/jf/g, "ஜ்");
uv = uv.replace(/j/g, "ஜ");///////////////////////////////////3
uv = uv.replace(/ekq/g, "கௌ");
uv = uv.replace(/Eka/g, "கோ");
uv = uv.replace(/eka/g, "கொ");
uv = uv.replace(/ka/g, "கா");
uv = uv.replace(/ki/g, "கி");
uv = uv.replace(/kI/g, "கீ");
uv = uv.replace(/K/g, "கு");
uv = uv.replace(/P/g, "கூ");
uv = uv.replace(/ek/g, "கெ");
uv = uv.replace(/Ek/g, "கே");
uv = uv.replace(/Ak/g, "கை");
uv = uv.replace(/kf/g, "க்");
uv = uv.replace(/k/g, "க");///////////////////////////////////3
uv = uv.replace(/egq/g, "ஙௌ");
uv = uv.replace(/Ega/g, "ஙோ");
uv = uv.replace(/ega/g, "ஙொ");
uv = uv.replace(/ga/g, "ஙா");
uv = uv.replace(/gi/g, "ஙி");
uv = uv.replace(/gI/g, "ஙீ");

uv = uv.replace(/eg/g, "ஙெ");
uv = uv.replace(/Eg/g, "ஙே");
uv = uv.replace(/Ag/g, "ஙை");
uv = uv.replace(/gf/g, "ங்");
uv = uv.replace(/g/g, "ங");///////////////////////////////////3
uv = uv.replace(/ecq/g, "சௌ");
uv = uv.replace(/Eca/g, "சோ");
uv = uv.replace(/eca/g, "சொ");
uv = uv.replace(/ca/g, "சா");
uv = uv.replace(/ci/g, "சி");
uv = uv.replace(/cI/g, "சீ");
uv = uv.replace(/V/g, "சூ");
uv = uv.replace(/C/g, "சு");

uv = uv.replace(/ec/g, "செ");
uv = uv.replace(/Ec/g, "சே");
uv = uv.replace(/Ac/g, "சை");
uv = uv.replace(/cf/g, "ச்");
uv = uv.replace(/c/g, "ச");///////////////////////////////////3


uv = uv.replace(/ewq/g, "ஞௌ");
uv = uv.replace(/Ewa/g, "ஞோ");
uv = uv.replace(/ewa/g, "ஞொ");
uv = uv.replace(/wa/g, "ஞா");
uv = uv.replace(/wi/g, "ஞி");
uv = uv.replace(/wI/g, "ஞீ");
uv = uv.replace(/W\\/g, "ஞூ");
uv = uv.replace(/W/g, "ஞு");

uv = uv.replace(/ew/g, "ஞெ");
uv = uv.replace(/Ew/g, "ஞே");
uv = uv.replace(/Aw/g, "ஞை");
uv = uv.replace(/wf/g, "ஞ்");
uv = uv.replace(/w/g, "ஞ");///////////////////////////////////3
uv = uv.replace(/edq/g, "டௌ");
uv = uv.replace(/Eda/g, "டோ");
uv = uv.replace(/eda/g, "டொ");
uv = uv.replace(/da/g, "டா");
uv = uv.replace(/F/g, "டி");
uv = uv.replace(/G/g, "டீ");
uv = uv.replace(/D/g, "டு");
uv = uv.replace(/ed/g, "டெ");
uv = uv.replace(/Ed/g, "டே");
uv = uv.replace(/Ad/g, "டை");
uv = uv.replace(/df/g, "ட்");
uv = uv.replace(/d/g, "ட");///////////////////////////////////3

uv = uv.replace(/e]q/g, "ணௌ");
uv = uv.replace(/E]a/g, "ணோ");
uv = uv.replace(/e]a/g, "ணொ");
uv = uv.replace(/]a/g, "ணா");
uv = uv.replace(/]i/g, "ணி");
uv = uv.replace(/]I/g, "ணீ");
uv = uv.replace(/}\\/g, "ணூ");
uv = uv.replace(/}/g, "ணு");

uv = uv.replace(/e]/g, "ணெ");
uv = uv.replace(/E]/g, "ணே");
uv = uv.replace(/A]/g, "ணை");
uv = uv.replace(/]f/g, "ண்");
uv = uv.replace(/]/g, "ண");///////////////////////////////////3
uv = uv.replace(/etq/g, "தௌ");
uv = uv.replace(/Eta/g, "தோ");
uv = uv.replace(/eta/g, "தொ");
uv = uv.replace(/ta/g, "தா");
uv = uv.replace(/ti/g, "தி");
uv = uv.replace(/tI/g, "தீ");
uv = uv.replace(/T\\/g, "தூ");
uv = uv.replace(/T/g, "து");

uv = uv.replace(/et/g, "தெ");
uv = uv.replace(/Et/g, "தே");
uv = uv.replace(/At/g, "தை");
uv = uv.replace(/tf/g, "த்");
uv = uv.replace(/t/g, "த");///////////////////////////////////3



uv = uv.replace(/enq/g, "நௌ");
uv = uv.replace(/Ena/g, "நோ");
uv = uv.replace(/ena/g, "நொ");
uv = uv.replace(/na/g, "நா");
uv = uv.replace(/ni/g, "நி");
uv = uv.replace(/nI/g, "நீ");
uv = uv.replace(/N\\/g, "நூ");
uv = uv.replace(/N/g, "நு");

uv = uv.replace(/en/g, "நெ");
uv = uv.replace(/En/g, "நே");
uv = uv.replace(/An/g, "நை");
uv = uv.replace(/nf/g, "ந்");
uv = uv.replace(/n/g, "ந");///////////////////////////////////3

uv = uv.replace(/e\[q/g, "னௌ");
uv = uv.replace(/E\[a/g, "னோ");
uv = uv.replace(/e\[a/g, "னொ");

uv = uv.replace(/\[a/g, "னா");
uv = uv.replace(/\[i/g, "னி");
uv = uv.replace(/\[I/g, "னீ");

uv = uv.replace(/\{\\/g, "னூ");
uv = uv.replace(/\{/g, "னு");

uv = uv.replace(/e\[/g, "னெ");
uv = uv.replace(/E\[/g, "னே");
uv = uv.replace(/A\[/g, "னை");
uv = uv.replace(/\[f/g, "ன்");
uv = uv.replace(/\[/g, "ன");///////////////////////////////////3


uv = uv.replace(/epq/g, "பௌ");
uv = uv.replace(/Epa/g, "போ");
uv = uv.replace(/epa/g, "பொ");
uv = uv.replace(/pa/g, "பா");
uv = uv.replace(/pi/g, "பி");
uv = uv.replace(/pI/g, "பீ");
uv = uv.replace(/p</g, "பு");
uv = uv.replace(/p>/g, "பூ");
uv = uv.replace(/ep/g, "பெ");
uv = uv.replace(/Ep/g, "பே");
uv = uv.replace(/Ap/g, "பை");
uv = uv.replace(/pf/g, "ப்");
uv = uv.replace(/p/g, "ப");///////////////////////////////////3

uv = uv.replace(/emq/g, "மௌ");
uv = uv.replace(/Ema/g, "மோ");
uv = uv.replace(/ema/g, "மொ");
uv = uv.replace(/ma/g, "மா");
uv = uv.replace(/mi/g, "மி");
uv = uv.replace(/mI/g, "மீ");
uv = uv.replace(/YM/g, "மூ");
uv = uv.replace(/M/g, "மு");

uv = uv.replace(/em/g, "மெ");
uv = uv.replace(/Em/g, "மே");
uv = uv.replace(/Am/g, "மை");
uv = uv.replace(/mf/g, "ம்");
uv = uv.replace(/m/g, "ம");///////////////////////////////////3

uv = uv.replace(/eyq/g, "யௌ");
uv = uv.replace(/Eya/g, "யோ");
uv = uv.replace(/eya/g, "யொ");
uv = uv.replace(/ya/g, "யா");
uv = uv.replace(/yi/g, "யி");
uv = uv.replace(/yI/g, "யீ");
uv = uv.replace(/y</g, "யு");
uv = uv.replace(/y>/g, "யூ");
uv = uv.replace(/ey/g, "யெ");
uv = uv.replace(/Ey/g, "யே");
uv = uv.replace(/Ay/g, "யை");
uv = uv.replace(/yf/g, "ய்");
uv = uv.replace(/y/g, "ய");///////////////////////////////////3



uv = uv.replace(/erq/g, "ரௌ");
uv = uv.replace(/Era/g, "ரோ");
uv = uv.replace(/era/g, "ரொ");
uv = uv.replace(/ra/g, "ரா");
uv = uv.replace(/ri/g, "ரி");
uv = uv.replace(/rI/g, "ரீ");
uv = uv.replace(/YR/g, "ரூ");
uv = uv.replace(/R/g, "ரு");

uv = uv.replace(/er/g, "ரெ");
uv = uv.replace(/Er/g, "ரே");
uv = uv.replace(/Ar/g, "ரை");
uv = uv.replace(/rf/g, "ர்");

uv = uv.replace(/r/g, "ர");///////////////////////////////////3


uv = uv.replace(/elq/g, "லௌ");
uv = uv.replace(/Ela/g, "லோ");
uv = uv.replace(/ela/g, "லொ");
uv = uv.replace(/la/g, "லா");
uv = uv.replace(/li/g, "லி");
uv = uv.replace(/lI/g, "லீ");
uv = uv.replace(/L>/g, "லூ");
uv = uv.replace(/L/g, "லு");

uv = uv.replace(/el/g, "லெ");
uv = uv.replace(/El/g, "லே");
uv = uv.replace(/Al/g, "லை");
uv = uv.replace(/lf/g, "ல்");
uv = uv.replace(/l/g, "ல");///////////////////////////////////3


uv = uv.replace(/eqq/g, "ளௌ");
uv = uv.replace(/Eqa/g, "ளோ");
uv = uv.replace(/eqa/g, "ளொ");
uv = uv.replace(/qa/g, "ளா");
uv = uv.replace(/F/g, "ளி");
uv = uv.replace(/G/g, "ளீ");
uv = uv.replace(/YQ/g, "ளூ");
uv = uv.replace(/Q/g, "ளு");

uv = uv.replace(/eq/g, "ளெ");
uv = uv.replace(/Eq/g, "ளே");
uv = uv.replace(/Aq/g, "ளை");
uv = uv.replace(/qf/g, "ள்");
uv = uv.replace(/q/g, "ள");///////////////////////////////////3



uv = uv.replace(/evq/g, "வௌ");
uv = uv.replace(/Eva/g, "வோ");
uv = uv.replace(/eva/g, "வொ");
uv = uv.replace(/va/g, "வா");
uv = uv.replace(/vi/g, "வி");
uv = uv.replace(/vI/g, "வீ");
uv = uv.replace(/v</g, "வு");
uv = uv.replace(/v>/g, "வூ");
uv = uv.replace(/ev/g, "வெ");
uv = uv.replace(/Ev/g, "வே");
uv = uv.replace(/Av/g, "வை");
uv = uv.replace(/vf/g, "வ்");
uv = uv.replace(/v/g, "வ");///////////////////////////////////3


uv = uv.replace(/ezq/g, "ழௌ");
uv = uv.replace(/Eza/g, "ழோ");
uv = uv.replace(/eza/g, "ழொ");
uv = uv.replace(/za/g, "ழா");
uv = uv.replace(/zi/g, "ழி");
uv = uv.replace(/zI/g, "ழீ");
uv = uv.replace(/YZ/g, "ழூ");
uv = uv.replace(/Z/g, "ழு");

uv = uv.replace(/ez/g, "ழெ");
uv = uv.replace(/Ez/g, "ழே");
uv = uv.replace(/Az/g, "ழை");
uv = uv.replace(/zf/g, "ழ்");
uv = uv.replace(/z/g, "ழ");///////////////////////////////////3
uv = uv.replace(/ebq/g, "றௌ");
uv = uv.replace(/Eba/g, "றோ");
uv = uv.replace(/eba/g, "றொ");
uv = uv.replace(/ba/g, "றா");
uv = uv.replace(/bi/g, "றி");
uv = uv.replace(/bI/g, "றீ");
uv = uv.replace(/b>/g, "றூ");
uv = uv.replace(/B/g, "று");

uv = uv.replace(/eb/g, "றெ");
uv = uv.replace(/Eb/g, "றே");
uv = uv.replace(/Ab/g, "றை");
uv = uv.replace(/bf/g, "ற்");
uv = uv.replace(/b/g, "ற");///////////////////////////////////3








uv = uv.replace(/ehq/g, "ஹௌ");
uv = uv.replace(/Eha/g, "ஹோ");
uv = uv.replace(/eha/g, "ஹொ");
uv = uv.replace(/ha/g, "ஹா");
uv = uv.replace(/hi/g, "ஹி");
uv = uv.replace(/hI/g, "ஹீ");
uv = uv.replace(/h/g, "ஹு");
uv = uv.replace(/h>/g, "ஹூ");
uv = uv.replace(/eh/g, "ஹெ");
uv = uv.replace(/Eh/g, "ஹே");
uv = uv.replace(/Ah/g, "ஹை");
uv = uv.replace(/hf/g, "ஹ்");
uv = uv.replace(/h/g, "ஹ");///////////////////////////////////3
uv = uv.replace(/exq/g, "ஷௌ");
uv = uv.replace(/Exa/g, "ஷோ");
uv = uv.replace(/exa/g, "ஷொ");
uv = uv.replace(/xa/g, "ஷா");
uv = uv.replace(/xi/g, "ஷி");
uv = uv.replace(/xI/g, "ஷீ");
uv = uv.replace(/ex/g, "ஷெ");
uv = uv.replace(/Ex/g, "ஷே");
uv = uv.replace(/Ax/g, "ஷை");
uv = uv.replace(/xf/g, "ஷ்");
uv = uv.replace(/x/g, "ஷ");///////////////////////////////////3

euv = uv.replace(/esq/g, "ஸௌ");
uv = uv.replace(/Esa/g, "ஸோ");
uv = uv.replace(/esa/g, "ஸொ");
uv = uv.replace(/sa/g, "ஸா");
uv = uv.replace(/si/g, "ஸி");
uv = uv.replace(/sI/g, "ஸீ");
uv = uv.replace(/es/g, "ஸெ");
uv = uv.replace(/Es/g, "ஸே");
uv = uv.replace(/As/g, "ஸை");
uv = uv.replace(/sf/g, "ஸ்");
uv = uv.replace(/s/g, "ஸ");///////////////////////////////////3
uv = uv.replace(/`/g, "அ");
uv = uv.replace(/~/g, "ஆ");
uv = uv.replace(/;/g, "இ");
uv = uv.replace(/:/g, "ஈ");
uv = uv.replace(/u/g, "உ");
uv = uv.replace(/U/g, "ஊ");
uv = uv.replace(/'/g, "எ");
uv = uv.replace(/"/g, "ஏ");
uv = uv.replace(/_/g, "ஐ");
uv = uv.replace(/o/g, "ஒ")
uv = uv.replace(/O/g, "ஓ");
uv = uv.replace(/oq/g, "ஔ");

uv = uv.replace(/!/g, "ஸ்ரீ");
uv = uv.replace(/#/g, "ஃ");





document.tamil_unicode_utf8.destination.value = uv;
} 
function convert_nakkeeran_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ùb\[/g, "க்ஷௌ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/ù_\[/g, "ஜௌ");
uv = uv.replace(/ú_ô/g, "ஜோ");
uv = uv.replace(/ù_ô/g, "ஜொ");
uv = uv.replace(/_ô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/_ý/g, "ஜு");
uv = uv.replace(/_þ/g, "ஜூ");
uv = uv.replace(/ù_/g, "ஜெ");
uv = uv.replace(/ú_/g, "ஜே");
uv = uv.replace(/û_/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");
uv = uv.replace(/_/g, "ஜ");


uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/­/g, "லி");

uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/\[ô/g, "ளா");
uv = uv.replace(/ü/g, "ளி");

uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/û\[/g, "ளை");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");


uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");
uv = uv.replace(/ù^\[/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/^ô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/^ý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/û^/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/\^/g, "ஸ");

uv = uv.replace(/@/g, "அ");
uv = uv.replace(/A/g, "ஆ");
uv = uv.replace(/B/g, "இ");
uv = uv.replace(/C/g, "ஈ");
uv = uv.replace(/D/g, "உ");
uv = uv.replace(/E/g, "ஊ");
uv = uv.replace(/F/g, "எ");
uv = uv.replace(/G/g, "ஏ");
uv = uv.replace(/H/g, "ஐ");
uv = uv.replace(/I/g, "ஒ")
uv = uv.replace(/J/g, "ஓ");
uv = uv.replace(/I\[/g, "ஔ");

uv = uv.replace(/K/g, "ஃ");

uv = uv.replace(/c/g, "ஸ்ரீ");


uv = uv.replace(/ùa\[/g, "ஹௌ");
uv = uv.replace(/úaô/g, "ஹோ");
uv = uv.replace(/ùaô/g, "ஹொ");
uv = uv.replace(/aô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/aý/g, "ஹு");
uv = uv.replace(/aþ/g, "ஹூ");
uv = uv.replace(/ùa/g, "ஹெ");
uv = uv.replace(/úa/g, "ஹே");
uv = uv.replace(/ûa/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");

uv = uv.replace(/ù`\[/g, "ஷௌ");
uv = uv.replace(/ú`ô/g, "ஷோ");
uv = uv.replace(/ù`ô/g, "ஷொ");
uv = uv.replace(/`ô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/`ý/g, "ஷு");
uv = uv.replace(/`þ/g, "ஷூ");
uv = uv.replace(/ù`/g, "ஷெ");
uv = uv.replace(/ú`/g, "ஷே");
uv = uv.replace(/û`/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");
uv = uv.replace(/`/g, "ஷ");


document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_roman_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/Xau/g, "க்ஷௌ");
uv = uv.replace(/Xai/g, "க்ஷை");
uv = uv.replace(/Xaa/g, "க்ஷா");
uv = uv.replace(/XA/g, "க்ஷா");
uv = uv.replace(/Xa/g, "க்ஷ");
uv = uv.replace(/Xii/g, "க்ஷீ");
uv = uv.replace(/Xi/g, "க்ஷி");
uv = uv.replace(/XI/g, "க்ஷீ");

uv = uv.replace(/Xuu/g, "க்ஷூ");
uv = uv.replace(/Xu/g, "க்ஷு");
uv = uv.replace(/XU/g, "க்ஷூ");
uv = uv.replace(/Xee/g, "க்ஷே");
uv = uv.replace(/Xe/g, "க்ஷெ");
uv = uv.replace(/XE/g, "க்ஷே");
uv = uv.replace(/Xoo/g, "க்ஷோ");
uv = uv.replace(/Xo/g, "க்ஷொ");
uv = uv.replace(/XO/g, "க்ஷோ");


uv = uv.replace(/X/g, "க்ஷ்");

uv = uv.replace(/njau/g, "ஞௌ");
uv = uv.replace(/njai/g, "ஞை");
uv = uv.replace(/njee/g, "ஞே");
uv = uv.replace(/njoo/g, "ஞோ");
uv = uv.replace(/njaa/g, "ஞா");
uv = uv.replace(/njuu/g, "ஞூ");
uv = uv.replace(/njii/g, "ஞீ");
uv = uv.replace(/nja/g, "ஞ");
uv = uv.replace(/nji/g, "ஞி");
uv = uv.replace(/njI/g, "ஞீ");
uv = uv.replace(/njA/g, "ஞா");
uv = uv.replace(/nje/g, "ஞெ");
uv = uv.replace(/njE/g, "ஞே");
uv = uv.replace(/njo/g, "ஞொ");
uv = uv.replace(/njO/g, "ஞோ");
uv = uv.replace(/nju/g, "ஞு");
uv = uv.replace(/njU/g, "ஞூ");

uv = uv.replace(/nj/g, "ஞ்");


uv = uv.replace(/ngau/g, "ஙௌ");
uv = uv.replace(/ngai/g, "ஙை");
uv = uv.replace(/ngee/g, "ஙே");
uv = uv.replace(/ngoo/g, "ஙோ");
uv = uv.replace(/ngaa/g, "ஙா");
uv = uv.replace(/nguu/g, "ஙூ");
uv = uv.replace(/ngii/g, "ஙீ");
uv = uv.replace(/nga/g, "ங");
uv = uv.replace(/ngi/g, "ஙி");
uv = uv.replace(/ngI/g, "ஙீ");
uv = uv.replace(/ngA/g, "ஙா");
uv = uv.replace(/nge/g, "ஙெ");
uv = uv.replace(/ngE/g, "ஙே");
uv = uv.replace(/ngo/g, "ஙொ");
uv = uv.replace(/ngO/g, "ஙோ");
uv = uv.replace(/ngu/g, "ஙு");
uv = uv.replace(/ngU/g, "ஙூ");

uv = uv.replace(/ng/g, "ங்");



uv = uv.replace(/shau/g, "ஷௌ");
uv = uv.replace(/shai/g, "ஷை");
uv = uv.replace(/shee/g, "ஷே");
uv = uv.replace(/shoo/g, "ஷோ");
uv = uv.replace(/shaa/g, "ஷா");
uv = uv.replace(/shuu/g, "ஷூ");
uv = uv.replace(/shii/g, "ஷீ");
uv = uv.replace(/sha/g, "ஷ");
uv = uv.replace(/shi/g, "ஷி");
uv = uv.replace(/shI/g, "ஷீ");
uv = uv.replace(/shA/g, "ஷா");
uv = uv.replace(/she/g, "ஷெ");
uv = uv.replace(/shE/g, "ஷே");
uv = uv.replace(/sho/g, "ஷொ");
uv = uv.replace(/shO/g, "ஷோ");
uv = uv.replace(/shu/g, "ஷு");
uv = uv.replace(/shU/g, "ஷூ");

uv = uv.replace(/sh/g, "ஷ்");

uv = uv.replace(/ nau/g, " நௌ");
uv = uv.replace(/ nai/g, " நை");
uv = uv.replace(/ nee/g, " நே");
uv = uv.replace(/ noo/g, " நோ");
uv = uv.replace(/ naa/g, " நா");
uv = uv.replace(/ nuu/g, " நூ");
uv = uv.replace(/ nii/g, " நீ");
uv = uv.replace(/ na/g, " ந");
uv = uv.replace(/ ni/g, " நி");
uv = uv.replace(/ nI/g, " நீ");
uv = uv.replace(/ nA/g, " நா");
uv = uv.replace(/ ne/g, " நெ");
uv = uv.replace(/ nE/g, " நே");
uv = uv.replace(/ no/g, " நொ");
uv = uv.replace(/ nO/g, " நோ");
uv = uv.replace(/ nu/g, " நு");
uv = uv.replace(/ nU/g, " நூ");

uv = uv.replace(/ nth/g, " ந்");

uv = uv.replace(/-nau/g, "நௌ");
uv = uv.replace(/-nai/g, "நை");
uv = uv.replace(/-nee/g, "நே");
uv = uv.replace(/-noo/g, "நோ");
uv = uv.replace(/-naa/g, "நா");
uv = uv.replace(/-nuu/g, "நூ");
uv = uv.replace(/-nii/g, "நீ");
uv = uv.replace(/-na/g, "ந");
uv = uv.replace(/-ni/g, "நி");
uv = uv.replace(/-nI/g, "நீ");
uv = uv.replace(/-nA/g, "நா");
uv = uv.replace(/-ne/g, "நெ");
uv = uv.replace(/-nE/g, "நே");
uv = uv.replace(/-no/g, "நொ");
uv = uv.replace(/-nO/g, "நோ");
uv = uv.replace(/-nu/g, "நு");
uv = uv.replace(/-nU/g, "நூ");

uv = uv.replace(/n-au/g, "நௌ");
uv = uv.replace(/n-ai/g, "நை");
uv = uv.replace(/n-ee/g, "நே");
uv = uv.replace(/n-oo/g, "நோ");
uv = uv.replace(/n-aa/g, "நா");
uv = uv.replace(/n-uu/g, "நூ");
uv = uv.replace(/n-ii/g, "நீ");
uv = uv.replace(/n-a/g, "ந");
uv = uv.replace(/n-i/g, "நி");
uv = uv.replace(/n-I/g, "நீ");
uv = uv.replace(/n-A/g, "நா");
uv = uv.replace(/n-e/g, "நெ");
uv = uv.replace(/n-E/g, "நே");
uv = uv.replace(/n-o/g, "நொ");
uv = uv.replace(/n-O/g, "நோ");
uv = uv.replace(/n-u/g, "நு");
uv = uv.replace(/n-U/g, "நூ");

uv = uv.replace(/wau/g, "நௌ");
uv = uv.replace(/wai/g, "நை");
uv = uv.replace(/wee/g, "நே");
uv = uv.replace(/woo/g, "நோ");
uv = uv.replace(/waa/g, "நா");
uv = uv.replace(/wuu/g, "நூ");
uv = uv.replace(/wii/g, "நீ");
uv = uv.replace(/wa/g, "ந");
uv = uv.replace(/wi/g, "நி");
uv = uv.replace(/wI/g, "நீ");
uv = uv.replace(/wA/g, "நா");
uv = uv.replace(/we/g, "நெ");
uv = uv.replace(/wE/g, "நே");
uv = uv.replace(/wo/g, "நொ");
uv = uv.replace(/wO/g, "நோ");
uv = uv.replace(/wu/g, "நு");
uv = uv.replace(/wU/g, "நூ");



uv = uv.replace(/ n/g, " ந்");
uv = uv.replace(/n-/g, "ந்");
uv = uv.replace(/-n/g, "ந்");
uv = uv.replace(/w/g, "ந்");




uv = uv.replace(/nthau/g, "ந்தௌ");
uv = uv.replace(/nthai/g, "ந்தை");
uv = uv.replace(/nthee/g, "ந்தே");
uv = uv.replace(/nthoo/g, "ந்தோ");
uv = uv.replace(/nthaa/g, "ந்தா");
uv = uv.replace(/nthuu/g, "ந்தூ");
uv = uv.replace(/nthii/g, "ந்தீ");
uv = uv.replace(/ntha/g, "ந்த");
uv = uv.replace(/nthi/g, "ந்தி");
uv = uv.replace(/nthI/g, "ந்தீ");
uv = uv.replace(/nthA/g, "ந்தா");
uv = uv.replace(/nthe/g, "ந்தெ");
uv = uv.replace(/nthE/g, "ந்தே");
uv = uv.replace(/ntho/g, "ந்தொ");
uv = uv.replace(/nthO/g, "ந்தோ");
uv = uv.replace(/nthu/g, "ந்து");
uv = uv.replace(/nthU/g, "ந்தூ");
uv = uv.replace(/nth/g, "ந்");




uv = uv.replace(/dhau/g, "தௌ");
uv = uv.replace(/dhai/g, "தை");
uv = uv.replace(/dhee/g, "தே");
uv = uv.replace(/dhoo/g, "தோ");
uv = uv.replace(/dhaa/g, "தா");
uv = uv.replace(/dhuu/g, "தூ");
uv = uv.replace(/dhii/g, "தீ");
uv = uv.replace(/dha/g, "த");
uv = uv.replace(/dhi/g, "தி");
uv = uv.replace(/dhI/g, "தீ");
uv = uv.replace(/dhA/g, "தா");
uv = uv.replace(/dhe/g, "தெ");
uv = uv.replace(/dhE/g, "தே");
uv = uv.replace(/dho/g, "தொ");
uv = uv.replace(/dhO/g, "தோ");
uv = uv.replace(/dhu/g, "து");
uv = uv.replace(/dhU/g, "தூ");

uv = uv.replace(/dh/g, "த்");

uv = uv.replace(/chau/g, "சௌ");
uv = uv.replace(/chai/g, "சை");
uv = uv.replace(/chee/g, "சே");
uv = uv.replace(/choo/g, "சோ");
uv = uv.replace(/chaa/g, "சா");
uv = uv.replace(/chuu/g, "சூ");
uv = uv.replace(/chii/g, "சீ");
uv = uv.replace(/cha/g, "ச");
uv = uv.replace(/chi/g, "சி");
uv = uv.replace(/chI/g, "சீ");
uv = uv.replace(/chA/g, "சா");
uv = uv.replace(/che/g, "செ");
uv = uv.replace(/chE/g, "சே");
uv = uv.replace(/cho/g, "சொ");
uv = uv.replace(/chO/g, "சோ");
uv = uv.replace(/chu/g, "சு");
uv = uv.replace(/chU/g, "சூ");

uv = uv.replace(/ch/g, "ச்");

uv = uv.replace(/zhau/g, "ழௌ");
uv = uv.replace(/zhai/g, "ழை");
uv = uv.replace(/zhee/g, "ழே");
uv = uv.replace(/zhoo/g, "ழோ");
uv = uv.replace(/zhaa/g, "ழா");
uv = uv.replace(/zhuu/g, "ழூ");
uv = uv.replace(/zhii/g, "ழீ");
uv = uv.replace(/zha/g, "ழ");
uv = uv.replace(/zhi/g, "ழி");
uv = uv.replace(/zhI/g, "ழீ");
uv = uv.replace(/zhA/g, "ழா");
uv = uv.replace(/zhe/g, "ழெ");
uv = uv.replace(/zhE/g, "ழே");
uv = uv.replace(/zho/g, "ழொ");
uv = uv.replace(/zhO/g, "ழோ");
uv = uv.replace(/zhu/g, "ழு");
uv = uv.replace(/zhU/g, "ழூ");

uv = uv.replace(/zh/g, "ழ்");
uv = uv.replace(/zau/g, "ழௌ");
uv = uv.replace(/zai/g, "ழை");
uv = uv.replace(/zee/g, "ழே");
uv = uv.replace(/zoo/g, "ழோ");
uv = uv.replace(/zaa/g, "ழா");
uv = uv.replace(/zuu/g, "ழூ");
uv = uv.replace(/zii/g, "ழீ");
uv = uv.replace(/za/g, "ழ");
uv = uv.replace(/zi/g, "ழி");
uv = uv.replace(/zI/g, "ழீ");
uv = uv.replace(/zA/g, "ழா");
uv = uv.replace(/ze/g, "ழெ");
uv = uv.replace(/zE/g, "ழே");
uv = uv.replace(/zo/g, "ழொ");
uv = uv.replace(/zO/g, "ழோ");
uv = uv.replace(/zu/g, "ழு");
uv = uv.replace(/zU/g, "ழூ");

uv = uv.replace(/z/g, "ழ்");

uv = uv.replace(/jau/g, "ஜௌ");
uv = uv.replace(/jai/g, "ஜை");
uv = uv.replace(/jee/g, "ஜே");
uv = uv.replace(/joo/g, "ஜோ");
uv = uv.replace(/jaa/g, "ஜா");
uv = uv.replace(/juu/g, "ஜூ");
uv = uv.replace(/jii/g, "ஜீ");
uv = uv.replace(/ja/g, "ஜ");
uv = uv.replace(/ji/g, "ஜி");
uv = uv.replace(/jI/g, "ஜீ");
uv = uv.replace(/jA/g, "ஜா");
uv = uv.replace(/je/g, "ஜெ");
uv = uv.replace(/jE/g, "ஜே");
uv = uv.replace(/jo/g, "ஜொ");
uv = uv.replace(/jO/g, "ஜோ");
uv = uv.replace(/ju/g, "ஜு");
uv = uv.replace(/jU/g, "ஜூ");

uv = uv.replace(/j/g, "ஜ்");


uv = uv.replace(/thau/g, "தௌ");
uv = uv.replace(/thai/g, "தை");
uv = uv.replace(/thee/g, "தே");
uv = uv.replace(/thoo/g, "தோ");
uv = uv.replace(/thaa/g, "தா");
uv = uv.replace(/thuu/g, "தூ");
uv = uv.replace(/thii/g, "தீ");
uv = uv.replace(/tha/g, "த");
uv = uv.replace(/thi/g, "தி");
uv = uv.replace(/thI/g, "தீ");
uv = uv.replace(/thA/g, "தா");
uv = uv.replace(/the/g, "தெ");
uv = uv.replace(/thE/g, "தே");
uv = uv.replace(/tho/g, "தொ");
uv = uv.replace(/thO/g, "தோ");
uv = uv.replace(/thu/g, "து");
uv = uv.replace(/thU/g, "தூ");

uv = uv.replace(/th/g, "த்");

uv = uv.replace(/-hau/g, "ஹௌ");
uv = uv.replace(/-hai/g, "ஹை");
uv = uv.replace(/-hee/g, "ஹே");
uv = uv.replace(/-hoo/g, "ஹோ");
uv = uv.replace(/-haa/g, "ஹா");
uv = uv.replace(/-huu/g, "ஹூ");
uv = uv.replace(/-hii/g, "ஹீ");
uv = uv.replace(/-ha/g, "ஹ");
uv = uv.replace(/-hi/g, "ஹி");
uv = uv.replace(/-hI/g, "ஹீ");
uv = uv.replace(/-hA/g, "ஹா");
uv = uv.replace(/-he/g, "ஹெ");
uv = uv.replace(/-hE/g, "ஹே");
uv = uv.replace(/-ho/g, "ஹொ");
uv = uv.replace(/-hO/g, "ஹோ");
uv = uv.replace(/-hu/g, "ஹு");
uv = uv.replace(/-hU/g, "ஹூ");

uv = uv.replace(/-h/g, "ஹ்");

uv = uv.replace(/hau/g, "கௌ");
uv = uv.replace(/hai/g, "கை");
uv = uv.replace(/hee/g, "கே");
uv = uv.replace(/hoo/g, "கோ");
uv = uv.replace(/haa/g, "கா");
uv = uv.replace(/huu/g, "கூ");
uv = uv.replace(/hii/g, "கீ");
uv = uv.replace(/ha/g, "க");
uv = uv.replace(/hi/g, "கி");
uv = uv.replace(/hI/g, "கீ");
uv = uv.replace(/hA/g, "கா");
uv = uv.replace(/he/g, "கெ");
uv = uv.replace(/hE/g, "கே");
uv = uv.replace(/ho/g, "கொ");
uv = uv.replace(/hO/g, "கோ");
uv = uv.replace(/hu/g, "கு");
uv = uv.replace(/hU/g, "கூ");

uv = uv.replace(/h/g, "க்");

uv = uv.replace(/kau/g, "கௌ");
uv = uv.replace(/kai/g, "கை");
uv = uv.replace(/kee/g, "கே");
uv = uv.replace(/koo/g, "கோ");
uv = uv.replace(/kaa/g, "கா");
uv = uv.replace(/kuu/g, "கூ");
uv = uv.replace(/kii/g, "கீ");
uv = uv.replace(/ka/g, "க");
uv = uv.replace(/ki/g, "கி");
uv = uv.replace(/kI/g, "கீ");
uv = uv.replace(/kA/g, "கா");
uv = uv.replace(/ke/g, "கெ");
uv = uv.replace(/kE/g, "கே");
uv = uv.replace(/ko/g, "கொ");
uv = uv.replace(/kO/g, "கோ");
uv = uv.replace(/ku/g, "கு");
uv = uv.replace(/kU/g, "கூ");

uv = uv.replace(/k/g, "க்");


uv = uv.replace(/-sau/g, "ஸௌ");
uv = uv.replace(/-sai/g, "ஸை");
uv = uv.replace(/-see/g, "ஸே");
uv = uv.replace(/-soo/g, "ஸோ");
uv = uv.replace(/-saa/g, "ஸா");
uv = uv.replace(/-suu/g, "ஸூ");
uv = uv.replace(/-sii/g, "ஸீ");
uv = uv.replace(/-sa/g, "ஸ");
uv = uv.replace(/-si/g, "ஸி");
uv = uv.replace(/-sI/g, "ஸீ");
uv = uv.replace(/-sA/g, "ஸா");
uv = uv.replace(/-se/g, "ஸெ");
uv = uv.replace(/-sE/g, "ஸே");
uv = uv.replace(/-so/g, "ஸொ");
uv = uv.replace(/-sO/g, "ஸோ");
uv = uv.replace(/-su/g, "ஸு");
uv = uv.replace(/-sU/g, "ஸூ");

uv = uv.replace(/-s/g, "ஸ்");

uv = uv.replace(/Sau/g, "ஸௌ");
uv = uv.replace(/Sai/g, "ஸை");
uv = uv.replace(/See/g, "ஸே");
uv = uv.replace(/Soo/g, "ஸோ");
uv = uv.replace(/Saa/g, "ஸா");
uv = uv.replace(/Suu/g, "ஸூ");
uv = uv.replace(/Sii/g, "ஸீ");
uv = uv.replace(/Sa/g, "ஸ");
uv = uv.replace(/Si/g, "ஸி");
uv = uv.replace(/SI/g, "ஸீ");
uv = uv.replace(/SA/g, "ஸா");
uv = uv.replace(/Se/g, "ஸெ");
uv = uv.replace(/SE/g, "ஸே");
uv = uv.replace(/So/g, "ஸொ");
uv = uv.replace(/SO/g, "ஸோ");
uv = uv.replace(/Su/g, "ஸு");
uv = uv.replace(/SU/g, "ஸூ");

uv = uv.replace(/S/g, "ஸ்");


uv = uv.replace(/rau/g, "ரௌ");
uv = uv.replace(/rai/g, "ரை");
uv = uv.replace(/ree/g, "ரே");
uv = uv.replace(/roo/g, "ரோ");
uv = uv.replace(/raa/g, "ரா");
uv = uv.replace(/ruu/g, "ரூ");
uv = uv.replace(/rii/g, "ரீ");
uv = uv.replace(/ra/g, "ர");
uv = uv.replace(/ri/g, "ரி");
uv = uv.replace(/rI/g, "ரீ");
uv = uv.replace(/rA/g, "ரா");
uv = uv.replace(/re/g, "ரெ");
uv = uv.replace(/rE/g, "ரே");
uv = uv.replace(/ro/g, "ரொ");
uv = uv.replace(/rO/g, "ரோ");
uv = uv.replace(/ru/g, "ரு");
uv = uv.replace(/rU/g, "ரூ");

uv = uv.replace(/r/g, "ர்");

uv = uv.replace(/Rau/g, "றௌ");
uv = uv.replace(/Rai/g, "றை");
uv = uv.replace(/Ree/g, "றே");
uv = uv.replace(/Roo/g, "றோ");
uv = uv.replace(/Raa/g, "றா");
uv = uv.replace(/Ruu/g, "றூ");
uv = uv.replace(/Rii/g, "றீ");
uv = uv.replace(/Ra/g, "ற");
uv = uv.replace(/Ri/g, "றி");
uv = uv.replace(/RI/g, "றீ");
uv = uv.replace(/RA/g, "றா");
uv = uv.replace(/Re/g, "றெ");
uv = uv.replace(/RE/g, "றே");
uv = uv.replace(/Ro/g, "றொ");
uv = uv.replace(/RO/g, "றோ");
uv = uv.replace(/Ru/g, "று");
uv = uv.replace(/RU/g, "றூ");

uv = uv.replace(/R/g, "ற்");

uv = uv.replace(/tau/g, "டௌ");
uv = uv.replace(/tai/g, "டை");
uv = uv.replace(/tee/g, "டே");
uv = uv.replace(/too/g, "டோ");
uv = uv.replace(/taa/g, "டா");
uv = uv.replace(/tuu/g, "டூ");
uv = uv.replace(/tii/g, "டீ");
uv = uv.replace(/ta/g, "ட");
uv = uv.replace(/ti/g, "டி");
uv = uv.replace(/tI/g, "டீ");
uv = uv.replace(/tA/g, "டா");
uv = uv.replace(/te/g, "டெ");
uv = uv.replace(/tE/g, "டே");
uv = uv.replace(/to/g, "டொ");
uv = uv.replace(/tO/g, "டோ");
uv = uv.replace(/tu/g, "டு");
uv = uv.replace(/tU/g, "டூ");

uv = uv.replace(/t/g, "ட்");



uv = uv.replace(/sau/g, "சௌ");
uv = uv.replace(/sai/g, "சை");
uv = uv.replace(/see/g, "சே");
uv = uv.replace(/soo/g, "சோ");
uv = uv.replace(/saa/g, "சா");
uv = uv.replace(/suu/g, "சூ");
uv = uv.replace(/sii/g, "சீ");
uv = uv.replace(/sa/g, "ச");
uv = uv.replace(/si/g, "சி");
uv = uv.replace(/sI/g, "சீ");
uv = uv.replace(/sA/g, "சா");
uv = uv.replace(/se/g, "செ");
uv = uv.replace(/sE/g, "சே");
uv = uv.replace(/so/g, "சொ");
uv = uv.replace(/sO/g, "சோ");
uv = uv.replace(/su/g, "சு");
uv = uv.replace(/sU/g, "சூ");

uv = uv.replace(/s/g, "ச்");
uv = uv.replace(/pau/g, "பௌ");
uv = uv.replace(/pai/g, "பை");
uv = uv.replace(/pee/g, "பே");
uv = uv.replace(/poo/g, "போ");
uv = uv.replace(/paa/g, "பா");
uv = uv.replace(/puu/g, "பூ");
uv = uv.replace(/pii/g, "பீ");
uv = uv.replace(/pa/g, "ப");
uv = uv.replace(/pi/g, "பி");
uv = uv.replace(/pI/g, "பீ");
uv = uv.replace(/pA/g, "பா");
uv = uv.replace(/pe/g, "பெ");
uv = uv.replace(/pE/g, "பே");
uv = uv.replace(/po/g, "பொ");
uv = uv.replace(/pO/g, "போ");
uv = uv.replace(/pu/g, "பு");
uv = uv.replace(/pU/g, "பூ");

uv = uv.replace(/p/g, "ப்");

uv = uv.replace(/bau/g, "பௌ");
uv = uv.replace(/bai/g, "பை");
uv = uv.replace(/bee/g, "பே");
uv = uv.replace(/boo/g, "போ");
uv = uv.replace(/baa/g, "பா");
uv = uv.replace(/buu/g, "பூ");
uv = uv.replace(/bii/g, "பீ");
uv = uv.replace(/ba/g, "ப");
uv = uv.replace(/bi/g, "பி");
uv = uv.replace(/bI/g, "பீ");
uv = uv.replace(/bA/g, "பா");
uv = uv.replace(/be/g, "பெ");
uv = uv.replace(/bE/g, "பே");
uv = uv.replace(/bo/g, "பொ");
uv = uv.replace(/bO/g, "போ");
uv = uv.replace(/bu/g, "பு");
uv = uv.replace(/bU/g, "பூ");

uv = uv.replace(/b/g, "ப்");
uv = uv.replace(/mau/g, "மௌ");
uv = uv.replace(/mai/g, "மை");
uv = uv.replace(/mee/g, "மே");
uv = uv.replace(/moo/g, "மோ");
uv = uv.replace(/maa/g, "மா");
uv = uv.replace(/muu/g, "மூ");
uv = uv.replace(/mii/g, "மீ");
uv = uv.replace(/ma/g, "ம");
uv = uv.replace(/mi/g, "மி");
uv = uv.replace(/mI/g, "மீ");
uv = uv.replace(/mA/g, "மா");
uv = uv.replace(/me/g, "மெ");
uv = uv.replace(/mE/g, "மே");
uv = uv.replace(/mo/g, "மொ");
uv = uv.replace(/mO/g, "மோ");
uv = uv.replace(/mu/g, "மு");
uv = uv.replace(/mU/g, "மூ");

uv = uv.replace(/m/g, "ம்");

uv = uv.replace(/yau/g, "யௌ");
uv = uv.replace(/yai/g, "யை");
uv = uv.replace(/yee/g, "யே");
uv = uv.replace(/yoo/g, "யோ");
uv = uv.replace(/yaa/g, "யா");
uv = uv.replace(/yuu/g, "யூ");
uv = uv.replace(/yii/g, "யீ");
uv = uv.replace(/ya/g, "ய");
uv = uv.replace(/yi/g, "யி");
uv = uv.replace(/yI/g, "யீ");
uv = uv.replace(/yA/g, "யா");
uv = uv.replace(/ye/g, "யெ");
uv = uv.replace(/yE/g, "யே");
uv = uv.replace(/yo/g, "யொ");
uv = uv.replace(/yO/g, "யோ");
uv = uv.replace(/yu/g, "யு");
uv = uv.replace(/yU/g, "யூ");

uv = uv.replace(/y/g, "ய்");


uv = uv.replace(/dau/g, "டௌ");
uv = uv.replace(/dai/g, "டை");
uv = uv.replace(/dee/g, "டே");
uv = uv.replace(/doo/g, "டோ");
uv = uv.replace(/daa/g, "டா");
uv = uv.replace(/duu/g, "டூ");
uv = uv.replace(/dii/g, "டீ");
uv = uv.replace(/da/g, "ட");
uv = uv.replace(/di/g, "டி");
uv = uv.replace(/dI/g, "டீ");
uv = uv.replace(/dA/g, "டா");
uv = uv.replace(/de/g, "டெ");
uv = uv.replace(/dE/g, "டே");
uv = uv.replace(/do/g, "டொ");
uv = uv.replace(/dO/g, "டோ");
uv = uv.replace(/du/g, "டு");
uv = uv.replace(/dU/g, "டூ");

uv = uv.replace(/d/g, "ட்");


uv = uv.replace(/nau/g, "னௌ");
uv = uv.replace(/nai/g, "னை");
uv = uv.replace(/nee/g, "னே");
uv = uv.replace(/noo/g, "னோ");
uv = uv.replace(/naa/g, "னா");
uv = uv.replace(/nuu/g, "னூ");
uv = uv.replace(/nii/g, "னீ");
uv = uv.replace(/na/g, "ன");
uv = uv.replace(/ni/g, "னி");
uv = uv.replace(/nI/g, "னீ");
uv = uv.replace(/nA/g, "னா");
uv = uv.replace(/ne/g, "னெ");
uv = uv.replace(/nE/g, "னே");
uv = uv.replace(/no/g, "னொ");
uv = uv.replace(/nO/g, "னோ");
uv = uv.replace(/nu/g, "னு");
uv = uv.replace(/nU/g, "னூ");

uv = uv.replace(/n/g, "ன்");

uv = uv.replace(/Nau/g, "ணௌ");
uv = uv.replace(/Nai/g, "ணை");
uv = uv.replace(/Nee/g, "ணே");
uv = uv.replace(/Noo/g, "ணோ");
uv = uv.replace(/Naa/g, "ணா");
uv = uv.replace(/Nuu/g, "ணூ");
uv = uv.replace(/Nii/g, "ணீ");
uv = uv.replace(/Na/g, "ண");
uv = uv.replace(/Ni/g, "ணி");
uv = uv.replace(/NI/g, "ணீ");
uv = uv.replace(/NA/g, "ணா");
uv = uv.replace(/Ne/g, "ணெ");
uv = uv.replace(/NE/g, "ணே");
uv = uv.replace(/No/g, "ணொ");
uv = uv.replace(/NO/g, "ணோ");
uv = uv.replace(/Nu/g, "ணு");
uv = uv.replace(/NU/g, "ணூ");

uv = uv.replace(/N/g, "ண்");
uv = uv.replace(/lau/g, "லௌ");
uv = uv.replace(/lai/g, "லை");
uv = uv.replace(/lee/g, "லே");
uv = uv.replace(/loo/g, "லோ");
uv = uv.replace(/laa/g, "லா");
uv = uv.replace(/luu/g, "லூ");
uv = uv.replace(/lii/g, "லீ");
uv = uv.replace(/la/g, "ல");
uv = uv.replace(/li/g, "லி");
uv = uv.replace(/lI/g, "லீ");
uv = uv.replace(/lA/g, "லா");
uv = uv.replace(/le/g, "லெ");
uv = uv.replace(/lE/g, "லே");
uv = uv.replace(/lo/g, "லொ");
uv = uv.replace(/lO/g, "லோ");
uv = uv.replace(/lu/g, "லு");
uv = uv.replace(/lU/g, "லூ");

uv = uv.replace(/l/g, "ல்");
uv = uv.replace(/Lau/g, "ளௌ");
uv = uv.replace(/Lai/g, "ளை");
uv = uv.replace(/Lee/g, "ளே");
uv = uv.replace(/Loo/g, "ளோ");
uv = uv.replace(/Laa/g, "ளா");
uv = uv.replace(/Luu/g, "ளூ");
uv = uv.replace(/Lii/g, "ளீ");
uv = uv.replace(/La/g, "ள");
uv = uv.replace(/Li/g, "ளி");
uv = uv.replace(/LI/g, "ளீ");
uv = uv.replace(/LA/g, "ளா");
uv = uv.replace(/Le/g, "ளெ");
uv = uv.replace(/LE/g, "ளே");
uv = uv.replace(/Lo/g, "ளொ");
uv = uv.replace(/LO/g, "ளோ");
uv = uv.replace(/Lu/g, "ளு");
uv = uv.replace(/LU/g, "ளூ");

uv = uv.replace(/L/g, "ள்");



uv = uv.replace(/vau/g, "வௌ");
uv = uv.replace(/vai/g, "வை");
uv = uv.replace(/vee/g, "வே");
uv = uv.replace(/voo/g, "வோ");
uv = uv.replace(/vaa/g, "வா");
uv = uv.replace(/vuu/g, "வூ");
uv = uv.replace(/vii/g, "வீ");
uv = uv.replace(/va/g, "வ");
uv = uv.replace(/vi/g, "வி");
uv = uv.replace(/vI/g, "வீ");
uv = uv.replace(/vA/g, "வா");
uv = uv.replace(/ve/g, "வெ");
uv = uv.replace(/vE/g, "வே");
uv = uv.replace(/vo/g, "வொ");
uv = uv.replace(/vO/g, "வோ");
uv = uv.replace(/vu/g, "வு");
uv = uv.replace(/vU/g, "வூ");

uv = uv.replace(/v/g, "வ்");





uv = uv.replace(/gau/g, "கௌ");
uv = uv.replace(/gai/g, "கை");
uv = uv.replace(/gee/g, "கே");
uv = uv.replace(/goo/g, "கோ");
uv = uv.replace(/gaa/g, "கா");
uv = uv.replace(/guu/g, "கூ");
uv = uv.replace(/gii/g, "கீ");
uv = uv.replace(/ga/g, "க");
uv = uv.replace(/gi/g, "கி");
uv = uv.replace(/gI/g, "கீ");
uv = uv.replace(/gA/g, "கா");
uv = uv.replace(/ge/g, "கெ");
uv = uv.replace(/gE/g, "கே");
uv = uv.replace(/go/g, "கொ");
uv = uv.replace(/gO/g, "கோ");
uv = uv.replace(/gu/g, "கு");
uv = uv.replace(/gU/g, "கூ");

uv = uv.replace(/g/g, "க்");














uv = uv.replace(/au/g, "ஔ");
uv = uv.replace(/ai/g, "ஐ");
uv = uv.replace(/aa/g, "ஆ");
uv = uv.replace(/ee/g, "ஏ");
uv = uv.replace(/ii/g, "ஈ");
uv = uv.replace(/uu/g, "ஊ");
uv = uv.replace(/oo/g, "ஓ");




uv = uv.replace(/-1000/g, "௲");

uv = uv.replace(/-100/g, "௱");

uv = uv.replace(/-10/g, "௰");
uv = uv.replace(/-1/g, "௧");

uv = uv.replace(/-2/g, "௨");
uv = uv.replace(/-3/g, "௩");

uv = uv.replace(/-4/g, "௪");
uv = uv.replace(/-5/g, "௫");

uv = uv.replace(/-6/g, "௬");
uv = uv.replace(/-7/g, "௭");

uv = uv.replace(/-8/g, "௮");
uv = uv.replace(/-9/g, "௯");




uv = uv.replace(/i/g, "இ");
uv = uv.replace(/I/g, "ஈ");



uv = uv.replace(/a/g, "அ");

uv = uv.replace(/A/g, "ஆ");

uv = uv.replace(/e/g, "எ");
uv = uv.replace(/E/g, "ஏ");
uv = uv.replace(/i/g, "இ");
uv = uv.replace(/I/g, "ஈ");
uv = uv.replace(/u/g, "உ");
uv = uv.replace(/U/g, "ஊ");
uv = uv.replace(/o/g, "ஒ");
uv = uv.replace(/O/g, "ஓ");

uv = uv.replace(/q/g, "ஃ");



document.tamil_unicode_utf8.destination.value=uv;
}

function convert_tab_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/þ/g, "க்ஷ");
uv = uv.replace(/þ£/g, "க்ஷா");

uv = uv.replace(/þ¤/g, "க்ஷி");
uv = uv.replace(/þ¦/g, "க்ஷீ");
uv = uv.replace(/þ§/g, "க்ஷு");
uv = uv.replace(/þ¨/g, "க்ஷூ");
uv = uv.replace(/ªþ/g, "க்ஷெ");
uv = uv.replace(/«þ/g, "க்ஷே");
uv = uv.replace(/ªþ£/g, "க்ஷொ");
uv = uv.replace(/«þ£/g, "க்ஷோ");
uv = uv.replace(/ªþ÷/g, "க்ஷௌ");
uv = uv.replace(/¬þ/g, "க்ஷை");
uv = uv.replace(/þ¢/g, "க்ஷ்");


uv = uv.replace(/ªè÷/g, "கௌ");
uv = uv.replace(/«è£/g, "கோ");
uv = uv.replace(/ªè£/g, "கொ");
uv = uv.replace(/è£/g, "கா");
uv = uv.replace(/è¤/g, "கி");
uv = uv.replace(/è¦/g, "கீ");
uv = uv.replace(/°/g, "கு");
uv = uv.replace(/Ã/g, "கூ");
uv = uv.replace(/ªè/g, "கெ");
uv = uv.replace(/«è/g, "கே");
uv = uv.replace(/¬è/g, "கை")
uv = uv.replace(/è¢/g, "க்");
uv = uv.replace(/è/g, "க");///////

uv = uv.replace(/ªé÷/g, "ஙௌ");
uv = uv.replace(/«é£/g, "ஙோ");
uv = uv.replace(/ªé£/g, "ஙொ");
uv = uv.replace(/é£/g, "ஙா");
uv = uv.replace(/é¤/g, "ஙி");
uv = uv.replace(/é¦/g, "ஙீ");
uv = uv.replace(/±/g, "ஙு");
uv = uv.replace(/Ä/g, "ஙூ");
uv = uv.replace(/ªé/g, "ஙெ");
uv = uv.replace(/«é/g, "ஙே");
uv = uv.replace(/¬é/g, "ஙை")
uv = uv.replace(/é¢/g, "ங்");
uv = uv.replace(/é/g, "ங");////





uv = uv.replace(/ªê÷/g, "சௌ");
uv = uv.replace(/«ê£/g, "சோ");
uv = uv.replace(/ªê£/g, "சொ");
uv = uv.replace(/ê£/g, "சா");
uv = uv.replace(/ê¤/g, "சி");
uv = uv.replace(/ê¦/g, "சீ");
uv = uv.replace(/²/g, "சு");
uv = uv.replace(/Å/g, "சூ");
uv = uv.replace(/ªê/g, "செ");
uv = uv.replace(/«ê/g, "சே");
uv = uv.replace(/¬ê/g, "சை")
uv = uv.replace(/ê¢/g, "ச்");
uv = uv.replace(/ê/g, "ச");/////

uv = uv.replace(/ªü÷/g, "ஜௌ");
uv = uv.replace(/«ü£/g, "ஜோ");
uv = uv.replace(/ªü£/g, "ஜொ");
uv = uv.replace(/ü£/g, "ஜா");
uv = uv.replace(/ü¤/g, "ஜி");
uv = uv.replace(/ü¦/g, "ஜீ");
uv = uv.replace(/ü§/g, "ஜு");
uv = uv.replace(/ü¨/g, "ஜூ");
uv = uv.replace(/ªü/g, "ஜெ");
uv = uv.replace(/«ü/g, "ஜே");
uv = uv.replace(/¬ü/g, "ஜை")
uv = uv.replace(/ü¢/g, "ஜ்");
uv = uv.replace(/ü/g, "ஜ");/////


uv = uv.replace(/ªë÷/g, "ஞௌ");
uv = uv.replace(/«ë£/g, "ஞோ");
uv = uv.replace(/ªë£/g, "ஞொ");
uv = uv.replace(/ë£/g, "ஞா");
uv = uv.replace(/ë¤/g, "ஞி");
uv = uv.replace(/ë¦/g, "ஞீ");
uv = uv.replace(/³/g, "ஞு");
uv = uv.replace(/Æ/g, "ஞூ");
uv = uv.replace(/ªë/g, "ஞெ");
uv = uv.replace(/«ë/g, "ஞே");
uv = uv.replace(/¬ë/g, "ஞை")
uv = uv.replace(/ë¢/g, "ஞ்");
uv = uv.replace(/ë/g, "ஞ");/////


uv = uv.replace(/ªì÷/g, "டௌ");
uv = uv.replace(/«ì£/g, "டோ");
uv = uv.replace(/ªì£/g, "டொ");
uv = uv.replace(/ì£/g, "டா");
uv = uv.replace(/ì¤/g, "டி");
uv = uv.replace(/®/g, "டி");
uv = uv.replace(/¯/g, "டீ");
uv = uv.replace(/ì¦/g, "டீ");
uv = uv.replace(/´/g, "டு");
uv = uv.replace(/Ç/g, "டூ");
uv = uv.replace(/ªì/g, "டெ");
uv = uv.replace(/«ì/g, "டே");
uv = uv.replace(/¬ì/g, "டை")
uv = uv.replace(/ì¢/g, "ட்");
uv = uv.replace(/ì/g, "ட");/////

uv = uv.replace(/ªí÷/g, "ணௌ");
uv = uv.replace(/«í£/g, "ணோ");
uv = uv.replace(/ªí£/g, "ணொ");
uv = uv.replace(/í£/g, "ணா");
uv = uv.replace(/í¤/g, "ணி");
uv = uv.replace(/í¦/g, "ணீ");
uv = uv.replace(/µ/g, "ணு");
uv = uv.replace(/È/g, "ணூ");
uv = uv.replace(/ªí/g, "ணெ");
uv = uv.replace(/«í/g, "ணே");
uv = uv.replace(/¬í/g, "ணை")
uv = uv.replace(/í¢/g, "ண்");
uv = uv.replace(/í/g, "ண");/////


uv = uv.replace(/ªî÷/g, "தௌ");
uv = uv.replace(/«î£/g, "தோ");
uv = uv.replace(/ªî£/g, "தொ");
uv = uv.replace(/î£/g, "தா");
uv = uv.replace(/î¤/g, "தி");
uv = uv.replace(/î¦/g, "தீ");
uv = uv.replace(/¶/g, "து");
uv = uv.replace(/É/g, "தூ");
uv = uv.replace(/ªî/g, "தெ");
uv = uv.replace(/«î/g, "தே");
uv = uv.replace(/¬î/g, "தை")
uv = uv.replace(/î¢/g, "த்");
uv = uv.replace(/î/g, "த");/////


uv = uv.replace(/ªï÷/g, "நௌ");
uv = uv.replace(/«ï£/g, "நோ");
uv = uv.replace(/ªï£/g, "நொ");
uv = uv.replace(/ï£/g, "நா");
uv = uv.replace(/ï¤/g, "நி");
uv = uv.replace(/ï¦/g, "நீ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/Ë/g, "நூ");
uv = uv.replace(/ªï/g, "நெ");
uv = uv.replace(/«ï/g, "நே");
uv = uv.replace(/¬ï/g, "நை")
uv = uv.replace(/ï¢/g, "ந்");
uv = uv.replace(/ï/g, "ந");/////


uv = uv.replace(/ªù÷/g, "னௌ");
uv = uv.replace(/«ù£/g, "னோ");
uv = uv.replace(/ªù£/g, "னொ");
uv = uv.replace(/ù£/g, "னா");
uv = uv.replace(/ù¤/g, "னி");
uv = uv.replace(/ù¦/g, "னீ");
uv = uv.replace(/Â/g, "னு");
uv = uv.replace(/Û/g, "னூ");
uv = uv.replace(/ªù/g, "னெ");
uv = uv.replace(/«ù/g, "னே");
uv = uv.replace(/¬ù/g, "னை")
uv = uv.replace(/ù¢/g, "ன்");
uv = uv.replace(/ù/g, "ன");/////


uv = uv.replace(/ªð÷/g, "பௌ");
uv = uv.replace(/«ð£/g, "போ");
uv = uv.replace(/ªð£/g, "பொ");
uv = uv.replace(/ð£/g, "பா");
uv = uv.replace(/ð¤/g, "பி");
uv = uv.replace(/ð¦/g, "பீ");
uv = uv.replace(/¹/g, "பு");
uv = uv.replace(/Ì/g, "பூ");
uv = uv.replace(/ªð/g, "பெ");
uv = uv.replace(/«ð/g, "பே");
uv = uv.replace(/¬ð/g, "பை")
uv = uv.replace(/ð¢/g, "ப்");
uv = uv.replace(/ð/g, "ப");/////


uv = uv.replace(/ªñ÷/g, "மௌ");
uv = uv.replace(/«ñ£/g, "மோ");
uv = uv.replace(/ªñ£/g, "மொ");
uv = uv.replace(/ñ£/g, "மா");
uv = uv.replace(/ñ¤/g, "மி");
uv = uv.replace(/ñ¦/g, "மீ");
uv = uv.replace(/º/g, "மு");
uv = uv.replace(/Í/g, "மூ");
uv = uv.replace(/ªñ/g, "மெ");
uv = uv.replace(/«ñ/g, "மே");
uv = uv.replace(/¬ñ/g, "மை")
uv = uv.replace(/ñ¢/g, "ம்");
uv = uv.replace(/ñ/g, "ம");/////




uv = uv.replace(/ªò÷/g, "யௌ");
uv = uv.replace(/«ò£/g, "யோ");
uv = uv.replace(/ªò£/g, "யொ");
uv = uv.replace(/ò£/g, "யா");
uv = uv.replace(/ò¤/g, "யி");
uv = uv.replace(/ò¦/g, "யீ");
uv = uv.replace(/»/g, "யு");
uv = uv.replace(/Î/g, "யூ");
uv = uv.replace(/ªò/g, "யெ");
uv = uv.replace(/«ò/g, "யே");
uv = uv.replace(/¬ò/g, "யை")
uv = uv.replace(/ò¢/g, "ய்");
uv = uv.replace(/ò/g, "ய");/////

uv = uv.replace(/ªó÷/g, "ரௌ");
uv = uv.replace(/«ó£/g, "ரோ");
uv = uv.replace(/ªó£/g, "ரொ");
uv = uv.replace(/ó£/g, "ரா");
uv = uv.replace(/ó¤/g, "ரி");
uv = uv.replace(/ó¦/g, "ரீ");
uv = uv.replace(/¼/g, "ரு");
uv = uv.replace(/Ï/g, "ரூ");
uv = uv.replace(/ªó/g, "ரெ");
uv = uv.replace(/«ó/g, "ரே");
uv = uv.replace(/¬ó/g, "ரை")
uv = uv.replace(/ó¢/g, "ர்");
uv = uv.replace(/ó/g, "ர");/////


uv = uv.replace(/ªô÷/g, "லௌ");
uv = uv.replace(/«ô£/g, "லோ");
uv = uv.replace(/ªô£/g, "லொ");
uv = uv.replace(/ô£/g, "லா");
uv = uv.replace(/ô¤/g, "லி");
uv = uv.replace(/ô¦/g, "லீ");
uv = uv.replace(/½/g, "லு");
uv = uv.replace(/Ö/g, "லூ");
uv = uv.replace(/ªô/g, "லெ");
uv = uv.replace(/«ô/g, "லே");
uv = uv.replace(/¬ô/g, "லை")
uv = uv.replace(/ô¢/g, "ல்");
uv = uv.replace(/ô/g, "ல");/////

uv = uv.replace(/ª÷÷/g, "ளௌ");
uv = uv.replace(/«÷£/g, "ளோ");
uv = uv.replace(/ª÷£/g, "ளொ");
uv = uv.replace(/÷£/g, "ளா");
uv = uv.replace(/÷¤/g, "ளி");
uv = uv.replace(/÷¦/g, "ளீ");
uv = uv.replace(/À/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/ª÷/g, "ளெ");
uv = uv.replace(/«÷/g, "ளே");
uv = uv.replace(/¬÷/g, "ளை")
uv = uv.replace(/÷¢/g, "ள்");
uv = uv.replace(/÷/g, "ள");/////




uv = uv.replace(/ªõ÷/g, "வௌ");
uv = uv.replace(/«õ£/g, "வோ");
uv = uv.replace(/ªõ£/g, "வொ");
uv = uv.replace(/õ£/g, "வா");
uv = uv.replace(/õ¤/g, "வி");
uv = uv.replace(/õ¦/g, "வீ");
uv = uv.replace(/¾/g, "வு");
uv = uv.replace(/×/g, "வூ");
uv = uv.replace(/ªõ/g, "வெ");
uv = uv.replace(/«õ/g, "வே");
uv = uv.replace(/¬õ/g, "வை")
uv = uv.replace(/õ¢/g, "வ்");
uv = uv.replace(/õ/g, "வ");/////


uv = uv.replace(/ªö÷/g, "ழௌ");
uv = uv.replace(/«ö£/g, "ழோ");
uv = uv.replace(/ªö£/g, "ழொ");
uv = uv.replace(/ö£/g, "ழா");
uv = uv.replace(/ö¤/g, "ழி");
uv = uv.replace(/ö¦/g, "ழீ");
uv = uv.replace(/¿/g, "ழு");
uv = uv.replace(/Ø/g, "ழூ");
uv = uv.replace(/ªö/g, "ழெ");
uv = uv.replace(/«ö/g, "ழே");
uv = uv.replace(/¬ö/g, "ழை")
uv = uv.replace(/ö¢/g, "ழ்");
uv = uv.replace(/ö/g, "ழ");/////


uv = uv.replace(/ªø÷/g, "றௌ");
uv = uv.replace(/«ø£/g, "றோ");
uv = uv.replace(/ªø£/g, "றொ");
uv = uv.replace(/ø£/g, "றா");
uv = uv.replace(/ø¤/g, "றி");
uv = uv.replace(/ø¦/g, "றீ");
uv = uv.replace(/Á/g, "று");
uv = uv.replace(/Ú/g, "றூ");
uv = uv.replace(/ªø/g, "றெ");
uv = uv.replace(/«ø/g, "றே");
uv = uv.replace(/¬ø/g, "றை")
uv = uv.replace(/ø¢/g, "ற்");
uv = uv.replace(/ø/g, "ற");/////
uv = uv.replace(/ªý÷/g, "ஹௌ");
uv = uv.replace(/«ý£/g, "ஹோ");
uv = uv.replace(/ªý£/g, "ஹொ");
uv = uv.replace(/ý£/g, "ஹா");
uv = uv.replace(/ý¤/g, "ஹி");
uv = uv.replace(/ý¦/g, "ஹீ");

uv = uv.replace(/ªý/g, "ஹெ");
uv = uv.replace(/«ý/g, "ஹே");
uv = uv.replace(/¬ý/g, "ஹை")
uv = uv.replace(/ý¢/g, "ஹ்");
uv = uv.replace(/ý/g, "ஹ");/////


uv = uv.replace(/ªû÷/g, "ஷௌ");
uv = uv.replace(/«û£/g, "ஷோ");
uv = uv.replace(/ªû£/g, "ஷொ");
uv = uv.replace(/û£/g, "ஷா");
uv = uv.replace(/û¤/g, "ஷி");
uv = uv.replace(/û¦/g, "ஷீ");

uv = uv.replace(/ªû/g, "ஷெ");
uv = uv.replace(/«û/g, "ஷே");
uv = uv.replace(/¬û/g, "ஷை")
uv = uv.replace(/û¢/g, "ஷ்");
uv = uv.replace(/û/g, "ஷ");/////

uv = uv.replace(/ªú÷/g, "ஸௌ");
uv = uv.replace(/«ú£/g, "ஸோ");
uv = uv.replace(/ªú£/g, "ஸொ");
uv = uv.replace(/ú£/g, "ஸா");
uv = uv.replace(/ú¤/g, "ஸி");
uv = uv.replace(/ú¦/g, "ஸீ");

uv = uv.replace(/ªú/g, "ஸெ");
uv = uv.replace(/«ú/g, "ஸே");
uv = uv.replace(/¬ú/g, "ஸை")
uv = uv.replace(/ú¢/g, "ஸ்");
uv = uv.replace(/ú/g, "ஸ");/////




uv = uv.replace(/Ü/g, "அ");
uv = uv.replace(/Ý/g, "ஆ");
uv = uv.replace(/Þ/g, "இ");
uv = uv.replace(/ß/g, "ஈ");
uv = uv.replace(/à/g, "உ");
uv = uv.replace(/á/g, "ஊ");
uv = uv.replace(/â/g, "எ");
uv = uv.replace(/ã/g, "ஏ");
uv = uv.replace(/ä/g, "ஐ");
uv = uv.replace(/å/g, "ஒ")
uv = uv.replace(/æ/g, "ஓ");
uv = uv.replace(/å÷/g, "ஔ");



uv = uv.replace(/ç/g, "ஃ");


uv = uv.replace(/‚/g, "௧");
uv = uv.replace(/ƒ/g, "௨");
uv = uv.replace(/„/g, "௩");
uv = uv.replace(/…/g, "௪");
uv = uv.replace(/†/g, "௫");
uv = uv.replace(/—/g, "௰");
uv = uv.replace(/˜/g, "௱");
uv = uv.replace(/–/g, "௲");
uv = uv.replace(//g, "௯");
uv = uv.replace(/ˆ/g, "௭");
uv = uv.replace(/‰/g, "௮")
uv = uv.replace(/Ã/g, "௬");
uv = uv.replace(/ÿ/g, "ஸ்ரீ");




document.tamil_unicode_utf8.destination.value=uv;
}

function convert_tam_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/þ/g, "க்ஷ");
uv = uv.replace(/þ£/g, "க்ஷா");
uv = uv.replace(/¬þ/g, "க்ஷை");
uv = uv.replace(/V/g, "க்ஷி");
uv = uv.replace(/r/g, "க்ஷீ");
uv = uv.replace(/þ§/g, "க்ஷு");
uv = uv.replace(/þ¨/g, "க்ஷூ");
uv = uv.replace(/ªþ/g, "க்ஷெ");
uv = uv.replace(/«þ/g, "க்ஷே");
uv = uv.replace(/ªþ£/g, "க்ஷொ");
uv = uv.replace(/«þ£/g, "க்ஷோ");
uv = uv.replace(/ªþ÷/g, "க்ஷௌ");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/ªü÷/g, "ஜௌ");
uv = uv.replace(/«ü£/g, "ஜோ");
uv = uv.replace(/ªü£/g, "ஜொ");
uv = uv.replace(/ü£/g, "ஜா");
uv = uv.replace(/T/g, "ஜி");
uv = uv.replace(/p/g, "ஜீ");
uv = uv.replace(/ü§/g, "ஜு");
uv = uv.replace(/ü¨/g, "ஜூ");
uv = uv.replace(/ªü/g, "ஜெ");
uv = uv.replace(/«ü/g, "ஜே");
uv = uv.replace(/¬ü/g, "ஜை");
uv = uv.replace(/ªü£/g, "ஜொ")
uv = uv.replace(/x/g, "ஜ்");
uv = uv.replace(/ü/g, "ஜ");




uv = uv.replace(/ªè÷/g, "கௌ");
uv = uv.replace(/«è£/g, "கோ");
uv = uv.replace(/ªè£/g, "கொ");
uv = uv.replace(/è£/g, "கா");
uv = uv.replace(/A/g, "கி");
uv = uv.replace(/W/g, "கீ");
uv = uv.replace(/°/g, "கு");
uv = uv.replace(/Ã/g, "கூ");
uv = uv.replace(/ªè/g, "கெ");
uv = uv.replace(/«è/g, "கே");
uv = uv.replace(/¬è/g, "கை");
uv = uv.replace(/‚/g, "க்");
uv = uv.replace(/è/g, "க");/////////////


uv = uv.replace(/ªé÷/g, "ஙௌ");
uv = uv.replace(/«é£/g, "ஙோ");
uv = uv.replace(/ªé£/g, "ஙொ");
uv = uv.replace(/é£/g, "ஙா");
uv = uv.replace(/B/g, "ஙி");
uv = uv.replace(/X/g, "ஙீ");
uv = uv.replace(/±/g, "ஙு");
uv = uv.replace(/Ä/g, "ஙூ"); 
uv = uv.replace(/ªé/g, "ஙெ");
uv = uv.replace(/«é/g, "ஙே");
uv = uv.replace(/¬é/g, "ஙை");
uv = uv.replace(/ƒ/g, "ங்");
uv = uv.replace(/é/g, "ங");
uv = uv.replace(/ªê÷/g, "சௌ");
uv = uv.replace(/«ê£/g, "சோ");
uv = uv.replace(/ªê£/g, "சொ");
uv = uv.replace(/ê£/g, "சா");
uv = uv.replace(/C/g, "சி");
uv = uv.replace(/Y/g, "சீ");
uv = uv.replace(/²/g, "சு");
uv = uv.replace(/Å/g, "சூ");
uv = uv.replace(/ªê/g, "செ");
uv = uv.replace(/«ê/g, "சே");
uv = uv.replace(/¬ê/g, "சை");
uv = uv.replace(/„/g, "ச்");
uv = uv.replace(/ê/g, "ச");////////


uv = uv.replace(/ªë\÷/g, "ஞௌ");
uv = uv.replace(/«ë£/g, "ஞோ");
uv = uv.replace(/ªë£/g, "ஞொ");
uv = uv.replace(/ë£/g, "ஞா");
uv = uv.replace(/D/g, "ஞி");
uv = uv.replace(/Z/g, "ஞீ");
uv = uv.replace(/³/g, "ஞு");
uv = uv.replace(/Æ/g, "ஞூ");
uv = uv.replace(/ªë/g, "ஞெ");
uv = uv.replace(/«ë/g, "ஞே");
uv = uv.replace(/¬ë/g, "ஞை");
uv = uv.replace(/…/g, "ஞ்");
uv = uv.replace(/ë/g, "ஞ");///////7

uv = uv.replace(/ªì÷/g, "டௌ");
uv = uv.replace(/«ì£/g, "டோ");
uv = uv.replace(/ªì£/g, "டொ");
uv = uv.replace(/ì£/g, "டா");
uv = uv.replace(/®/g, "டி");
uv = uv.replace(/¯/g, "டீ");
uv = uv.replace(/´/g, "டு");
uv = uv.replace(/Ç/g, "டூ");
uv = uv.replace(/ªì/g, "டெ");
uv = uv.replace(/«ì/g, "டே");
uv = uv.replace(/¬ì/g, "டை");
uv = uv.replace(/†/g, "ட்");
uv = uv.replace(/ì/g, "ட");/////
uv = uv.replace(/ªí÷/g, "ணௌ");
uv = uv.replace(/«í£/g, "ணோ");
uv = uv.replace(/ªí£/g, "ணொ");
uv = uv.replace(/í£/g, "ணா");
uv = uv.replace(/E/g, "ணி");
uv = uv.replace(/a/g, "ணீ");
uv = uv.replace(/µ/g, "ணு");
uv = uv.replace(/È/g, "ணூ");
uv = uv.replace(/ªí/g, "ணெ");
uv = uv.replace(/«í/g, "ணே");
uv = uv.replace(/¬í/g, "ணை");
uv = uv.replace(/‡/g, "ண்");
uv = uv.replace(/í/g, "ண");////7

uv = uv.replace(/ªî÷/g, "தௌ");
uv = uv.replace(/«î£/g, "தோ");
uv = uv.replace(/ªî£/g, "தொ");
uv = uv.replace(/î£/g, "தா");
uv = uv.replace(/F/g, "தி");
uv = uv.replace(/b/g, "தீ");
uv = uv.replace(/¶/g, "து");
uv = uv.replace(/É/g, "தூ");
uv = uv.replace(/ªî/g, "தெ");
uv = uv.replace(/«î/g, "தே");
uv = uv.replace(/¬î/g, "தை");
uv = uv.replace(/ˆ/g, "த்");
uv = uv.replace(/î/g, "த");///


uv = uv.replace(/ªï÷/g, "நௌ");
uv = uv.replace(/«ï£/g, "நோ");
uv = uv.replace(/ªï£/g, "நொ");
uv = uv.replace(/ï£/g, "நா");
uv = uv.replace(/G/g, "நி");
uv = uv.replace(/c/g, "நீ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/Ë/g, "நூ");
uv = uv.replace(/ªï/g, "நெ");
uv = uv.replace(/«ï/g, "நே");
uv = uv.replace(/¬ï/g, "நை");
uv = uv.replace(/ªï£/g, "நொ")
uv = uv.replace(/‰/g, "ந்");
uv = uv.replace(/ï/g, "ந");/////
uv = uv.replace(/ªù÷/g, "னௌ");
uv = uv.replace(/«ù£/g, "னோ");
uv = uv.replace(/ªù£/g, "னொ");
uv = uv.replace(/ù£/g, "னா");
uv = uv.replace(/Q/g, "னி");
uv = uv.replace(/m/g, "னீ");
uv = uv.replace(/Â/g, "னு");
uv = uv.replace(/Û/g, "னூ");
uv = uv.replace(/ªù/g, "னெ");
uv = uv.replace(/«ù/g, "னே");
uv = uv.replace(/¬ù/g, "னை");
uv = uv.replace(/ªù£/g, "னொ")
uv = uv.replace(/¡/g, "ன்");
uv = uv.replace(/ù/g, "ன");/////

uv = uv.replace(/ªð÷/g, "பௌ");
uv = uv.replace(/«ð£/g, "போ");
uv = uv.replace(/ªð£/g, "பொ");
uv = uv.replace(/ð£/g, "பா");
uv = uv.replace(/H/g, "பி");
uv = uv.replace(/d/g, "பீ");
uv = uv.replace(/¹/g, "பு");
uv = uv.replace(/Ì/g, "பூ");
uv = uv.replace(/ªð/g, "பெ");
uv = uv.replace(/«ð/g, "பே");
uv = uv.replace(/¬ð/g, "பை");
uv = uv.replace(/ªð£/g, "பொ")
uv = uv.replace(/Š/g, "ப்");
uv = uv.replace(/ð/g, "ப");////

uv = uv.replace(/ªñ÷/g, "மௌ");
uv = uv.replace(/«ñ£/g, "மோ");
uv = uv.replace(/ªñ£/g, "மொ");
uv = uv.replace(/ñ£/g, "மா");
uv = uv.replace(/I/g, "மி");
uv = uv.replace(/e/g, "மீ");
uv = uv.replace(/º/g, "மு");
uv = uv.replace(/Í/g, "மூ");
uv = uv.replace(/ªñ/g, "மெ");
uv = uv.replace(/«ñ/g, "மே");
uv = uv.replace(/¬ñ/g, "மை");
uv = uv.replace(/ªñ£/g, "மொ")
uv = uv.replace(/‹/g, "ம்");
uv = uv.replace(/ñ/g, "ம");////

uv = uv.replace(/ªò÷/g, "யௌ");
uv = uv.replace(/«ò£/g, "யோ");
uv = uv.replace(/ªò£/g, "ய");
uv = uv.replace(/ò£/g, "யா");
uv = uv.replace(/J/g, "யி");
uv = uv.replace(/f/g, "யீ");
uv = uv.replace(/»/g, "யு");
uv = uv.replace(/Î/g, "யூ");
uv = uv.replace(/ªò/g, "யெ");
uv = uv.replace(/«ò/g, "யே");
uv = uv.replace(/¬ò/g, "யை");
uv = uv.replace(/ªò£/g, "யொ")
uv = uv.replace(/Œ/g, "ய்");
uv = uv.replace(/ò/g, "ய");//////

uv = uv.replace(/ªó÷/g, "ரௌ");
uv = uv.replace(/«ó£/g, "ரோ");
uv = uv.replace(/ªó£/g, "ரொ");
uv = uv.replace(/ó£/g, "ரா");
uv = uv.replace(/K/g, "ரி");
uv = uv.replace(/g/g, "ரீ");
uv = uv.replace(/¼/g, "ரு");
uv = uv.replace(/Ï/g, "ரூ");
uv = uv.replace(/ªó/g, "ரெ");
uv = uv.replace(/«ó/g, "ரே");
uv = uv.replace(/¬ó/g, "ரை");
uv = uv.replace(/˜/g, "ர்");
uv = uv.replace(/ó/g, "ர");////

uv = uv.replace(/ªô÷/g, "லௌ");
uv = uv.replace(/«ô£/g, "லோ");
uv = uv.replace(/ªô£/g, "லொ");
uv = uv.replace(/ô£/g, "லா");
uv = uv.replace(/L/g, "லி");
uv = uv.replace(/h/g, "லீ");
uv = uv.replace(/½/g, "லு");
uv = uv.replace(/Ö/g, "லூ");
uv = uv.replace(/ªô/g, "லெ");
uv = uv.replace(/«ô/g, "லே");
uv = uv.replace(/¬ô/g, "லை");
uv = uv.replace(/™/g, "ல்");
uv = uv.replace(/ô/g, "ல");////

uv = uv.replace(/ª÷÷/g, "ளௌ");
uv = uv.replace(/«÷£/g, "ளோ");
uv = uv.replace(/ª÷£/g, "ள");
uv = uv.replace(/÷£/g, "ளா");
uv = uv.replace(/O/g, "ளி");
uv = uv.replace(/k/g, "ளீ");
uv = uv.replace(/À/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/ª÷/g, "ளெ");
uv = uv.replace(/«÷/g, "ளே");
uv = uv.replace(/¬÷/g, "ளை");
uv = uv.replace(/œ/g, "ள்");
uv = uv.replace(/÷/g, "ள");/////

uv = uv.replace(/ªõ÷/g, "வௌ");
uv = uv.replace(/«õ£/g, "வோ");
uv = uv.replace(/ªõ£/g, "வொ");
uv = uv.replace(/õ£/g, "வா");
uv = uv.replace(/M/g, "வி");
uv = uv.replace(/i/g, "வீ");
uv = uv.replace(/¾/g, "வு");
uv = uv.replace(/×/g, "வூ");
uv = uv.replace(/ªõ/g, "வெ");
uv = uv.replace(/«õ/g, "வே");
uv = uv.replace(/¬õ/g, "வை");
uv = uv.replace(/ªõ£/g, "வொ")
uv = uv.replace(/š/g, "வ்");
uv = uv.replace(/õ/g, "வ");//////
uv = uv.replace(/ªö÷/g, "ழௌ");
uv = uv.replace(/«ö£/g, "ழோ");
uv = uv.replace(/ªö£/g, "ழொ");
uv = uv.replace(/ö£/g, "ழா");
uv = uv.replace(/N/g, "ழி");
uv = uv.replace(/j/g, "ழீ");
uv = uv.replace(/¿/g, "ழு");
uv = uv.replace(/Ø/g, "ழூ");
uv = uv.replace(/ªö/g, "ழெ");
uv = uv.replace(/«ö/g, "ழே");
uv = uv.replace(/¬ö/g, "ழை");
uv = uv.replace(/›/g, "ழ்");
uv = uv.replace(/ö/g, "ழ");////

uv = uv.replace(/ªø÷/g, "றௌ");
uv = uv.replace(/«ø£/g, "றோ");
uv = uv.replace(/ªø£/g, "றொ");
uv = uv.replace(/ø£/g, "றா");
uv = uv.replace(/P/g, "றி");
uv = uv.replace(/l/g, "றீ");
uv = uv.replace(/Á/g, "று");
uv = uv.replace(/Ú/g, "றூ");
uv = uv.replace(/ªø/g, "றெ");
uv = uv.replace(/«ø/g, "றே");
uv = uv.replace(/¬ø/g, "றை");
uv = uv.replace(/ªø£/g, "றொ")
uv = uv.replace(/Ÿ/g, "ற்");
uv = uv.replace(/ø/g, "ற");///
uv = uv.replace(/ªý÷/g, "ஹௌ");
uv = uv.replace(/«ý£/g, "ஹோ");
uv = uv.replace(/ªý£/g, "ஹொ");
uv = uv.replace(/ý£/g, "ஹா");
uv = uv.replace(/U/g, "ஹி");
uv = uv.replace(/q/g, "ஹீ");
uv = uv.replace(/ªý/g, "ஹெ");
uv = uv.replace(/«ý/g, "ஹே");
uv = uv.replace(/¬ý/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/ý/g, "ஹ");///



uv = uv.replace(/ªû÷/g, "ஷௌ");
uv = uv.replace(/«û£/g, "ஷோ");
uv = uv.replace(/ªû£/g, "ஷொ");
uv = uv.replace(/û£/g, "ஷா");
uv = uv.replace(/S/g, "ஷி");
uv = uv.replace(/o/g, "ஷீ");

uv = uv.replace(/ªû/g, "ஷெ");
uv = uv.replace(/«û/g, "ஷே");
uv = uv.replace(/¬û/g, "ஷை");
uv = uv.replace(/ªû£/g, "ஷொ")
uv = uv.replace(/w/g, "ஷ்");
uv = uv.replace(/û/g, "ஷ");////

uv = uv.replace(/ªú÷/g, "ஸௌ");
uv = uv.replace(/«ú£/g, "ஸோ");
uv = uv.replace(/ªú£/g, "ஸொ");
uv = uv.replace(/ú£/g, "ஸா");
uv = uv.replace(/R/g, "ஸி");
uv = uv.replace(/n/g, "ஸீ");
uv = uv.replace(/ªú/g, "ஸெ");
uv = uv.replace(/«ú/g, "ஸே");
uv = uv.replace(/¬ú/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/ú/g, "ஸ");/////
uv = uv.replace(/Ü/g, "அ");
uv = uv.replace(/Ý/g, "ஆ");
uv = uv.replace(/Þ/g, "இ");
uv = uv.replace(/ß/g, "ஈ");
uv = uv.replace(/à/g, "உ");
uv = uv.replace(/á/g, "ஊ");
uv = uv.replace(/â/g, "எ");
uv = uv.replace(/ã/g, "ஏ");
uv = uv.replace(/ä/g, "ஐ");
uv = uv.replace(/å/g, "ஒ")
uv = uv.replace(/æ/g, "ஓ");
uv = uv.replace(/å÷/g, "ஔ");





uv = uv.replace(/ç/g, "ஃ");

uv = uv.replace(/ÿ/g, "ஸ்ரீ");
uv = uv.replace(/ƒ/g, "‘");


document.tamil_unicode_utf8.destination.value=uv;

}

function convert_tscii_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/­/g, "இ");
uv = uv.replace(/þ/g, "இ");
uv = uv.replace(/‡/g, "க்ஷ");
uv = uv.replace(/‡¡/g, "க்ஷா");
uv = uv.replace(/‡¢/g, "க்ஷி");
uv = uv.replace(/‡£/g, "க்ஷீ");
uv = uv.replace(/‡¤/g, "க்ஷு");
uv = uv.replace(/‡¥/g, "க்ஷூ");
uv = uv.replace(/¦‡/g, "க்ஷெ");
uv = uv.replace(/§‡/g, "க்ஷே");
uv = uv.replace(/¨‡/g, "க்ஷை");
uv = uv.replace(/¦‡¡/g, "க்ஷொ");
uv = uv.replace(/§‡¡/g, "க்ஷோ");
uv = uv.replace(/¦‡Ç/g, "க்ஷௌ");
uv = uv.replace(/Œ/g, "க்ஷ்");

uv = uv.replace(/¦¸ª/g, "கௌ");
uv = uv.replace(/§¸¡/g, "கோ");
uv = uv.replace(/¦¸¡/g, "கொ");
uv = uv.replace(/¸¡/g, "கா");
uv = uv.replace(/¸¢/g, "கி");
uv = uv.replace(/¸£/g, "கீ");
uv = uv.replace(/Ì/g, "கு");
uv = uv.replace(/Ü/g, "கூ");
uv = uv.replace(/¦¸/g, "கெ");
uv = uv.replace(/§¸/g, "கே");
uv = uv.replace(/¨¸/g, "கை");
uv = uv.replace(/¦¸¡/g, "கொ")
uv = uv.replace(/ì/g, "க்");
uv = uv.replace(/¸/g, "க");

uv = uv.replace(/¦¹ª/g, "ஙௌ");
uv = uv.replace(/§¹¡/g, "ஙோ");
uv = uv.replace(/¦¹¡/g, "ஙொ");
uv = uv.replace(/¹¡/g, "ஙா");
uv = uv.replace(/¹¢/g, "ஙி");
uv = uv.replace(/¹£/g, "ஙீ");
uv = uv.replace(/™/g, "ஙு");
uv = uv.replace(/›/g, "ஙூ");
uv = uv.replace(/¦¹/g, "ஙெ");
uv = uv.replace(/§¹/g, "ஙே");
uv = uv.replace(/¨¹/g, "ஙை");
uv = uv.replace(/¦¹¡/g, "ஙொ")
uv = uv.replace(/í/g, "ங்");
uv = uv.replace(/¹/g, "ங");

uv = uv.replace(/¦ºª/g, "சௌ");
uv = uv.replace(/§º¡/g, "சோ");
uv = uv.replace(/¦º¡/g, "சொ");
uv = uv.replace(/º¡/g, "சா");
uv = uv.replace(/º¢/g, "சி");
uv = uv.replace(/º£/g, "சீ");
uv = uv.replace(/Í/g, "சு");
uv = uv.replace(/Ý/g, "சூ");
uv = uv.replace(/¦º/g, "செ");
uv = uv.replace(/§º/g, "சே");
uv = uv.replace(/¨º/g, "சை");
uv = uv.replace(/¦º¡/g, "சொ")
uv = uv.replace(/î/g, "ச்");
uv = uv.replace(/º/g, "ச");

uv = uv.replace(/¦ƒª/g, "ஜௌ");
uv = uv.replace(/§ƒ¡/g, "ஜோ");
uv = uv.replace(/¦ƒ¡/g, "ஜொ");
uv = uv.replace(/ƒ¡/g, "ஜா");
uv = uv.replace(/ƒ¢/g, "ஜி");
uv = uv.replace(/ƒ£/g, "ஜீ");
uv = uv.replace(/ƒ¤/g, "ஜு");
uv = uv.replace(/ƒ¥/g, "ஜூ");
uv = uv.replace(/¦ƒ/g, "ஜெ");
uv = uv.replace(/§ƒ/g, "ஜே");
uv = uv.replace(/¨ƒ/g, "ஜை");
uv = uv.replace(/¦ƒ¡/g, "ஜொ")
uv = uv.replace(/ˆ/g, "ஜ்");
uv = uv.replace(/ƒ/g, "ஜ");

uv = uv.replace(/¦»ª/g, "ஞௌ");
uv = uv.replace(/§»¡/g, "ஞோ");
uv = uv.replace(/¦»¡/g, "ஞொ");
uv = uv.replace(/»¡/g, "ஞா");
uv = uv.replace(/»¢/g, "ஞி");
uv = uv.replace(/»£/g, "ஞீ");
uv = uv.replace(//g, "ஞு");
uv = uv.replace(/œ/g, "ஞூ");
uv = uv.replace(/¦»/g, "ஞெ");
uv = uv.replace(/§»/g, "ஞே");
uv = uv.replace(/¨»/g, "ஞை");
uv = uv.replace(/¦»¡/g, "ஞொ")
uv = uv.replace(/ï/g, "ஞ்");
uv = uv.replace(/»/g, "ஞ");

uv = uv.replace(/¦¼ª/g, "டௌ");
uv = uv.replace(/§¼¡/g, "டோ");
uv = uv.replace(/¦¼¡/g, "டொ");
uv = uv.replace(/¼¡/g, "டா");
uv = uv.replace(/Ê/g, "டி");
uv = uv.replace(/Ë/g, "டீ");
uv = uv.replace(/Î/g, "டு");
uv = uv.replace(/Þ/g, "டூ");
uv = uv.replace(/¦¼/g, "டெ");
uv = uv.replace(/§¼/g, "டே");
uv = uv.replace(/¨¼/g, "டை");
uv = uv.replace(/¦¼¡/g, "டொ")
uv = uv.replace(/ð/g, "ட்");
uv = uv.replace(/¼/g, "ட");
uv = uv.replace(/¦½ª/g, "ணௌ");
uv = uv.replace(/§½¡/g, "ணோ");
uv = uv.replace(/¦½¡/g, "ணொ");
uv = uv.replace(/½¡/g, "ணா");
uv = uv.replace(/½¢/g, "ணி");
uv = uv.replace(/½£/g, "ணீ");
uv = uv.replace(/Ï/g, "ணு");
uv = uv.replace(/ß/g, "ணூ");
uv = uv.replace(/¦½/g, "ணெ");
uv = uv.replace(/§½/g, "ணே");
uv = uv.replace(/¨½/g, "ணை");
uv = uv.replace(/¦½¡/g, "ணொ")
uv = uv.replace(/ñ/g, "ண்");
uv = uv.replace(/½/g, "ண");


uv = uv.replace(/¦¾ª/g, "தௌ");
uv = uv.replace(/§¾¡/g, "தோ");
uv = uv.replace(/¦¾¡/g, "தொ");
uv = uv.replace(/¾¡/g, "தா");
uv = uv.replace(/¾¢/g, "தி");
uv = uv.replace(/¾£/g, "தீ");
uv = uv.replace(/Ð/g, "து");
uv = uv.replace(/à/g, "தூ");
uv = uv.replace(/¦¾/g, "தெ");
uv = uv.replace(/§¾/g, "தே");
uv = uv.replace(/¨¾/g, "தை");
uv = uv.replace(/¦¾¡/g, "தொ")
uv = uv.replace(/ò/g, "த்");
uv = uv.replace(/¾/g, "த");


uv = uv.replace(/¦¿ª/g, "நௌ");
uv = uv.replace(/§¿¡/g, "நோ");
uv = uv.replace(/¦¿¡/g, "நொ");
uv = uv.replace(/¿¡/g, "நா");
uv = uv.replace(/¿¢/g, "நி");
uv = uv.replace(/¿£/g, "நீ");
uv = uv.replace(/Ñ/g, "நு");
uv = uv.replace(/á/g, "நூ");
uv = uv.replace(/¦¿/g, "நெ");
uv = uv.replace(/§¿/g, "நே");
uv = uv.replace(/¨¿/g, "நை");
uv = uv.replace(/¦¿¡/g, "நொ")
uv = uv.replace(/ó/g, "ந்");
uv = uv.replace(/¿/g, "ந");


uv = uv.replace(/¦Éª/g, "னௌ");
uv = uv.replace(/§É¡/g, "னோ");
uv = uv.replace(/¦É¡/g, "னொ");
uv = uv.replace(/É¡/g, "னா");
uv = uv.replace(/É¢/g, "னி");
uv = uv.replace(/É£/g, "னீ");
uv = uv.replace(/Û/g, "னு");
uv = uv.replace(/ë/g, "னூ");
uv = uv.replace(/¦É/g, "னெ");
uv = uv.replace(/§É/g, "னே");
uv = uv.replace(/¨É/g, "னை");
uv = uv.replace(/¦É¡/g, "னொ")
uv = uv.replace(/ý/g, "ன்");
uv = uv.replace(/É/g, "ன");

uv = uv.replace(/¦Àª/g, "பௌ");
uv = uv.replace(/§À¡/g, "போ");
uv = uv.replace(/¦À¡/g, "பொ");
uv = uv.replace(/À¡/g, "பா");
uv = uv.replace(/À¢/g, "பி");
uv = uv.replace(/À£/g, "பீ");
uv = uv.replace(/Ò/g, "பு");
uv = uv.replace(/â/g, "பூ");
uv = uv.replace(/¦À/g, "பெ");
uv = uv.replace(/§À/g, "பே");
uv = uv.replace(/¨À/g, "பை");
uv = uv.replace(/¦À¡/g, "பொ")
uv = uv.replace(/ô/g, "ப்");
uv = uv.replace(/À/g, "ப");

uv = uv.replace(/¦Áª/g, "மௌ");
uv = uv.replace(/§Á¡/g, "மோ");
uv = uv.replace(/¦Á¡/g, "மொ");
uv = uv.replace(/Á¡/g, "மா");
uv = uv.replace(/Á¢/g, "மி");
uv = uv.replace(/Á£/g, "மீ");
uv = uv.replace(/Ó/g, "மு");
uv = uv.replace(/ã/g, "மூ");
uv = uv.replace(/¦Á/g, "மெ");
uv = uv.replace(/§Á/g, "மே");
uv = uv.replace(/¨Á/g, "மை");
uv = uv.replace(/¦Á¡/g, "மொ")
uv = uv.replace(/õ/g, "ம்");
uv = uv.replace(/Á/g, "ம");
uv = uv.replace(/¦Âª/g, "யௌ");
uv = uv.replace(/§Â¡/g, "யோ");
uv = uv.replace(/¦Â¡/g, "யொ");
uv = uv.replace(/Â¡/g, "யா");
uv = uv.replace(/Â¢/g, "யி");
uv = uv.replace(/Â£/g, "யீ");
uv = uv.replace(/Ô/g, "யு");
uv = uv.replace(/ä/g, "யூ");
uv = uv.replace(/¦Â/g, "யெ");
uv = uv.replace(/§Â/g, "யே");
uv = uv.replace(/¨Â/g, "யை");

uv = uv.replace(/ö/g, "ய்");
uv = uv.replace(/Â/g, "ய");

uv = uv.replace(/¦Ãª/g, "ரௌ");
uv = uv.replace(/§Ã¡/g, "ரோ");
uv = uv.replace(/¦Ã¡/g, "ரொ");
uv = uv.replace(/Ã¡/g, "ரா");
uv = uv.replace(/Ã¢/g, "ரி");
uv = uv.replace(/Ã£/g, "ரீ");
uv = uv.replace(/Õ/g, "ரு");
uv = uv.replace(/å/g, "ரூ");
uv = uv.replace(/¦Ã/g, "ரெ");
uv = uv.replace(/§Ã/g, "ரே");
uv = uv.replace(/¨Ã/g, "ரை");
uv = uv.replace(/÷/g, "ர்");
uv = uv.replace(/Ã/g, "ர");

uv = uv.replace(/¦Äª/g, "லௌ");
uv = uv.replace(/§Ä¡/g, "லோ");
uv = uv.replace(/¦Ä¡/g, "லொ");
uv = uv.replace(/Ä¡/g, "லா");
uv = uv.replace(/Ä¢/g, "லி");
uv = uv.replace(/Ä£/g, "லீ");
uv = uv.replace(/Ö/g, "லு");
uv = uv.replace(/æ/g, "லூ");
uv = uv.replace(/¦Ä/g, "லெ");
uv = uv.replace(/§Ä/g, "லே");
uv = uv.replace(/¨Ä/g, "லை");
uv = uv.replace(/¦Ä¡/g, "லொ")
uv = uv.replace(/ø/g, "ல்");
uv = uv.replace(/Ä/g, "ல");

uv = uv.replace(/¦Çª/g, "ளௌ");
uv = uv.replace(/§Ç¡/g, "ளோ");
uv = uv.replace(/¦Ç¡/g, "ளொ")
uv = uv.replace(/Ç¡/g, "ளா");
uv = uv.replace(/Ç¢/g, "ளி");
uv = uv.replace(/Ç£/g, "ளீ");
uv = uv.replace(/Ù/g, "ளு");
uv = uv.replace(/é/g, "ளூ");
uv = uv.replace(/¦Ç/g, "ளெ");
uv = uv.replace(/§Ç/g, "ளே");
uv = uv.replace(/¨Ç/g, "ளை");

uv = uv.replace(/û/g, "ள்");
uv = uv.replace(/Ç/g, "ள");
uv = uv.replace(/¦Åª/g, "வௌ");
uv = uv.replace(/§Å¡/g, "வோ");
uv = uv.replace(/¦Å¡/g, "வொ");
uv = uv.replace(/Å¡/g, "வா");
uv = uv.replace(/Å¢/g, "வி");
uv = uv.replace(/Å£/g, "வீ");
uv = uv.replace(/×/g, "வு");
uv = uv.replace(/ç/g, "வூ");
uv = uv.replace(/¦Å/g, "வெ");
uv = uv.replace(/§Å/g, "வே");
uv = uv.replace(/¨Å/g, "வை");
uv = uv.replace(/¦Å¡/g, "வொ")
uv = uv.replace(/ù/g, "வ்");
uv = uv.replace(/Å/g, "வ");


uv = uv.replace(/¦Æª/g, "ழௌ");
uv = uv.replace(/§Æ¡/g, "ழோ");
uv = uv.replace(/¦Æ¡/g, "ழொ");
uv = uv.replace(/Æ¡/g, "ழா");
uv = uv.replace(/Æ¢/g, "ழி");
uv = uv.replace(/Æ£/g, "ழீ");
uv = uv.replace(/Ø/g, "ழு");
uv = uv.replace(/è/g, "ழூ");
uv = uv.replace(/¦Æ/g, "ழெ");
uv = uv.replace(/§Æ/g, "ழே");
uv = uv.replace(/¨Æ/g, "ழை");
uv = uv.replace(/¦Æ¡/g, "ழொ")
uv = uv.replace(/ú/g, "ழ்");
uv = uv.replace(/Æ/g, "ழ");

uv = uv.replace(/¦Èª/g, "றௌ");
uv = uv.replace(/§È¡/g, "றோ");
uv = uv.replace(/¦È¡/g, "றொ");
uv = uv.replace(/È¡/g, "றா");
uv = uv.replace(/È¢/g, "றி");
uv = uv.replace(/È£/g, "றீ");
uv = uv.replace(/Ú/g, "று");
uv = uv.replace(/ê/g, "றூ");
uv = uv.replace(/¦È/g, "றெ");
uv = uv.replace(/§È/g, "றே");
uv = uv.replace(/¨È/g, "றை");
uv = uv.replace(/¦È¡/g, "றொ")
uv = uv.replace(/ü/g, "ற்");
uv = uv.replace(/È/g, "ற");

uv = uv.replace(/¦†ª/g, "ஹௌ");
uv = uv.replace(/§†¡/g, "ஹோ");
uv = uv.replace(/¦†¡/g, "ஹொ");
uv = uv.replace(/†¡/g, "ஹா");
uv = uv.replace(/†¢/g, "ஹி");
uv = uv.replace(/†£/g, "ஹீ");
uv = uv.replace(/¦†/g, "ஹெ");
uv = uv.replace(/§†/g, "ஹே");
uv = uv.replace(/¨†/g, "ஹை");
uv = uv.replace(/¦†¡/g, "ஹொ")
uv = uv.replace(/‹/g, "ஹ்");
uv = uv.replace(/†/g, "ஹ");


uv = uv.replace(/¦„ª/g, "ஷௌ");
uv = uv.replace(/§„¡/g, "ஷோ");
uv = uv.replace(/¦„¡/g, "ஷொ");
uv = uv.replace(/„¡/g, "ஷா");
uv = uv.replace(/„¢/g, "ஷி");
uv = uv.replace(/„£/g, "ஷீ");
uv = uv.replace(/¦„/g, "ஷெ");
uv = uv.replace(/§„/g, "ஷே");
uv = uv.replace(/¨„/g, "ஷை");
uv = uv.replace(/¦„¡/g, "ஷொ")
uv = uv.replace(/‰/g, "ஷ்");
uv = uv.replace(/„/g, "ஷ");


uv = uv.replace(/¦…ª/g, "ஸௌ");
uv = uv.replace(/§…¡/g, "ஸோ");
uv = uv.replace(/¦…¡/g, "ஸொ");
uv = uv.replace(/…¡/g, "ஸா");
uv = uv.replace(/…¢/g, "ஸி");
uv = uv.replace(/…£/g, "ஸீ");
uv = uv.replace(/¦…/g, "ஸெ");
uv = uv.replace(/§…/g, "ஸே");
uv = uv.replace(/¨…/g, "ஸை");
uv = uv.replace(/¦…¡/g, "ஸொ")
uv = uv.replace(/Š/g, "ஸ்");
uv = uv.replace(/…/g, "ஸ");




uv = uv.replace(/«/g, "அ");
uv = uv.replace(/¬/g, "ஆ");
uv = uv.replace(/®/g, "ஈ");
uv = uv.replace(/¯/g, "உ");
uv = uv.replace(/°/g, "ஊ");
uv = uv.replace(/±/g, "எ");
uv = uv.replace(/²/g, "ஏ");
uv = uv.replace(/³/g, "ஐ");
uv = uv.replace(/´/g, "ஒ")
uv = uv.replace(/µ/g, "ஓ");
uv = uv.replace(/¶/g, "ஔ");



uv = uv.replace(/∙/g, "ஃ");

uv = uv.replace(//g, "௧");
uv = uv.replace(//g, "௨");
uv = uv.replace(//g, "௩");
uv = uv.replace(//g, "௪");
uv = uv.replace(//g, "௫");
uv = uv.replace(//g, "௰");
uv = uv.replace(//g, "௱");
uv = uv.replace(/Ÿ/g, "௲");
uv = uv.replace(//g, "௯");
uv = uv.replace(//g, "௭");
uv = uv.replace(//g, "௮")
uv = uv.replace(//g, "௬");
uv = uv.replace(/‚/g, "ஸ்ரீ");



document.tamil_unicode_utf8.destination.value=uv;
}
//  End -->
