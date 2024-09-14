# node-dir
A very simple js example to count html files. 

The 'count-html-files.js' is the main execution script. It looks in the 'webfiles' folder and counts the number of files ending with '.htm' or '.html'. 

When done, the script exits with a process code that contains the count of html files. Depending on your system/terminal this may be a bit buggy (on error, we return -1 which may look like 255 on some systems). 

If you need to marry this script to another bit of system scripting/logic, the safest thing to do is parse the output on the console. 