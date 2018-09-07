'use strict';

const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost'
});

const init = async () => {

    await server.register(require('inert'));

    server.route({
      method: 'GET',
      path: '/settings',
      handler: function (request, reply) {
          return {
              env: process.env.ENV || 'development',
              contactServiceUrl: process.env.CONTACT_SERVICE_URL || 'http://localhost:8081',
          };
      }
    });

    server.route({
        method: 'GET',
        path: '/{file*}',
        handler: function(request, h) {
            var reg = /(\.js)|(\.ts)|(\.css)|(\.png)|(\.jpg)|(\.jpeg)|(\.eot)|(\.woff)|(\.ttf)|(\.eot)|(\.svg)/;
            if(request.params.file && reg.test(request.params.file)) {
                return h.file(Path.join(__dirname, 'public', request.params.file));
            }
            return h.file(Path.join(__dirname, 'public', 'index.html'));
        }
    });


    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
