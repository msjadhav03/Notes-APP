const fs = require('fs')
const chalk = require('chalk')
const addNote = (title,body) =>
{
    const notes = loadNote()

    const duplicateNote = notes.filter((note)=>
    {
        return note.title === title
    })
    if(duplicateNote.length === 0)
    {
        notes.push(
            {
                title:title,
                body:body
            }
        )
        saveNote(notes)
        console.log(chalk.inverse.green('New note has been added'))
    }else
    {
        console.log(chalk.inverse.red('Note cannot be added duplicate title found'))
    }
    
}

const saveNote = (notes) =>
{
    const noteData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',noteData)
}

const removeNote = (title) =>
{
    const notes = loadNote()
    const removedNotesArray = notes.filter((note)=>
    {
        return note.title !== title
    })
    if(removedNotesArray.length !== notes.length)
    {
        saveNote(removedNotesArray)
        console.log(chalk.inverse.green('Note has been REMOVED'))
    }else
    {
        console.log(chalk.inverse.red('No note found'))
    }
  
}
const loadNote = () =>
{
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }catch(e)
    {
        return []
    }
}

const listNote = () =>
{
    const notes = loadNote()
    notes.forEach(element => {
        console.log(chalk.inverse.green('Notes...'))
        console.log(chalk.blue(element.title))
    });
}

const readNote = (title) =>
{
    const notes = loadNote()
    const noteFound = notes.find((note)=>
    {
        return note.title === title
    })
    if(noteFound)
    {
        console.log(chalk.green.inverse(noteFound.body))
    }else
    {
        console.log(chalk.inverse.red('Note not found'))
    }
}
module.exports = 
{
    addNote : addNote,
    loadNote : loadNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
}