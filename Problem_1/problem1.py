import pandas as pd
url = "https://raw.githubusercontent.com/Wolfmatrix/puzzlesV2/master/csv-sample.csv"
data = pd.read_csv(url)
print(data)
print(f'Total number of rows = {len(data)}')