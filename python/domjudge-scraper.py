# How to use this script:
# 1. Save the DOMJudge scoreboard as HTML.
# 2. Change htmlFileName to the relative directory of the saved HTML
# 3. Change jsonFileName to the relative directory of the output JSON file
# 4. Run the script

from bs4 import BeautifulSoup
import json

soup = None
# Change this filename to the directory of 
htmlFileName = "./finals-scoreboard-2021.html"
jsonFileName = "result.json"

with open(htmlFileName, encoding="utf-8") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

scoreboard = soup.select("table.scoreboard.center tbody")[0]
scoreboardData = scoreboard.select("tr")

scoresList = []

for dataRow in scoreboardData[:-1]:
    
    score = {"scores": []}

    score["rank"] = int(dataRow.select("td.scorepl")[0].string.strip())
    score["cfname"] = dataRow.select("td.scoretn")[0]['title']
    score["school"] = dataRow.select("span.univ")[0].string.strip()
    score["solved"] = int(dataRow.select("td.scorenc")[0].string.strip())
    score["totalscore"] = int(dataRow.select("td.scorett")[0].string.strip())

    rowScoreCells = dataRow.select("td.score_cell")

    for i in range(len(rowScoreCells)):
        scoreCell = rowScoreCells[i]
        probscore = {}
        probscore["probletter"] = chr(65 + i)
        if len(scoreCell.find_all()) > 0:
            
            attemptScore = scoreCell.select("div.score_correct, div.score_incorrect")[0]
            if attemptScore['class'][0] == "score_incorrect":
                probscore["score"] = 0
            else:
                probscore["score"] = int(attemptScore.contents[0].strip())

            probscore["tries"] = int(attemptScore.span.string.replace("tries", "").replace("try", "").strip())
        else:
            probscore["score"] = 0
            probscore["tries"] = 0
        score["scores"].append(probscore)
    scoresList.append(score)

# function that prints the resulting dictionary

for score in scoresList:
    print("{")
    for prop in score:
        if prop != "scores":
            print(f"\t{prop}: {score[prop]}")
        else:
            print(f"\t{prop}: [")
            for cell in score[prop]:
                print("\t\t{")
                for cellProp in cell:
                    print(f"\t\t\t{cellProp}: {cell[cellProp]}")
                print("\t\t}")
            print("\t]")
    print("}")

with open(jsonFileName, 'w') as fp:
    json.dump(scoresList, fp)
