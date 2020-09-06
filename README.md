# benford-coronavirus
**Benford's Law** in **Coronavirus** statistics. Used Covid19 data from [Covid19API](https://documenter.getpostman.com/view/10808728/SzS8rjbc)

Explanation:

I took number of Covid19 cases for each country (date 2020-09-06):
```javascript
...
Poland 70387
Portugal 59943
Qatar 119864
Republic of Kosovo 12683
Romania 93864
Russian Federation 1017131
Rwanda 4349
Saint Kitts and Nevis 17
Saint Lucia 26
Saint Vincent and Grenadines 61
San Marino 735
Sao Tome and Principe 898
Saudi Arabia 319932
...
```
Then I seperated first digits from each number:
```javascript
...
7
5
1
1
9
1
4
1
2
6
7
8
3
...
```
Then I counted how many 1's, 2's, 3's and so on are there...
```javascript
1: 50 -> 26%
2: 36 -> 19%
3: 23 -> 12%
4: 29 -> 15%
5: 10 -> 5%
6: 9 -> 4%
7: 10 -> 5%
8: 11 -> 5%
9: 8 -> 4%
```
And it's surprisingly close to the Benford's Law. Here is the plot of Covid19 Cases against Benford's Law:
![Plot](https://github.com/Clerkosh/benford-coronavirus/blob/master/CoronaVirus-TotalConfirmed-benford-law.png)

I also checked the same way [Global Smallpox Cases](https://ourworldindata.org/grapher/global-smallpox-cases?year=latest) against **Benford's Law**:
![Smallpox Plot](https://github.com/Clerkosh/benford-coronavirus/blob/master/smallpox-against-benford-law.png)
... and I'd say it's also very close! What the heck?! 🤣🤪
