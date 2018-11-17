(function(exports) {
  function NoteList() {
    this.entries = [];
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.entries.push(note);
  };

  exports.NoteList = NoteList;
})(this);
