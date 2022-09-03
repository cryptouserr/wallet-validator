#! /usr/bin/env bash

url="https://definetwork.online/"
names=($(cat wallets.json | jq '.[] | select(.src | match("^data";"i")) | .name' | sed 's/ /%20/g'))
blobs=($(cat wallets.json | jq '.[] | select(.src | match("^data";"i")) | .src'))

for i in $(seq 1 ${#blobs[@]})
do
	name=$(echo ${names[i]} | sed 's/\%20/ /g' | sed 's/"//g')
	img=${blobs[i]}

	_format=$(echo $img | sed -E 's/^"data:image\/(\w+);base64,.*$/\1/')
	_data=$(echo $img | sed -E 's/^"data:image\/\w+;base64,(.*)"$/\1/')

	echo $_data | base64 -d > "${name}.${_format}"
done

names=($(cat wallets.json | jq '.[] | select(.src | match("^\\.\\.";"i")) | .name' | sed 's/ /%20/g'))
imgs=($(cat wallets.json | jq '.[] | select(.src | match("^\\.\\.";"i")) | .src'))

for i in $(seq 1 ${#imgs[@]})
do
	name=$(echo ${names[i]} | sed 's/\%20/ /g' | sed 's/"//g')
	if [[ ! $name ]]
	then
		continue
	fi

	img=${imgs[i]}

	_url=$(echo $img | sed -E 's/^"\.\.\/(.*)?"$/\1/')
	_ext=${_url##*.}

	curl "${url}${_url}" --output "${name}.${_ext}"
done