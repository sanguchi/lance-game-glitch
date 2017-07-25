
const qsOptions = require('query-string').parse(location.search);
const SimplePhysicsEngine = require('lance-gg').physics.SimplePhysicsEngine;
const ClientEngine = require('lance-gg').ClientEngine;
const GameEngine = require('lance-gg').GameEngine;

// default options, overwritten by query-string options
// is sent to both game engine and client engine
const defaults = {
    traceLevel: 1,
    delayInputCount: 3,
    clientIDSpace: 1000000,
    embedded: true,
    syncOptions: {
        sync: qsOptions.sync || 'extrapolate',
        localObjBending: 0.0,
        remoteObjBending: 0.8,
        bendingIncrements: 6
    }
};
let options = Object.assign(defaults, qsOptions);
const gameEngine = new GameEngine(SimplePhysicsEngine, options);

const clientEngine = new ClientEngine(gameEngine, options);
document.addEventListener('DOMContentLoaded', function(e) { clientEngine.start(); });
