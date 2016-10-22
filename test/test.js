QUnit.test( "Hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Currency Converter Test", function( assert ) {
  assert.strictEqual(Test.Name(100), 'Success','Successfully Entered valid Number');
  assert.strictEqual(Test.Name(-10), 'It is a Negative Number','Returns You are kidding. Amount can not be a negative value. Please enter a positive value');
  assert.strictEqual(Test.Name(""),'Empty Value', 'Returns Please enter a value');
  assert.strictEqual(Test.Name("Bharadwaj"),'It is a String', 'Returns Please enter only numbers');
  
  
  
});

