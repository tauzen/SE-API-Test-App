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

  // Test #3-1
  test31Case: function() {
    recordLogs("logs3-1", "Start testing ...");
    this.test31Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-1", "SecureElement API is not present");
      updateResultStatus("result3-1", "Red", "Fail");
    }
    else {
      recordLogs("logs3-1", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-1", "Open one session");
        recordLogs("logs3-1", "Check if reader object from session instance is equal to reader instance");
        if (readers[0] == readers[0].openSession().reader) {
          updateResultStatus("result3-1", "Green", "Pass");
        }
	else {
          updateResultStatus("result3-1", "Red", "Fail");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-1", "error:" + err);
        updateResultStatus("result3-1", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset31Case: function() {
    this.test31Button.disabled = false;
    updateResultStatus("result3-1", "Black", "None");
    clearLogs("logs3-1");
  },

  // Test #3-2
  test32Case: function() {
    recordLogs("logs3-2", "Start testing ...");
    this.test32Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-2", "SecureElement API is not present");
      updateResultStatus("result3-2", "Red", "Fail");
    }
    else {
      recordLogs("logs3-2", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-2", "Open one session and check session status");
        if (readers[0].openSession().isClosed == false) {
            updateResultStatus("result3-2", "Green", "Pass");
        }
        else {
            updateResultStatus("result3-2", "Red", "Fail");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-2", "error:" + err);
        updateResultStatus("result3-2", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset32Case: function() {
    this.test32Button.disabled = false;
    updateResultStatus("result3-2", "Black", "None");
    clearLogs("logs3-2");
  },

};

window.addEventListener('load', SETest.init.bind(SETest));
window.addEventListener('unload', SETest.uninit.bind(SETest));
