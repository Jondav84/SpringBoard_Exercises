/** @format */

function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
  // TODO
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=${path}domain=${domain}`;
}

function getCookieValue(cookieName) {
  // TODO
  let cookieValue = document.cookie.match(
    "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}

document.querySelector(".button").onclick = function () {
  console.log("getCookieValue: " + getCookieValue("Foo"));
  console.log("getCookieValue: " + getCookieValue("Goo"));
};

function deleteCookie() {
  // TODO
  document.cookie = "Foo=''; max-age=0; expires=0";
  document.cookie = "Goo=''; max-age=0; expires=0";
  console.log("Cookies deleted");
}
