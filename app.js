const chalk = require('chalk')
const notes = require('./note')
const yargs = require('yargs')
const fs = require('fs')
const { title } = require('process')

// customizing yargs version
yargs.version('1.1.0')


// const command = process.argv[2]
// console.log(process.argv)
// console.log(yargs.argv)


// add, remove, read, list 
// Create command to ADD notes
yargs.command({
    command : 'add',
    describe : 'Use to add new Note',
    builder: 
    {
        title:
        {
            describe:'Use to add title to note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Use to add body to the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function(argv)
    {
        console.log('Title : '+ argv.title)
        console.log('Body : ', argv.body)
        notes.addNote(argv.title,argv.body)
        
    }
})

// Create command to REMOVE Notes
yargs.command(
    {
        command : 'remove',
        describe : "Use to remove note",
        builder:
        {
            title : 
            {
                describe : "Use to mention title of note",
                demandOption : true,
                type : 'string'
            }
        },
        handler : function(argv)
        {
            notes.removeNote(argv.title)
        }
    }
)

// Create Command to READ out notes
yargs.command({
    command:'read',
    describe : "Use to read notes",
    builder:
    {
        title:
        {
            describe : 'To mention title of the note',
            demandOption : true
        }
    },
    handler : function(argv)
    {
        console.log('Reading a notes')
        notes.readNote(argv.title)
    }
})

// Create Command to LIST out all notes
yargs.command(
    {
        command: "list",
        describe : "Use to list out Notes",
        handler : function()
        {
            notes.listNote()
        }
    }
)

yargs.parse()
// console.log(yargs.argv)