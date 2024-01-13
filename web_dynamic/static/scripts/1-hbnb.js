$(document).ready(() => {
    let myObject = [];
    $(':checkbox').on('change', () => {
        let amenityId = checkbox.data('id');
        if ($(this).is(':checked')) {
            myObject.push(amenityId);
        }
        else {
            myObject = myObject.filter(id => id !== amenityId);
        }
        $('div h4').text(myObject.join(', '));
    });

});