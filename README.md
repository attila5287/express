11 Express.js 
======
  note taking app with no db but client-side localStorage to save notes and user preferences
  ---
 ![alt text](https://raw.githubusercontent.com/attila5287/express/main/img/note_taker.png "github-logo-png")|---|
 |---|---|
  Note Taker : Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. | ---|


| ![alt text](https://raw.githubusercontent.com/attila5287/express/main/img/js.png  "node-js-png") |package|
|--- |--- | 
|express |framework | 
|fs |file system | 


The following HTML routes should be created:
|![alt text](https://raw.githubusercontent.com/attila5287/express/main/img/url_bw.png  "node-js-png")  | request method/URL/logic
| ---| ---
|  `GET /notes`|  should return the `notes.html` file.| 
|  `GET *`|  should return the `index.html` file.| 
|  `GET /api/notes`| should read the `db.json` file and return all saved notes as JSON.|
|  `POST /api/notes` | should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you)|
| `DELETE /api/notes/:id` |  should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

 
> *The application’s front end has already been created. It's your job to build the back end, connect the two, and then deployment|deploy the entire application to Heroku.*


| --- | ---|
| --- | ---|
|![html][1] | use pre-designed form elements on the page |
|![css][2] | none |
|![sql][4] | write on/read from db.json as mock db |
|![js][3] |set up routes, install express  |
|![heroku][5] | <https://notetakerhero.herokuapp.com> |


[1]: https://raw.githubusercontent.com/attila5287/express/main/img/html.png
[2]: https://raw.githubusercontent.com/attila5287/express/main/img/css-icon.png
[3]: https://raw.githubusercontent.com/attila5287/express/main/img/js-icon.png
[4]: https://raw.githubusercontent.com/attila5287/express/main/img/sql-icon.png
[5]: https://raw.githubusercontent.com/attila5287/express/main/img/h.png

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Develop/Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Develop/Assets/11-express-homework-demo-02.png)


| ![dev]( https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg "dev-icon") | About Developer | 
| -------------   | -------------: |
| Repos | [github.com/attila5287 ](https://github.com/attila5287/) |
| Profile | [ attila5287.github.io ](https:///attila5287.github.io/) |
| Email    |  atiturkoz@hotmail.com | 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

