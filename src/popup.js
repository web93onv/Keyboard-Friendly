function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var domain = getParameterByName("domain");

if(domain == "vk.com") {
  document.write("<img src='vk.png'/>");
} else if(domain == "9gag.com") {
  document.write("<pre>9GAG controls, supports english/russian/ukrainian keyboard layout and maybe others:\n"
    +"[Q] - play/stop (or cloze zoom), [W] - like, [E] - open in new tab (or zoom)\n"
    +"[A] - prev post, [S] - dislike, [D] - next post\n"
    +"[Z] - scroll up, [X] - start of post, [C] - scroll down\n"
    +"\n"
    +"Dont forget to use:\n"
    +"[CTRL]+[TAB] - switch tab\n"
    +"[CTRL]+[W] - close tab\n"
    +"[Space] - scroll down\n"
    +"[Home] - top of page\n"
    +"and so on..</pre>");
} else if(domain == "habrahabr.ru") {
  document.write("<pre>Habrahabr controls, supports english/russian/ukrainian keyboard layout and maybe others:\n"
    +"[Q] - prev page, [W] - next page, [E] - open in new tab\n"
    +"[A] - prev post, [D] - next post\n"
    +"[Z] - scroll up, [X] - start of post, [C] - scroll down\n"
    +"\n"
    +"Dont forget to use:\n"
    +"[CTRL]+[TAB] - switch tab\n"
    +"[CTRL]+[W] - close tab\n"
    +"[Space] - scroll down\n"
    +"[Home] - top of page\n"
    +"and so on..</pre>");
} else if(domain == "habrahabr.ru") {
  document.write("<pre>Habrahabr controls, supports english/russian/ukrainian keyboard layout and maybe others:\n"
    +"[Q] - prev page, [W] - next page, [E] - open in new tab\n"
    +"[A] - prev post, [D] - next post\n"
    +"[Z] - scroll up, [X] - start of post, [C] - scroll down\n"
    +"\n"
    +"Dont forget to use:\n"
    +"[CTRL]+[TAB] - switch tab\n"
    +"[CTRL]+[W] - close tab\n"
    +"[Space] - scroll down\n"
    +"[Home] - top of page\n"
    +"and so on..</pre>");
} else if(domain == "ensemplix.ru") {
  document.write("<pre>[W] - следующая страница, [E] - открыть пост в новой вкладке\n"
    +"[A] - предыдущий пост, [D] - следующий пост\n"
    +"[Z] - прокрутить вверх, [X] - начало поста, [C] - прокрутить вниз\n"
    +"\n"
    +"Не забывайте использовать:\n"
    +"[CTRL]+[TAB] - переключение вкладки\n"
    +"[CTRL]+[W] - закрыть вкладку\n"
    +"[Пробел] - пролистать вниз\n"
    +"[Home] - начало страницы\n"
    +"и т.п.</pre>");
}