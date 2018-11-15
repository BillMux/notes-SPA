var list = new NoteList
var noteList = new NoteListView(list.entries);
document.getElementById('app').innerHTML = 'Howdy';
document.getElementById('notes').innerHTML = noteList.returnList();
