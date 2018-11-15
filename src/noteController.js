(function(exports) {
  function NoteController(noteList) {
    var list = new NoteList;
    this.noteList = new NoteListView(list);
  };

  NoteController.prototype.addNote = function(text) {
    document.getElementById('app').innerHTML = text;
    document.getElementById('notes').innerHTML = this.noteList.returnList();
  };

    exports.NoteController = NoteController;

})(this);
