'use stricts';

var SETest = {
  get test41Button() {
    delete this.test41Button;
    return this.test41Button = document.getElementById('test4-1');
  },

  get reset41Button() {
    delete this.reset41Button;
    return this.reset41Button = document.getElementById('reset4-1');
  },

  get test42Button() {
    delete this.test42Button;
    return this.test42Button = document.getElementById('test4-2');
  },

  get reset42Button() {
    delete this.reset42Button;
    return this.reset42Button = document.getElementById('reset4-2');
  },

  get test43Button() {
    delete this.test43Button;
    return this.test43Button = document.getElementById('test4-3');
  },

  get reset43Button() {
    delete this.reset43Button;
    return this.reset43Button = document.getElementById('reset4-3');
  },

  get test44Button() {
    delete this.test44Button;
    return this.test44Button = document.getElementById('test4-4');
  },

  get reset44Button() {
    delete this.reset44Button;
    return this.reset44Button = document.getElementById('reset4-4');
  },

  init: function () {
    this.test41Button.addEventListener('click', this.test41Case.bind(this));
    this.reset41Button.addEventListener('click', this.reset41Case.bind(this));
    this.test42Button.addEventListener('click', this.test42Case.bind(this));
    this.reset42Button.addEventListener('click', this.reset42Case.bind(this));
    this.test43Button.addEventListener('click', this.test43Case.bind(this));
    this.reset43Button.addEventListener('click', this.reset43Case.bind(this));
    this.test44Button.addEventListener('click', this.test44Case.bind(this));
    this.reset44Button.addEventListener('click', this.reset44Case.bind(this));
  },

  uninit: function() {
    this.test41Button.removeEventListener('click', this.test41Case.bind(this));
    this.reset41Button.removeEventListener('click', this.reset41Case.bind(this));
    this.test42Button.removeEventListener('click', this.test42Case.bind(this));
    this.reset42Button.removeEventListener('click', this.reset42Case.bind(this));
    this.test43Button.removeEventListener('click', this.test43Case.bind(this));
    this.reset43Button.removeEventListener('click', this.reset43Case.bind(this));
    this.test44Button.removeEventListener('click', this.test44Case.bind(this));
    this.reset44Button.removeEventListener('click', this.reset44Case.bind(this));
  },

  // Test #4-1
  test41Case: function() {
    recordLogs("logs4-1", "Start testing ...");
    this.test41Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs4-1", "SecureElement API is not present");
      updateResultStatus("result4-1", "Red", "Fail");
    }
    else {
      recordLogs("logs4-1", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs4-1", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        window.testSession = session;
	recordLogs("logs4-1", "open a logical channel to CRS applet ...");
        return session.openLogicalChannel(hexString2byte(window.AID.CRS));
      })
      .then((channel) => {
        recordLogs("logs4-1", "Check if session object from channel instance is equal to session instance");
        if (window.testSession != channel.session) {
          updateResultStatus("result4-1", "Red", "Fail");
        }
        else {
          updateResultStatus("result4-1", "Green", "Pass");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs4-1", "error:" + err);
        updateResultStatus("result4-1", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset41Case: function() {
    this.test41Button.disabled = false;
    updateResultStatus("result4-1", "Black", "None"); 
    clearLogs("logs4-1");
  },

  // Test #4-2
  test42Case: function() {
    recordLogs("logs4-2", "Start testing ...");
    this.test42Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs4-2", "SecureElement API is not present");
      updateResultStatus("result4-2", "Red", "Fail");
    }
    else {
      recordLogs("logs4-2", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs4-2", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs4-2", "open a logical channel to CRS applet ...");
        return session.openLogicalChannel(hexString2byte(window.AID.CRS));
      })
      .then((channel) => {
        recordLogs("logs4-2", "Check open channel status");
        if (channel.isClosed == false) {
          updateResultStatus("result4-2", "Green", "Pass");
        }
        else {
          uppdateResultStatus("result4-2", "Red", "Fail");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs4-2", "error:" + err);
        updateResultStatus("result4-2", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset42Case: function() {
    this.test42Button.disabled = false;
    updateResultStatus("result4-2", "Black", "None");
    clearLogs("logs4-2");
  },

  // Test #4-3
  test43Case: function() {
    recordLogs("logs4-3", "Start testing ...");
    this.test43Button.disabled = true;
    if (!window.navigator.seManager) {
      recordLogs("logs4-3", "SecureElement API is not present");
      updateResultStatus("result4-3", "Red", "Fail");
    }
    else {
      recordLogs("logs4-3", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs4-3", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs4-3", "open a logical channel to CRS applet ...");
        return session.openLogicalChannel(hexString2byte(window.AID.CRS));
      })
      .then((channel) => {
        recordLogs("logs4-3", "Check channel type");
        var result = channel.type;
        recordLogs("logs4-3", "Channel type: " + result);
        if (result == "logical") {
          updateResultStatus("result4-3", "Green", "Pass");
        }
        else {
          uppdateResultStatus("result4-3", "Red", "Fail");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs4-3", "error:" + err);
        updateResultStatus("result4-3", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset43Case: function() {
    this.test43Button.disabled = false;
    updateResultStatus("result4-3", "Black", "None");
    clearLogs("logs4-3");
  },

  // Test #4-4
  test44Case: function() {
    recordLogs("logs4-4", "Start testing ...");
    this.test44Button.disabled = true;
    window.result44 = true;
    if (!window.navigator.seManager) {
      recordLogs("logs4-4", "SecureElement API is not present");
      updateResultStatus("result4-4", "Red", "Fail");
    }
    else {
      recordLogs("logs4-4", "Get SEReaders");
      window.navigator.seManager.getSEReaders()
      .then((readers) => {
        window.reader = readers[0];
        recordLogs("logs4-4", "Open one session");
        return readers[0].openSession();
      })
      .then((session) => {
        recordLogs("logs4-4", "open a logical channel to CRS applet ...");
        return session.openLogicalChannel(hexString2byte(window.AID.CRS));
      })
      .then((channel) => {
        recordLogs("logs4-4", "Channel opened, transmit getData command");
        return channel.transmit(window.APDU.CRS.getData);
      })
      .then((response) => {
        if (checkResponse("logs4-4", response, 0x90, 0x00) == false) {
          window.result44 = false;
        } 
        recordLogs("logs4-4", "Transmit nfcActivate command");
        return response.channel.transmit(window.APDU.CRS.nfcActivate);
      })
      .then((response) => {
        if (checkResponse("logs4-4", response, 0x90, 0x00) == false) {
          window.result44 = false;
        } 
        recordLogs("logs4-4", "Transmit nfcDeactivate command");
        return response.channel.transmit(window.APDU.CRS.nfcDeactivate);
      })
      .then((response) => {
        if (checkResponse("logs4-4", response, 0x90, 0x00) == false) {
          window.result44 = false;
        }
        if (window.result44) {
          updateResultStatus("result4-4", "Green", "Pass");  
        }
        else {
          updateResultStatus("result4-4", "Red", "Fail");
        }
        window.reader.closeAll();
      })
      .catch((err) => {
        recordLogs("logs4-4", "error:" + err);
        updateResultStatus("result4-4", "Red", "Fail");
        window.reader.closeAll();
      });
    }
  },

  reset44Case: function() {
    this.test44Button.disabled = false;
    updateResultStatus("result4-4", "Black", "None");
    clearLogs("logs4-4");
  },
    
};

window.addEventListener('load', SETest.init.bind(SETest));
window.addEventListener('unload', SETest.uninit.bind(SETest));
