'''

Writes school list as options
Author: William Wang

'''

import pandas as pd

df = pd.read_csv("schools.csv")

for school in df['name']:
    print(f'<option value="{school}">{school}</option>')
