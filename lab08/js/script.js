$(document).ready(function(){
    let btnConvert = $('#btnConvert');
    let txtFrom = $('#from');
    let txtTo = $('#to');

    btnConvert.click(function(){
        let valueFrom = txtFrom.val();

        // let access_key = 
        let api_function = 'latest';
        let api = `https://api.currencyapi.com/v3/${api_function}?apikey=Fc8Tdzz4kGkGVb6uqmOjOok78HcSDP02XivD0Cxa`;

        $.ajax({
            url: api,
            dataType: 'json',
            success: function(data) {
                // let value = parseFloat() * parseFloat(valueFrom);
                console.log(data['VND']);
            }
        });
    });
});

// let apiKey = 'Fc8Tdzz4kGkGVb6uqmOjOok78HcSDP02XivD0Cxa';

// btnConvert.addEventListener('click', function(){
//     // get value of TextField FROM
//     let fromValue = txtFrom.value;
//     // if(fromValue.length == 0)
//     //     return;

//     let api_url = `https://api.currencyapi.com/v3/latest?apikey=Fc8Tdzz4kGkGVb6uqmOjOok78HcSDP02XivD0Cxa&value=1&base_currency=USD&currencies=VND`;

//     fetch(api_url)
//         .then(response => response.json())
//         .then(data => console.log(data));
//     // txtTo.value = txtFrom.value * data.VND.value;
// });

