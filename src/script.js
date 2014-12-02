var config = {
  "9gag.com": {
    articles: ["article", "a", "d", "x", "z", "c", ".main-wrap"], // [css selector of article element, prev article button, next article button , up, focus, down]
    actions: [ // [button, action <click|newtab>, css selector, <outside> article element (optional) ]
      ["e", "Open post in new tab",
        "newtab", "a"],
      ["q", "Close modal window (zoom window)",
        "click", ".no-scroll .badge-overlay-close.close-button", "outside"],
      ["q", "Play/pause (gif)",
        "click", ".play"],
      ["a", "Previous post",
        "click", ".badge-prev-post-entry", "outside"],
      ["d", "Next post",
        "click", ".badge-next-post-entry", "outside"],
      ["w", "Like",
        "click", ".badge-item-vote-up"],
      ["s", "Dislike",
        "click", ".badge-item-vote-down"]
    ],
    indent: 46
  },
  "itc.ua": {
    articles: [".post", "a", "d", "x", "z", "c", "body"],
    actions: [
      ["e", "Open post in new tab",
        "newtab", "a"],
      ["q", "Previous page",
        "click", ".pagination .back a", "outside"],
      ["w", "Next page",
        "click", ".pagination .next a", "outside"]
    ],
    indent: 5
  },
  "habrahabr.ru": {
    articles: [".post", "a", "d", "x", "z", "c", "body"],
    actions: [
      ["e", "Open post in new tab",
        "newtab", ".post_title"],
      ["q", "Previous page",
        "click", "#previous_page", "outside"],
      ["w", "Next page",
        "click", "#next_page", "outside"]
    ],
    indent: 0
  },
  "my-chrome.ru": {
    articles: ["h2", "a", "d", "x", "z", "c", "body"],
    actions: [
      ["e", "Open post in new tab",
        "newtab", "a"], // open in new tab
      ["q", "Previous page",
        "click", ".navigation .alignleft a", "outside"],
      ["w", "Next page",
        "click", ".navigation .alignright a", "outside"]
    ],
    indent: 0
  },
  "vk.com": {
    articles: [".post", "a", "d", "x", "z", "c", "body"],
    actions: [
      ["e", "Open in modal window",
        "newtab", ".reply_link_wrap a"],
      ["q", "Close modal window",
        "click", "#wk_close_link", "outside"],
      ["w", "Like",
        "click", ".post_like_link"],
      ["s", "Share",
        "click", ".post_share_link"]
    ],
    indent: 0
  },
  "ensemplix.ru": {
    articles: [".content_padding", "a", "d", "x", "z", "c", "#left_block"],
    actions: [
      ["e", "Open post in new tab",
        "newtab", ".news_title a"],
      ["w", "Next page",
        "click", "#pages span+a", "outside"]
    ],
    indent: 0
  },
  "vine.co": {
    articles: ["div[id^=ember].post", "a", "d", "x", "z", "c"], // [css selector of article element, prev article button, next article button , up, focus, down]
    actions: [ // [button, action <click|newtab>, css selector, <outside> article element (optional) ]
      ["q", "Play/pause",
        "click", "video"],
      ["r", "Revine",
        "click", ".post-actions .revine"],
      ["e", "Open post in new tab",
        "newtab", ".post-metadata .time a"],
      ["w", "Like",
        "click", ".post-actions .like"],
      ["f", "Load more",
        "click", ".pagination", "outside"],
      ["s", "Share",
        "click", ".post-actions .share"]
    ],
    indent: 45
  }
};

var loaded_config = config[document.domain];

var parent = document.querySelector(loaded_config.articles[6]);
if(parent == null) {
  parent = document;
}

var articles = [];
if(/\./.test(loaded_config.articles[0])) {
  articles = parent.getElementsByClassName(loaded_config.articles[0].split(".")[1]);
} else {
  articles = parent.getElementsByTagName(loaded_config.articles[0]);
}
var position = -1;
var user_scrolling = false;
var ouh;

function lol12(e) {
  clearTimeout(ouh);
  $("html,body").stop();
  user_scrolling = true;
  ouh = setTimeout("user_scrolling=false;ihe();", 3.1e2);
  if(loaded_config.indent) {
    $("html,body").animate({scrollTop: ($(e).offset().top - loaded_config.indent)}, 3e2);
  } else {
    $("html,body").animate({scrollTop: ($(e).offset().top)}, 3e2);
  }
}

var split = false;

