(()=>{var e={469:e=>{MathUtils=function(){},MathUtils.prototype.sum=function(e,t){if(2!==arguments.length)throw TypeError("Please enter two Args");if("number"!=typeof(e||t))throw TypeError("Please enter two numbers");return e+t},MathUtils.prototype.substract=function(e,t){if(2!==arguments.length)throw TypeError("Please enter two Args");if("number"!=typeof(e||t))throw TypeError("Please enter two numbers");return e-t},MathUtils.prototype.multiply=function(e,t){if(2!==arguments.length)throw TypeError("Please enter two Args");if("number"!=typeof(e||t))throw TypeError("Please enter two numbers");return e*t},MathUtils.prototype.divide=function(e,t){if(2!==arguments.length)throw TypeError("Please enter two Args");if("number"!=typeof(e||t))throw TypeError("Please enter two numbers");if(!t)throw TypeError("can't divide by zero");return e/t},MathUtils.prototype.average=function(e,t){if(2!==arguments.length)throw TypeError("Please enter two Args");if("number"!=typeof(e||t))throw TypeError("Please enter two numbers");return(e+t)/2},MathUtils.prototype.factorial=function(e){if(1!==arguments.length)throw TypeError("Please enter one Args");if(e<0)throw new Error("There is no factorial for negative numbers");return 1==e||0==e?1:e*this.factorial(e-1)},MathUtils.prototype.checkPositivity=function(e){if("number"!=typeof e)throw TypeError("Please enter number");return!(e<0)},e.exports={MathUtils,obj:{hello:function(){return"hello"},world:function(){return"world"}},sayHelloWorld:function(e){return e.hello(3)+" "+e.world()}}}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}(()=>{const{MathUtils:e,obj:t,sayHelloWorld:o}=r(469);describe("MathUtils fun",(()=>{var t;beforeEach((()=>{t=new e})),it("test sum inside MathUtils",(()=>{expect(t.sum(2,3)).toEqual(5),expect(t.sum(2,3)).toEqual(jasmine.any(Number)),expect(t.sum(2,3)).toBe(5)})),it("test checkPositivity",(()=>{expect(t.checkPositivity(4)).toBeTruthy(),expect(t.checkPositivity(-4)).toBeFalsy()})),it("test throw error if two args only",(()=>{expect((()=>t.sum(4,4,3))).toThrow(new TypeError("Please enter two Args"))})),it("test throw error if two args not numbers",(()=>{expect((()=>t.sum("f",3))).toThrow(new TypeError("Please enter two numbers"))})),it("test throw error if two args only",(()=>{expect((()=>t.substract(4,4,3))).toThrow(new TypeError("Please enter two Args"))})),it("test throw error if two args not numbers",(()=>{expect((()=>t.substract("f",3))).toThrow(new TypeError("Please enter two numbers"))})),it("test throw error if two args only",(()=>{expect((()=>t.multiply(4,4,3))).toThrow(new TypeError("Please enter two Args"))})),it("test throw error if two args not numbers",(()=>{expect((()=>t.multiply("f",3))).toThrow(new TypeError("Please enter two numbers"))})),it("test throw error if two args only",(()=>{expect((()=>t.divide(4,4,3))).toThrow(new TypeError("Please enter two Args"))})),it("test throw error if two args not numbers",(()=>{expect((()=>t.divide("f",3))).toThrow(new TypeError("Please enter two numbers"))})),it("test throw error if negative numbers",(()=>{expect((()=>t.factorial(-4))).toThrow(new TypeError("There is no factorial for negative numbers"))})),it("test throw error if two args not numbers",(()=>{expect((()=>t.factorial(3,4))).toThrow(new TypeError("Please enter one Args"))}))})),it("study dtest iff btn toEqual and tobe",(()=>{var e={id:1},t={x:e};expect({x:e}).toEqual(t)})),describe("study spyOn",(()=>{it("spyOn hello",(()=>{spyOn(t,"hello"),o(t),o(t),expect(t.hello).toHaveBeenCalled(),expect(t.hello).toHaveBeenCalledTimes(2)}))})),describe("create custom matcher",(()=>{beforeEach((()=>{jasmine.addMatchers({toBeGreater:function(){return{compare:function(e){var t={};return t.pass=e>100,t.message="actual should be more than 100",t}}}})})),it("test custom matcher",(()=>{expect(200).toBeGreater()}))})),describe("study clock",(()=>{beforeAll((()=>{jasmine.clock().install()})),afterAll((()=>{jasmine.clock().uninstall()})),it("test var",(()=>{var e=5;setTimeout((()=>{e=10}),1e3),expect(e).toEqual(5),jasmine.clock().tick(1e3),expect(e).toEqual(10)}))}))})()})();