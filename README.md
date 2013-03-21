lively-subserver
================

This example web service runs a simple work scheduling simulation in a Lively
environment which makes it possible to use Lively features like

 * Classes,
 * Modules,
 * Traits,
 * Persitence,
 * OMeta,
 * AST,
 * Bindings,
 * Test Framework,
 * ...and parts of Morphic.

Installation
------------

1. Clone this repository
2. Install the [Lively Kernel][1] dependency with ``$ npm install``
3. Run the service by either linking the ``scheduler-server.js`` to the
   ``subserver`` directory of [LifeStar][2] or starting it with
   ``lk server --subserver /path/to/scheduler-server.js``

Usage
-----

If [LifeStar][2] was started on port 9001, the example server can be used as
follows:

    $ curl -d "task=make coffee" http://localhost:9001/nodejs/scheduler-server/
    Scheduled make coffee.

    $ curl http://localhost:9001/nodejs/scheduler-server/
    make coffee (1%)
    <idle>
    <idle>

    $ curl -d "task=walk dog" http://localhost:9001/nodejs/scheduler-server/
    Scheduled walk dog.

    $ curl http://localhost:9001/nodejs/scheduler-server/
    make coffee (3%)
    walk dog (1%)
    <idle>

[1]: https://github.com/LivelyKernel/LivelyKernel
[2]: https://github.com/LivelyKernel/life_star
