#!/bin/sh

CONFIG_FILE='./dist/config.env.js'

config="$(cat <<-EOF
    window.J9_APPCONFIG = { 
    	ENV: '${ENV}',
    	BACKEND_URL: '${BACKEND_URL}'    	
    } 
EOF
)"

echo $config > $CONFIG_FILE
cat $CONFIG_FILE
node --experimental-modules ./server.js
