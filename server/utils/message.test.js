var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = "Josh";
        var text = "Suh dude";
        var res = generateMessage(from, text);
        expect(res).toInclude({from, text});
        expect(typeof res.createdAt).toBe('number');
    })
})