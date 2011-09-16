var UserAgent;
UserAgent = (function() {
  var Browsers, OS, Platform, Versions, browser_name, browser_version, os, platform;
  Versions = {
    Chrome: /chrome\/([\d\w\.\-]+)/i,
    Safari: /version\/([\d\w\.\-]+)/i,
    Ps3: /([\d\w\.\-]+)\)\s*$/i,
    Psp: /([\d\w\.\-]+)\)?\s*$/i
  };
  Browsers = {
    Konqueror: /konqueror/i,
    Chrome: /chrome/i,
    Safari: /safari/i,
    IE: /msie/i,
    Opera: /opera/i,
    PS3: /playstation 3/i,
    PSP: /playstation portable/i,
    Firefox: /firefox/i
  };
  OS = {
    WindowsVista: /windows nt 6\.0/i,
    Windows7: /windows nt 6\.\d+/i,
    Windows2003: /windows nt 5\.2/i,
    WindowsXP: /windows nt 5\.1/i,
    Windows2000: /windows nt 5\.0/i,
    OSX: /os x (\d+)[._](\d+)/i,
    Linux: /linux/i,
    Wii: /wii/i,
    PS3: /playstation 3/i,
    PSP: /playstation portable/i,
    Ipad: /\(iPad.*os (\d+)[._](\d+)/i,
    Iphone: /\(iPhone.*os (\d+)[._](\d+)/i
  };
  Platform = {
    Windows: /windows/i,
    Mac: /macintosh/i,
    Linux: /linux/i,
    Wii: /wii/i,
    Playstation: /playstation/i,
    Ipad: /ipad/i,
    Ipod: /ipod/i,
    Iphone: /iphone/i,
    Android: /android/i,
    Blackberry: /blackberry/i
  };
  function UserAgent(source) {
    if (source == null) {
      source = navigator.userAgent;
    }
    this.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
    this.browser_name = browser_name(this.source);
    this.browser_version = browser_version(this.source);
    this.os = os(this.source);
    this.platform = platform(this.source);
  }
  browser_name = function(string) {
    switch (true) {
      case Browsers.Konqueror.test(string):
        return 'konqueror';
      case Browsers.Chrome.test(string):
        return 'chrome';
      case Browsers.Safari.test(string):
        return 'safari';
      case Browsers.IE.test(string):
        return 'ie';
      case Browsers.Opera.test(string):
        return 'opera';
      case Browsers.PS3.test(string):
        return 'ps3';
      case Browsers.PSP.test(string):
        return 'psp';
      case Browsers.Firefox.test(string):
        return 'firefox';
      default:
        return 'unknown';
    }
  };
  browser_version = function(string) {
    var regex;
    switch (browser_name(string)) {
      case 'chrome':
        if (Versions.Chrome.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'safari':
        if (Versions.Safari.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'ps3':
        if (Versions.Ps3.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'psp':
        if (Versions.Psp.test(string)) {
          return RegExp.$1;
        }
        break;
      default:
        regex = /#{name}[\/ ]([\d\w\.\-]+)/i;
        if (regex.test(string)) {
          return RegExp.$1;
        }
    }
  };
  os = function(string) {
    switch (true) {
      case OS.WindowsVista.test(string):
        return 'Windows Vista';
      case OS.Windows7.test(string):
        return 'Windows 7';
      case OS.Windows2003.test(string):
        return 'Windows 2003';
      case OS.WindowsXP.test(string):
        return 'Windows XP';
      case OS.Windows2000.test(string):
        return 'Windows 2000';
      case OS.Linux.test(string):
        return 'Linux';
      case OS.Wii.test(string):
        return 'Wii';
      case OS.PS3.test(string):
        return 'Playstation';
      case OS.PSP.test(string):
        return 'Playstation';
      case OS.OSX.test(string):
        return string.match(OS.OSX)[0].replace('_', '.');
      case OS.Ipad.test(string):
        return string.match(OS.Ipad)[0].replace('_', '.');
      case OS.Iphone.test(string):
        return string.match(OS.Iphone)[0].replace('_', '.');
      default:
        return 'unknown';
    }
  };
  platform = function(string) {
    switch (true) {
      case Platform.Windows.test(string):
        return "Microsoft Windows";
      case Platform.Mac.test(string):
        return "Apple Mac";
      case Platform.Android.test(string):
        return "Android";
      case Platform.Blackberry.test(string):
        return "Blackberry";
      case Platform.Linux.test(string):
        return "Linux";
      case Platform.Wii.test(string):
        return "Wii";
      case Platform.Playstation.test(string):
        return "Playstation";
      case Platform.Ipad.test(string):
        return "iPad";
      case Platform.Ipod.test(string):
        return "iPod";
      case Platform.Iphone.test(string):
        return "iPhone";
      default:
        return 'unknown';
    }
  };
  return UserAgent;
})();