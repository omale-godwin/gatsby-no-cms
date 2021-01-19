from bs4 import BeautifulSoup
import requests
import json


law_project = []
id = 0
item = {}
source = requests.get('https://www.grossarchive.com/all/51/law-project-topics-and-materials').text
soup = BeautifulSoup(source, 'lxml')
pages = soup.find('div', id="page")
div = pages.find('div', class_="contentholder")
firsthightligh4 = div.find('div', class_="firsthightligh3")
for topicblock in firsthightligh4.find_all('div', class_="topicblock"):
    topichead = topicblock.find('div', class_="topichead").a['href']
    eachlink = requests.get(str(topichead)).text
    souplink = BeautifulSoup(eachlink, 'lxml')
    abstract = souplink.find('div')
    id += 1
    abstr = abstract.find('div', class_="contentholder")
    maincontent3 = abstr.find('div', class_="maincontent3")
    try:
        firsthightligh2 = maincontent3.find('div', class_="firsthightligh2")
    except AttributeError as err:
        pass
    content51 = firsthightligh2.find('div', class_="content51")
    title = content51.h1.text
    chapter1 = content51.find('div', class_="abstract")
    law_project.append({ "content": str(chapter1), "title" : str(title), "id" : id})
    print(id)
    
with open("law_project.json", "a") as writeJSON:
    json.dump(law_project, writeJSON, ensure_ascii=False)
