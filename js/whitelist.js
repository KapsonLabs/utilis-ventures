fetch('https://api.utilis.ventures/api/v1/register/')
        .then((res) => { return res.json() })
        .then((data) => {
            const table_data = data.data
            console.log(Object.values(table_data[0])[5])
            
            var r = new Array(), j = -1;
            for (var key=0, size=table_data.length; key<size; key++){
                r[++j] ='<tr><td>';
                r[++j] = Object.values(table_data[key])[0];
                r[++j] = '</td><td class="color">';
                r[++j] = Object.values(table_data[key])[1];
                r[++j] = '</td><td>';
                r[++j] = Object.values(table_data[key])[2];
                r[++j] = '</td><td>';
                r[++j] = Object.values(table_data[key])[4];
                r[++j] = '</td><td>';
                r[++j] = Object.values(table_data[key])[5];
                r[++j] = '</td></tr>';
            }
            $('#whitelist-table tbody').html(r.join('')); 
        })