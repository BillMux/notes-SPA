(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnList = function () {

    htmlString = this.noteList.entries.map(
      entry => `<li>${entry.getText()}</li>`
    ).join('')
    return `<ul>${htmlString}</ul>`;
  };

  exports.NoteListView = NoteListView;
})(this);
