
# REST API - TIM
A simple Node app using MongoDB for internship application at Thread in Motion.

# Installation
1. Clone the repository: ``git clone https://github.com/calv-g/rest-api-tim.git``
2. Install the requirements: ``npm install``
3. Edit ``mongodb address here`` in ``server.js``
4. Start the server: ``node server.js``
5. View in browser:``http://localhost:3000/``

# Usage
 - For POST request, add your image path as ``JSON`` to the body, for example:
```json
{
	"path":"./foo.png"
}
```
or
```json
{
	"path":"./images/bar.jpg"
}
```
 - For GET request, simply refresh the browser.
