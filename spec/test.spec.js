var pwc = require('../pw_C');
var authenticator = pwc.right;
var checker = pwc.good;

describe('Check Passowrd', function(){

    it("field should not be empty", function(){
        expect(function(){
            authenticator("").toThrow(new Error("password cannot be empty"));
        });
    });

    it("should be larger than 8 charactors within password", function(){
        expect(function(){
            authenticator("frg").toThrow(new Error("password cannot be less than 8 charactors"));
        });
    });

    it("should have at least one number within password", function(){
        expect(function(){
            authenticator("kftyuvfuydv").toThrow(new Error("password must contain atleast one number"));
        });
    });

    it("should have at least one lowercase letter within password", function(){
        expect(function(){
            authenticator("SYRE").toThrow(new Error("password must have at least one small letter"));
        });
    });

    it("should have at least one uppercase letter within passowrd", function(){
        expect(function(){
            authenticator("nwa").toThrow(new Error("password cannot be empty"));
        });
    });
});