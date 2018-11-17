(function(exports) {
  function NoteController(noteList) {
    // this.noteList = new NoteList;
    this.noteList = noteList;
    this.noteList.addNote('blahblah')
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.renderList = function() {
    document.getElementById('app').innerHTML = this.noteListView.returnList();
  };

    exports.NoteController = NoteController;

})(this);

(function() {
  var noteController = new NoteController(new NoteList());
  noteController.renderList();
})();
