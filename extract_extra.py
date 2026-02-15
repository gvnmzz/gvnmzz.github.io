
import re
import json

def parse_feats(file_path):
    with open(file_path, 'r', encoding='latin-1') as f:
        content = f.read()
    
    feats = []
    # Find patterns like <B>Feat Name (&#9210;&#9210;.)</B>
    # Note: Sometimes it's <B>Name</B> followed by <p>
    feat_blocks = re.split(r'<B>', content)[1:]
    for block in feat_blocks:
        name_match = re.match(r'(.*?)\s*\(&#9210;+.*?\)', block)
        if name_match:
            name = name_match.group(1).strip()
            # Extract prerequisites
            prereq_match = re.search(r'<I>Prerequisites?:</I>\s*(.*?)<br>', block, re.IGNORECASE)
            prereqs = prereq_match.group(1).strip() if prereq_match else ""
            
            feats.append({
                "name": name,
                "cost_xr": 2,
                "prerequisites": prereqs
            })
    return feats

def parse_equipment(file_path):
    with open(file_path, 'r', encoding='latin-1') as f:
        content = f.read()
    
    # Extract weapon table rows
    # Look for <tr> following "Simple Weapons", "Martial Weapons", etc.
    weapons = []
    
    # Simple regex for weapons table rows
    rows = re.findall(r'<tr>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*</tr>', content, re.DOTALL)
    
    for row in rows:
        name = row[0].strip()
        if '<strong>' in name or '<em>' in name or not name:
            continue
            
        weapons.append({
            "name": name,
            "cost": row[1].strip(),
            "dmg_s": row[2].strip(),
            "dmg_m": row[3].strip(),
            "critical": row[4].strip(),
            "range": row[5].strip(),
            "weight": row[6].strip(),
            "type": row[7].strip(),
            "tags": row[8].strip()
        })
    return weapons

# Main execution
feats_data = parse_feats('/Users/giovannimizzi/Desktop/S&M/srd/gvnmzz.github.io/Feats.html')
weapons_data = parse_equipment('/Users/giovannimizzi/Desktop/S&M/srd/gvnmzz.github.io/Equipment.html')

print(f"Extracted {len(feats_data)} feats.")
print(f"Extracted {len(weapons_data)} weapons.")

with open('extra_data.json', 'w') as f:
    json.dump({"feats": feats_data, "weapons": weapons_data}, f, indent=2)
