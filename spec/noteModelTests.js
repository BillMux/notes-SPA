describe('note', function() {
  it('can store notes', function() {
    var note = new Note('My favourite language is JavaScript');
    new Expect(note.getText()).toEqual('My favourite language is JavaScript');
  });
});
