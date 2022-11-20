Rules:

1. All css file need to be in css folder.
2. All js file need to be in js folder.
3. Before to start working on a task, make sure to update development branch and create a new branch feature/task\_'task_number'
4. All CSS and JS files should start their file name with a lowercase letter.

Tasks:

1. Create new css and js file, and link them to the index.html file,this new files should be named task_one

   - create a new div as a section, name it section-task_one
   - this section will have 100 vh of the screen.
   - need for a button, named 'click' and when button is pressed to add a new square to page.

2. Create new css and js file, and link them to the index.html file, this new files should be named task_two

   - create a new div as a section, name it section-task_two.
   - this section will have 100 vh of the screen.
   - a button with name 'alert' when click to pop a js alert.

3. Create public folder and in public folder create images folder

   - source to images folder from route ''

4. Organise the code, and move the css and js folders to public folder.

   - updated all links in html for JS and CSS.

5. Structure new pages and list.

   - create in root folder a new folder named 'pages'.
   - in index.html file create a new div with class name 'section-task_five'.
   - in this div add a link to navigate to a new page, this link name should be 'List'.
   - in pages folder create a new list.html file.
   - in this page create add a link to navigate to index.html page, this link name should be 'Home'.

6. List page requirements

   - create for list.html a new css and js file, and name this files list.'css/js' .
   - link this two files in list.html .
   - in list.html make a div with class name 'list-section'
   - in this div should have full width and height
   - create in this div a new div with class name 'list-section_navigation'.
   - style this div to look like a navigation bar.
   - in this navigation bar put the link to navigate to home page.
   - navigation bar should have a darker color, but not complete black.
   - style link to home to have white text and bold.

7. Refactorin index.html
   .In index.html change next things:

   - remove evertything starting line 13 to ending line 40.
   - unlink task_one and task_two CSS/JS files and delete this files from their folders.
   - renamed js and css files of index.html, from Index.css to index.css.

8. Creating Components folder.

   - in root of this project create a new folder 'components'.
     (This folder will be used for css files that are required on more than one page).
   - create a new CSS file 'navigation.css'.
   - in list.html you have a navigation bar(div), Copy the code from that page CSS file (only for navigation bar), and paste it in the navigation.css.
   - in list.css delete code responsible for navigation bar.
   - now link in list.html the CSS file found in Components/navigation.css.
     (To be easy for use, we will only write the exact same class name for navigation bar and same html element, in the page where we want to use navigation bar, and only link the navigation.css from Components)

9. Reworking the index.html.

   - delete section-task_five div, and only keep the a element.
   - between </head> and last line of </html> insert a body element.
   - in body element create a new div with class name 'section-index'.
   - this div should have 100 height and in this div put havigation bar.
     ( navigation bar should be always at top of the page)
   - this navigation bar should have link to list.html.
   - this page index.html by now should only have a navigation bar at the top of the page.
   - in the middlew of the page, create 3 black squares, not too big but not too small, and in every square should have a wordm in this order
     Read Implement Repeat, and style them to look good.

10. Improving list.html

- make a input filed so user can insert data.
- near the input field make a button 'insert'
- when user write something in input and press insert, data should be received in a js function named getDataFromUser().
- this function should be placed in list.html's js file, not in any js file.
- in list.html inside the div with class name 'list-section-navigation' you should create a new div with class name 'list-from-user', and in this div, you should place with JS the data that were recieved in getDataFromUser().
