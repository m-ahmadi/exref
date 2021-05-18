var log = console.log;

var t = $.Deferred()
	.done()
	.fail();
t.resolve();


t = $.Deferred(function () { log('beforeStart') });

t.done(function (a,b,c) { log('done', a,b,c) });
t.fail(function (a,b,c) { log('fail', a,b,c) });

t.resolve(1, 2, 3)
t.reject(-1, -2, -3)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$.Deferred()

always()
cath( fn )
done()
fail()
notify()
notifyWith( context, args )
pipe( /* fnDone, fnFail, fnProgress */ )
progress()
promise( obj )
reject()
rejectWith( context, args )
resolve()
resolveWith( context, args )
state()
then( onFulfilled, onRejected, onProgress )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
t = $.Deferred
t.promise()

always()
cath()
done()
fail()
pipe()
progress()
promise()
state()
then( onFulfilled, onRejected, onProgress )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@