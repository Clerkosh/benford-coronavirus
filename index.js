const https = require("https");
const url = "https://api.covid19api.com/summary";
const fs = require('fs')
//var plotly = require('plotly')("clerkosh", "") //used for drawing graph

var cases = [];

https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        body = JSON.parse(body);
        var bodyFile = JSON.stringify(body);
        fs.writeFile('./summary' + body.Date.substring(0, body.Date.length - 10) + '.json', bodyFile, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        for (var req in body.Countries) {
            cases.push(body.Countries[req].TotalConfirmed);
            // print number of cases for each country in the world according to api covid19api
            console.log(body.Countries[req].Country + " " + body.Countries[req].TotalConfirmed);
        }
        console.log("\nDate: " + body.Date + "\n")
        var cnt1 = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0, cnt5 = 0, cnt6 = 0, cnt7 = 0, cnt8 = 0, cnt9 = 0;
        for (var cs in cases) {
            switch (cases[cs].toString().charAt(0)) {
                case "1":
                    cnt1++;
                    break;
                case "2":
                    cnt2++;
                    break;
                case "3":
                    cnt3++;
                    break;
                case "4":
                    cnt4++;
                    break;
                case "5":
                    cnt5++;
                    break;
                case "6":
                    cnt6++;
                    break;
                case "7":
                    cnt7++;
                    break;
                case "8":
                    cnt8++;
                    break;
                case "9":
                    cnt9++;
                    break;
            }
        }
        console.log("1: " + cnt1 + " -> " + Math.floor(cnt1 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("2: " + cnt2 + " -> " + Math.floor(cnt2 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("3: " + cnt3 + " -> " + Math.floor(cnt3 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("4: " + cnt4 + " -> " + Math.floor(cnt4 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("5: " + cnt5 + " -> " + Math.floor(cnt5 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("6: " + cnt6 + " -> " + Math.floor(cnt6 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("7: " + cnt7 + " -> " + Math.floor(cnt7 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("8: " + cnt8 + " -> " + Math.floor(cnt8 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")
        console.log("9: " + cnt9 + " -> " + Math.floor(cnt9 / (cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9) * 100) + "%")

        /* drawing graph with plotly
        var data = [{ y: [cnt1, cnt2, cnt3, cnt4, cnt5, cnt6, cnt7, cnt8, cnt9], x: [1, 2, 3, 4, 5, 6, 7, 8, 9], type: 'line' }];
        var layout = { fileopt: "overwrite", filename: "simple-node-example" };

        plotly.plot(data, layout, function (err, msg) {
            if (err) return console.log(err);
            console.log(msg);
        });
        */
    });
});
