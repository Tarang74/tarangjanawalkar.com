import os
import re

svg_dir = "../app/src/components/letters"

paths = []
for filename in os.listdir(svg_dir):
    if filename.endswith(".svg"):
        with open(os.path.join(svg_dir, filename), "r", encoding="utf-8") as f:
            content = f.read()
            match = re.search(r'<path[^>]*d="([^"]+)"', content)
            if match:
                d = match.group(1)
                paths.append(f'"{d}",  # {filename}')

print("paths = [")
for line in paths:
    print(f"    {line}")
print("]")
