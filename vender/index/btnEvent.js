//设置控制模式
$('#controlsList').find('.dropdown-menu li').on('click', function () {
    var index = $(this).index();
    var controlIndex = $('#controlsList').attr('data-controls');
    var text = $(this).find('a').text()
    $(this).parents('.btn-group').find('button').eq(0).text(text);

    if (index != Number(controlIndex)) {
        $('#controlsList').attr('data-controls', index);
        console.log(index, controls)
        switch (index) {
            case 0:
                camera.position.set(4000, 4000, 4000)
                controls = new THREE.OrbitControls(camera);
                controls.autoRotate = false;
                controls.userPan = false;
                controls.userPanSpeed = 0;
                controls.maxPolarAngle = Math.PI / 2
                controls.maxDistance = 20000;
                originControl = witchControl;
                break;
            case 1:
                camera.position.set(0, 500, 0)
                controls = new THREE.FirstPersonControls(camera);
                controls.lookSpeed = 0.1;
                controls.movementSpeed = 1000;
                controls.noFly = false;
                controls.lookVertical = true;
                controls.constrainVertical = true;
                controls.verticalMin = 1.5;
                controls.verticalMax = 2.0;
                controls.lon = 0;
                controls.lat = 0;
                break;
        }
    }
})
