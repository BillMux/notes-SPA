(function(exports) {
  function NoteList() {
    this.entries = [];
  };

  NoteList.prototype.addNote = function(text) {
    this.entries.push(text);
  };

  exports.NoteList = NoteList;
})(this);
