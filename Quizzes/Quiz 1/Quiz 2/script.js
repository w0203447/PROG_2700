function Raise() {
    let percent = document.getElementById("percent").value;
    let employees = [
      {
        "name": "Aaron DeViller",
        "title": "Student",
        "salary": 50000
      },
      {
        "name": "Hussain El-Sayed",
        "title": "Student",
        "salary": 50000
      },
      {
        "name": "Shasta Tangri",
        "title": "Student",
        "salary": 55000
      },
      {
        "name": "James Dowell",
        "title": "Student",
        "salary": 50000
      },
      {
        "name": "Jamie Symonds",
        "title": "Teacher",
        "salary": 100000
      }
    ];

    for (let i = 0; i < employees.length; i++) {
      employees[i].salary += employees[i].salary * (percent / 100);
    }

    console.log("Done!");
    console.log(employees);
    alert("Done!");
  }