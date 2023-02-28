import { Note } from "./Note.js"


let newNote = new Note(document.getElementById("app"), "Name of action");
    
document.getElementById('action').addEventListener('click', function() {
    let newNote = new Note(document.getElementById("app"), prompt("Name of action"));
    
})