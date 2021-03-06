/*
 * This is a basic func test for a Routing application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', function (Y) {
   
    var suite = new Y.Test.Suite("Routing: BasicRouting2");
    
    suite.add(new Y.Test.Case({
	     "test BasicRouting2": function(){  
             Y.Assert.areEqual('This is another simple mojit for testing routing - SimpleRoute2 (route-2)', Y.one('#mytext').get('innerHTML'));
         }
   }));    

   Y.Test.Runner.add(suite);
});
