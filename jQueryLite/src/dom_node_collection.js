class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;
    this.listeners = [];
  }

  html(innerString) {
    if (typeof innerString === 'string') {
      this.elements.forEach( (el) => {
        el.innerHTML = innerString;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(selector) {
    this.elements.forEach( (el) => {
      selector.elements.forEach ( (el2) => {
        el.appendChild(el2);
      });
    });
  }

  attr(attribute, value) {
    if (typeof value === 'undefined') {
      this.elements.forEach ( (el) => {
        return el.getAttribute(attribute);
      });
    } else {
      this.elements.forEach ( (el) => {
        el.setAttribute(attribute, value);
      });
    }
  }

  addClass(className) {
    this.elements.forEach( (el) => {
      el.className = className;
    });
  }

  removeElementByClassname(className) {
    this.elements.forEach( (el) => {
      el.remove(className);
    });
  }

  children() {
    let arr = [];
    this.elements.forEach( (el) => {
      arr.push(el.children);
    });
    return arr;
  }

  removeClass(className) {
    this.elements.forEach( (el) => {
      el.classList.remove(className);
    });
  }

  parent() {
    let arr = [];
    this.elements.forEach( (el) => {
      console.log(!this.include(arr, el));
      if (!this.include(arr, el)) {
        arr.push(el.parentNode);
      }
    });
    return arr;
  }

  include(arr, el) {
    for(let i = 0; i < arr.length; i++) {
      if (el === arr[i]) { return true; }
    }
    return false;
  }

  on(action, eventHandler) {
    this.listeners.push(eventHandler);
    this.elements.forEach( (el) => {
      el.addEventListener(action, eventHandler);
    });
  }

  off(action) {
    this.elements.forEach( (el) => {
      el.removeEventListener(action, this.listeners[0]);
    });
  }
}

// function DOMNodeCollection(el) {
//   this.el = el;
// }

module.exports = DOMNodeCollection;
