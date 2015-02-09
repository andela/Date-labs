describe("PrettyDate: check Date difference status, ", function(){

  it("should check for time status instantly", function(){
    var now = "2008/01/28 22:25:00";
    var prettyDate = new PrettyDate( now );
    expect( prettyDate.showStatus( now, "2008/01/28 22:25:00")).toBe("just now");
  });

  it("should check for a minute difference", function(){
    var now = "2008/01/28 22:27:30";
    var prettyDate = new PrettyDate( now );
    expect( prettyDate.showStatus( now, "2008/01/28 22:26:30")).toBe("1 minute ago");
  });

  it("should check for an hour difference", function(){
    var now = "2008/01/28 22:22:10";
    var prettyDate = new PrettyDate( now );
    expect( prettyDate.showStatus( now, "2008/01/28 21:22:10")).toBe("1 hour ago");
  });

  it("should check for a day's difference", function(){
    var now = "2008/01/28 22:22:10";
    var prettyDate = new PrettyDate( now );
    expect( prettyDate.showStatus( now, "2008/01/27 21:22:10")).toBe("Yesterday");
  });

});