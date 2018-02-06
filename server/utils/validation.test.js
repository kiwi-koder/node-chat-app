const expect = require('expect');

var { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var nonString = 5;
        var test = isRealString(nonString);
        expect(test).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString('  23n3f49n   ');
        expect(res).toBe(true);
    });
});