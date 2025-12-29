import os
import re

svg_dir = "./"

paths = []
for filename in os.listdir(svg_dir):
    if filename.endswith(".svg"):
        with open(os.path.join(svg_dir, filename), "r", encoding="utf-8") as f:
            content = f.read()
            # replace "glyph" with "glyph-name"
            content = content.replace("glyph", f"glyph-{filename[:-4]}")

        with open(os.path.join(svg_dir, filename), "w", encoding="utf-8") as f:
            f.write(content)
