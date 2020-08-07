import os
import json

merged = []
for filename in os.listdir("./parsed"):
    with open(f"./parsed/{filename}", "r") as post:
        contents = json.load(post)
        recipie = {}
        recipie['id'] = contents['id']
        recipie['thumbnail'] = contents['image_links'][0]
        recipie['name'] = contents['caption'].split('\n')[0]
        recipie['caption'] = contents['caption']
        recipie['images'] = contents['image_links']
        merged.append(recipie)

merged.sort(key=lambda x: -int(x['id']))
with open("sorted_merged.json", "w") as outfile:
    json.dump({'recipies': merged}, outfile, indent=2)
