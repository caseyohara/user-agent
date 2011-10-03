fixtures = 
  user_agent_strings : [
    {
      source          : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1'
      browser_name    : 'chrome'
      browser_version : '13.0.782.220'
      os              : 'OS X 10.6'
      platform        : "Apple Mac"
    }
    {
      source          : 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'
      browser_name    : 'ie'
      browser_version : '9.0'
      os              : 'Windows 7'
      platform        : "Microsoft Windows"
    }
    {
      source          : 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:7.0.1) Gecko/20100101 Firefox/7.0.1'
      browser_name    : 'firefox'
      browser_version : '7.0.1'
      os              : 'Windows 7'
      platform        : "Microsoft Windows"
    }    
  ]
  

describe 'User Agent', ->
  
  describe "Parser Results", ->
  
    for uas in fixtures.user_agent_strings
    
      agent = new UserAgent uas.source

      describe "#{uas.source}", ->
        it "Browser name should be '#{uas.browser_name}'", ->
          expect(agent.browser_name).toBe uas.browser_name

        it "Browser version should be '#{uas.browser_version}'", ->
          expect(agent.browser_version).toBe uas.browser_version
  
        it "Operating system should be '#{uas.os}'", ->
          expect(agent.os).toBe uas.os
    
        it "Platform should be '#{uas.platform}'", ->
          expect(agent.platform).toBe uas.platform



