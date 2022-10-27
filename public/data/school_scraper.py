# -*- coding: utf-8 -*-
"""
Created on Wed Oct 26 10:57:02 2022

@author: wywan
"""

# -*- coding: utf-8 -*-

import requests
from bs4 import BeautifulSoup
import pandas as pd

# retrieve html of page
r = requests.get("https://www.cps.edu/schools/networks/network-16/")
html = r.text

# scrape out table elements
soup = BeautifulSoup(html, 'html.parser')
data = soup.find_all("li", {"class":"schools-list-item"})
headers = ["url", "name", "phone", "location"]
schools = []
for line in data:
    cells = line.find_all("span")
    school = []
    for cell in cells:
        if 'schools-list-name' in cell['class']:
            a = cell.find("a", href=True)
            school.append(a['href'])
        text = cell.get_text().strip()
        if text:
            school.append(text)
    schools.append(school[:-1])
    
df = pd.DataFrame(schools, columns=headers)
df.to_csv("schools.csv")
