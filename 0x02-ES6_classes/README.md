
## 0x02. ES6 Classes



### Learning Objectives
By the end of this project, you should be able to explain:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols


### Setup
- **Install NodeJS 12.11.x**:
  ```bash
  curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
  sudo bash nodesource_setup.sh
  sudo apt install nodejs -y
  nodejs -v  # should return v12.11.1
  npm -v  # should return 6.11.3

# ES6 Classes Project

This repository contains tasks related to ES6 classes, object-oriented programming, and other related topics. The tasks require implementing various classes and methods using modern JavaScript features.

## Table of Contents

1. [Task 0: ClassRoom](#task-0-classroom)
2. [Task 1: Initialize Rooms](#task-1-initialize-rooms)
3. [Task 2: HolbertonCourse](#task-2-holbertoncourse)
4. [Task 3: Currency](#task-3-currency)
5. [Task 4: Pricing](#task-4-pricing)
6. [Task 5: Building](#task-5-building)
7. [Task 6: SkyHighBuilding](#task-6-skyhighbuilding)
8. [Task 7: Airport](#task-7-airport)
9. [Task 8: HolbertonClass](#task-8-holbertonclass)
10. [Task 9: Hoisting](#task-9-hoisting)
11. [Task 10: Car](#task-10-car)
12. [Task 11: EVCar](#task-11-evcar)

# ES6 Classes Project

This repository is dedicated to exploring ES6 classes and object-oriented programming concepts through various tasks. Below is a brief description of each task and its requirements.

## Tasks

### Task 0: ClassRoom
- Implement a `ClassRoom` class.
- The class should accept a `maxStudentsSize` attribute and store it.

### Task 1: Initialize Rooms
- Create a function `initializeRooms` that returns an array of `ClassRoom` objects.
- The sizes of the classrooms should be 19, 20, and 34.

### Task 2: HolbertonCourse
- Implement a `HolbertonCourse` class with attributes `name`, `length`, and `students`.
- Add getters and setters for each attribute, with type validation.

### Task 3: Currency
- Implement a `Currency` class with attributes `code` and `name`.
- Add getters and setters, and a method to display the full currency information.

### Task 4: Pricing
- Implement a `Pricing` class with attributes `amount` and `currency`.
- Add methods to display full pricing information and convert prices using a static method.

### Task 5: Building
- Implement an abstract `Building` class with an attribute `sqft`.
- Any class extending `Building` must implement an `evacuationWarningMessage` method.

### Task 6: SkyHighBuilding
- Implement a `SkyHighBuilding` class that extends `Building`.
- Add an attribute `floors` and override the `evacuationWarningMessage` method.

### Task 7: Airport
- Implement an `Airport` class with attributes `name` and `code`.
- The default string description should return the airport code.

### Task 8: HolbertonClass (Primitive)
- Implement a `HolbertonClass` class with attributes `size` and `location`.
- The class should return the size when cast to a number and the location when cast to a string.

### Task 9: Hoisting
- Fix an existing code snippet to make it functional.
- The task involves two classes: `HolbertonClass` and `StudentHolberton`.

### Task 10: Car
- Implement a `Car` class with attributes `brand`, `motor`, and `color`.
- Add a method `cloneCar` to return a new object of the class.

### Task 11: EVCar (Advanced)
- Implement an `EVCar` class that extends `Car`.
- Add a `range` attribute and ensure that cloning returns a `Car` object, not an `EVCar`.

## Repository Structure

- **Directory**: `0x02-ES6_classes`
- **Files**: Each task has its own `.js` file, named according to the task number (e.g., `0-classroom.js`, `1-make_classrooms.js`, etc.).

## Usage

- Use `npm run dev <filename>` to execute the JavaScript files and test the implementations.
