# SHIT.COM

## Progress <br />
2018/03/29 First commit, express基本架構, shit.com首頁套板完成<br>
2018/03/30 Create partials in view to implement oop <br>
2018/03/30 Server can handle POST requests and render it on the website (searchContent)<br>
2018/04/02 Include "scrollreveal.min.js" and "shit.js" in "footer.ejs" to implement the animation of social icon <br>

## Issues <br />

### 2018/04/02 

Problem: Refused to execute script from 'http://localhost:3000/public/js/shit.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled. <br>

Solve: Change the path to "js/shit.js" because "public/" is default. <br>
(app.use(express.static(path.join(__dirname, 'public')));) <br>
