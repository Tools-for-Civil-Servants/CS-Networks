from datetime import datetime

import pandas as pd
import jinja2

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBGLezN0llKHEj-eZ0Itq7Uor9la-zKA9QQ5vOOP7DjCJKXTW74zxt94DJa6maNkxJkxN9VwWFTd-m/pub?gid=0&single=true&output=csv"
data = pd.read_csv(url)
data = data.where(pd.notnull(data), "")

out = open("index.html", "w")

out.write(
    jinja2.Environment(
        loader=jinja2.FileSystemLoader('.')
    ).get_template("index.html.j2").render({
        'date': datetime.utcnow(),
        'networks': data.to_dict('records')
    }))