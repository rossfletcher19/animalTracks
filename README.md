# _animalTracks_

#### _A simple app to track all our lovely animals._

#### By _**Ross Fletcher**_

## _Planning_

## Specs

| Behavior  | input  | output  |
|---|---|---|
| I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.  | Add New Animal  | Created Instance of Animal with assigned properties  |
| I want to view a list of animals I have logged.  | View All Animals  | Shows List of all animals  |
| I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).  | View Animals < 2 or View Animals >= 2   | List of animals < 2 years of age OR List of animals >= 2 years of age  |
| I want to click an animal to edit its name, age or caretakers.  | Click edit button  | Show form to edit animal properties  |
|   |   |   |

## _animalTracks_
![home-screen](https://github.com/rossfletcher19/animalTracks/blob/master/resources/img/animalTracksSs.jpg)

## Further Exploration

| Behavior  | input  | output  |
|---|---|---|
| Add custom SASS styling with corresponding Gulp tasks to compile.  | Display of the total number of caretakers needed in a day.  |   |
| Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.  | Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.  |   |
| Add a new master component to average the total age for each species.  |   |   |
| Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)  |   |   |
|   |   |   |
|   |   |   |


## Configuration/dependencies
  * NodeJS with gulp and bower tasks, with Karma testing.
  * Dependencies are declared in package.json and bower.json. Run npm install and bower install.



## Integration
  * Initial boilerplate project folder with all dependencies
  * script files working together with import and export
  * Testing functions for with Karma before front end integration.
  * Integrate features and functions into front end.

## UX/UI
  * Include and modify bootstrap.
  * Develop custom style

## Polish
  * Refactor
  * Delete unused
  * Make README awesome


## Setup/Installation Requirements


* Clone this repo. <br/>
`$ git clone https://github.com/rossfletcher19/animalTracks.git`
* in the cloned repo run the following command from your terminal: <br/>
`$ npm install && bower install`
* run build with:
`gulp build`
* Serve a production version of the web app by running this gulp task: <br/>
`gulp serve --prod`

## Known Bugs

_None Known._

## Technologies Used

* _Angular_
* _JavaScript_
* _jQuery-3.2.1_
* _HTML_
* _CSS_
* _npm, gulp, bower_
* _Karma testing_
* _BetterDoctor API_

### License

Copyright (c) 2018 **_Ross Fletcher_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
