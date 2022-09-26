import { post_code } from './postal_array.js'

window.test = () => {
    let postalCode = document.getElementById("postal-code").value;
    if (postalCode == "" || postalCode == null) return;
    const postalResult = post_code.filter((item) => {
        return item["postal_code"] == postalCode;
    });

    document.getElementById("result").innerHTML = ""
    console.log(postalResult);

    if (postalResult.length == 0) {
        let p = document.createElement('p');
        let text = "No result was found";
        p.appendChild(document.createTextNode(text));
        document.getElementById('result').appendChild(p)
    } else {
        let ul = document.createElement('ul');
        for (const elem of postalResult) {
            let item = document.createElement('li');
            let text = elem["city"] + ", " + elem["sub_district"]  + ", ";
            text = toTitleCase(text);
            item.appendChild(document.createTextNode(text));
            ul.appendChild(item);
        }
        document.getElementById('result').appendChild(ul)
    }
}

window.toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}