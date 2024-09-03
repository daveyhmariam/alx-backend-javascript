# 0x03. ES6 Data Manipulation

## JavaScript | ES6

### Project Duration:
**Start Date:** Jul 1, 2024 6:00 AM  
**End Date:** Jul 3, 2024 6:00 AM  

### Project Overview:
This project focuses on ES6 data manipulation techniques using JavaScript. It includes working with arrays, typed arrays, and various data structures like Set, Map, and WeakMap. The project also emphasizes the use of modern JavaScript functions such as `map`, `filter`, and `reduce`.

### Requirements:
- **Environment:** Ubuntu 18.04 LTS
- **Node.js Version:** 12.11.x
- **Linter:** ESLint
- **Testing Framework:** Jest

### Setup Instructions:
1. **Install NodeJS 12.11.x:**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y

# ES6 Data Manipulation

## Tasks

### 0. Basic list of objects
Create a function `getListStudents` that returns an array of student objects with attributes `id`, `firstName`, and `location`.

### 1. More mapping
Create a function `getListStudentIds` that returns an array of IDs from a list of student objects. Use the `map` function.

### 2. Filter
Create a function `getStudentsByLocation` that returns students located in a specific city using the `filter` function.

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all student IDs using the `reduce` function.

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with updated grades. Combine `filter` and `map`.

### 5. Typed Arrays
Create a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position. Handle errors if the position is outside the range.

### 6. Set data structure
Create a function `setFromArray` that returns a `Set` from an array.

### 7. More set data structure
Create a function `hasValuesFromArray` that checks if all elements in an array exist within a `Set`. Returns a boolean.

### 8. Clean set
Create a function `cleanSet` that returns a string of all `Set` values starting with a specific string, separated by a hyphen.

### 9. Map data structure
Create a function `groceriesList` that returns a `Map` of grocery items with their quantities.

### 10. More map data structure
Create a function `updateUniqueItems` that updates all items with a quantity of 1 in a `Map` to 100. Handle errors if the input is not a `Map`.

### 11. Weak link data structure
Export a `WeakMap` instance and a function `queryAPI` to track API call counts. Throw an error when the call count exceeds 5.
