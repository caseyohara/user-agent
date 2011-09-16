describe 'User Agent', ->
  
  agent = null
  
  beforeEach ->
    agent = new UserAgent

  it 'should be an object', ->
    expect(typeof agent).toBe 'object'
    
  describe 'Parser results', ->
    beforeEach ->
      uas = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1'
      agent = new UserAgent(uas)
    
    describe 'Browser Name', ->
      it 'should be chrome', ->
        expect(agent.browser_name).toBe 'chrome'

    describe 'Browser Version', ->
      it 'should be valid', ->
        expect(agent.browser_version).toBe '13.0.782.220'

    describe 'Operating System', ->
      it 'should be OS X 10.6', ->
        expect(agent.os).toBe 'OS X 10.6'

    describe 'Platform', ->
      it 'should be Apple Mac', ->
        expect(agent.platform).toBe 'Apple Mac'