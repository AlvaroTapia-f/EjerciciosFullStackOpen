SequenceDiagram
participant browser
participant server

browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
note right of server: The server saves the note. It then re-renders the component.
deactivate server
