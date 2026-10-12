"""Importación inicial de los archivos del portfolio ya publicado del propietario.

Solo descarga los recursos enumerados y comprueba su tamaño y SHA-256.
No ejecuta archivos descargados ni necesita credenciales externas.
"""
import hashlib
import json
from pathlib import Path
import urllib.request

origin = "https://maximiliano-koch-edicion.surepearl.chatgpt.site/"
for entry in json.loads(Path("asset-import.json").read_text()):
    target = Path(entry["path"])
    if target.is_absolute() or ".." in target.parts:
        raise ValueError("Invalid resource path")
    if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest() == entry["sha256"]:
        continue
    with urllib.request.urlopen(origin + entry["path"], timeout=120) as response:
        content = response.read(entry["size"] + 1)
    if len(content) != entry["size"] or hashlib.sha256(content).hexdigest() != entry["sha256"]:
        raise ValueError("Resource verification failed: " + entry["path"])
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(content)
    print("Imported:", entry["path"])
