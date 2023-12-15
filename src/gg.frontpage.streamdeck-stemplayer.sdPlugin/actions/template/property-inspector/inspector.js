/// <reference path="../../../libs/js/property-inspector.js" />
/// <reference path="../../../libs/js/utils.js" />

const socket = io('http://localhost:3123');

$PI.onConnected(async (jsn) => {
    const form = document.querySelector('#property-inspector');
    const {actionInfo, appInfo, connection, messageType, port, uuid} = jsn;
    const {payload, context} = actionInfo;
    const {settings} = payload;

    console.log('connected')

    const tracks = await getTracks()

    const element = document.querySelector('select[name="stem"]');

    // add option groups, and options to the select element
    tracks.forEach((track) => {
        track.stems.forEach(stem => {
            const option = document.createElement('option');
            option.value = stem.path;
            option.innerText = stem.name;
            element.appendChild(option);
        })
    });

    Utils.setFormValue(settings, form);

    form.addEventListener(
        'input',
        Utils.debounce(150, () => {
            const value = Utils.getFormValue(form);
            $PI.setSettings(value);
        })
    );
});

const getTracks = () => {
    return new Promise((resolve) => {
        socket.emit("tracks", {}, (tracks) => {
            resolve(tracks);
        });
    });
};

$PI.onDidReceiveGlobalSettings(({payload}) => {
    console.log('onDidReceiveGlobalSettings', payload);
})

/**
 * Provide window level functions to use in the external window
 * (this can be removed if the external window is not used)
 */
window.sendToInspector = (data) => {
    console.log(data);
};

document.querySelector('#open-external').addEventListener('click', () => {
    window.open('../../../external.html');
});
