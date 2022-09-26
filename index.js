import { post_code } from './postal_array.js'

window.test = () => {
    document.getElementById("result").innerHTML = ""
    let postalCode = document.getElementById("postal-code").value;
    if (postalCode == "" || postalCode == null) return;
    
    const postalResult = post_code.filter((item) => {
        return item["postal_code"] == postalCode;
    });

    if (postalResult.length == 0) {
        alert("No result was found");
        return;
    }

    var list = document.createElement('ul');
    for (const elem of postalResult) {
        let item = document.createElement('li');
        let text = elem["postal_code"] + " - " + elem["city"] + ", " + elem["sub_district"]  + ", "
        item.appendChild(document.createTextNode(text));
        list.appendChild(item);
    }

    document.getElementById('result').appendChild(list)
}