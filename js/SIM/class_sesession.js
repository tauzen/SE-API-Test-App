'use stricts';

var SETest = {
  get test31Button() {
    delete this.test31Button;
    return this.test31Button = document.getElementById('test3-1');
  },

  get reset31Button() {
    delete this.reset31Button;
    return this.reset31Button = document.getElementById('reset3-1');
  },

  get test32Button() {
    delete this.test32Button;
    return this.test32Button = document.getElementById('test3-2');
  },

  get reset32Button() {
    delete this.reset32Button;
    return this.reset32Button = document.getElementById('reset3-2');
  },

  get test33Button() {
    delete this.test33Button;
    return this.test33Button = document.getElementById('test3-3');
  },

  get reset33Button() {
    delete this.reset33Button;
    return this.reset33Button = document.getElementById('reset3-3');
  },

  get test34Button() {
    delete this.test34Button;
    return this.test34Button = document.getElementById('test3-4');
  },

  get reset34Button() {
    delete this.reset34Button;
    return this.reset34Button = document.getElementById('reset3-4');
  },

  init: function () {
    this.test31Button.addEventListener('click', this.test31Case.bind(this));
    this.reset31Button.addEventListener('click', this.reset31Case.bind(this));
    this.test32Button.addEventListener('click', this.test32Case.bind(this));
    this.reset32Button.addEventListener('click', this.reset32Case.bind(this));
    this.test33Button.addEventListener('click', this.test33Case.bind(this));
    this.reset33Button.addEventListener('click', this.reset33Case.bind(this));
    this.test34Button.addEventListener('click', this.test34Case.bind(this));
    this.reset34Button.addEventListener('click', this.reset34Case.bind(this));
  },

  uninit: function() {
    this.test31Button.removeEventListener('click', this.test31Case.bind(this));
    this.reset31Button.removeEventListener('click', this.reset31Case.bind(this));
    this.test32Button.removeEventListener('click', this.test32Case.bind(this));
    this.reset32Button.removeEventListener('click', this.reset32Case.bind(this));
    this.test33Button.removeEventListener('click', this.test33Case.bind(this));
    this.reset33Button.removeEventListener('click', this.reset33Case.bind(this));
    this.test34Button.removeEventListener('click', this.test34Case.bind(this));
    this.reset34Button.removeEventListener('click', this.reset34Case.bind(this));
  },

};

window.addEventListener('load', SETest.init.bind(SETest));
window.addEventListener('unload', SETest.uninit.bind(SETest));
