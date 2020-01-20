document.getElementById('signUpForm').addEventListener('submit', postData);

 function postData(event){
            event.preventDefault();

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let emailAddress = document.getElementById('emailAddress').value;
            let walletAddress = document.getElementById('walletAddress').value;
            let country = document.getElementById('country').value;
            let idNumber = document.getElementById('idNumber').value;

            fetch('https://api.utilis.ventures/api/v1/register/', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {first_name:firstName, 
                    last_name:lastName,
                    email_address:emailAddress,
                    wallet_address:walletAddress,
                    country_of_origin:country,
                    id_number:idNumber
                })
            }).then((res) => res.json())
            .then((data) =>  {
                console.log(data)
                if(data.status==201){
                    snackbarShow();
                    document.getElementById("signUpForm").reset();
                }else{
                    console.log(data.status)
                }
            })
            .catch((err)=> {
                console.log(err)
                document.getElementById('signUpForm').reset();
            })
        }

        function snackbarShow() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }