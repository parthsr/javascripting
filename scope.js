var a = 1, b = 2, c = 3;

     (function firstFunction(){
        console.log("first");
         (function secondFunction(){
             var b = 8;
             console.log("sec");
             console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;
                 console.log("third");
                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
         //var b = 5, c = 6;
     })();
