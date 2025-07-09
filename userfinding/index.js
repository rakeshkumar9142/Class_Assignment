const fs = require('fs');

fs.readFile('user.json', 'utf-8', (err, data) => {
  if (err) {
    console.log("Getting Error during the file reading");
    return;
  }

  try {
    const users = JSON.parse(data);
    const search = 'Rakesh Kumar'; 
    const foundUser = users.find(u => u.name === search);

    if (foundUser) {
      console.log("User found:", foundUser);

      const taskEntry = {
        role: foundUser.role,
        time: new Date().toISOString()
      };

      fs.readFile('task.json', 'utf-8', (err2, taskData) => {
        let tasks = [];
        
        if (!err2 && taskData.trim().length > 0) {
          try {
            tasks = JSON.parse(taskData);
            if (!Array.isArray(tasks)) {
              console.log("task.json is not an array. Replacing with new array.");
              tasks = [];
            }
          } catch (e) {
            console.log("Corrupt task.json. Replacing with new array.");
            tasks = [];
          }
        }

        tasks.push(taskEntry);

        fs.writeFile('task.json', JSON.stringify(tasks, null, 2), 'utf-8', (err3) => {
          if (err3) {
            console.log("Error writing to task.json:", err3.message);
          } else {
            console.log("Task saved successfully.");
          }
        });
      });

    } else {
      console.log("User not found");
    }
  } catch (parseError) {
    console.log("Error parsing user.json:", parseError.message);
  }
});