document.addEventListener("keydown", function(e) {
  if(/(input|textarea|select)/i.test(document.activeElement.tagName) || document.activeElement.getAttribute("contenteditable") === "true" || articles.length == 0) {
    return;
  };
  if(user_scrolling) return;
  ihe();

  if(position != -1) {
    for(var i = 0; i < loaded_config.actions.length; i++) {
      if(e.keyCode == loaded_config.actions[i][0].charCodeAt(0) || e.keyCode == loaded_config.actions[i][0].toUpperCase().charCodeAt(0)) {
        var das, das2;
        if(loaded_config.actions[i][2] === "click") {
          if(loaded_config.actions[i][4] === "outside") {
            das = document.querySelector(loaded_config.actions[i][3]);
            if(das != null) {
              das.click();
              return;
            }
          } else {
            das = articles[position].querySelector(loaded_config.actions[i][3]);
            if(das != null) {
              das.click();
              return;
            }
          }
        } else if(loaded_config.actions[i][2] === "newtab") {
          das = articles[position];
          if(typeof das != "undefined") {
            das = das.querySelector(loaded_config.actions[i][3]);
            if(das != null) {
              das2 = das.getAttribute("target");
              if(das2 === "_blank") {
                das.click();
              } else if(das2 == null) {
                das.setAttribute("target", "_blank");
                das.click();
                das.removeAttribute("target");
              } else {
                das.setAttribute("target", "_blank");
                das.click();
                das.setAttribute("target", das2);
              }
              return;
            }
          }
        }
      }
    }
  }
  if(e.keyCode == loaded_config.articles[1].charCodeAt(0) || e.keyCode == loaded_config.articles[1].toUpperCase().charCodeAt(0)) { // prev
    if(position <= 0) {
      position = 0;
      lol12(articles[position]);
    } else {
      if(split != true) {
        position--;
      }
      lol12(articles[position]);
    }
  } else if(e.keyCode == loaded_config.articles[2].charCodeAt(0) || e.keyCode == loaded_config.articles[2].toUpperCase().charCodeAt(0)) { // next
    if(position >= (articles.length - 1)) {
      position = (articles.length - 1);
      lol12(articles[position]);
    } else {
      position++;
      lol12(articles[position]);
    }
  } else if(e.keyCode == loaded_config.articles[3].charCodeAt(0) || e.keyCode == loaded_config.articles[3].toUpperCase().charCodeAt(0)) { // current
    if(position == -1) {
      position = 0;
    }
    lol12(articles[position]);
  } else if(e.keyCode == loaded_config.articles[4].charCodeAt(0) || e.keyCode == loaded_config.articles[4].toUpperCase().charCodeAt(0)) { // up
    window.scrollBy(0, -75);
  } else if(e.keyCode == loaded_config.articles[5].charCodeAt(0) || e.keyCode == loaded_config.articles[5].toUpperCase().charCodeAt(0)) { // down
    window.scrollBy(0, 75);
  }
});

//document.addEventListener("scroll", ihe);

function getOffset(elem) {
  if (elem.getBoundingClientRect) {
    // "правильный" вариант
    return getOffsetRect(elem)
  } else {
    // пусть работает хоть как-то
    return getOffsetSum(elem)
  }
}

function getOffsetSum(elem) {
  var top=0, left=0
  while(elem) {
    top = top + parseInt(elem.offsetTop)
    left = left + parseInt(elem.offsetLeft)
    elem = elem.offsetParent
  }

  return {top: top, left: left}
}

function getOffsetRect(elem) {
  // (1)
  var box = elem.getBoundingClientRect()

  // (2)
  var body = document.body
  var docElem = document.documentElement

  // (3)
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

  // (4)
  var clientTop = docElem.clientTop || body.clientTop || 0
  var clientLeft = docElem.clientLeft || body.clientLeft || 0

  // (5)
  var top  = box.top +  scrollTop - clientTop
  var left = box.left + scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}

function ihe() {
  if(user_scrolling) return;
  if(articles.length == 1) {
    position = 0;
  }
  
  var c = document.body.scrollTop + loaded_config.indent;
  
  for(var i = 0; i < articles.length; i++) {
    var a = getOffset(articles[i]).top; //var a = $(articles[i]).offset().top;
    var b = articles[i].offsetHeight;
    
    split = false;
    if(a < c && a + b < c || (a + b) == c || (a + b - 5) < c) { // over
    } else if(a < c && a + b > c) { // split
      split = true;
      position = i;
      break;
    } else { // under
      if(position != -1 || i > 0) {
        position = i;
      }
      break;
    }
  }
}