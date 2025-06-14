/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/

// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/

// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15",
    "checkOutDate": "2024-05-20",
    "guests": [
        {
            "name": "Alice Johnson",
            "age": 30,
            "email": "alice.johnson@example.com"
        },
        {
            "name": "Bob Smith",
            "age": null,
            "email": "bob.smith@example"
        }
    ],
    "roomDetails": {
        "type": "Suite",
        "pricePerNight": 200,
        "amenities": [
            "WiFi",
            "Breakfast",
            "Parking"
        ]
    }
}
`;

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

The code was missing a comma after "checkInDate": "2024-05-15". I added a comma at the end of this line to fix it. This is a problem because JSON cannot distinguish where one element ends and the next begins.

The key "name" in the guests object was missing double quotation marks. I added " " around name to fix it. This is a problem because JSON requires all keys to be enclosed in double quotation marks.

The value of undefined needed to be changed to null. This is a problem because undefined is not a recognized data type in JSON.

The amenities array under roomDetails had an extra comma at the end of the array that needed to be removed.  This is a problem because unlike JavaScript, trailing commas are not acceptable in JSON.

*/

// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

To correct the errors I first used a new .json file and reviewed the code in my code editor. My code editor made all errors stand out so I could correct them. I also used JSON lint and code beautify. Each of these tools let me know line by line by line where errors stood until I received a message that my code was valid. It was nice for the online tools to auto indent my work. 

2️⃣ How did you confirm that your corrected JSON file was valid?

The online tools such as JSON lint and code beautify gave me a green message telling me my code was valid. 

3️⃣ Which errors were the most difficult to spot? Why?

Missing curly braces or brackets might be the hardest to spot because the indention of the code can become thrown off, making them hard to quickly spot. 

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
Using online tools such as JSONLint and Code Beautify is really helpful for debugging. Also, using a code editor and a separate JSON file will make errors easier to spot.

*/
