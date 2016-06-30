#!/bin/bash

rsync -avz appp-plugins/apppresser2-plugins.js     -e 'ssh -p 18765' reactor8@reactor.apppresser.com:public_html/reactordev.com/apv2/wp-content/plugins/apppresser/js/apppresser2-plugins.js
rsync -avz appp-plugins/apppresser2-plugins.dev.js -e 'ssh -p 18765' reactor8@reactor.apppresser.com:public_html/reactordev.com/apv2/wp-content/plugins/apppresser/js/apppresser2-plugins.dev.js