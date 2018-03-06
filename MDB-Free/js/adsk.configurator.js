// <!-- Script for configurator viewer -->
    (function (window) {
        "use strict";
        var C360 = window.ADSK && window.ADSK.C360;

        // callback for getPropertyValues.
        function listProperties(result) {
            window.console.log(window.JSON.stringify(result, null, '  '));
        }

        // dummy implemenetation for handling error codes.
        function reportError(code) {
            var state = C360.loadedState;
            if (code === state.GPUAccelerationDisabled) {
                window.alert('GPU hardware acceleration is disabled.');
            } else if (code === state.Not3DCapable) {
                window.alert('The graphics card is not 3D capable.');
            } else if (code === state.TemporarilyUnavailable) {
                window.alert('GPU acceleration is temporarily unavailable.');
            } else if (code === state.NotStandardsCompliant) {
                window.alert('The browser is not supported and probably needs to be updated.');
            } else if (code === state.Error) {
                window.alert('The viewer failed to load for an unknown reason.');
            }
        }

        // success handler
        function viewerLoaded(viewer) {
            // The C360Viewer is loaded, do something with it.
            viewer.getPropertyValues(null, listProperties);
        }

        // error handler
        function failedToLoad(viewer) {
            reportError(viewer.state);
            viewer.unload(); // Unload the C360Viewer
        }

        // Check if the API was loaded.
        if (C360) { // Not supported on mobile devices currently.

            // Check client compatibility and load the viewer if compatible.
            C360.checkCompatibility(function (result) {
                if (result.compatible) {

                    var myEl3 = document.getElementById('btn3');
                    myEl3.addEventListener('click', function () {

                        // Initialize the viewer
                        C360.initViewer({
                            container: "myViewer",
                            design: "1037219241570006066/g553ewn3vz3x",
                            panes: true,
                            success: viewerLoaded, // Set success handler
                            error: failedToLoad // Set error handler
                        });
                    });

                    var myEl4 = document.getElementById('btn4');
                    myEl4.addEventListener('click', function () {

                        // Initialize the viewer
                        C360.initViewer({
                            container: "myViewer",
                            design: "1037219241570006066/ndxmtvvs7e6b",
                            panes: true,
                            success: viewerLoaded, // Set success handler
                            error: failedToLoad // Set error handler
                        });
                    });

                    var myEl5 = document.getElementById('btn5');
                    myEl5.addEventListener('click', function () {

                        // Initialize the viewer
                        C360.initViewer({
                            container: "myViewer",
                            design: "1037219241570006066/w1xlbwehzs81",
                            panes: true,
                            success: viewerLoaded, // Set success handler
                            error: failedToLoad // Set error handler
                        });
                    });

                    var myEl6 = document.getElementById('btn6');
                    myEl6.addEventListener('click', function () {

                        // Initialize the viewer
                        C360.initViewer({
                            container: "myViewer",
                            design: "1037219241570006066/n8734c2472dq",
                            panes: true,
                            success: viewerLoaded, // Set success handler
                            error: failedToLoad // Set error handler
                        });
                    });

                    var myEl7 = document.getElementById('btn7');
                    myEl7.addEventListener('click', function () {

                        // Initialize the viewer
                        C360.initViewer({
                            container: "myViewer",
                            design: "1037219241570006066/yqlpsr1267m",
                            panes: true,
                            success: viewerLoaded, // Set success handler
                            error: failedToLoad // Set error handler
                        });
                    });



                } else {
                    reportError(result.reason);
                }
            });

        }
    }(this));
// <!-- Script for configurator viewer -->