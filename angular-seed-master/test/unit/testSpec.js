     xdescribe('$exceptionHandlerProvider', function() {
     
    it('should capture log messages and exceptions', function() {
     
    module(function($exceptionHandlerProvider) {
    $exceptionHandlerProvider.mode('log');
    });
     
    inject(function($log, $exceptionHandler, $timeout) {
    $timeout(function() { $log.log(1); });
    $timeout(function() { $log.log(2); throw 'banana peel'; });
    $timeout(function() { $log.log(3); });
    expect($exceptionHandler.errors).toEqual([]);
    expect($log.assertEmpty());
    $timeout.flush();
    expect($exceptionHandler.errors).toEqual(['banana peel']);
    expect($log.log.logs).toEqual([[1], [2], [3]]);
    });
    });
    });