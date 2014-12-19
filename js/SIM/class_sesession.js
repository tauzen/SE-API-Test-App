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

  get test35Button() {
    delete this.test35Button;
    return this.test35Button = document.getElementById('test3-5');
  },

  get reset35Button() {
    delete this.reset35Button;
    return this.reset35Button = document.getElementById('reset3-5');
  },

  get test36Button() {
    delete this.test36Button;
    return this.test36Button = document.getElementById('test3-6');
  },

  get reset36Button() {
    delete this.reset36Button;
    return this.reset36Button = document.getElementById('reset3-6');
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
    this.test35Button.addEventListener('click', this.test35Case.bind(this));
    this.reset35Button.addEventListener('click', this.reset35Case.bind(this));
    this.test36Button.addEventListener('click', this.test36Case.bind(this));
    this.reset36Button.addEventListener('click', this.reset36Case.bind(this));
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
    this.test35Button.removeEventListener('click', this.test35Case.bind(this));
    this.reset35Button.removeEventListener('click', this.reset35Case.bind(this));
    this.test36Button.removeEventListener('click', this.test36Case.bind(this));
    this.reset36Button.removeEventListener('click', this.reset36Case.bind(this));
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
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-1", "Check if reader object from session instance is equal to reader instance");
        if (window.reader != session.reader) { 
          updateResultStatus("result3-1", "Red", "Fail");
        }
        else {
          updateResultStatus("result3-1", "Green", "Pass");
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
        recordLogs("logs3-2", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-2", "Check open session status");
        if (session.isClosed == false) {
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

  // Test #3-3 
  test33Case: function() {
    recordLogs("logs3-3", "Start testing ...");
    this.test33Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-3", "SecureElement API is not present");
      updateResultStatus("result3-3", "Red", "Fail");
    }
    else {
      recordLogs("logs3-3", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-3", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-3", "Open one logical channel to CRS applet ...");
        return session.openLogicalChannel(hexString2byte(window.AID.CRS));
      })
      .then((channel) => {
        updateResultStatus("result3-3", "Green", "Pass");
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-3", "error:" + err); 
        updateResultStatus("result3-3", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset33Case: function() {
    this.test33Button.disabled = false;
    updateResultStatus("result3-3", "Black", "None");
    clearLogs("logs3-3");
  },

  // Test #3-4
  test34Case: function() {
    recordLogs("logs3-4", "Start testing ...");
    this.test34Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-4", "SecureElement API is not present");
      updateResultStatus("result3-4", "Red", "Fail");
    }
    else {
      recordLogs("logs3-4", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-4", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-4", "Open one logical channel to an illegal applet (length of AID is less than 5)");
        return session.openLogicalChannel(hexString2byte(window.AID.AID_Illegal_1));
      })
      .then((channel) => {
        recordLogs("logs3-4", "Do not catch an error");
        updateResultStatus("result3-4", "Red", "Fail");
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-4", "error:" + err);
        // Should update later after confirmed error method and error type
        if (err.name == "SEGenericError") {
          updateResultStatus("result3-4", "Green", "Pass");
        }
        else {
          recordLogs("logs3-4", "Incorrect error type");
          updateResultStatus("result3-4", "Red", "Fail");
        }
        window.reader.closeAll();
      });
    }
  },

  reset34Case: function() {
    this.test34Button.disabled = false;
    updateResultStatus("result3-4", "Black", "None");
    clearLogs("logs3-4");
  },

  // Test #3-5
  test35Case: function() {
    recordLogs("logs3-5", "Start testing ...");
    this.test35Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-5", "SecureElement API is not present");
      updateResultStatus("result3-5", "Red", "Fail");
    }
    else {
      recordLogs("logs3-5", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-5", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-5", "Open one logical channel to an illegal applet (length of AID is more than 16)");
        return session.openLogicalChannel(hexString2byte(window.AID.AID_Illegal_2));
      })
      .then((channel) => {
        recordLogs("logs3-5", "Do not catch an error");
        updateResultStatus("result3-5", "Red", "Fail");
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-5", "error:" + err);
        // Should update later after confirmed error method and error type
        if (err.name == "SEGenericError") {
          updateResultStatus("result3-5", "Green", "Pass");
        }
        else {
          recordLogs("logs3-5", "Incorrect error type");
          updateResultStatus("result3-5", "Red", "Fail");
        }
        window.reader.closeAll();
      });
    }
  },

  reset35Case: function() {
    this.test35Button.disabled = false;
    updateResultStatus("result3-5", "Black", "None");
    clearLogs("logs3-5");
  },

  // Test #3-6
  test36Case: function() {
    recordLogs("logs3-6", "Start testing ...");
    this.test36Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs3-6", "SecureElement API is not present");
      updateResultStatus("result3-6", "Red", "Fail");
    }
    else {
      recordLogs("logs3-6", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs3-6", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs3-6", "Open one logical channel with an AID which is not available on SE");
        return session.openLogicalChannel(hexString2byte(window.AID.AID_Nonexisting));
      })
      .then((channel) => {
        recordLogs("logs3-6", "Do not catch an error");
        updateResultStatus("result3-6", "Red", "Fail");
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs3-6", "error:" + err);
        // Should update later after confirmed error method and error type
        if (err.name == "SEGenericError") {
          updateResultStatus("result3-6", "Green", "Pass");
        }
        else {
          recordLogs("logs3-6", "Incorrect error type");
          updateResultStatus("result3-6", "Red", "Fail");
        }
        window.reader.closeAll();
      });
    }
  },

  reset36Case: function() {
    this.test36Button.disabled = false;
    updateResultStatus("result3-6", "Black", "None");
    clearLogs("logs3-6");
  },

};

window.addEventListener('load', SETest.init.bind(SETest));
window.addEventListener('unload', SETest.uninit.bind(SETest));
