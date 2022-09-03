import json
import re

with open("wallets.json", "r") as fh:
	wallets = json.load(fh)


for wallet in wallets:
	matchBlob = re.match(r"^data:image/(\w+)", wallet["src"])
	matchUrl = re.match(r"^\.\./wallet/.*\.(.*)$", wallet["src"])

	if (matchBlob):
		wallet["src"] = f"{wallet['name']}.{matchBlob.groups()[0]}"

	if (matchUrl):
		wallet["src"] = f"{wallet['name']}.{matchUrl.groups()[0]}"

with open("../../../src/assets/wallets.json", "w") as fh:
	json.dump(wallets, fh)

